using {sap.smartfactory as sf} from 'smartfactory';
annotate sf.SoundAnomaliesExtendedView with {
  @Common : {
    SemanticObject : 'SoundAnomaliesExtendedView',
    Text           : {
      $value              : equipment,
      @UI.TextArrangement : #TextLast
    }
  }
  equipment;

  @Common : {ValueList #EquipmentVisualFilter : {
    $Type                        : 'Common.ValueListType',
    CollectionPath               : 'SoundAnomaliesExtendedView',
    PresentationVariantQualifier : 'AnomaliesByEquipment',
    Parameters                   : [{
      $Type             : 'Common.ValueListParameterInOut',
      LocalDataProperty : 'equipment',
      ValueListProperty : 'equipment'
    }]
  }}
  @(ValueList.entity : 'EquipmentVH', )
  equipment;

  // @Common : {ValueList #StatusTxtVisualFilter : {
  //   $Type                        : 'Common.ValueListType',
  //   CollectionPath               : 'MessageHeaderSet',
  //   PresentationVariantQualifier : 'StatusTxt',
  //   Parameters                   : [{
  //     $Type             : 'Common.ValueListParameterInOut',
  //     LocalDataProperty : 'StatusTxt',
  //     ValueListProperty : 'StatusTxt'
  //   }]
  // }}
  // @(ValueList.entity : 'StatusTxtVH', )
  // StatusTxt;
  // @(ValueList.entity : 'StatusVH', )
  // Status;
  // @Common : {ValueList #SystemIdVisualFilter : {
  //   $Type                        : 'Common.ValueListType',
  //   CollectionPath               : 'MessageHeaderSet',
  //   PresentationVariantQualifier : 'SystemId',
  //   Parameters                   : [{
  //     $Type             : 'Common.ValueListParameterInOut',
  //     LocalDataProperty : 'SystemId',
  //     ValueListProperty : 'SystemId'
  //   }]
  // }}
  // @(ValueList.entity : 'SystemIdVH', )
  // SystemId;
};

annotate sf.SoundAnomaliesExtendedView with @(UI : {
  SelectionFields                  : [
    plant,
    funcLocation,
    equipment,
    detectedDate,
    anomalyType
  ],
  PresentationVariant #equipment   : {Visualizations : ['@UI.Chart#equipment', ], },
  PresentationVariant #AnomaliesByDate   : {Visualizations : ['@UI.Chart#AnomaliesByDate', ], },
  PresentationVariant #AnomaliesByEquipment   : {Visualizations : ['@UI.Chart#AnomaliesByEquipment', ], },
  
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
  LineItem                         : [
    {
      $Type          : 'UI.DataFieldForIntentBasedNavigation',
      SemanticObject : 'SoundAnomaliesExtendedView',
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

annotate sf.SoundAnomaliesExtendedView with {
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