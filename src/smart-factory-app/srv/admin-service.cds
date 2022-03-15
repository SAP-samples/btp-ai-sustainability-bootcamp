using { sap.smartfactory as sqi } from '../db/sqi-data-model';
using { sap.smartfactory as pdm } from '../db/pdm-data-model';
//service AdminService @(requires:'admin') {
service AdminService {
  entity CVQualityRecords as projection on sqi.CVQualityRecords;
  entity EquipmentConditions as projection on pdm.EquipmentConditions;
  entity SoundAnomalies as projection on pdm.SoundAnomalies;
  entity SoundAnomalyTypes as projection on pdm.SoundAnomalyTypes;
}
