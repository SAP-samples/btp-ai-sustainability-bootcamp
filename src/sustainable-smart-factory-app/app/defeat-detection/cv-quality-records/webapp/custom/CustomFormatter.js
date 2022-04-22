sap.ui.define([], function () {
  "use strict";

  return {
    formatDecToPercentage: function (val) {
      //  return val * 100;
      //  removed this as value is as per percentage
      return val;
    },
    formatDecToPercentageDiscount: function (val) {
       return -val * 100;
    }
  };
});
