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
      detectedAt   : Timestamp @cds.on.update : $now;
      detectedDate : Date;
      plant        : String(4);
      plantSection : String(3) default 'YOH';
      productId    : String(18) default 'SG23';
      productName  : String(100) default 'LGP';
      image        : String;
      // image        : LargeBinary @Core.MediaType : 'image/png';
      confidence   : Decimal;
      qualityLabel : QualityLabel;
      numberOfProducts: Integer default 1;
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
