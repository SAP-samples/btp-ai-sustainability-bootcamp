using {sap.smartfactory as sf} from 'smartfactory';
annotate sf.AnomaliesExtendedView with {
  //Navigation to Anomalies Object Details
  @Common : {
    SemanticObject  : 'Anomalies',
    Text            : ID,
    TextArrangement : #TextOnly
  } ID;

  //Navigation to EquipmentConditions Object Details
  @Common : {
    SemanticObject : 'EquipmentConditions',
    Text           : {
      $value              : eqCondId,
      @UI.TextArrangement : #TextOnly
    }
  }
  eqCondId;

  ////Navigation to Equipments Object Details
  @Common : {
    SemanticObject : 'Equipments',
    Text           : {
      $value              : equipmentName,
      @UI.TextArrangement : #TextLast
    }
  }
  equipment;

  //Visual Filter for equipment
  @Common : {ValueList #EquipmentVisualFilter : {
    $Type                        : 'Common.ValueListType',
    CollectionPath               : 'AnomaliesExtendedView',
    PresentationVariantQualifier : 'AnomaliesByEquipment',
    Parameters                   : [{
      $Type             : 'Common.ValueListParameterInOut',
      LocalDataProperty : 'equipment',
      ValueListProperty : 'equipmentName'
    }]
  }}
  @(ValueList.entity : 'EquipmentVH', )
  equipment;

  //Visual Filter for anomalyType
  @Common : {ValueList #AnomalyTypeVisualFilter : {
    $Type                        : 'Common.ValueListType',
    CollectionPath               : 'AnomaliesExtendedView',
    PresentationVariantQualifier : 'AnomaliesByType',
    Parameters                   : [{
      $Type             : 'Common.ValueListParameterInOut',
      LocalDataProperty : 'anomalyType',
      ValueListProperty : 'anomalyType'
    }]
  }}
  @(ValueList.entity : 'AnomalyTypeNameVH', )
  anomalyType;

  //Visual Filter for funcLocation
  @Common : {ValueList #FuncLocationVisualFilter : {
    $Type                        : 'Common.ValueListType',
    CollectionPath               : 'AnomaliesExtendedView',
    PresentationVariantQualifier : 'AnomaliesByFuncLocation',
    Parameters                   : [{
      $Type             : 'Common.ValueListParameterInOut',
      LocalDataProperty : 'funcLocation',
      ValueListProperty : 'funcLocation'
    }]
  }}
  @(ValueList.entity : 'FuncLocationVH', )
  funcLocation;
};

annotate sf.AnomaliesExtendedView with @(UI : {
  SelectionFields                  : [
    plant,
    funcLocation,
    equipment,
    detectedDate,
    anomalyType
  ],
  PresentationVariant #AnomaliesByFuncLocation   : {Visualizations : ['@UI.Chart#AnomaliesByFuncLocation', ], },
  PresentationVariant #AnomaliesByEquipment   : {Visualizations : ['@UI.Chart#AnomaliesByEquipment', ], },
  PresentationVariant #AnomaliesByType   : {Visualizations : ['@UI.Chart#AnomaliesByType', ], },  
  PresentationVariant #AnomaliesByDate   : {Visualizations : ['@UI.Chart#AnomaliesByDate', ], },
  Chart                            : {
    ChartType           : #Line,
    Dimensions          : [detectedDate, equipment, anomalyType],
    DimensionAttributes : [{
      Dimension : equipment,
      Role      : #Category
    }],
    Measures            : [numberOfAnomalies],
    MeasureAttributes   : [{
      Measure : numberOfAnomalies,
      Role    : #Axis1
    }]
  },
  
  Chart #AnomaliesByFuncLocation                : {
    ChartType           : #Column,
    Dimensions          : [funcLocation],
    DimensionAttributes : [{
      Dimension : funcLocation,
      Role      : #Category
    }],
    Measures            : [numberOfAnomalies],
    MeasureAttributes   : [{
      Measure : numberOfAnomalies,
      Role    : #Axis1
    }]
  },
  Chart #AnomaliesByEquipment                 : {
    ChartType           : #Column,
    Dimensions          : [equipment],
    DimensionAttributes : [{
      Dimension : equipment,
      Role      : #Category
    }],
    Measures            : [numberOfAnomalies],
    MeasureAttributes   : [{
      Measure : numberOfAnomalies,
      Role    : #Axis1
    }]
  },
  Chart #AnomaliesByType                 : {
    ChartType           : #Donut,
    Dimensions          : [anomalyType],
    DimensionAttributes : [{
      Dimension : anomalyType,
      Role      : #Category
    }],
    Measures            : [numberOfAnomalies],
    MeasureAttributes   : [{
      Measure : numberOfAnomalies,
      Role    : #Axis1
    }]
  },
  Chart #AnomaliesByDate                 : {
    ChartType           : #Line,
    Dimensions          : [detectedDate],
    DimensionAttributes : [{
      Dimension : detectedDate,
      Role      : #Category
    }],
    Measures            : [numberOfAnomalies],
    MeasureAttributes   : [{
      Measure : numberOfAnomalies,
      Role    : #Axis1
    }]
  },
  LineItem                         : [
    {Value : ID},
    {Value : eqCondId},
    {Value : equipment},
    {Value : anomalyType},
    {Value : detectedAt},
    {Value : equipmentName},
    {Value : confidence},
    {Value : anomalyStatus},
    {Value : anomalyType},
    {Value : confidence},
    {Value : detectedAt},
    {Value : suggestedAction},
    {Value : followUpDocType},
    {Value : followUpDocNum},
    {Value : plant},
    {Value : funcLocation}
  ],
  HeaderInfo                       : {
    TypeName       : '{i18n>Anomaly}',
    TypeNamePlural : '{i18n>Anomalies}',
    Title          : {Value : anomalyType},
    Description    : {Value : equipment}
  },
  Facets                           : [{
    $Type  : 'UI.ReferenceFacet',
    Label  : '{i18n>Details}',
    Target : '@UI.FieldGroup#Details'
  }, ],
  FieldGroup #Details              : {
    Data : [
    {Value : ID},
    {Value : eqCondId},
    {Value : plant},
    {Value : funcLocation},
    {Value : equipment},
//    {Value : equipmentName},    
    {Value : anomalyStatus},
    {Value : anomalyType},
    {Value : confidence},
    {Value : detectedAt},
    {Value : suggestedAction},
    {Value : followUpDocType},
    {Value : followUpDocNum}
  ]}
});

