namespace sap.smartfactory;

using {
  managed,
  sap
} from '@sap/cds/common';

////////////////////////////////////////////////////////////
//Data Model for Predctive Maintenance module
//PlantConditions:  The recorded condition of the plants given a time period.
//EquipmentConditions: The recorded condition of the equipment given a time period
//SoundAnomalies: The detected sound anomaly attached to an equipment
//SoundAnomalyTypes: CodeList of the sound anomaly types
//SoundAnomalyStatus: Enum of the sound anomaly status
////////////////////////////////////////////////////////////

//['Timestamp',
//'Plant','PlantStatus','PlantYield', 'PlantDefectiveProducts','PlantEnergyConsumption (kW)', \
//'Machine','MachineStatus','MachineEnergyConsumption (kW)', 'MachineFaultProb', 'MachineBreakDownProb', 'MachineDefectsRate', 'MachineYield', 'MachineNoise' ,\
//'MachineCyclicMaintenance','MachineCorrectiveMaintenance','MachineProactiveMaintenance']
entity PlantConditions : managed {
  key ID                  : Integer;
      plant               : String(4);
      plantStatus         : String(30);
      recStartedAt        : Timestamp;
      recEndedAt          : Timestamp;
      yield               : Decimal;
      defeatedProd        : Decimal;
      energyCons          : Decimal;
      equipmentConditions : Association to many EquipmentConditions
                              on equipmentConditions.plantCond = $self;
}

entity EquipmentConditions : managed {
  key ID                 : Integer;
      plant              : String(4);
      plantCond          : Association to PlantConditions;
      plantSection       : String(3);
      funcLocation      : String(30);
      equipment          : String(18);
      equipmentName      : String(40);
      equipmentStatus    : EquipmnetStatus;
      recStartedAt       : Timestamp;
      recEndedAt         : Timestamp;
      faultProb          : Decimal;
      fault              : Integer;
      breakDownProb      : Decimal;
      //detected sound anomalies of the equipment during the period
      soundAnomalies     : Association to many SoundAnomalies
                             on soundAnomalies.eqCond = $self;

      //follow-up action on equipment condtion level instead of SoundAnomaly level
      //which could be a maintenance request or order in SAP S/4HANA Cloud
      followUpActionType : AnomalyFollowUpActionType;
      followUpDoc        : String(12);
      //or explicit maintenance order linkage
      maintenanceOrder   : String(12);
      maintOrderType     : Association to MaintenanceOrderTypes;
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

entity SoundAnomalies : managed {
  key ID           : Integer;
      detectedAt   : Timestamp;
      plant        : String(4);
      plantSection : String(3);
      equipment    : String(18);
      anomalyType  : Association to SoundAnomalyTypes;
      confidence   : Decimal;
      status       : SoundAnomalyStatus;
      //The follow up action such as maintenance notificaiton, request and order in S4HC
      followUpDoc  : String(12);
      eqCond       : Association to EquipmentConditions; //> the backlink
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
