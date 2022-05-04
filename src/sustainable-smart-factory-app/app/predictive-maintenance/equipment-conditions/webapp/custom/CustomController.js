sap.ui.define(["sap/ui/model/Filter", "sap/ui/model/FilterOperator"], function(Filter, FilterOperator) {
	"use strict";

	return {
		onGetThreshold: function(eqCondStatus, noAnom, eqCondId) {
			// console.log(eqCondStatus);
			// console.log(noAnom);
			// console.log(eqCondId);

			/** TO BE IMPROVED
			 * 	- Recommended: include threshold data as part of entity
			 * 	- Workaround: API call to retrieve threshold
			 */
			return noAnom + " of 2";
		},
		onSetCritStatus: function(noAnom) {
			if (noAnom == 0) return "Success";
			if (noAnom < 3) return "Warning";
			if (noAnom > 2) return "Error";
		}
	};
});
