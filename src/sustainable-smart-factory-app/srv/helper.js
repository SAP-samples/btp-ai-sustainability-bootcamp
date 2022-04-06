const {
  maintenanceOrderService,
} = require("@sap/cloud-sdk-vdm-maintenance-order-service");
const { maintenanceOrderApi } = maintenanceOrderService();

const _prepareMoBody = (mo) => {
  const opsDuration = randomIntFromInterval(1, 8);
  var tPriority = randomIntFromInterval(1,4);
  var priority = tPriority.toString();
  return {
    maintenanceOrderType: mo.OrderType,
    equipment: mo.Equipment,
    maintPriority: priority,
    maintenanceOrderDesc: limit(mo.Desc, 40),
    responsibleCostCenter: mo.CostCenter,
    toMaintenanceOrderOperation: [
      {
        maintenanceOrderOperation: "0010",
        operationControlKey: "YBM1",
        operationDescription: limit(mo.OperationDesc),
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

function limit(string = "", limit = 0) {
  return string.substring(0, limit);
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const buildMaintenanceOrderForCreate = (data) => {
  const mo = maintenanceOrderApi.entityBuilder().fromJson(_prepareMoBody(data));
  return mo;
};

module.exports = {
  buildMaintenanceOrderForCreate,
};
