namespace sap.smartfactory;

using {
  managed,
  sap
} from '@sap/cds/common';

//['Timestamp',
//'Plant','PlantStatus','PlantYield', 'PlantDefectiveProducts','PlantEnergyConsumption (kW)', \
//'Machine','MachineStatus','MachineEnergyConsumption (kW)', 'MachineFaultProb', 'MachineBreakDownProb', 'MachineDefectsRate', 'MachineYield', 'MachineNoise' ,\
//'MachineCyclicMaintenance','MachineCorrectiveMaintenance','MachineProactiveMaintenance']
entity PlantConditions : managed {
  key ID           : Integer;
      plant        : String(4);
      plantStatus  : String;
      recStartedAt : Timestamp;
      recEndedAt   : Timestamp;
      yield        : Decimal;
      defeatedProd : Decimal;
      energyCons   : Decimal;
}

entity EquipmentConditions : managed {
  key ID               : Integer;
      plant            : String(4);
      prodLineId       : Integer;
      equipment        : String(18);
      equipmentStatus  : EquipmnetStatus;
      recStartedAt     : Timestamp;
      recEndedAt       : Timestamp;
      faultProb        : Decimal;
      fault            : Integer;
      breakDownProb    : Decimal;
      //detected sound anomalies of the equipment during the period
      soundAnomalies   : Association to SoundAnomalies;
      
      //follow-up action on equipment condtion level instead of SoundAnomaly level
      followUpActionType : AnomalyFollowUpActionType;
      followUpDoc : String(12);

      //or explicit maintenance order linkage
      maintenanceOrder : String(12);
      maintOrderType   : Association to MaintenanceOrderTypes;
}

entity MaintenanceOrderTypes : sap.common.CodeList {
  key code : String(4);
}

type FaultType : String enum {
  Abonormal = 'ab';
}

type EquipmnetStatus : String enum {
  OK        = 'Y';
  NotOk     = 'N';
  BreakDown = 'B'
}

entity CVQualityRecords : managed {
  key ID           : Integer;
      recordedAt   : Timestamp;
      plant        : String(4);
      prodLineId   : Integer;
      productId    : String(18);
      productName  : String(100);
      image        : LargeBinary @Core.MediaType : 'image/png';
      confidence   : Decimal;
      qualityLabel : QualityLabel;
//todo: Object Detection with Bounding Box
// Items       : Composition of many {
//                 confidence : Decimal;
//                 topLeft    : Decimal;
//                 topRight   : Decimal;
//                 width      : Decimal;
//                 height     : Decimal;
//               };
}

type QualityLabel : String enum {
  OK    = 'Y';
  NotOk = 'N';
}

entity SoundAnomalies : managed {
  key ID          : Integer;
      detectedAt  : Timestamp;
      plant       : String(4);
      prodLineId  : String(18);
      equipment   : String(18);
      anomalyType : Association to SoundAnomalyTypes;
      confidence  : Decimal;
      status      : SoundAnomalyStatus;
      //The follow up action such as maintenance notificaiton, request and order in S4HC
      followUpDoc : String(12);
}

entity SoundAnomalyTypes : sap.common.CodeList {
  key code           : String(2);
      followUpAction : AnomalyFollowUpActionType;
}

type SoundAnomalyStatus : Integer enum {
  New       = 0;
  InProcess = 1;
  Processed = 2;
  Ignored   = 3;
}

type AnomalyFollowUpActionType : String enum {
  MaintenanceNotfication = 'MN';
  MaintenanceRequest     = 'MR';
  MaintenanceOrder       = 'MO';
}
