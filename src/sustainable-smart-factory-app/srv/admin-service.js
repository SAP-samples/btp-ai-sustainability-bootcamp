const cds = require("@sap/cds");
const fs = require("fs");
const axios = require('axios');
const xsenv = require('@sap/xsenv');

const {
    maintenanceOrderService,
} = require("@sap/cloud-sdk-vdm-maintenance-order-service");
const { maintenanceOrderApi } = maintenanceOrderService();
const { buildMaintenanceOrderForCreate } = require("./helper");

/** [DESTINATION]
 *  - For dev purposes, this project could utilise a defined destination approach.
 * More info here: https://cap.cloud.sap/docs/guides/using-services#app-defined-destinations
 * And here: https://sap.github.io/cloud-sdk/docs/js/features/connectivity/destination
 */
//  Below approach to connect to SAP BTP destination service through SAP Cloud SDK.
//  Refer to package.json on the definition of the destination name used in this project. e.g. S4HC_AICOREBOOTCAMP
//  Mainly this is being used in createMO method to Create a Maintenance Order.
const sdkDest = { destinationName: cds.env.aicore.dest };

/** [HARDCODED Credentials for Bootcamp Development Purposes] */
//  Main Inference URL has been added to cds config on aicore. Refer to package.json under cds packet.
//  See implementation in inference method.
var authToken;
const fsurl = cds.env.aicore.fsurl;   //  file server for media file resources
const aicoreurl = cds.env.aicore.url;
const sound_inference_url = cds.env.aicore.inferences.soundclass;
const cv_inference_seg_url = cds.env.aicore.inferences.imageseg;
const airesourcegroup = cds.env.aicore.resourcegroup;

getDestination('AICORE').then(dest => {
    authToken = "Bearer " + dest.authTokens[0].value;
});

/** [FOR REFERENCE] */
//  App Defined Destination approach (NOT RECOMMENDED for Productive Landscapes)
//  Defined in package.json in the CDS packet
// const sdkDest = cds.env.s4hc.credentials;
/** below is the definition of the cds defined destination approach for development purpose 
"s4hc": {
  "kind": "config",
  "credentials": {
      "destination":"S4HC",
      "url": "https://myXXXXX-api.s4hana.ondemand.com",
      "authentication": "BasicAuthentication",
      "username": "XXXXX",
      "password": "XXXXX"
  }
}
 */

/** [CONFIG]
 * Best practice is to have it defined in User Defined variables in the NodeJS app deployed in CF.
 * OR, using cds.env that supports both Node config & CDS config.
 * - Local approach: define config variables via package.json, under cds requires.
 * - Full Cloud approach: retrieve service parameters via service key bindings to app through mta.
 * e.g. Binding SAP BTP ai core service to this CAP app.
 *
 */

