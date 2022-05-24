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
        },
        formatImageURL: function (val) {
            /**
             * sap.ui.require.toUrl gets the relative path of where your app is deployed at
             * e.g. for Launchpad, it is an app
             * /35b68727-9978-4cd5-a1a0-d126f85674a2.smartfactory.cvqualityrecords/~230522133042+0000~
             * + value path of the source file
             * /35b68727-9978-4cd5-a1a0-d126f85674a2.smartfactory.cvqualityrecords/~230522133042+0000~/media/cv/OK/xxx.bmp
             */
            var relativePath = sap.ui.require.toUrl("cvqualityrecords");
            return relativePath + val;
        }
    };
});
