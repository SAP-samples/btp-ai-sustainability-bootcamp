"use strict";
const port = process.env.PORT || 4004;

const cds = require("@sap/cds");
const proxy = require("@sap/cds-odata-v2-adapter-proxy");

cds.on("bootstrap", (app) =>
  app.use(
    proxy({
      //path: "",
      port: port,
    })
  )
);

module.exports = cds.server;
