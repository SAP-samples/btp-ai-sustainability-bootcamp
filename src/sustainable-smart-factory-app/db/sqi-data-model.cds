namespace sap.smartfactory;

using {
  managed,
  Currency,
  sap
} from '@sap/cds/common';

////////////////////////////////////////////////////////////
//Data Model for Smart Quality Inspection(sqi) module
//CVQualityRecords - Auto Quality Records via Computer Vision
////////////////////////////////////////////////////////////
entity CVQualityRecords : managed {
  key ID               : Integer;
      detectedAt       : Timestamp @cds.on.update : $now;
      detectedDate     : Date;
      plant            : String(4);
      plantSection     : String(3) default 'YOH';
      productId        : String(18) default 'SG23';
      productName      : String(100) default 'LGP';
      image            : String;
      segmentedImage   : LargeString;
      defectedPerc     : Decimal(9, 2) default 0.0;
      successInference : Boolean default false;
      // image        : LargeBinary @Core.MediaType : 'image/png';
      confidence       : Decimal(9, 2);
      qualityLabel     : QualityLabel;
      numberOfProducts : Integer default 1;
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

entity DefectiveProductPrices : managed {
  key productId   : String(18);
      productName : String(100);
      basePrice   : Decimal(9, 2);
      currency    : Currency;
      items       : Composition of many DefectiveProductPrice_Items
                      on items.parent = $self;
}

entity DefectiveProductPrice_Items {
  key parent            : Association to DefectiveProductPrices;
  key item              : String(2);
      desc              : localized String(40);
      fromDefectedPerc  : Decimal(9, 2); //inclusive: <=
      toDefectedPerc    : Decimal(9, 2); //exclusive <
      defectiveDiscount : Decimal(9, 2);
      validFrom         : Date; //inclusive: <= 
      validTo           : Date default '9999-12-31';//exclusive <
}