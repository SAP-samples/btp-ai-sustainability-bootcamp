using {sap.smartfactory as sf} from '../db/sqi-data-model';
using {sap.smartfactory as pdm} from '../db/pdm-data-model';

service CatalogService @(path : '/browse') {

  /**
   * For displaying lists of Books
   */
  @readonly
  entity ListOfCVQualityRecords        as projection on sf.CVQualityRecords excluding {
    descr
  };

  /**
   * For display in details pages
   */
  @readonly
  entity CVQualityRecords              as projection on sf.CVQualityRecords {
    *
  } excluding {
    createdBy,
    modifiedBy
  };

  //@requires: 'authenticated-user'
  // action submitOrder ( book: Books:ID, quantity: Integer ) returns { stock: Integer };
  // event OrderedBook : { book: Books:ID; quantity: Integer; buyer: String };

  //@readonly
  // entity ListOfPlantConditions  as projection on pdm.PlantConditions {
  //   *
  // } excluding {
  //   createdBy,
  //   modifiedBy
  // };

  @readonly
  entity PlantConditions               as projection on pdm.PlantConditions {
    *
  } excluding {
    createdBy,
    modifiedBy
  };

  entity EqCondsQuery as projection on pdm.EquipmentConditions;

  // entity EquipmentConditions as projection on pdm.EquipmentConditions {
  //   *,
  //   plantCond.ID as plantCondId,
  //   plantCond.plantStatus as plantStatus
  // } excluding {
  //   createdBy,
  //   modifiedBy
  // };

  
}
