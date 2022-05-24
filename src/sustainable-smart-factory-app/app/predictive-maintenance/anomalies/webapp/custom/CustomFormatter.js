sap.ui.define([], function () {
    "use strict";

    return {
        formatSoundURL: function (val) {
            /**
             * sap.ui.require.toUrl gets the relative path of where your app is deployed at
             * e.g. for Launchpad, it is an app
             * /35b68727-9978-4cd5-a1a0-d126f85674a2.smartfactory.cvqualityrecords/~230522133042+0000~
             * + value path of the source file
             * /35b68727-9978-4cd5-a1a0-d126f85674a2.smartfactory.cvqualityrecords/~230522133042+0000~/media/cv/OK/xxx.bmp
             */
            var relativePath = sap.ui.require.toUrl("anomalies");
            return "_AICORE_APP_FS_URL_" + val;
        }
    };
});