module.exports = async function () {
    const db = await cds.connect.to("db");
    const {
        EquipmentConditions,
        CVQualityRecords,
        Anomalies,
        Equipments,
        DefectiveProductPrices
    } = db.entities;

    /** Logic Flow on create a Maintenance Order in S4
     * 1. On specific equipment condition, either list or object page (preferably)
     * Check if conditions are met so to trigger a maintenance order txn.
     * 2. Retrieve EQ ID
     * 3. Create Maintenance Order in S4 with Maintenance Operation Item & Costs
     * 4. Update EquipmentConditions record with the Maintenance Order ID returned from S4 API
     *
     * Note: default-env.json is used for local project connecting to my btp trial landscape.
     * Destination used is pointing to my301832 s4 tenant.
     */
    this.on("createMO", async (req) => {
        //  1. On specific equipment condition, either list or object page (preferably)
        //  Check if conditions are met so to trigger a maintenance order txn.
        //  2. Retrieve EQ ID
        const eqCondEntity = req.params[0];
        const eqCondition = await SELECT.from(
            EquipmentConditions,
            eqCondEntity
        ).columns(["equipment_NR"]);

        //  Retrieve Equipment Entity for fields required on MO Operation
        var equipment = await cds
            .tx(req)
            .run(SELECT.from(Equipments).where({ NR: eqCondition.equipment_NR }));

        //  Date logic: To add 7 days to the MO: Logic implemented in helper as moment object required.

        // 3. Create Maintenance Order in S4 with Maintenance Operation Item & Costs
        //  Note: MO Operation logic are implemented in helper file.
        //  Assumptions randomised:
        //  - Priority: random in helper
        //  - Duration: random in helper
        const datamo = {
            OrderType: "YA02",
            Equipment: eqCondition.equipment_NR,
            EquipmentName: equipment[0].name,
            Desc: "Noise detected from " + equipment[0].name,
            OperationDesc: "Fix " + equipment[0].name,
        };

        const mo = buildMaintenanceOrderForCreate(datamo);
        const result = await maintenanceOrderApi
            .requestBuilder()
            .create(mo)
            .execute(sdkDest);

        //  4. Update EquipmentConditions record with the Maintenance Order ID returned from S4 API
        const moResult = result.toJSON();
        const moId = moResult.maintenanceOrder;

        /** Exclusively locks the selected rows for subsequent updates in the current transaction, thereby preventing concurrent updates by other parallel transactions.
         * https://cap.cloud.sap/docs/node.js/cds-ql#select-forUpdate
         */
        try {
            let eqCond = await SELECT.from(
                EquipmentConditions,
                eqCondEntity
            ).forUpdate();
            //> EquipmentConditions is locked for other transactions
            await UPDATE(EquipmentConditions, eqCondEntity.ID).with({
                followUpDocType: "MO",
                followUpDocNum: moId,
            });
            req.notify(
                `Maintenance Order#${moId} created Successfully for Equipment#${eqCondition.equipment_NR}.`
            );
        } catch (e) {
            //> failed to acquire the lock, likely because of timeout
            req.error({
                message: "Error in updating EquipmentConditions entity on MO record.",
                target: "followUpDocNum",
                status: 418,
            });
        }
    });

    /** Logic Flow of Inferencing Sound Anomaly
     * [To-Do] Hook after-create event of anomaly to auto inference sound and update field.
     * Assumptions:
     * - Sound recordings for inference are uploaded to a specific file system location
     * - Each file follows a specific prefix e.g. "REC" + ID of the creation
     * - Bulk processing should be completed prior to this
     * - This follow method is for manual creation of a specific anomaly captured
     * - To differentiate "infered" file vs new, anomaly status will indicate 0 as new
     *
     * a. Encode Sound file (.wave) as base64
     * b. Parse base 64 as body under JSON sound parameter
     * c. Process results - Anomalous or Normal
     *
     * 1. Connect to AICORE Remote Service (defined in package.json)
     * 2. Prepare base64 format of file
     * 3. Start CDS TX to call AI Core Inference API (path is defined at the top sound_inference_url)
     * 4. Return results
     */
    this.on("inferenceSoundAnomaly", async (req) => {
        getDestination('AICORE').then(dest => {
            authToken = "Bearer " + dest.authTokens[0].value;
        });
        const anomalyEntity = req.params[0];

        const anomaly = await SELECT.from(Anomalies, anomalyEntity).columns([
            "rawValue",
        ]);

        //  https://stackoverflow.com/questions/17124053/node-js-get-image-from-web-and-encode-with-base64
        var request = require('request').defaults({ encoding: null });
        var data;
        request.get(fsurl + anomaly.rawValue, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                // data = "data:" + response.headers["content-type"] + ";base64," + Buffer.from(body).toString('base64');
                data = JSON.stringify({
                    sound: Buffer.from(body).toString('base64')
                });
                // console.log(data);
            }
        });

        await sleep(2000);

        var axios = require('axios');

        var config = {
            method: 'post',
            url: aicoreurl + sound_inference_url,
            headers: {
                'AI-Resource-Group': airesourcegroup,
                'Authorization': authToken,
                'Content-Type': 'application/json'
            },
            data: data
        };

        var confidence, type;

        axios(config)
            .then(function (response) {
                var results = response.data;
                if (results.hasOwnProperty("Slow_Sound")) {
                    confidence = parseFloat(results.Slow_Sound).toFixed(3);
                    type = "A1";
                } else {
                    confidence = parseFloat(results.Damage_Noise).toFixed(3);
                    type = "A2";
                }
            })
            .catch(function (error) {
                // console.log(error);
                message = "Opps! Something is wrong with config aicore service url. Check if you've configure the right resource group or the url path to the aicore and soundclass might be wrongly configured.";
                req.error({
                    code: 'Error in Service Call',
                    message: message,
                    target: 'admin-service.js|inferenceSoundAnomaly',
                    status: 418
                })

            });
        await sleep(2000);

        await UPDATE(Anomalies, anomalyEntity.ID).with({
            status: "2",
            confidence: confidence,
            detectedAt: new Date(),
            anomalyType_code: type,
        });

        req.notify(
            `Anomaly (ID: ` + anomalyEntity.ID + `) entity processed successfully.`
        );
    });

    /** Logic Flow of Inferencing CV Image Anomaly
     *  [Using This] Depends on Use Case, AICORE URL can be defined in BTP Destination.
     *  CAP's Remote Service Consumption capabilities
     *
     * 1. Prepare base64 format of file
     * 2. Start CDS TX to call AI Core Inference API (path is defined at the top cv_inference_url)
     * 3. Return results
     */
    this.on("inferenceImageCV", async (req) => {
        getDestination('AICORE').then(dest => {
            authToken = "Bearer " + dest.authTokens[0].value;
        });

        //  0. Check Defect Percentage falls between Price Points
        var defectProductPriceRange = await SELECT.from('DefectiveProductPrices', dpp => { dpp.productId, dpp.Items(Items => Items`.*`) });
        var pricesArray = defectProductPriceRange[0].Items;

        const cvImageEntity = req.params[0];
        const cvEntity = await SELECT.from(CVQualityRecords, cvImageEntity).columns(
            ["image", "productId"]
        );

        //  https://stackoverflow.com/questions/17124053/node-js-get-image-from-web-and-encode-with-base64
        var request = require('request').defaults({ encoding: null });
        var data;
        request.get(fsurl + cvEntity.image, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                // data = "data:" + response.headers["content-type"] + ";base64," + Buffer.from(body).toString('base64');
                data = JSON.stringify({
                    image: Buffer.from(body).toString('base64')
                });
            }
        });

        await sleep(2000);

        var axios = require('axios');

        var config = {
            method: 'post',
            url: aicoreurl + cv_inference_seg_url,
            headers: {
                'AI-Resource-Group': airesourcegroup,
                'Authorization': authToken,
                'Content-Type': 'application/json'
            },
            data: data
        };

        var label,
            defected,
            bin,
            message,
            areaPercDefect,
            defectDesc,
            defectDiscount;

        axios(config)
            .then(function (response) {
                var segResults = response.data;
                if (segResults.defected_area == "0.0") {
                    label = "Y";
                    defected = false;
                    message =
                        "CV Image (ID: " +
                        cvImageEntity.ID +
                        ") entity processed successfully with NO DEFECTS.";
                } else {
                    bin = "data:image/bmp;base64," + segResults.segmented_image;
                    label = "N";
                    defected = true;
                    message =
                        "CV Image (ID: " +
                        cvImageEntity.ID +
                        ") entity processed successfully with DEFECT detected.";
                    areaPercDefect = parseFloat(segResults.defected_area).toFixed(3) * 100;
                    var rangeMax, rangeMin;
                    for (let i = 0; i < pricesArray.length; i++) {
                        rangeMin = parseFloat(pricesArray[i].fromDefectedPerc);
                        rangeMax = parseFloat(pricesArray[i].toDefectedPerc);
                        if (areaPercDefect >= rangeMin && areaPercDefect <= rangeMax) {
                            defectDesc = pricesArray[i].desc;
                            defectDiscount = pricesArray[i].defectiveDiscount;
                        }
                    }
                }
            })
            .catch(function (error) {
                // console.log(error);
                message = "Opps! Something is wrong with config aicore service url. Check if you've configure the right resource group or the url path to the aicore and imageseg might be wrongly configured.";
                req.error({
                    code: 'Error in Service Call',
                    message: message,
                    target: 'admin-service.js|inferenceImageCV',
                    status: 418
                })

            });
        await sleep(2000);
        await UPDATE(CVQualityRecords, cvImageEntity.ID).with({
            qualityLabel: label,
            detectedAt: new Date(),
            segmentedImage: bin,
            successInference: defected,
            defectedPerc: areaPercDefect,
            defectiveDesc: defectDesc,
            defectiveDiscount: defectDiscount,
        });

        //  req.notify | req.error | req.info | req.warn
        req.notify(message);
    });

    this.before("NEW", "CVQualityRecords", genid);
    this.before("NEW", "Anomalies", genid);
};

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

