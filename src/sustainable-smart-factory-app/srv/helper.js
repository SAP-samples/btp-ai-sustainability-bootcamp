const { maintenanceOrderService } = require('@sap/cloud-sdk-vdm-maintenance-order-service');
const { maintenanceOrderApi } = maintenanceOrderService();

const _prepareMoBody = (mo) => {
    return {
        maintenanceOrderType: mo.OrderType,
        equipment: mo.Equipment,
        maintPriority: mo.MaintPriority,
        maintenanceOrderDesc: mo.Desc
    }
}

const buildMaintenanceOrderForCreate = (data) => {
    const mo = maintenanceOrderApi.entityBuilder().fromJson(_prepareMoBody(data));
    return mo;
}

module.exports = {
    buildMaintenanceOrderForCreate
}