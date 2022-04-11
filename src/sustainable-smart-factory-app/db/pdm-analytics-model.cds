namespace sap.smartfactory;
using {sap.smartfactory as pdm} from './pdm-data-model';

////////////////////////////////////////////////////////////
//Analytics Model for Predctive Maintenance module
//AnomaliesExtendedView:  The extended view of Anomalies.
//EquipmentConditions: The recorded condition of the equipment given a time period
//Anomalies: The detected sound anomaly attached to an equipment
//AnomalyTypes: CodeList of the sound anomaly types
//AnomalyStatus: Enum of the sound anomaly status
////////////////////////////////////////////////////////////

//Views
 @Aggregation.ApplySupported.PropertyRestrictions : true
entity AnomaliesExtendedView                
as projection on pdm.Anomalies {
    ID,
    detectedAt,
    detectedDate,
    equipment,
    confidence,
    status as anomalyStatus,
    eqCond.ID as eqCondId, 
    eqCond.toEquipmentStatus.name as equipmentStatus, 
    // eqCond.equipmentName as equipmentName, 
    // eqCond.equipmentStatus as equipmentStatus, 
    // eqCond.plant as plant, 
    // eqCond.funcLocation as funcLocation, 
    eqCond.equipment.name as equipmentName, 
    eqCond.equipment.plant as plant, 
    eqCond.equipment.funcLocation as funcLocation, 
    eqCond.recStartedAt as recStartedAt, 
    eqCond.recEndedAt as recEndedAt, 
    eqCond.followUpDocType as followUpDocType,
    eqCond.followUpDocNum as followUpDocNum,

    anomalyType.name as anomalyType, 
    anomalyType.suggestedFollowUpAction as suggestedAction,

    numberOfAnomalies
  } ;

annotate AnomaliesExtendedView with {
    @Analytics.Dimension : true
    ID;
    @Analytics.Dimension : true
    detectedAt;
    @Analytics.Dimension : true
    detectedDate;
    @Analytics.Dimension : true
    equipment;
    @Analytics.Dimension : true
    confidence;
    @Analytics.Dimension : true
    anomalyStatus;
    @Analytics.Dimension : true
    eqCondId;

    @Analytics.Dimension : true
    plant;
    @Analytics.Dimension : true
    funcLocation;
    @Analytics.Dimension : true
    equipmentName;
    @Analytics.Dimension : true
    equipmentStatus;
    @Analytics.Dimension : true
    recStartedAt;
    @Analytics.Dimension : true
    recEndedAt;
    @Analytics.Dimension : true
    followUpDocType;
    @Analytics.Dimension : true
    followUpDocNum;
    
    @Analytics.Dimension : true
    anomalyType;
    @Analytics.Dimension : true
    suggestedAction;

    @Analytics.Measure   : true
    @Aggregation.default : #SUM
    numberOfAnomalies;
  };

//Value Helpers
view EquipmentView as select distinct equipment from AnomaliesExtendedView;

@readonly
@cds.odata.valuelist
entity EquipmentVH {
  key equipment : AnomaliesExtendedView : equipment;
};

view AnomalyTypeNameView as select distinct anomalyType from AnomaliesExtendedView;

@readonly
@cds.odata.valuelist
entity AnomalyTypeNameVH {
  key anomalyType : AnomaliesExtendedView : anomalyType;
};

view FuncLocationView as select distinct funcLocation from AnomaliesExtendedView;

@readonly
@cds.odata.valuelist
entity FuncLocationVH {
  key funcLocation : AnomaliesExtendedView : funcLocation;
};