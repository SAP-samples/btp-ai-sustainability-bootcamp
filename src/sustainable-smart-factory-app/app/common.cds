/*
 Common Annotations shared by all apps
*/

using {sap.smartfactory as sf} from 'smartfactory';

////////////////////////////////////////////////////////////////////////////
//
//	CVQualityRecords Lists
//
annotate sf.CVQualityRecords with @(
    Common.SemanticKey : [ID],
    UI                 : {
        Identification  : [
            {Value : ID},
            {
                $Type             : 'UI.DataFieldForAction',
                Action            : 'AdminService.inferenceImageCV',
                IconUrl           : 'sap-icon://detail-view',
                Inline            : true,
                Label             : 'Inference Image on ML Model',
                ![@UI.Emphasized] : true, //Button is highlighted
            }
        ],
        SelectionFields : [
            ID,
            plant,
            plantSection,
            productId,
            productName,
            detectedAt,
            qualityLabel,
            defectedPerc
        ],
        LineItem        : [
            {
                Value : ID,
                Label : '{i18n>ID}'
            },
            {
                Value : plant,
                Label : '{i18n>Plant}'
            },
            {
                Value : productId,
                Label : '{i18n>ProductID}'
            },
            {
                Value : productName,
                Label : '{i18n>ProductName}'
            },
            {
                Value : qualityLabel,
                Label : '{i18n>QualityLabel}'
            },
            {
                Value : confidence,
                Label : '{i18n>Confidence}'
            },
            //  Removed for simplicity in list item view
            // {
            //     $Type             : 'UI.DataFieldForAction',
            //     Action            : 'AdminService.inferenceImageCV',
            //     IconUrl           : 'sap-icon://detail-view',
            //     Inline            : true,
            //     ![@UI.Emphasized] : true, //Button is highlighted
            // },
            // {   
            //     Value : image 
            // },
            {
                Value : detectedAt,
                Label : '{i18n>DetectedAt}'
            },
            {
                Value : detectedPerc,
                Label : '{i18n>DetectedPerc}'
            }
        ]
    }
) {
    ID @Common : {
        SemanticObject  : 'CVQualityRecords',
        Text            : ID,
        TextArrangement : #TextOnly
    };
};

////////////////////////////////////////////////////////////////////////////
//
//	CVQualityRecords Details
//
annotate sf.CVQualityRecords with @(UI : {
    HeaderInfo        : {
        TypeName       : '{i18n>CVQualityRecord}',
        TypeNamePlural : '{i18n>CVQualityRecords}',
        Title          : {Value : productName},
        Description    : {Value : productId},
        // ImageUrl       : image
    },
    // HeaderFacets      : [{
    //     $Type  : 'UI.ReferenceFacet',
    //     Label  : '{i18n>Description}',
    //     Target : '@UI.FieldGroup#Descr'
    // }],
    // FieldGroup #Descr : {Data : [{Value : productId}]},
});


////////////////////////////////////////////////////////////////////////////
//
//	CVQualityRecords Elements
//
annotate sf.CVQualityRecords with {
    ID           @title : '{i18n>ID}';
    plant        @title : '{i18n>Plant}';
    plantSection @title : '{i18n>PlantSection}';
    productId    @title : '{i18n>ProductID}';
    productName  @title : '{i18n>ProductName}';
    numberOfProducts  @title : '{i18n>NumberOfProducts}';
    qualityLabel @title : '{i18n>QualityLabel}';
    confidence   @title : '{i18n>Confidence}';
    defectedPerc @title : '{i18n>DefectedPerc}';
    detectedAt   @title : '{i18n>DetectedAt}';
    detectedDate   @title : '{i18n>DetectedDate}';
    image        @(
        Common.Label  : 'Image',
        UI.IsImageURL : true
    );
}

