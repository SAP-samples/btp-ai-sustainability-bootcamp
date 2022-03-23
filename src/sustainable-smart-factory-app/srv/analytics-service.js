const cds = require("@sap/cds");

module.exports = async function () {
  const db = await cds.connect.to("db");
  const { EquipmentView, AnomalyTypeNameView } = db.entities;

  this.on("READ", "EquipmentVH", async (req) => {
    return SELECT.from(EquipmentView);
  });

  this.on("READ", "AnomalyTypeNameVH", async (req) => {
    return SELECT.from(AnomalyTypeNameView);
  });
};
