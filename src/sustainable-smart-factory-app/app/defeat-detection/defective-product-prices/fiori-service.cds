using { AdminService } from 'smartfactory';
using from '../../common'; // to help UI linter get the complete annotations

annotate AdminService.DefectiveProductPrices with @(
	UI: {
		Facets: [
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>General}', Target: '@UI.FieldGroup#General'},
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>PriceItems}', Target: 'Items/@UI.LineItem'},
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>Admin}', Target: '@UI.FieldGroup#Admin'},
		],
		FieldGroup#General: {
			Data: [
				{Value: productId},
				{Value: productName},
				{Value: basePrice},
				{Value: currency_code}
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

annotate AdminService.DefectiveProductPrices.Items with @(
	UI: {
		LineItem: [
			{Value: item, Label : '{i18n>ItemNo}'},
			{Value: desc, Label : '{i18n>Desc}'},
			{Value: fromDefectedPerc, Label : '{i18n>FromDefectedPerc}'},
			{Value: toDefectedPerc, Label : '{i18n>ToDefectedPerc}'},
			{Value: defectiveDiscount, Label : '{i18n>DefectiveDiscount}'},
			{Value: validFrom, Label : '{i18n>ValidFrom}'},
			{Value: validTo, Label : '{i18n>ValidTo}'},
		],
		Identification: [ //Is the main field group
			{Value: item, Label : '{i18n>ItemNo}'}
		],
		Facets: [
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>PriceItems}', Target: '@UI.Identification'},
		],
	},
) {
	defectiveDiscount @(
		Common.FieldControl: #Mandatory
	);
};


////////////////////////////////////////////////////////////
//
//  Draft for Localized Data
//
annotate sap.smartfactory.DefectiveProductPrices with @fiori.draft.enabled;
annotate AdminService.DefectiveProductPrices with @odata.draft.enabled;
