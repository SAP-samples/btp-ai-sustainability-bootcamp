using {sap.smartfactory as sf} from 'smartfactory';
annotate sf.AnomaliesExtendedView with {
  @Common : {
    SemanticObject : 'AnomaliesExtendedView',
    Text           : {
      $value              : equipment,
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
      ValueListProperty : 'equipment'
    }]
  }}
  @(ValueList.entity : 'EquipmentVH', )
  equipment;

  //Visual Filter for anomalyType
  @Common : {ValueList #EquipmentVisualFilter : {
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
  @Common : {ValueList #EquipmentVisualFilter : {
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
  PresentationVariant #equipment   : {Visualizations : ['@UI.Chart#equipment', ], },
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
    {
      $Type          : 'UI.DataFieldForIntentBasedNavigation',
      SemanticObject : 'AnomaliesExtendedView',
      Action         : 'display'
    },
    {Value : ID},
    {Value : equipment},
    {Value : anomalyType},
    {Value : detectedAt}
  ],
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
//     ID              @title : '{i18n>ID}';
//     equipment       @title : '{i18n>Equipment}';
//     anomalyType @title : '{i18n>AnomalyTypeName}'  @Common : {
//         Text            : anomalyType,
//         TextArrangement : #TextOnly
//     };
//     confidence      @title : '{i18n>Confidence}';
//     detectedAt      @title : '{i18n>DetectedAt}';

//     status          @title : '{i18n>AnomalyStatus}';
 }