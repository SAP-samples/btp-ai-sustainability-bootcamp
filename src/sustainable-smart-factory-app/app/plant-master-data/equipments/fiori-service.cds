using {AdminService} from 'smartfactory';
using from '../../common'; // to help UI linter get the complete annotations

annotate AdminService.Equipments with @(
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
                Label  : '{i18n>EquipmentConditions}',
                Target : 'conditions/@UI.LineItem'
            },
            {
                $Type  : 'UI.ReferenceFacet',
                Label  : '{i18n>Admin}',
                Target : '@UI.FieldGroup#Admin'
            }
        ],
        FieldGroup #General : {Data : [
            {Value : NR},
            {Value : name},
            {Value : desc}
        ]},
        FieldGroup #Details : {Data : [
            {Value : compCode},
            {Value : plant},
            {Value : plantSection},
            {Value : funcLocation},
            {Value : costCenter}
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

annotate sap.smartfactory.Equipments with @fiori.draft.enabled;
annotate AdminService.Equipments with @odata.draft.enabled;
