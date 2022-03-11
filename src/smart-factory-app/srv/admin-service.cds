using { sap.smartfactory as sf } from '../db/data-model';
//service AdminService @(requires:'admin') {
service AdminService {
  entity CVQualityRecords as projection on sf.CVQualityRecords;
  entity EquipmentConditions as projection on sf.EquipmentConditions;
  entity SoundAnomalies as projection on sf.SoundAnomalies;
  entity SoundAnomalyTypes as projection on sf.SoundAnomalyTypes;
}
