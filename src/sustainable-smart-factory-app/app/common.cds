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
        Identification  : [{Value : ID}],
        SelectionFields : [
            ID,
            plant,
            plantSection,
            productId,
            productName,
            detectedAt,
            qualityLabel
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
            // {
            //     Value : detectedAt,
            //     Label : '{i18n>DetectedAt}'
            // },
            {
                $Type             : 'UI.DataFieldForAction',
                Action            : 'AdminService.inferenceImageCV',
                IconUrl           : 'sap-icon://detail-view',
                Inline            : true,
                ![@UI.Emphasized] : true, //Button is highlighted
            },
            {Value : image, }
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
        Title          : {Value : ID},
        Description    : {Value : productId},
        ImageUrl       : image
    },
    HeaderFacets      : [{
        $Type  : 'UI.ReferenceFacet',
        Label  : '{i18n>Description}',
        Target : '@UI.FieldGroup#Descr'
    }],
    FieldGroup #Descr : {Data : [
        {Value : productId}
    ]},
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
    qualityLabel @title : '{i18n>QualityLabel}';
    confidence   @title : '{i18n>Confidence}';
    detectedAt   @title : '{i18n>DetectedAt}';
    image        @(
        Common.Label  : 'Image',
        UI.IsImageURL : true
    );
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
        SemanticObject  : 'PlantConditions',
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
    defeatedProd @title : '{i18n>DefeatedProd}';
    energyCons   @title : '{i18n>EnergyCons}';
    recStartedAt @title : '{i18n>RecStartedAt}';
    recEndedAt   @title : '{i18n>RecEndedAt}';
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
            plant,
            plantSection,
            equipment
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
                Value : plantSection,
                Label : '{i18n>PlantSection}'
            },
            {
                Value : equipment,
                Label : '{i18n>Equipment}'
            },
            {
                Value : recStartedAt,
                Label : '{i18n>RecStartedAt}'
            },
            {
                Value : recEndedAt,
                Label : '{i18n>RecEndedAt}'
            },
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
    Title          : {Value : ID},
    Description    : {Value : equipment},
    ImageUrl       : '/media/pcb.png',
}, });

annotate sf.EquipmentConditions with @(UI.HeaderFacets : [
    {
        $Type  : 'UI.CollectionFacet',
        ID     : 'CollectionFacet1',
        Facets : [{
            //Search-Term: #DataPoint
            $Type  : 'UI.ReferenceFacet',
            Target : '@UI.DataPoint#progressIndicator',
        }],
    },
    {
        $Type  : 'UI.CollectionFacet',
        Facets : [{
            //Search-Term: #HeaderFieldGroup
            $Type  : 'UI.ReferenceFacet',
            Target : '@UI.FieldGroup#HeaderData',
            Label  : 'AI Recommendations',
        }],
    },
]);

annotate sf.EquipmentConditions with @(
    UI.DataPoint #progressIndicator : {
        //Search-Term: #ProgressIndicator
        Value         : fault,
        TargetValue   : 10,
        Visualization : #Progress,
        Title         : 'No. of Anomalies Detected',
        Criticality   : 1, //> optional criticality
    },
    UI.FieldGroup #HeaderData       : {Data : [{
        Value       : 'Create Maintenance Order to fix it.',
        Criticality : 2
    }]}
);


////////////////////////////////////////////////////////////////////////////
//
//	EquipmentConditions Elements
//
annotate sf.EquipmentConditions with {
    ID              @title : '{i18n>ID}';
    plant           @title : '{i18n>Plant}';
    plantSection    @title : '{i18n>PlantSection}';
    equipment       @title : '{i18n>Equipment}';
    funcLocation   @title : '{i18n>FuncLocation}';
    equipmentStatus @title : '{i18n>EquipmentStatus}';
    recStartedAt    @title : '{i18n>RecStartedAt}';
    recEndedAt      @title : '{i18n>RecEndedAt}';
    faultProb       @title : '{i18n>FaultProb}';
    breakDownProb   @title : '{i18n>BreakDownProb}';
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
        Identification  : [{Value : ID}],
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
            }
        ]
    }
) {
    ID @Common : {
        SemanticObject  : 'Anomalies',
        Text            : ID,
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
    Title          : {Value : ID},
    Description    : {Value : anomalyType.name}
}, });


////////////////////////////////////////////////////////////////////////////
//
//	Anomalies Elements
//
annotate sf.Anomalies with {
    ID              @title : '{i18n>ID}';
    equipment       @title : '{i18n>Equipment}';
    anomalyTypeCode @title : '{i18n>AnomalyTypeCode}'  @Common : {
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
            suggestedFollowUpAction
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
            }
        ]
    }
) {
    ID @Common : {
        SemanticObject  : 'AnomalyTypes',
        Text            : code,
        TextArrangement : #TextOnly
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
}
