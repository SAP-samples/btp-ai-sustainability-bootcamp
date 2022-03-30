namespace sap.smartfactory;

using {
  managed,
  sap
} from '@sap/cds/common';

////////////////////////////////////////////////////////////
//Data Model for Predctive Maintenance module
//PlantConditions:  The recorded condition of the plants given a time period.
//EquipmentConditions: The recorded condition of the equipment given a time period
//Anomalies: The detected sound anomaly attached to an equipment
//AnomalyTypes: CodeList of the sound anomaly types
//AnomalyStatus: Enum of the sound anomaly status
////////////////////////////////////////////////////////////
entity PlantConditions : managed {
  key ID                  : Integer;
      plant               : String(4);
      plantStatus         : String(30);
      recStartedAt        : Timestamp;
      recEndedAt          : Timestamp;
      date                : Date;
      shift               : ShiftNo;
      yield               : Decimal(9,2);
      defectiveProd       : Decimal(9,2);
      energyCons          : Decimal(9,2);
      equipmentConditions : Association to many EquipmentConditions
                              on equipmentConditions.plantCond = $self;
}

type ShiftNo : Integer enum {
  MorningShift  = 0;
  AfternoonShift = 1;
  NightShift  = 2;
}

entity EquipmentConditions : managed {
  key ID                 : Integer;
      plant              : String(4);
      plantCond          : Association to PlantConditions;
      plantSection       : String(3);
      funcLocation       : String(30);
      equipment          : String(18);
      equipmentName      : String(40);
      equipmentStatus    : EquipmentStatus;
      recStartedAt       : Timestamp;
      recEndedAt         : Timestamp;
      // faultProb          : Decimal;
      //fault              : Integer;
      // breakDownProb      : Decimal;
      virtual moCreated : Boolean;
      //detected sound anomalies of the equipment during the period
      anomalies         : Association to many Anomalies
                            on anomalies.eqCond = $self;
      
      //follow-up action on equipment condtion level instead of Anomaly level
      //which could be a maintenance request or order in SAP S/4HANA Cloud
      followUpDocType   : AnomalyFollowUpActionType;
      followUpDocNum    : String(12);

      //or explicit maintenance order linkage
      //maintenanceOrder   : String(12);
      //maintOrderType     : Association to MaintenanceOrderTypes;
}

// entity MaintenanceOrderTypes : sap.common.CodeList {
//   key code : String(4);
// }

type EquipmentStatus : String enum {
  Normal    = 'OK';
  Fault     = 'FL';
  BreakDown = 'BD';
}

entity Anomalies : managed {
  key ID           : Integer;
      detectedAt   : Timestamp;
      detectedDate : Date;
      equipment    : String(18);

      //Generlise the Anomalies instead of Anomalies.
      //sourceType could be sound, image, temperature, humidity etc
      //If the sourceType is is sound or image, then rawValue will be the file path.
      sourceType   : String(20) default 'Sound';
      rawValue     : String(50);
      rawMeasureUnit: String(10) default 'File Path';

      anomalyType  : Association to AnomalyTypes;
      confidence   : Decimal;
      status       : AnomalyStatus;
      eqCond       : Association to EquipmentConditions; //> the backlink
      numberOfAnomalies : Integer default 1; //for aggregation
}

entity AnomalyTypes : sap.common.CodeList {
  key code                    : String(2);
      suggestedFollowUpAction : AnomalyFollowUpActionType default 'MO';
      //indicator whether to trigger the follow-up action automatically or not
      autoTrigger             : Boolean default true;
      triggerThreshold        : Integer default 2;
}

type AnomalyStatus : Integer enum {
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