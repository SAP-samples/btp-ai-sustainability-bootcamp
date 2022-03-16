using {AdminService} from 'smartfactory';
using from '../../common'; // to help UI linter get the complete annotations

////////////////////////////////////////////////////////////////////////////
//
//	Books Object Page
//

annotate AdminService.SoundAnomalies with @(UI : {
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
        Label  : '{i18n>Admin}',
        Target : '@UI.FieldGroup#Admin'
    },
    ],
    FieldGroup #General : {Data : [
    {Value : ID},
    {Value : equipment},
    {Value : status}
    ]},
    FieldGroup #Details : {Data : [
    {Value : ID},
    {Value : anomalyType.code},
    {Value : anomalyType.name},
    {Value : anomalyType.descr},
    {Value : anomalyType.followUpAction},
    {Value : confidence},
    {Value : detectedAt}
    ]},
    FieldGroup #Admin   : {Data : [
    {Value : createdBy},
    {Value : createdAt},
    {Value : modifiedBy},
    {Value : modifiedAt}
    ]}
});


////////////////////////////////////////////////////////////
//
//  Draft for Localized Data
//

annotate sap.smartfactory.SoundAnomalies with @fiori.draft.enabled;
annotate AdminService.SoundAnomalies with @odata.draft.enabled;

// annotate AdminService.Books.texts with @(
// 	UI: {
// 		Identification: [{Value:title}],
// 		SelectionFields: [ locale, title ],
// 		LineItem: [
// 			{Value: locale, Label: 'Locale'},
// 			{Value: title, Label: 'Title'},
// 			{Value: descr, Label: 'Description'},
// 		]
// 	}
// );

// // Add Value Help for Locales
// annotate AdminService.Books.texts {
// 	locale @(
// 		ValueList.entity:'Languages', Common.ValueListWithFixedValues, //show as drop down, not a dialog
// 	)
// }
// // In addition we need to expose Languages through AdminService as a target for ValueList
// using { sap } from '@sap/cds/common';
// extend service AdminService {
// 	@readonly entity Languages as projection on sap.common.Languages;
// }

// // Workaround for Fiori popup for asking user to enter a new UUID on Create
annotate AdminService.SoundAnomalies with {
    ID @Core.Computed;
}

//annotate sap.smartfactory.SoundAnomalies with @fiori.draft.enabled;
//annotate AdminService.SoundAnomalies with @odata.draft.enabled;