////////////////////////////////////////////////////////////////////////////
//
//	DefectiveProductPrices Lists
//
annotate sf.DefectiveProductPrices with @(
    Common.SemanticKey : [productId],
    UI                 : {
        Identification  : [
            {Value : productId},
        ],
        SelectionFields : [
            productId,
            productName,
            basePrice
        ],
        LineItem        : [
            {
                Value : productId,
                Label : '{i18n>ProductID}'
            },
            {
                Value : productName,
                Label : '{i18n>ProductName}'
            },
            {
                Value : basePrice,
                Label : '{i18n>BasePrice}'
            },
            {
                Value : currency_code,
                Label : '{i18n>Currency}'
            }
        ]
    }
) {
    productId @Common : {
        SemanticObject  : 'DefectiveProductPrices',
        Text            : productName,
        TextArrangement : #TextLast
    };
};

////////////////////////////////////////////////////////////////////////////
//
//	DefectiveProductPrices Details
//
annotate sf.DefectiveProductPrices with @(UI : {
    HeaderInfo        : {
        TypeName       : '{i18n>DefectiveProductPrice}',
        TypeNamePlural : '{i18n>DefectiveProductPrices}',
        Title          : {Value : productName},
        Description    : {Value : productId},
        // ImageUrl       : image
    },
    // HeaderFacets      : [{
    //     $Type  : 'UI.ReferenceFacet',
    //     Label  : '{i18n>Description}',
    //     Target : '@UI.FieldGroup#Descr'
    // }],
    // FieldGroup #Descr : {Data : [{Value : productId}]},
});


////////////////////////////////////////////////////////////////////////////
//
//	DefectiveProductPrices Elements
//
annotate sf.DefectiveProductPrices with {
    productId    @title : '{i18n>ProductID}';
    productName  @title : '{i18n>ProductName}';
    currency_code  @title : '{i18n>Currency}';
    basePrice @title : '{i18n>BasePrice}';
}

////////////////////////////////////////////////////////////////////////////
//
//	PlantConditions Lists
//
annotate sf.PlantConditions with @(
    Common.SemanticKey : [ID],
    UI                 : {
        Identification  : [{Value : ID}],
        SelectionFields : [
            ID,
            plant,
            plantStatus,
            recStartedAt,
            recEndedAt
        ],
        LineItem        : [
            {
                Value : ID,
                Label : '{i18n>ID}'
            },
            {
                Value : plant,
                Label : '{i18n>Plant}'
            },
            {
                Value : plantStatus,
                Label : '{i18n>PlantStatus}'
            },
            {
                Value : recStartedAt,
                Label : '{i18n>RecStartedAt}'
            },
            {
                Value : recEndedAt,
                Label : '{i18n>RecEndedAt}'
            }
        ]
    }
) {
    ID @Common : {
        SemanticObject  : 'PlantConditionsVisual',
        Text            : ID,
        TextArrangement : #TextOnly
    };
};

////////////////////////////////////////////////////////////////////////////
//
//	PlantConditions Details
//
annotate sf.PlantConditions with @(UI : {HeaderInfo : {
    TypeName       : '{i18n>PlantCondition}',
    TypeNamePlural : '{i18n>PlantConditions}',
    Title          : {Value : ID},
    Description    : {Value : plant}
}, });


////////////////////////////////////////////////////////////////////////////
//
//	PlantConditions Elements
//
annotate sf.PlantConditions with {
    ID           @title : '{i18n>ID}';
    plant        @title : '{i18n>Plant}';
    plantStatus  @title : '{i18n>PlantStatus}';
    yield        @title : '{i18n>Yield}';
    defeatedProd @title : '{i18n>DefectiveProd}';
    energyCons   @title : '{i18n>EnergyCons}';
    recStartedAt @title : '{i18n>RecStartedAt}';
    recEndedAt   @title : '{i18n>RecEndedAt}';
}

////////////////////////////////////////////////////////////////////////////
//
//	PlantEquipmentStatus Lists
//
annotate sf.PlantEquipmentStatus with @(
    Common.SemanticKey : [code],
    UI                 : {
        Identification  : [
            {Value : code},
        ],
        SelectionFields : [
            code,
            name
        ],
        LineItem        : [
            {
                Value : code,
                Label : '{i18n>Code}'
            },
            {
                Value : name,
                Label : '{i18n>Name}'
            },
            {
                Value : criticality,
                Label : '{i18n>Criticality}'
            },
            {
                Value : recommendation,
                Label : '{i18n>Recommendation}'
            }
        ]
    }
) {
    code @Common : {
        SemanticObject  : 'PlantEquipmentStatus',
        Text            : name,
        TextArrangement : #TextLast
    };
};

