using { AdminService } from 'smartfactory';
using from '../../common'; // to help UI linter get the complete annotations

////////////////////////////////////////////////////////////////////////////
//
//	SoundAnomalyTypes Object Page
//

annotate AdminService.SoundAnomalyTypes with @(
	UI: {
		Facets: [
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>General}', Target: '@UI.FieldGroup#General'},
		],
		FieldGroup#General: {
			Data: [
				{Value: code},
				{Value: name},
				{Value: descr},
				{Value: suggestedFollowUpAction}
			]
		}
	}
);



////////////////////////////////////////////////////////////
//
//  Draft for Localized Data
//

annotate sap.smartfactory.SoundAnomalyTypes with @fiori.draft.enabled;
annotate AdminService.SoundAnomalyTypes with @odata.draft.enabled;

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
//annotate AdminService.SoundAnomalyTypes with { ID @Core.Computed; }

//annotate sap.smartfactory.SoundAnomalyTypes with @fiori.draft.enabled;
//annotate AdminService.SoundAnomalyTypes with @odata.draft.enabled;