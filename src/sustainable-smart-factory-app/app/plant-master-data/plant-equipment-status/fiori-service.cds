using {AdminService} from 'smartfactory';
using from '../../common'; // to help UI linter get the complete annotations

annotate AdminService.PlantEquipmentStatus with @(
    UI     : {
        Facets              : [
            {
                $Type  : 'UI.ReferenceFacet',
                Label  : '{i18n>General}',
                Target : '@UI.FieldGroup#General'
            }
        ],
        FieldGroup #General : {Data : [
            {Value : code},
            {Value : name},
            {Value : criticality},
            {Value : recommendation}
        ]}
    }
);

////////////////////////////////////////////////////////////
//
//  Draft for Localized Data
//

annotate sap.smartfactory.PlantEquipmentStatus with @fiori.draft.enabled;
annotate AdminService.PlantEquipmentStatus with @odata.draft.enabled;