////////////////////////////////////////////////////////////////////////////
//
//	PlantEquipmentStatus Details
//
annotate sf.PlantEquipmentStatus with @(UI : {HeaderInfo : {
    TypeName       : '{i18n>PlantEquipmentStatus}',
    TypeNamePlural : '{i18n>PlantEquipmentStatus}',
    Title          : {Value : code},
    Description    : {Value : recommendation}
}, });

annotate sf.PlantEquipmentStatus with @(UI.HeaderFacets : [
    {
        $Type  : 'UI.CollectionFacet',
        Facets : [{
            $Type  : 'UI.ReferenceFacet',
            Target : '@UI.FieldGroup#HeaderData',
            Label  : '{i18n>Criticality}',
        }],
    },
]);

annotate sf.PlantEquipmentStatus with @(
    UI.FieldGroup #HeaderData       : {Data : [{
        Value       : criticality,
        Label       : '',
        Criticality : criticality
    }]}
);


////////////////////////////////////////////////////////////////////////////
//
//	PlantEquipmentStatus Elements
//
annotate sf.PlantEquipmentStatus with {
    code           @title : '{i18n>Code}';
    name           @title : '{i18n>Status}';
    criticality    @title : '{i18n>Criticality}';
    recommendation @title : '{i18n>Recommendation}';
}

////////////////////////////////////////////////////////////////////////////
//
//	Equipments Lists
//
annotate sf.Equipments with @(
    Common.SemanticKey : [NR],
    UI                 : {
        Identification  : [
            {Value : NR},
            {
                $Type             : 'UI.DataFieldForAction',
                Action            : 'AdminService.createMO',
                Label             : 'Create Maintenance Order',
                IconUrl           : 'sap-icon://technical-object',
                Inline            : true,
                ![@UI.Emphasized] : true, //Button is highlighted
            }
        ],
        SelectionFields : [
            NR,
            name,
            toEquipmentStatus.name,
            compCode,
            plant,
            plantSection,
            funcLocation,
            costCenter
        ],
        LineItem        : [
            {
                Value : NR,
                Label : '{i18n>Equipment}'
            },
            {
                Value : toEquipmentStatus.name,
                Label : '{i18n>Status}'
            },
            {
                Value : compCode,
                Label : '{i18n>CompCode}'
            },
            {
                Value : plant,
                Label : '{i18n>Plant}'
            },
            {
                Value : plantSection,
                Label : '{i18n>PlantSection}'
            },
            {
                Value : funcLocation,
                Label : '{i18n>FuncLocation}'
            }
        ]
    }
) {
    NR @Common : {
        SemanticObject  : 'Equipments',
        Text            : name,
        TextArrangement : #TextLast
    };
};

////////////////////////////////////////////////////////////////////////////
//
//	Equipments Details
//
annotate sf.Equipments with @(UI : {HeaderInfo : {
    TypeName       : '{i18n>Equipment}',
    TypeNamePlural : '{i18n>Equipments}',
    Title          : {Value : name},
    Description    : {Value : NR}
}, });

annotate sf.Equipments with @(UI.HeaderFacets : [
    {
        $Type  : 'UI.CollectionFacet',
        Facets : [{
            $Type  : 'UI.ReferenceFacet',
            Target : '@UI.FieldGroup#HeaderData',
            Label  : '{i18n>Status}',
        }],
    },
]);

annotate sf.Equipments with @(
    UI.FieldGroup #HeaderData       : {Data : [{
        Value       : toEquipmentStatus.name,
        Label       : '',
        Criticality : toEquipmentStatus.criticality
    }]}
);


