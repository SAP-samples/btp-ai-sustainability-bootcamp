using { AdminService } from 'smartfactory';
using from '../../common'; // to help UI linter get the complete annotations

////////////////////////////////////////////////////////////////////////////
//
//	Books Object Page
//

annotate AdminService.EquipmentConditions with @(
	UI: {
		Facets: [
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>General}', Target: '@UI.FieldGroup#General'},
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>Details}', Target: '@UI.FieldGroup#Details'},
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>SoundAnomalies}', Target: 'soundAnomalies/@UI.LineItem'},
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>Admin}', Target: '@UI.FieldGroup#Admin'}
		],
		FieldGroup#General: {
			Data: [
				{Value: ID},
				{Value: plant},
				{Value: prodLineId},
				{Value: equipment},
				{Value: equipmentStatus},
				{Value: recStartedAt},
				{Value: recEndedAt}
			]
		},
		FieldGroup#Details: {
			Data: [
				{Value: faultProb},
				{Value: breakDownProb},
				{Value: followUpActionType},
				{Value: followUpDoc}
			]
		},
		FieldGroup#Admin: {
			Data: [
				{Value: createdBy},
				{Value: createdAt},
				{Value: modifiedBy},
				{Value: modifiedAt}
			]
		}
	}
);



////////////////////////////////////////////////////////////
//
//  Draft for Localized Data
//

annotate sap.smartfactory.EquipmentConditions with @fiori.draft.enabled;
annotate AdminService.EquipmentConditions with @odata.draft.enabled;

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
annotate AdminService.EquipmentConditions with { ID @Core.Computed; }

annotate AdminService.EquipmentConditions.SoundAnomalies with @(
	UI: {
		LineItem: [
			{Value: product_ID, Label:'Product ID'},
			{Value: title, Label:'Product Title'},
			{Value: price, Label:'Unit Price'},
			{Value: quantity, Label:'Quantity'},
		],
		Identification: [ //Is the main field group
			{Value: quantity, Label:'Quantity'},
			{Value: title, Label:'Product'},
			{Value: price, Label:'Unit Price'},
		],
		Facets: [
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>OrderItems}', Target: '@UI.Identification'},
		],
	},
) {
	quantity @(
		Common.FieldControl: #Mandatory
	);
};