const {
  maintenanceOrderService,
} = require("@sap/cloud-sdk-vdm-maintenance-order-service");
const { maintenanceOrderApi } = maintenanceOrderService();

const _prepareMoBody = (mo) => {
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const opsDuration = randomIntFromInterval(1, 8);

  return {
    maintenanceOrderType: mo.OrderType,
    equipment: mo.Equipment,
    maintPriority: mo.MaintPriority,
    maintenanceOrderDesc: mo.Desc,
    responsibleCostCenter: mo.CostCenter,
    toMaintenanceOrderOperation: [
      {
        maintenanceOrderOperation: "0010",
        operationControlKey: "YBM1",
        operationDescription: "Fix " + mo.EquipmentName,
        maintOrderOperationDuration: opsDuration,
        maintOrdOperationDurationUnit: "H",
        maintOrdOperationWorkDuration: opsDuration,
        maintOrdOpWorkDurationUnit: "H",
        forecastWorkQuantity: opsDuration,
        actualWorkQuantity: opsDuration,
      },
    ],
  };
};

const buildMaintenanceOrderForCreate = (data) => {
  const mo = maintenanceOrderApi.entityBuilder().fromJson(_prepareMoBody(data));
  return mo;
};

module.exports = {
  buildMaintenanceOrderForCreate,
};
