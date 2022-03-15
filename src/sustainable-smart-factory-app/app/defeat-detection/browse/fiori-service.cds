using CatalogService from 'smartfactory';

////////////////////////////////////////////////////////////////////////////
//
//	Books Object Page
//
annotate CatalogService.CVQualityRecords with @(UI : {
    HeaderInfo        : {
        TypeName       : 'Quality Record via Computer Vision',
        TypeNamePlural : 'CVQualityRecords',
        Description    : {Value : productId}
    },
    HeaderFacets      : [{
        $Type  : 'UI.ReferenceFacet',
        Label  : '{i18n>Description}',
        Target : '@UI.FieldGroup#Descr'
    }, ],
    Facets            : [{
        $Type  : 'UI.ReferenceFacet',
        Label  : '{i18n>Details}',
        Target : '@UI.FieldGroup#Price'
    }, ],
    FieldGroup #Descr : {Data : [{Value : productId} ]},
    FieldGroup #Price : {Data : [
        {Value : price},
        {
            Value : currency.symbol,
            Label : '{i18n>Currency}'
        },
    ]},
});


////////////////////////////////////////////////////////////////////////////
//
//	Books Object Page
//
annotate CatalogService.CVQualityRecords with @(UI : {
    SelectionFields : [
        ID,
        productId,
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
            Value : prodLineId,
            Label : '{i18n>ProductionLineID}'
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
            Value : detectedAt,
            Label : '{i18n>DetectedAt}'
        }
    ]
}, );
