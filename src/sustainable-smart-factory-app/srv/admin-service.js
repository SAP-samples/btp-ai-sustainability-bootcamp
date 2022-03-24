const cds = require("@sap/cds");
const request = require("request");
const fs = require("fs");
const {
  maintenanceOrderService,
} = require("@sap/cloud-sdk-vdm-maintenance-order-service");
const { maintenanceOrderApi } = maintenanceOrderService();
const { buildMaintenanceOrderForCreate } = require("./helper");
const sdkDest = { destinationName: "S4HC_D2V" };

/** Hardcoded Variables for Testing Purposes
 * [To-Do] Automated auth of clientid + client secret to get from service key
 * 1. clientid
 * 2. clientsecret
 * 3. oauth token
 */

const oauth_url =
  "https://iotdev.authentication.eu10.hana.ondemand.com/oauth/token?grant_type=client_credentials";
const sound_inference_url =
  "https://api.ai.prod.eu-central-1.aws.ml.hana.ondemand.com/v2/inference/deployments/d4e89dce2e1567bc/v1/models/soundmodel:predict";
const cv_inference_url =
  "https://api.ai.prod.eu-central-1.aws.ml.hana.ondemand.com/v2/inference/deployments/dfccff3697592a4a/v1/models/imagemodel:predict";
const clientid = "sb-a21dc034-456f-4378-a9f3-e9924fdd859f!b11737|aicore!b540";
const clientsecret = "NtnTn+lF63ffBF64YvA1BhqPdRA=";
const authUser =
  "Basic " + Buffer.from(clientid + ":" + clientsecret).toString("base64");
var token = generateToken(authUser);

