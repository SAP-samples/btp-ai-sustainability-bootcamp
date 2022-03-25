using { sap.smartfactory as sqi } from '../db/sqi-data-model';
using { sap.smartfactory as pdm } from '../db/pdm-data-model';
//service AdminService @(requires:'admin') {
service AdminService {
  entity CVQualityRecords as projection on sqi.CVQualityRecords actions {
    @sap.applicable.path : 'cvInference'
    @(
        cds.odata.bindingparameter.name : '_it',
        Common.SideEffects              : {
            TargetProperties : ['_it/confidence', '_it/qualityLabel']
        }
    )
    action inferenceImageCV();
  };
  entity PlantConditions as projection on pdm.PlantConditions;
  entity EquipmentConditions as //projection on pdm.EquipmentConditions
  select from pdm.EquipmentConditions{
    *,
    @Core.Computed
	  count(anomalies.ID) as numberOfAnomalies: Integer,
  } group by ID
  actions {
    @sap.applicable.path : 'moCreated'
    @(
        cds.odata.bindingparameter.name : '_it',
        Common.SideEffects              : {
            TargetProperties : ['_it/followUpDocNum', '_it/followUpDocType']
        }
    )
    action createMO();
  };
  entity Anomalies as projection on pdm.Anomalies actions {
    @sap.applicable.path : 'anomalyInference'
    @(
        cds.odata.bindingparameter.name : '_it',
        Common.SideEffects              : {
            TargetProperties : ['_it/confidence', '_it/status']
        }
    )
    action inferenceSoundAnomaly();
  };
  entity AnomalyTypes as projection on pdm.AnomalyTypes;
}
