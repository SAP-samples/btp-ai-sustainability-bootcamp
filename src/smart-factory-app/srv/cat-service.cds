using { sap.smartfactory as sf } from '../db/sqi-data-model';
service CatalogService @(path:'/browse') {

  /** For displaying lists of Books */
  @readonly entity ListOfCVQualityRecords as projection on sf.CVQualityRecords
  excluding { descr };

  /** For display in details pages */
  @readonly entity CVQualityRecords as projection on sf.CVQualityRecords { *
  } excluding { createdBy, modifiedBy };

  //@requires: 'authenticated-user'
  // action submitOrder ( book: Books:ID, quantity: Integer ) returns { stock: Integer };
  // event OrderedBook : { book: Books:ID; quantity: Integer; buyer: String };
}