module.exports = async function () {
  const db = await cds.connect.to("db");
  const { EquipmentConditions, CVQualityRecords, Anomalies } = db.entities;

  /** Logic Flow on create a Maintenance Order in S4
   * 1. On specific equipment condition, either list or object page (preferably)
   * Check if conditions are met so to trigger a maintenance order txn.
   * 2. Retrieve EQ ID
   * 3. Create Maintenance Order in S4
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
    const eq = await SELECT.from(EquipmentConditions, eqCondEntity).columns([
      "equipment",
    ]);
    // console.log("data: " + req.data);
    // console.log(eqCondEntity); //  { ID: 1, IsActiveEntity: 'true' }
    // console.log(eq);

    // 3. Create Maintenance Order in S4
    // To be improved to include other data fields.
    // {  "MaintenanceOrderType": "YA02",  "MaintenanceOrderDesc": "Predictie Maintenance for Pump",  "Equipment": "210100007",
    // "MainWorkCenter": "RES-0100",  "MaintenancePlanningPlant": "1010",  "MaintenancePlant": "1010",  "MaintPriority": "1",
    // "FunctionalLocation": "1010-SPA-SAC-PLAR1-CST1",  "MaintOrdBasicStartDateTime": "/Date(1633539206000+0000)/",
    // "MaintOrdBasicEndDateTime": "/Date(1633539206000+0000)/",  "ResponsibleCostCenter": "10101701",  "CostCenter": "10101301",  "MaintenanceObjectList": "2401"  }
    const datamo = {
      OrderType: "YA02",
      Equipment: eq.equipment,
      MaintPriority: "1",
      Desc: "Predictive Maintenance for Pump",
      CostCenter: "10101301",
    };

    const mo = buildMaintenanceOrderForCreate(datamo);
    // console.log(mo);
    const result = await maintenanceOrderApi
      .requestBuilder()
      .create(mo)
      .execute(sdkDest);

    //  4. Update EquipmentConditions record with the Maintenance Order ID returned from S4 API
    // console.log(moId);
    // console.log(result.toJSON());
    const moResult = result.toJSON();
    const moId = moResult.maintenanceOrder;
    // console.log(moId);  // 4000223

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
        `Maintenance Order created for Equipment (` +
          eq.equipment +
          `) successfully.`
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
   * 1. Encode Sound file (.wave) as base64
   * 2. Parse base 64 as body under JSON sound parameter
   * 3. Process results - Anomalous or Normal
   *
   * [To-Improve] Either implement Promise to improve async calls OR to utilise
   * build-in CAP express, so that loading will be improved too.
   */
  this.on("inferenceSoundAnomaly", async (req) => {
    const anomalyEntity = req.params[0];
    //  1. Encode Sound file (.wave) as base64
    const fileBase64 = fs.readFileSync(
      "app/media/sound/REC" + anomalyEntity.ID + ".wav",
      {
        encoding: "base64",
      }
    );

    //  2. Parse base64 as body under JSON sound parameter
    var confidence;
    var soundInferenceReq = require("request");
    var options = {
      method: "POST",
      url: sound_inference_url,
      headers: {
        Authorization: token,
        "AI-Resource-Group": "sound",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sound: fileBase64,
      }),
    };
    //  [To-Improve] Either implement Promise to improve async calls OR to utilise
    //  build-in CAP express, so that loading will be improved too.
    soundInferenceReq(options, async function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
      var obj = JSON.parse(response.body);
      if (obj.hasOwnProperty("Normal")) {
        console.log("Normal");
        confidence = obj.Normal;
      } else {
        console.log("Anomalous");
        confidence = obj.Anomalous;
      }
      await UPDATE(Anomalies, anomalyEntity.ID).with({
        status: "2",
        confidence: confidence,
      });
      console.log(confidence);
    });

    //  [To-Do] 3. Process results - Anomalous or Normal
    //  - Update Anomaly Status & Confidence
    // console.log(req.params[0]);
    // const an = await SELECT.from(Anomalies, anomalyEntity).columns(["status"]);
    try {
      // let anomaly = await SELECT.from(Anomalies, anomalyEntity).forUpdate();
      //> Anomalies is locked for other transactions
      req.notify(
        `Anomaly (ID: ` + anomalyEntity.ID + `) entity processed successfully.`
      );
      // console.log("update.");
    } catch (e) {
      //> failed to acquire the lock, likely because of timeout
      req.error({
        message: "Error in updating Anomaly entity on status.",
        target: "status",
        status: 418,
      });
    }
  });

  /** Logic Flow of Inferencing CV Image Anomaly
   *
   */
  this.on("inferenceImageCV", async (req) => {
    const cvImageEntity = req.params[0];
    console.log(cvImageEntity);
    const fileBase64 = fs.readFileSync(
      "app/media/cv/IMG" + cvImageEntity.ID + ".bmp",
      {
        encoding: "base64",
      }
    );

    // const cv = await SELECT.from(CVQualityRecords, cvImageEntity).columns([
    //   "confidence",
    // ]);

    // console.log(cv.confidence);

    var axios = require("axios");

    var data = JSON.stringify({
      image: fileBase64,
    });

    var config = {
      method: "post",
      url: cv_inference_url,
      headers: {
        "AI-Resource-Group": "defect-det",
        "Content-Type": "application/json",
        Authorization: token,
      },
      data: data,
    };

    axios(config)
      .then(async function (response) {
        console.log(JSON.stringify(response.data));

        var obj = JSON.parse(JSON.stringify(response.data));
        var label;
        if (obj.hasOwnProperty("Normal")) {
          console.log("Normal");
          confidence = obj.Normal;
          label = "Y";
        } else {
          console.log("Anomalous");
          confidence = obj.Anomalous;
          label = "N";
        }
        // to get confidence & quality label from response
        await UPDATE(CVQualityRecords, cvImageEntity.ID).with({
          confidence: confidence,
          qualityLabel: label,
        });

        req.notify(
          `CV Image (ID: ` +
            cvImageEntity.ID +
            `) entity processed successfully.`
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  this.before("NEW", "CVQualityRecords", genid);
  this.before("NEW", "Anomalies", genid);
};

/** Generate primary keys for target entity in request */
async function genid(req) {
  const { ID } = await cds
    .tx(req)
    .run(SELECT.one.from(req.target).columns("max(ID) as ID"));
  //req.data.ID = ID - ID % 100 + 100 + 1
  req.data.ID = ID + 1;
}

function generateToken(authUser) {
  var request = require("request");
  var options = {
    method: "GET",
    url: oauth_url,
    headers: {
      Authorization: authUser,
    },
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    // console.log(response.body);
    var obj = JSON.parse(response.body);
    // console.log(obj.access_token);
    token = "Bearer " + obj.access_token;
  });
}