/** Calculate No. of Faults in each EQConditions */
async function calculateFaults(req) {
    const eqconds = await cds.tx(req).run(SELECT.from(req.target));
    const db = await cds.connect.to("db");
    const { Anomalies } = db.entities;
    for (let i = 0; i < eqconds.length; i++) {
        var eqcondId = eqconds[i].ID;
        var faults = await cds
            .tx(req)
            .run(SELECT.from(Anomalies).where({ eqCond_ID: eqcondId }));
        await UPDATE(req.target, eqcondId).with({
            fault: faults.length,
        });
    }
}

/** Generate primary keys for target entity in request */
async function genid(req) {
    const { ID } = await cds
        .tx(req)
        .run(SELECT.one.from(req.target).columns("max(ID) as ID"));
    req.data.ID = ID + 1;
}

/** Default Helper function to auth your app getting connected with SAP BTP Destination services and return Destination object. */
async function getDestination(dest) {
    try {
        xsenv.loadEnv();
        let services = xsenv.getServices({
            dest: { tag: 'destination' }
        });
        try {
            let options1 = {
                method: 'POST',
                url: services.dest.url + '/oauth/token?grant_type=client_credentials',
                headers: {
                    Authorization: 'Basic ' + Buffer.from(services.dest.clientid + ':' + services.dest.clientsecret).toString('base64')
                }
            };
            let res1 = await axios(options1);
            try {
                options2 = {
                    method: 'GET',
                    url: services.dest.uri + '/destination-configuration/v1/destinations/' + dest,
                    headers: {
                        Authorization: 'Bearer ' + res1.data.access_token
                    }
                };
                let res2 = await axios(options2);
                // return res2.data.destinationConfiguration;
                return res2.data;
            } catch (err) {
                console.log(err.stack);
                return err.message;
            }
        } catch (err) {
            console.log(err.stack);
            return err.message;
        }
    } catch (err) {
        console.log(err.stack);
        return err.message;
    }
};
