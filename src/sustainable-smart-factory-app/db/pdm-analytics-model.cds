namespace sap.smartfactory;
using {sap.smartfactory as pdm} from './pdm-analytics-model';

////////////////////////////////////////////////////////////
//Analytics Model for Predctive Maintenance module
//SoundAnomaliesExtendedView:  The extended view of SoundAnomalies.
//EquipmentConditions: The recorded condition of the equipment given a time period
//SoundAnomalies: The detected sound anomaly attached to an equipment
//SoundAnomalyTypes: CodeList of the sound anomaly types
//SoundAnomalyStatus: Enum of the sound anomaly status
////////////////////////////////////////////////////////////

//Views
 @Aggregation.ApplySupported.PropertyRestrictions : true
entity SoundAnomaliesExtendedView                
as projection on pdm.SoundAnomalies {
    ID,
    detectedAt,
    detectedDate,
    equipment,
    confidence,
    status as anomalyStatus,

    eqCond.ID as eqCondId, 
    eqCond.equipmentName as equipmentName, 
    eqCond.equipmentStatus as equipmentStatus, 
    eqCond.plant as plant, 
    eqCond.funcLocation as funcLocation, 
    eqCond.recStartedAt as recStartedAt, 
    eqCond.recEndedAt as recEndedAt, 
    
    anomalyType.name as anomalyType, 
    anomalyType.suggestedFollowUpAction as suggestedAction,

    numberOfAnomalies
  } ;

annotate SoundAnomaliesExtendedView with {
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
    anomalyType;
    @Analytics.Dimension : true
    suggestedAction;

    @Analytics.Measure   : true
    @Aggregation.default : #SUM
    numberOfAnomalies;
  };

//Value Helpers
view EquipmentView as select distinct equipment from SoundAnomaliesExtendedView;

@readonly
@cds.odata.valuelist
entity EquipmentVH {
  key equipment : SoundAnomaliesExtendedView : equipment;
};

view AnomalyTypeNameView as select distinct anomalyType from SoundAnomaliesExtendedView;

@readonly
@cds.odata.valuelist
entity AnomalyTypeNameVH {
  key anomalyType : SoundAnomaliesExtendedView : anomalyType;
};

view FuncLocationView as select distinct funcLocation from SoundAnomaliesExtendedView;

@readonly
@cds.odata.valuelist
entity FuncLocationVH {
  key funcLocation : SoundAnomaliesExtendedView : funcLocation;
};