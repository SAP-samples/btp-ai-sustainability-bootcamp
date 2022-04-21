using { AdminService } from 'smartfactory';
using from '../../common'; // to help UI linter get the complete annotations

annotate AdminService.CVQualityRecords with @(
	UI: {
		Facets: [
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>General}', Target: '@UI.FieldGroup#General'},
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>Details}', Target: '@UI.FieldGroup#Details'},
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>Admin}', Target: '@UI.FieldGroup#Admin'},
		],
		FieldGroup#General: {
			Data: [
				{Value: ID},
				{Value: plant},
				{Value: plantSection},
				{Value: productId},
				{Value: productName}
			]
		},
		FieldGroup#Details: {
			Data: [
				{Value: qualityLabel},
				{Value: defectedPerc},
				{Value: confidence},
				{Value: detectedAt}
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
annotate sap.smartfactory.CVQualityRecords with @fiori.draft.enabled;
annotate AdminService.CVQualityRecords with @odata.draft.enabled;

// // Workaround for Fiori popup for asking user to enter a new UUID on Create
annotate AdminService.CVQualityRecords with { ID @Core.Computed; }