annotate sf.AnomaliesExtendedView with {
  funcLocation   @title : '{i18n>FuncLocation}';
  eqCondId       @title : '{i18n>EquipmentCondID}';
 }

 annotate sf.CVQualityRecordsView with {
  @Common : {
    SemanticObject : 'CVQualityRecords',
    Text           : {
      $value              : ID,
      @UI.TextArrangement : #TextOnly
    }
  }
  ID;

  @Common : {
    //SemanticObject : 'Products',
    Text           : {
      $value              : productName,
      @UI.TextArrangement : #TextLast
    }
  }
  productId;

  //Visual Filter for productId
  @Common : {ValueList #QualityLabelVisualFilter : {
    $Type                        : 'Common.ValueListType',
    CollectionPath               : 'CVQualityRecordsView',
    PresentationVariantQualifier : 'FilterByProduct',
    Parameters                   : [{
      $Type             : 'Common.ValueListParameterInOut',
      LocalDataProperty : 'productId',
      ValueListProperty : 'productName'
    }]
  }}
  @(ValueList.entity : 'ProductIdVH', )
  productId;

  //Visual Filter for qualityLabel
  @Common : {ValueList #QualityLabelVisualFilter : {
    $Type                        : 'Common.ValueListType',
    CollectionPath               : 'CVQualityRecordsView',
    PresentationVariantQualifier : 'FilterByQualityLabel',
    Parameters                   : [{
      $Type             : 'Common.ValueListParameterInOut',
      LocalDataProperty : 'qualityLabel',
      ValueListProperty : 'qualityLabel'
    }]
  }}
  @(ValueList.entity : 'QualityLabelVH', )
  qualityLabel;
}

annotate sf.CVQualityRecordsView with @(UI : {
  SelectionFields                  : [
    plant,
    productId,
    detectedDate,
    qualityLabel
  ],
  PresentationVariant #FilterByProduct   : {Visualizations : ['@UI.Chart#FilterByProduct', ], },
  PresentationVariant #FilterByQualityLabel   : {Visualizations : ['@UI.Chart#FilterByQualityLabel', ], },
  Chart                            : {
    ChartType           : #Line,
    Dimensions          : [detectedDate, productId, qualityLabel],
    DimensionAttributes : [{
      Dimension : qualityLabel,
      Role      : #Category
    }],
    Measures            : [numberOfProducts],
    MeasureAttributes   : [{
      Measure : numberOfProducts,
      Role    : #Axis1
    }]
  },
  
  Chart #FilterByProduct               : {
    ChartType           : #Column,
    Dimensions          : [productId],
    DimensionAttributes : [{
      Dimension : productId,
      Role      : #Category
    }],
    Measures            : [numberOfProducts],
    MeasureAttributes   : [{
      Measure : numberOfProducts,
      Role    : #Axis1
    }]
  },
  Chart #FilterByQualityLabel               : {
    ChartType           : #Donut,
    Dimensions          : [qualityLabel],
    DimensionAttributes : [{
      Dimension : qualityLabel,
      Role      : #Category
    }],
    Measures            : [numberOfProducts],
    MeasureAttributes   : [{
      Measure : numberOfProducts,
      Role    : #Axis1
    }]
  },
  // LineItem                         : [
  //   {
  //     $Type          : 'UI.DataFieldForIntentBasedNavigation',
  //     SemanticObject : 'CVQualityRecords',
  //     Action         : 'manage'
  //   },
  //   {Value : ID},
  //   {Value : plant},
  //   {Value : productId},
  //   {Value : productName},
  //   {Value : detectedAt},
  //   {Value : qualityLabel},
  //   {Value : confidence}
  // ],
  // HeaderInfo                       : {
  //   TypeName       : '{i18n>CVQualityRecord}',
  //   TypeNamePlural : '{i18n>CVQualityRecords}',
  //   Title          : {Value : productName},
  //   Description    : {Value : ID}
  // },
  Facets                           : [{
    $Type  : 'UI.ReferenceFacet',
    Label  : '{i18n>Details}',
    Target : '@UI.FieldGroup#Details'
  }, ],
  FieldGroup #Details              : {Data : [
    {Value : plant},
    {Value : plantSection},
    {Value : productId},
    {Value : productName},
    {Value : detectedAt},
    {Value : qualityLabel},
    {Value : confidence},
  ]}
});