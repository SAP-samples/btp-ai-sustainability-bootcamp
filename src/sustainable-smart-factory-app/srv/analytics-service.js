const cds = require("@sap/cds");

module.exports = async function () {
  const db = await cds.connect.to("db");
  const { EquipmentView } = db.entities;

  this.on("READ", "EquipmentVH", async (req) => {
    return SELECT.from(EquipmentView);
  });
};
