const cds = require("@sap/cds");
const {
  maintenanceOrderService,
} = require("@sap/cloud-sdk-vdm-maintenance-order-service");
const { maintenanceOrderApi } = maintenanceOrderService();
const { buildMaintenanceOrderForCreate } = require("./helper");
const sdkDest = { destinationName: "S4HC_D2V" };

module.exports = async function () {
  const db = await cds.connect.to("db");
  const { EquipmentConditions } = db.entities;

  this.before("NEW", "CVQualityRecords", genid);
  this.before("NEW", "SoundAnomalies", genid);

  this.on("createMO", async (req) => {
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
    console.log("data: " + req.data);
    const eqCondEntity = req.params[0];
    console.log(eqCondEntity); //  { ID: 1, IsActiveEntity: 'true' }
    const eq = await SELECT.from(EquipmentConditions, eqCondEntity).columns([
      "equipment",
    ]);
    console.log(eq);

    // 3. Create Maintenance Order in S4
    // To be improved to include other data fields.
    // {  "MaintenanceOrderType": "YA02",  "MaintenanceOrderDesc": "Predictie Maintenance for Pump",  "Equipment": "210100007",  "MainWorkCenter": "RES-0100",  "MaintenancePlanningPlant": "1010",  "MaintenancePlant": "1010",  "MaintPriority": "1",  "FunctionalLocation": "1010-SPA-SAC-PLAR1-CST1",  "MaintOrdBasicStartDateTime": "/Date(1633539206000+0000)/",  "MaintOrdBasicEndDateTime": "/Date(1633539206000+0000)/",  "ResponsibleCostCenter": "10101701",  "CostCenter": "10101301",  "MaintenanceObjectList": "2401"  }
    const datamo = {
      OrderType: "YA02",
      Equipment: eq.equipment,
      MaintPriority: "1",
      Desc: "Predictive Maintenance for Pump",
    };

    const mo = buildMaintenanceOrderForCreate(datamo);
    // console.log(mo);
    const result = await maintenanceOrderApi
      .requestBuilder()
      .create(mo)
      .execute(sdkDest);

    //  4. Update EquipmentConditions record with the Maintenance Order ID returned from S4 API
    // const moId = retrieveMaintenanceOrderID(result);
    // console.log(moId);
    // console.log(result.toJSON());
    const moResult = result.toJSON();
    const moId = moResult.maintenanceOrder;
    // console.log(moId);  // 4000223

    /** Exclusively locks the selected rows for subsequent updates in the current transaction, thereby preventing concurrent updates by other parallel transactions.
     * https://cap.cloud.sap/docs/node.js/cds-ql#select-forUpdate
     */
    try {
      let book = await SELECT.from(
        EquipmentConditions,
        eqCondEntity
      ).forUpdate();
      //> EquipmentConditions is locked for other transactions
      await UPDATE(EquipmentConditions, eqCondEntity.ID).with({
        followUpDocType: "MO",
        followUpDocNum: moId,
      });
    } catch (e) {
      //> failed to acquire the lock, likely because of timeout
    }

    // To-Do: Find out how to auto refresh page, else now need to navigate back and forth to reflect changes

    // End
  });
};

/** Generate primary keys for target entity in request */
async function genid(req) {
  const { ID } = await cds
    .tx(req)
    .run(SELECT.one.from(req.target).columns("max(ID) as ID"));
  //req.data.ID = ID - ID % 100 + 100 + 1
  req.data.ID = ID + 1;
}
