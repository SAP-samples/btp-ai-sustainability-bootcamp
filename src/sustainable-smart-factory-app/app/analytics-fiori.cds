using {sap.smartfactory as sf} from 'smartfactory';
annotate sf.AnomaliesExtendedView with {
  @Common : {
    SemanticObject : 'AnomaliesExtendedView',
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
  // LineItem                         : [
  //   {
  //     $Type          : 'UI.DataFieldForIntentBasedNavigation',
  //     SemanticObject : 'Anomalies',
  //     Action         : 'manage'
  //   },
  //   {Value : ID},
  //   {Value : equipment},
  //   {Value : anomalyType},
  //   {Value : detectedAt},
  //   {Value : confidence},
  // ],
  HeaderInfo                       : {
    TypeName       : '{i18n>EquipmentCondition}',
    TypeNamePlural : '{i18n>EquipmentConditions}',
    Title          : {Value : equipment},
    Description    : {Value : equipmentName}
  },
  Facets                           : [{
    $Type  : 'UI.ReferenceFacet',
    Label  : '{i18n>Details}',
    Target : '@UI.FieldGroup#Details'
  }, ],
  FieldGroup #Details              : {Data : [
    {Value : plant},
    {Value : funcLocation},
    {Value : status},
    {Value : anomalyType},
    {Value : suggestedAction}
  ]}
});

annotate sf.AnomaliesExtendedView with {
  funcLocation   @title : '{i18n>FuncLocation}';
 }

 annotate sf.CVQualityRecordsView with {
  @Common : {
    SemanticObject : 'CVQualityRecordsView',
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
      ValueListProperty : 'productId'
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