////////////////////////////////////////////////////////////////////////////
//
//	Equipments Elements
//
annotate sf.Equipments with {
    compCode        @title : '{i18n>CompCode}';
    plant           @title : '{i18n>Plant}';
    plantSection    @title : '{i18n>PlantSection}';
    funcLocation    @title : '{i18n>FuncLocation}';
    NR              @title : '{i18n>Equipment}';
    name            @title : '{i18n>EquipmentName}';
    desc            @title : '{i18n>EquipmentDesc}';
    equipmentStatus   @title : '{i18n>Status}'  @Common : {
        Text            : toEquipmentStatus.name,
        TextArrangement : #TextOnly
    };
    costCenter      @title : '{i18n>CostCenter}';
}

////////////////////////////////////////////////////////////////////////////
//
//	EquipmentConditions Lists
//
annotate sf.EquipmentConditions with @(
    Common.SemanticKey : [ID],
    UI                 : {
        Identification  : [
            {Value : ID},
            {
                $Type             : 'UI.DataFieldForAction',
                Action            : 'AdminService.createMO',
                Label             : 'Create Maintenance Order',
                IconUrl           : 'sap-icon://technical-object',
                Inline            : true,
                ![@UI.Emphasized] : true, //Button is highlighted
            }
        ],
        SelectionFields : [
            ID,
            equipment.plant,
            equipment.plantSection,
            equipment.funcLocation,
            equipment.NR,
            equipment.name
        ],
        LineItem        : [
            {
                Value : ID,
                Label : '{i18n>ID}'
            },
            {
                Value : equipment.NR,
                Label : '{i18n>Equipment}'
            },
            {
                Value : toEquipmentStatus.name,
                Label : '{i18n>EquipmentStatus}'
            },
            {
                Value : recStartedAt,
                Label : '{i18n>RecStartedAt}'
            },
            {
                Value : recEndedAt,
                Label : '{i18n>RecEndedAt}'
            },
            {
                Value : numberOfAnomalies,
                Label : '{i18n>NumberOfAnomalies}'
            },
            {
                Value : equipment.plant,
                Label : '{i18n>Plant}'
            },
            {
                Value : equipment.plantSection,
                Label : '{i18n>PlantSection}'
            },
            {
                Value : equipment.funcLocation,
                Label : '{i18n>FuncLocation}'
            }
        // {
        //     Value : followUpDocNum,
        //     Label : 'Doc ID'
        // },
        // {
        //     Value : followUpDocType,
        //     Label : 'Doc Type'
        // },
        // {
        //     $Type             : 'UI.DataFieldForAction',
        //     Action            : 'AdminService.createMO',
        //     Label             : 'Create Maintenance Order',
        //     IconUrl           : 'sap-icon://technical-object',
        //     Inline            : true,
        //     ![@UI.Emphasized] : true, //Button is highlighted
        // }
        ]
    }
) {
    ID @Common : {
        SemanticObject  : 'EquipmentConditions',
        Text            : ID,
        TextArrangement : #TextOnly
    };
};

////////////////////////////////////////////////////////////////////////////
//
//	EquipmentConditions Details
//
annotate sf.EquipmentConditions with @(UI : {HeaderInfo : {
    TypeName       : '{i18n>EquipmentCondition}',
    TypeNamePlural : '{i18n>EquipmentConditions}',
    Title          : {Value : equipment.name},
    Description    : {Value : equipment.NR}
}, });

annotate sf.EquipmentConditions with @(UI.HeaderFacets : [
{
    $Type  : 'UI.CollectionFacet',
    ID     : 'CollectionFacet1',
    Facets : [{
        //Search-Term: #DataPoint
        $Type  : 'UI.ReferenceFacet',
        Target : '@UI.DataPoint#Status',
    }]
},
/** [TO BE IMPROVED]
 *  - Currently moved logic to custom fragment.
 *  - To be only bound after formatting it with threshold data from AnomalyType entity.
 *  - Recommendation: To bring threshold value to EqCond entity instead.
 *  - To achieve better performance
 */
// {
//     $Type  : 'UI.CollectionFacet',
//     ID     : 'CollectionFacet2',
//     Facets : [{
//         $Type  : 'UI.ReferenceFacet',
//         Target : '@UI.DataPoint#progressIndicator',
//     }]
// },
{
    $Type  : 'UI.CollectionFacet',
    ID     : 'CollectionFacet3',
    Facets : [{
        //Search-Term: #HeaderFieldGroup
        $Type  : 'UI.ReferenceFacet',
        Target : '@UI.FieldGroup#HeaderData',
        Label  : '{i18n>Recommendation}',
    }]
},
]);

