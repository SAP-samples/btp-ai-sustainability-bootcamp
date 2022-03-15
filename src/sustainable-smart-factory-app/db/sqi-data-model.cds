namespace sap.smartfactory;

using {
  managed,
  sap
} from '@sap/cds/common';

////////////////////////////////////////////////////////////
//Data Model for Smart Quality Inspection(sqi) module
//CVQualityRecords - Auto Quality Records via Computer Vision
////////////////////////////////////////////////////////////
entity CVQualityRecords : managed {
  key ID           : Integer;
      detectedAt   : Timestamp;
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


