using {AdminService} from 'smartfactory';
using from '../../common'; // to help UI linter get the complete annotations

annotate AdminService.EquipmentConditions with @(
    UI     : {
        Facets              : [
            {
                $Type  : 'UI.ReferenceFacet',
                Label  : '{i18n>General}',
                Target : '@UI.FieldGroup#General'
            },
            {
                $Type  : 'UI.ReferenceFacet',
                Label  : '{i18n>Details}',
                Target : '@UI.FieldGroup#Details'
            },
            {
                $Type  : 'UI.ReferenceFacet',
                Label  : '{i18n>Anomalies}',
                Target : 'anomalies/@UI.LineItem'
            },
            {
                $Type  : 'UI.ReferenceFacet',
                Label  : '{i18n>Admin}',
                Target : '@UI.FieldGroup#Admin'
            }
        ],
        FieldGroup #General : {Data : [
            {Value : ID},
            {Value : equipment.plant},
            {Value : equipment.plantSection},
            {Value : equipment.funcLocation},
            {Value : equipment.NR},
            {Value : equipmentStatus},
            {Value : recStartedAt},
            {Value : recEndedAt}
        ]},
        FieldGroup #Details : {Data : [
            {Value : followUpDocType},
            {Value : followUpDocNum}
        ]},
        FieldGroup #Admin   : {Data : [
            {Value : createdBy},
            {Value : createdAt},
            {Value : modifiedBy},
            {Value : modifiedAt}
        ]}
    }
);



////////////////////////////////////////////////////////////
//
//  Draft for Localized Data
//
annotate sap.smartfactory.EquipmentConditions with @fiori.draft.enabled;
annotate AdminService.EquipmentConditions with @odata.draft.enabled;

// // Workaround for Fiori popup for asking user to enter a new UUID on Create
annotate AdminService.EquipmentConditions with {
    ID @Core.Computed;
}