annotate sf.EquipmentConditions with @(
    UI.DataPoint #Status : {
        //Search-Term: #ProgressIndicator
        Value         : toEquipmentStatus.name,
        Title         : '{i18n>Status}',
        Criticality   : toEquipmentStatus.criticality, //> optional criticality
    },
    UI.DataPoint #progressIndicator : {
        //Search-Term: #ProgressIndicator
        Value         : numberOfAnomalies,
        TargetValue   : 2,
        Visualization : #Progress,
        Title         : '{i18n>DetectedAnomaliesNo}',
        Criticality   : 1, //> optional criticality
    },
    UI.FieldGroup #HeaderData       : {Data : [{
        Value       : toEquipmentStatus.recommendation,
        Label       : '',
        Criticality : toEquipmentStatus.criticality, //> optional criticality
    }]}
);


////////////////////////////////////////////////////////////////////////////
//
//	EquipmentConditions Elements
//
annotate sf.EquipmentConditions with {
    ID              @title : '{i18n>ID}';
    plant   @title : '{i18n>Plant}'  @Common : {
        Text            : equipment.plant,
        TextArrangement : #TextOnly
    };
    plantSection   @title : '{i18n>PlantSection}'  @Common : {
        Text            : equipment.plantSection,
        TextArrangement : #TextOnly
    };
    funcLocation   @title : '{i18n>FuncLocation}'  @Common : {
        Text            : equipment.funcLocation,
        TextArrangement : #TextOnly
    };
    equipmentNR   @title : '{i18n>Equipment}'  @Common : {
        Text            : equipment.code,
        TextArrangement : #TextOnly
    };
    equipmentName   @title : '{i18n>EquipmentName}'  @Common : {
        Text            : equipment.name,
        TextArrangement : #TextOnly
    };
    equipmentStatus   @title : '{i18n>Status}'  @Common : {
        Text            : toEquipmentStatus.name,
        TextArrangement : #TextOnly
    };
    recStartedAt    @title : '{i18n>RecStartedAt}';
    recEndedAt      @title : '{i18n>RecEndedAt}';
    //faultProb       @title : '{i18n>FaultProb}';
    //breakDownProb   @title : '{i18n>BreakDownProb}';
    followUpDocType @title : '{i18n>FollowUpDocType}';
    followUpDocNum  @title : '{i18n>FollowUpDocNum}';
}

////////////////////////////////////////////////////////////////////////////
//
//	Anomalies Lists
//
annotate sf.Anomalies with @(
    Common.SemanticKey : [ID],
    UI                 : {
        Identification  : [
            {Value : ID},
            {
                $Type             : 'UI.DataFieldForAction',
                Action            : 'AdminService.inferenceSoundAnomaly',
                IconUrl           : 'sap-icon://detail-view',
                Inline            : true,
                Label             : 'Inference Anomaly on ML Model',
                ![@UI.Emphasized] : true, //Button is highlighted
            },
        ],
        SelectionFields : [
            ID,
            equipment,
            anomalyType.name,
            confidence,
            status,
            detectedAt
        ],
        LineItem        : [
            {
                Value : ID,
                Label : '{i18n>ID}'
            },
            {
                Value : equipment,
                Label : '{i18n>Equipment}'
            },
            {
                Value : anomalyType.name,
                Label : '{i18n>AnomalyTypeName}'
            },
            {
                Value : confidence,
                Label : '{i18n>Confidence}'
            },
            {
                Value : status,
                Label : '{i18n>AnomalyStatus}'
            },
            {
                Value : detectedAt,
                Label : '{i18n>DetectedAt}'
            },
            {
                $Type             : 'UI.DataFieldForAction',
                Action            : 'AdminService.inferenceSoundAnomaly',
                IconUrl           : 'sap-icon://detail-view',
                Inline            : true,
                ![@UI.Emphasized] : true, //Button is highlighted
            },
        ]
    }
) {
    ID @Common : {
        SemanticObject  : 'Anomalies',
        Text            : ID,
        TextArrangement : #TextOnly
    };
    equipment @Common : {
        SemanticObject  : 'Equipments',
        Text            : equipment,
        TextArrangement : #TextOnly
    };
//anomalyType @ValueList.entity      : 'AnomalyTypes';
};

