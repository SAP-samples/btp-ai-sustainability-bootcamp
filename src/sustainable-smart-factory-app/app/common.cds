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
        prodLineId,
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
        {
            Value : detectedAt,
            Label : '{i18n>DetectedAt}'
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
annotate sf.CVQualityRecords with @(UI : {HeaderInfo : {
    TypeName       : '{i18n>CVQualityRecord}',
    TypeNamePlural : '{i18n>CVQualityRecords}',
    Title          : {Value : ID},
    Description    : {Value : productId}
}, });


////////////////////////////////////////////////////////////////////////////
//
//	CVQualityRecords Elements
//
annotate sf.CVQualityRecords with {
    ID           @title : '{i18n>ID}';
    plant        @title : '{i18n>Plant}';
    prodLineId   @title : '{i18n>ProductionLineID}';
    productId    @title : '{i18n>ProductID}';
    productName  @title : '{i18n>ProductName}';
    qualityLabel @title : '{i18n>QualityLabel}';
    confidence   @title : '{i18n>Confidence}';
    detectedAt   @title : '{i18n>DetectedAt}';
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
    plantStatus   @title : '{i18n>PlantStatus}';
    yield   @title : '{i18n>Yield}';
    defeatedProd   @title : '{i18n>DefeatedProd}';
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
        Identification  : [{Value : ID}],
        SelectionFields : [
        ID,
        plant,
        prodLineId,
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
            Value : prodLineId,
            Label : '{i18n>ProductionLineID}'
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
        }
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
    Description    : {Value : equipment}
}, });


////////////////////////////////////////////////////////////////////////////
//
//	EquipmentConditions Elements
//
annotate sf.EquipmentConditions with {
    ID           @title : '{i18n>ID}';
    plant        @title : '{i18n>Plant}';
    prodLineId   @title : '{i18n>ProductionLineID}';
    equipment    @title : '{i18n>Equipment}';
    equipmentStatus   @title : '{i18n>EquipmentStatus}';
    recStartedAt @title : '{i18n>RecStartedAt}';
    recEndedAt   @title : '{i18n>RecEndedAt}';
    faultProb   @title : '{i18n>FaultProb}';
    breakDownProb   @title : '{i18n>BreakDownProb}';
    followUpActionType @title : '{i18n>FollowUpActionType}';
    followUpDoc   @title : '{i18n>FollowUpDoc}';
}

////////////////////////////////////////////////////////////////////////////
//
//	SoundAnomalies Lists
//
annotate sf.SoundAnomalies with @(
    Common.SemanticKey : [ID],
    UI                 : {
        Identification  : [{Value : ID}],
        SelectionFields : [
        ID,
        plant,
        prodLineId,
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
            Value : plant,
            Label : '{i18n>Plant}'
        },
        {
            Value : prodLineId,
            Label : '{i18n>ProductionLineID}'
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
        SemanticObject  : 'SoundAnomalies',
        Text            : ID,
        TextArrangement : #TextOnly
    };
//anomalyType @ValueList.entity      : 'SoundAnomalyTypes';
};

////////////////////////////////////////////////////////////////////////////
//
//	SoundAnomalies Details
//
annotate sf.SoundAnomalies with @(UI : {HeaderInfo : {
    TypeName       : '{i18n>SoundAnomaly}',
    TypeNamePlural : '{i18n>SoundAnomalies}',
    Title          : {Value : ID},
    Description    : {Value : anomalyType.name}
}, });


////////////////////////////////////////////////////////////////////////////
//
//	SoundAnomalies Elements
//
annotate sf.SoundAnomalies with {
    ID              @title : '{i18n>ID}';
    plant           @title : '{i18n>Plant}';
    prodLineId      @title : '{i18n>ProductionLineID}';
    equipment       @title : '{i18n>Equipment}';
    anomalyTypeCode @title : '{i18n>AnomalyTypeCode}'  @Common : {
        Text            : anomalyType.code,
        TextArrangement : #TextOnly
    };
    anomalyTypeName @title : '{i18n>AnomalyTypeName}'  @Common : {
        Text            : anomalyType.name,
        TextArrangement : #TextOnly
    };
    anomalyTypeDesc @title : '{i18n>AnomalyTypeDesc}'  @Common : {
        Text            : anomalyType.descr,
        TextArrangement : #TextOnly
    }               @UI.MultiLineText;
    confidence      @title : '{i18n>Confidence}';
    detectedAt      @title : '{i18n>DetectedAt}';
    status          @title : '{i18n>AnomalyStatus}';
}

////////////////////////////////////////////////////////////////////////////
//
//	SoundAnomalyTypes Lists
//
annotate sf.SoundAnomalyTypes with @(
    Common.SemanticKey : [code],
    UI                 : {
        Identification  : [{Value : code}],
        SelectionFields : [
        code,
        name,
        followUpAction
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
            Value : followUpAction,
            Label : '{i18n>FollowUpAction}'
        }
        ]
    }
) {
    ID @Common : {
        SemanticObject  : 'SoundAnomalyTypes',
        Text            : code,
        TextArrangement : #TextOnly
    };
//anomalyType @ValueList.entity      : 'SoundAnomalyTypes';
};

////////////////////////////////////////////////////////////////////////////
//
//	SoundAnomalyTypes Details
//
annotate sf.SoundAnomalyTypes with @(UI : {HeaderInfo : {
    TypeName       : '{i18n>SoundAnomalyTypes}',
    TypeNamePlural : '{i18n>SoundAnomalyTypes}',
    Title          : {Value : code},
    Description    : {Value : name}
}, });


////////////////////////////////////////////////////////////////////////////
//
//	SoundAnomalyTypes Elements
//
annotate sf.SoundAnomalyTypes with {
    code           @title : '{i18n>AnomalyTypeCode}';
    name           @title : '{i18n>AnomalyTypeName}';
    descr          @title : '{i18n>AnomalyTypeDesc}'  @UI.MultiLineText;
    followUpAction @title : '{i18n>FollowUpAction}';
}