////////////////////////////////////////////////////////////////////////////
//
//	Anomalies Details
//
annotate sf.Anomalies with @(UI : {HeaderInfo : {
    TypeName       : '{i18n>Anomaly}',
    TypeNamePlural : '{i18n>Anomalies}',
    Title          : {Value : anomalyType.name},
    Description    : {Value : equipment}
}, });


////////////////////////////////////////////////////////////////////////////
//
//	Anomalies Elements
//
annotate sf.Anomalies with {
    ID                @title : '{i18n>ID}';
    equipment         @title : '{i18n>Equipment}';
    anomalyTypeCode   @title : '{i18n>AnomalyTypeCode}'  @Common : {
        Text            : anomalyType.code,
        TextArrangement : #TextOnly
    };
    anomalyTypeName   @title : '{i18n>AnomalyTypeName}'  @Common : {
        Text            : anomalyType.name,
        TextArrangement : #TextOnly
    };
    anomalyTypeDesc   @title : '{i18n>AnomalyTypeDesc}'  @Common : {
        Text            : anomalyType.descr,
        TextArrangement : #TextOnly
    }                 @UI.MultiLineText;
    confidence        @title : '{i18n>Confidence}';
    detectedAt        @title : '{i18n>DetectedAt}';
    detectedDate      @title : '{i18n>DetectedDate}';
    numberOfAnomalies @title : '{i18n>NumberOfAnomalies}';
    status            @title : '{i18n>AnomalyStatus}';
    sourceType        @title : '{i18n>SourceType}';
    rawValue          @title : '{i18n>RawValue}';
    rawMeasureUnit    @title : '{i18n>RawMeasurementUnit}';
}

////////////////////////////////////////////////////////////////////////////
//
//	AnomalyTypes Lists
//
annotate sf.AnomalyTypes with @(
    Common.SemanticKey : [code],
    UI                 : {
        Identification  : [{Value : code}],
        SelectionFields : [
            code,
            name,
            suggestedFollowUpAction,
            autoTrigger,
            triggerThreshold
        ],
        LineItem        : [
            {
                Value : code,
                Label : '{i18n>AnomalyTypeCode}'
            },
            {
                Value : name,
                Label : '{i18n>AnomalyTypeName}'
            },
            {
                Value : descr,
                Label : '{i18n>AnomalyTypeDesc}'
            },
            {
                Value : suggestedFollowUpAction,
                Label : '{i18n>SuggestedFollowUpAction}'
            },
            {
                Value : autoTrigger,
                Label : '{i18n>AutoTrigger}'
            },
            {
                Value : triggerThreshold,
                Label : '{i18n>TriggerThreshold}'
            }
        ]
    }
) {
    ID @Common : {
        SemanticObject  : 'AnomalyTypes',
        Text            : name,
        TextArrangement : #TextLast
    };
//anomalyType @ValueList.entity      : 'AnomalyTypes';
};

////////////////////////////////////////////////////////////////////////////
//
//	AnomalyTypes Details
//
annotate sf.AnomalyTypes with @(UI : {HeaderInfo : {
    TypeName       : '{i18n>AnomalyTypes}',
    TypeNamePlural : '{i18n>AnomalyTypes}',
    Title          : {Value : code},
    Description    : {Value : name}
}, });

////////////////////////////////////////////////////////////////////////////
//
//	AnomalyTypes Elements
//
annotate sf.AnomalyTypes with {
    code                    @title : '{i18n>AnomalyTypeCode}';
    name                    @title : '{i18n>AnomalyTypeName}';
    descr                   @title : '{i18n>AnomalyTypeDesc}'  @UI.MultiLineText;
    suggestedFollowUpAction @title : '{i18n>SuggestedFollowUpAction}';
    autoTrigger @title : '{i18n>AutoTrigger}';
    triggerThreshold @title : '{i18n>TriggerThreshold}';
}
