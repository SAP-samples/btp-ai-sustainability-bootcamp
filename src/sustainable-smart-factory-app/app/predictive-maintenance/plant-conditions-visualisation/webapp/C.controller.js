sap.ui.define(
  [
    "sap/ui/core/BusyIndicator",
    "sap/ui/Device",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/m/MessageToast",
    "sap/base/util/UriParameters",
    "sap/suite/ui/commons/TimelineItem",
    "require",
  ],
  function (
    BusyIndicator,
    Device,
    Controller,
    JSONModel,
    ODataModel,
    MessageToast,
    UriParameters,
    TimelineItem,
    require
  ) {
    "use strict";

    /** Toggle Simulation & Real Model
     *  - Real model is the latest Plant Conditions visualisation
     *  - Simulation model refers to a specific simulation that can be variable or hardcoded
     *  1. ...
     */
    var latestPlantCondObj;

    return Controller.extend("plantconditionsvisual.C", {
      hideBusyIndicator: function () {
        BusyIndicator.hide();
      },

      showBusyIndicator: function (iDuration, iDelay) {
        BusyIndicator.show(iDelay);

        if (iDuration && iDuration > 0) {
          if (this._sTimeoutId) {
            clearTimeout(this._sTimeoutId);
            this._sTimeoutId = null;
          }

          this._sTimeoutId = setTimeout(
            function () {
              this.hideBusyIndicator();
            }.bind(this),
            iDuration
          );
        }
      },
      onInit: function () {
        /** [LOGIC FLOW]
         * 1. URL Parameters coming from Plant Condtions
         * 2. Navigation Properties from LocalStorage - PlantVisual app in iFrame to navigate main app
         * 3. Bind Model for Timeline of Events
         *
         */

        /** 1. URL Parameters coming from Plant Condtions
         * -  Hide Visual Simulation Panel
         * -  Read URL Params to Get more details to Populate KPI Tiles
         *
         */

        var sParam = UriParameters.fromQuery(window.location.href).get("ID");
        // console.log(sParam);
        var self = this;

        localStorage.setItem("AICORE-ANOMALY-PLANTCONDITIONID", sParam);

        // http://localhost:4004/analytics/AnomaliesExtendedView?$filter=eqCondId%20eq%209076&orderby=detectedAt%20desc&$top=1

        var queryPath, latestMsg;

        //  Breadcrumbs
        if (sParam != null) {
          self
            .getView()
            .byId("xBreadCrumbs")
            .setCurrentLocationText(
              "Insights to Plant Condition (" + sParam + ")"
            );
          // using filter so to have response in array to not replicate logic in code
          queryPath = "/browse/PlantConditions?$filter=ID eq " + sParam;
          latestMsg = "";
        } else {
          self
            .getView()
            .byId("xBreadCrumbs")
            .setCurrentLocationText(
              "Insights to Plant Condition (Latest Update)"
            );
          queryPath = "/browse/PlantConditions?$orderby=ID desc&$top=1";
          latestMsg = "[Latest Update] ";
        }

        var plant,
          ID,
          plantStatus,
          recStartDate,
          recEndDate,
          shift,
          msg,
          currentYield,
          currentDefects,
          currentEnergy,
          currentEmissions;
        var zhr = new XMLHttpRequest();
        zhr.withCredentials = true;

        zhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            // console.log("listening to get latest plantid");
            latestPlantCondObj = JSON.parse(this.responseText);
            plant = latestPlantCondObj.value[0].plant;
            ID = latestPlantCondObj.value[0].ID;
            plantStatus = latestPlantCondObj.value[0].plantStatus;
            recStartDate = latestPlantCondObj.value[0].recStartedAt;
            recEndDate = latestPlantCondObj.value[0].recEndedAt;
            shift = latestPlantCondObj.value[0].shift;
            currentYield = latestPlantCondObj.value[0].yield;
            currentDefects = latestPlantCondObj.value[0].defectiveProd;
            currentEnergy = latestPlantCondObj.value[0].energyCons;
            //  [ToDo] where do i get emissions
            currentEmissions = randomIntFromInterval(20, 100);

            /**
             * [START]
             */
            var ahr = new XMLHttpRequest();
            ahr.withCredentials = true;

            ahr.addEventListener("readystatechange", function () {
              if (this.readyState === 4) {
                var eqConds = JSON.parse(this.responseText);
                for (let i = 0; i < eqConds.value.length; i++) {
                  var cond = setEqStatus(
                    eqConds.value[i].toEquipmentStatus_code
                  );
                  var condId = eqConds.value[i].ID;
                  if (eqConds.value[i].equipment_NR == "220300010") {
                    setNoOfAnom("AICORE-ANOMALY-EQUIPMENTA-ANOM", condId);
                    localStorage.setItem(
                      "AICORE-ANOMALY-EQUIPMENTA-STATUS",
                      cond
                    );
                    localStorage.setItem(
                      "AICORE-ANOMALY-EQUIPMENTA-NAME",
                      "LGP-Cutting machine#1"
                    );
                  } else if (eqConds.value[i].equipment_NR == "220300020") {
                    setNoOfAnom("AICORE-ANOMALY-EQUIPMENTB-ANOM", condId);
                    localStorage.setItem(
                      "AICORE-ANOMALY-EQUIPMENTB-STATUS",
                      cond
                    );
                    localStorage.setItem(
                      "AICORE-ANOMALY-EQUIPMENTB-NAME",
                      "LGP-Dotting machine#1"
                    );
                  } else if (eqConds.value[i].equipment_NR == "220300031") {
                    setNoOfAnom("AICORE-ANOMALY-EQUIPMENT1-ANOM", condId);
                    localStorage.setItem(
                      "AICORE-ANOMALY-EQUIPMENT1-STATUS",
                      cond
                    );
                    localStorage.setItem(
                      "AICORE-ANOMALY-EQUIPMENT1-NAME",
                      "LGP-LED assembling machine robotic arm 1"
                    );
                  } else if (eqConds.value[i].equipment_NR == "220300032") {
                    setNoOfAnom("AICORE-ANOMALY-EQUIPMENT2-ANOM", condId);
                    localStorage.setItem(
                      "AICORE-ANOMALY-EQUIPMENT2-STATUS",
                      cond
                    );
                    localStorage.setItem(
                      "AICORE-ANOMALY-EQUIPMENT2-NAME",
                      "LGP-LED assembling machine robotic arm 2"
                    );
                  } else if (eqConds.value[i].equipment_NR == "220300033") {
                    setNoOfAnom("AICORE-ANOMALY-EQUIPMENT3-ANOM", condId);
                    localStorage.setItem(
                      "AICORE-ANOMALY-EQUIPMENT3-STATUS",
                      cond
                    );
                    localStorage.setItem(
                      "AICORE-ANOMALY-EQUIPMENT3-NAME",
                      "LGP-LED assembling machine robotic arm 3"
                    );
                  } else if (eqConds.value[i].equipment_NR == "220300034") {
                    setNoOfAnom("AICORE-ANOMALY-EQUIPMENT4-ANOM", condId);
                    localStorage.setItem(
                      "AICORE-ANOMALY-EQUIPMENT4-STATUS",
                      cond
                    );
                    localStorage.setItem(
                      "AICORE-ANOMALY-EQUIPMENT4-NAME",
                      "LGP-LED assembling machine robotic arm 4"
                    );
                  } else if (eqConds.value[i].equipment_NR == "220300035") {
                    setNoOfAnom("AICORE-ANOMALY-EQUIPMENT5-ANOM", condId);
                    localStorage.setItem(
                      "AICORE-ANOMALY-EQUIPMENT5-STATUS",
                      cond
                    );
                    localStorage.setItem(
                      "AICORE-ANOMALY-EQUIPMENT5-NAME",
                      "LGP-LED assembling machine robotic arm 5"
                    );
                  } else if (eqConds.value[i].equipment_NR == "220300036") {
                    setNoOfAnom("AICORE-ANOMALY-EQUIPMENT6-ANOM", condId);
                    localStorage.setItem(
                      "AICORE-ANOMALY-EQUIPMENT6-STATUS",
                      cond
                    );
                    localStorage.setItem(
                      "AICORE-ANOMALY-EQUIPMENT6-NAME",
                      "LGP-LED assembling machine robotic arm 6"
                    );
                  }
                }
              }
            });

            ahr.open(
              "GET",
              "/browse/PlantConditions(" + ID + ")/equipmentConditions"
            );

            ahr.send();

            /** [END] */

            self.getView().byId("xYield").setValue(currentYield);
            self.getView().byId("xDefectiveProduct").setValue(currentDefects);
            self.getView().byId("xEnergyConsumption").setValue(currentEnergy);
            self.getView().byId("xCarbonEmission").setValue(currentEmissions);

            if (plantStatus == "Normal") {
              //  Success
              msg =
                latestMsg +
                "Plant Condition (" +
                ID +
                "): Plant " +
                plant +
                " is Functioning with Full Capacity. Checks done starting from Shift: (" +
                shift +
                "), " +
                recStartDate +
                " to " +
                recEndDate +
                ".";
              var plantCondPageHref =
                "/fiori-apps.html#PlantConditions-manage&/PlantConditions(" +
                ID +
                ")";
              self
                .getView()
                .byId("xPlantConditionLink")
                .setHref(plantCondPageHref);
              self.getView().byId("xPlantCondition").setVisible(true);
              self.getView().byId("xPlantCondition").setText(msg);
              self.getView().byId("xPlantCondition").setType("Success");
              self.getView().byId("xPlant").setValue("Norm");
              self.getView().byId("xPlant").setValueColor("Good");
            } else if (plantStatus == "Break Down" || plantStatus == "Fault") {
              //  Warning
              msg =
                latestMsg +
                "Plant Condition (" +
                ID +
                "): Plant " +
                plant +
                " has Broken Down. Checks done starting from Shift: (" +
                shift +
                "), " +
                recStartDate +
                " to " +
                recEndDate +
                ".";
              var plantCondPageHref =
                "/fiori-apps.html#PlantConditions-manage&/PlantConditions(" +
                ID +
                ")";
              self
                .getView()
                .byId("xPlantConditionLink")
                .setHref(plantCondPageHref);
              self.getView().byId("xPlantCondition").setVisible(true);
              self.getView().byId("xPlantCondition").setText(msg);
              self.getView().byId("xPlantCondition").setType("Error");
              self.getView().byId("xPlant").setValue("Down");
              self.getView().byId("xPlant").setValueColor("Critical");
            } else if (plantStatus == "Maintenance") {
              //  Error
              msg =
                latestMsg +
                "Plant Condition (" +
                ID +
                "): Plant " +
                plant +
                " is under going Maintenance Works. Checks done starting from Shift: (" +
                shift +
                "), " +
                recStartDate +
                " to " +
                recEndDate +
                ".";
              var plantCondPageHref =
                "/fiori-apps.html#PlantConditions-manage&/PlantConditions(" +
                ID +
                ")";
              self
                .getView()
                .byId("xPlantConditionLink")
                .setHref(plantCondPageHref);
              self.getView().byId("xPlantCondition").setVisible(true);
              self.getView().byId("xPlantCondition").setText(msg);
              self.getView().byId("xPlantCondition").setType("Warning");
              self.getView().byId("xPlant").setValue("Main");
              self.getView().byId("xPlant").setValueColor("Critical");
            }
          }
        });

        // zhr.open("GET", "/admin/PlantConditions?$orderby=ID desc&$top=1");
        zhr.open("GET", queryPath);

        zhr.send();

        /** Navigation Properties from LocalStorage
         *
         */

        localStorage.setItem("AICORE-ACTION", "");
        localStorage.setItem("AICORE-OBJECT", "");
        localStorage.setItem("AICORE-OBJECTID", "");

        // this.getView().setModel(
        //   new JSONModel({
        //     widthS: Device.system.phone ? "2em" : "5em",
        //     widthM: Device.system.phone ? "4em" : "10em",
        //     widthL: Device.system.phone ? "6em" : "15em",
        //   })
        // );

        // this._timeline = this.byId("idTimeline");
        // console.log(this._timeline);

        // var oODModel = new ODataModel("/v2/admin/", true);
        // // console.log(oODModel);

        // var oTimeline = this._timeline;

        // var oItem = new TimelineItem({
        //   dateTime: "{recStartedAt}",
        //   title: "{ID}",
        //   userPicture: "sap-icon://factory",
        //   text: "Production yield rate: {yield}. Defective products: {defectiveProd}. Energy Consumption (KWh): {energyCons}.",
        //   userName: "{plantStatus}",
        //   filterValue: "{plantStatus}"
        // });

        // console.log(oTimeline.getContent());

        // oTimeline.bindAggregation("content", {
        //   path: "/PlantConditions",
        //   template: oTimeline.getContent(),
        // });
        // oTimeline.setModel(oODModel);

        // var sPath = require.toUrl("./SampleData.json");
        // var oModel = new JSONModel(sPath);
        // oModel.setSizeLimit(500);
        // this.getView().setModel(oModel);

        // var xhr = new XMLHttpRequest();
        // xhr.withCredentials = true;

        // xhr.addEventListener("readystatechange", function () {
        //   if (this.readyState === 4) {
        // console.log(this.responseText);
        // var attnObj = JSON.parse(this.responseText);
        //   console.log(attnObj);
        //   console.log(attnObj.@odata.count);
        //   console.log(attnObj.length);
        //   console.log(attnObj.value.length);
        // attentionCount = attnObj.value.length;
        // if (attentionCount == 0) {
        //   self.getView().byId("xAttention").setValueColor("Good");
        //   self.getView().byId("xAttention").setIndicator("None");
        //   self.getView().byId("xAttention").setState("Loading");
        // } else {
        //   self.getView().byId("xAttention").setValueColor("Critical");
        //   self.getView().byId("xAttention").setIndicator("Up");
        //   self.getView().byId("xAttention").setState("Loaded");
        // }
        // self.getView().byId("xAttention").setValue(attentionCount);
        //   }
        // });

        // xhr.open("GET", "/admin/PlantConditions?$select=shift,energyCons");

        // xhr.send();

        // console.log(oModel);

        // set mock data
        // var sPath = require.toUrl("./SampleData.json");
        // var oDModel = new ODataModel("/v2/admin/", true);
        var oModel = new JSONModel(
          "/admin/PlantConditions?$top=3000&$orderby=ID%20desc&$select=ID,plantStatus,recStartedAt,recEndedAt,date,shift,yield,defectiveProd,energyCons"
        );
        // console.log(oDModel);
        oModel.setSizeLimit(3000);
        this.getView().setModel(oModel);
        // this.getView().getModel().setSizeLimit(1000);

        // ?$filter=eqCondId eq 19409&$count=true
        // var xModel = new JSONModel("/v2/analytics/AnomaliesExtendedView?$count=true");
        // this.getView().setModel(xModel, "testModel");
        var yModel = new JSONModel(
          "/analytics/AnomaliesExtendedView?$count=true"
        );
        this.getView().setModel(yModel, "testv4Model");
        // var zModel = new ODataModel("/v2/analytics/AnomaliesExtendedView");
        // this.getView().setModel(zModel, "testoModel");

        this.onTileRefresh();
        // this.onAutoRefresh();
      },
      onBreadCrumbsToHome: function (oEvent) {
        // MessageToast.show(oEvent.getSource().getText() + " has been activated");
        // window.location.href = "/fiori-apps.html";

        // var x = this.getView().getModel("testModel");
        // console.log(x);
        // console.log(x.getData());
        // console.log(x.oData);
        var y = this.getView().getModel("testv4Model");
        y.setSizeLimit(3000);
        console.log(y);
        console.log(y.getData());
        console.log(y.oData);
        console.log(y.oData.value);
        console.log(y.oData["@odata.count"]);
        console.log();
        // /AnomaliesExtendedView?$filter=eqCondId eq 19409&$count=true
        // y.read("?$filter=eqCondId eq 19409&$count=true", {
        //   success: function (oChildEntry) {
        //     console.log(oChildEntry);
        //   },
        //   error: function (oChildError) {
        //     console.log(oChildError);
        //   },
        // });
        // var z = this.getView().getModel("testoModel");
        // console.log(z);
        // console.log(z.getData());
        // console.log(z.oData);
      },
      onBreadCrumbsToPlantConditions: function (oEvent) {
        window.location.href = "/fiori-apps.html#PlantConditions-manage";
      },
      onBreadCrumbsToPlantCondition: function (oEvent) {
        var sParam = UriParameters.fromQuery(window.location.href).get("ID");
        if (sParam != null) {
          window.location.href =
            "/fiori-apps.html#PlantConditions-manage&/PlantConditions(" +
            sParam +
            ")";
        } else {
          window.location.href = "/fiori-apps.html#PlantConditions-manage";
        }
      },
      plantConditionStatusIcon: function (sStatus) {
        switch (sStatus) {
          case "Normal":
            return "sap-icon://message-success";
          case "Fault":
            return "sap-icon://alert";
          case "Maintenance":
            return "sap-icon://error";
          default:
            return "sap-icon://machine";
        }
      },
      onUserNameClick: function (oEvent) {
        // MessageToast.show(oEvent.getSource().getUserName() + " is pressed.");
        // console.log(oEvent.getSource().getTitle());
        var plantCondId = oEvent.getSource().getTitle();
        // window.location.href =
        //   "/fiori-apps.html#PlantConditions-manage&/PlantConditions(" +
        //   plantCondId +
        //   ")";

        var path =
          "/fiori-apps.html#PlantConditions-display?HasActiveEntity=false&ID=" +
          plantCondId;

        //  Load page with selected plant cond id
        // window.location.href = replaceUrlParam(document.URL, "ID", plantCondId);

        window.location.href = path;
      },
      onPressItems: function (oEvent) {
        // MessageToast.show("The TimelineItem is pressed.");
        MessageToast.show(oEvent.getSource().getUserName() + " is pressed.");
      },
      onToolbarPress: function () {
        // console.log("onToolbarPress");
        var self = this;
        var oPanel = self.getView().byId("expandablePanel");
        oPanel.setExpanded(!oPanel.getExpanded());
      },
      toEqCond: function () {
        //    [TO-IMPROVE] Quick fix: Navigate to main app on EqConditions Overview
        window.location.href = "/fiori-apps.html#EquipmentConditions-manage";
      },
      toPlantCond: function () {
        // window.location.href = "/fiori-apps.html#PlantConditions-manage";
        var sParam = UriParameters.fromQuery(window.location.href).get("ID");
        var path =
          "/fiori-apps.html#PlantConditions-manage&/PlantConditions(" +
          sParam +
          ")";

        //  Load page with selected plant cond id
        // window.location.href = replaceUrlParam(document.URL, "ID", plantCondId);

        window.location.href = path;
      },
      onSimulateSwitch: function (oEvent) {
        //  Busy Indicator
        this.showBusyIndicator(2000, 0);

        var self = this;
        // console.log("inside simulate switch " + oEvent.getSource().getState());
        var sState = oEvent.getSource().getState();
        if (!sState) {
          self.getView().byId("simulationConfig").setVisible(false);
        } else {
          self.getView().byId("simulationConfig").setVisible(true);
        }
      },
      //  Method is call every 3 seconds to update tile + simulation of real-time monitoring
      onTileRefresh: function () {
        /** Mock up values on KPI Tile Management
         * 1. Energy Consumption: Plant perspective on energy consumption
         * - Randomise # and symbol if - or +
         * - every intervals, -/+ to existing value
         * 2. Carbon
         * 3. Attention
         * 4. Defects
         * 5. Yield Rate
         * 6. Plant Status
         */
        var self = this;

        //  [ToDo] where do i get emissions
        var currentEmissions = randomIntFromInterval(20, 100);

        this.intervalHandler = setInterval(function () {
          /** Navigation Properties on iFrame App
           * [SCENARIO]: Specific Anomaly or Equipment in Detail page to Navigate user to.
           * - Action: Navigate | Update | etc.
           * - Object: Anomaly, Equipment
           * - ID: AnomalyID, EquipmentID
           */
          var visAction = localStorage.getItem("AICORE-ACTION");
          var visObject = localStorage.getItem("AICORE-OBJECT");
          var visObjectID = localStorage.getItem("AICORE-OBJECTID");
          if (visAction === "Navigate") {
            if (visObject === "Anomaly") {
              // #Anomalies-manage&/Anomalies(1662)
              window.location.href =
                "/fiori-apps.html#Anomalies-manage&/Anomalies(" +
                visObjectID +
                ")";
            } else if (visObject === "Equipment") {
              // #Equipments-manage&/Equipments('220300010')
              window.location.href =
                "/fiori-apps.html#Equipments-manage&/Equipments('" +
                visObjectID +
                "')";
            }
          }

          var refSwitch = self.getView().byId("refreshSwitch").getState();
          // console.log("switch " + refSwitch);

          //  Auto Refresh switch is on
          if (refSwitch) {
            localStorage.setItem("AICORE-SHOWCASE", "simulation");
            self
              .getView()
              .byId("xBreadCrumbs")
              .setCurrentLocationText(
                "Insights to Plant Condition (In Simulation Mode)"
              );

            //  1. Energy Consumption
            var x = randomIntFromInterval(1, 200);
            var sym = randomIntFromInterval(1, 2);
            var energy = self.getView().byId("xEnergyConsumption").getValue();
            if (sym == 1) {
              //    energy increases
              // console.log("up");
              self.getView().byId("xEnergyConsumption").setState("Loading");
              self
                .getView()
                .byId("xEnergyConsumption")
                .setValueColor("Critical");
              self.getView().byId("xEnergyConsumption").setIndicator("Up");
              self
                .getView()
                .byId("xEnergyConsumption")
                .setValue(parseInt(energy) + x);
              var selfie = self;
              setTimeout(function () {
                selfie.getView().byId("xEnergyConsumption").setState("Loaded");
              }, 1500);
            } else {
              //    energy decreases
              // console.log("Down");
              self.getView().byId("xEnergyConsumption").setState("Loading");
              self.getView().byId("xEnergyConsumption").setValueColor("Good");
              self.getView().byId("xEnergyConsumption").setIndicator("Down");
              self
                .getView()
                .byId("xEnergyConsumption")
                .setValue(parseInt(energy) - x);
              var selfie = self;
              setTimeout(function () {
                selfie.getView().byId("xEnergyConsumption").setState("Loaded");
              }, 1500);
            }

            //  2. Carbon Emissions
            var carInt = randomIntFromInterval(1, 50);
            var carSym = randomIntFromInterval(1, 2);
            var carbon = self.getView().byId("xCarbonEmission").getValue();
            if (carSym == 1) {
              //    co2 increases
              // console.log("up");
              self.getView().byId("xCarbonEmission").setState("Loading");
              self.getView().byId("xCarbonEmission").setValueColor("Critical");
              self.getView().byId("xCarbonEmission").setIndicator("Up");
              self
                .getView()
                .byId("xCarbonEmission")
                .setValue(parseInt(carbon) + carInt);
              var selfie = self;
              setTimeout(function () {
                selfie.getView().byId("xCarbonEmission").setState("Loaded");
              }, 1500);
            } else {
              //    co2 decreases
              // console.log("Down");
              self.getView().byId("xCarbonEmission").setState("Loading");
              self.getView().byId("xCarbonEmission").setValueColor("Good");
              self.getView().byId("xCarbonEmission").setIndicator("Down");
              self
                .getView()
                .byId("xCarbonEmission")
                .setValue(parseInt(carbon) - carInt);
              var selfie = self;
              setTimeout(function () {
                selfie.getView().byId("xCarbonEmission").setState("Loaded");
              }, 1500);
            }

            //  4. Defects Product
            var defectInt = randomIntFromInterval(1, 5);
            var defectSym = randomIntFromInterval(1, 2);
            var defects = self.getView().byId("xDefectiveProduct").getValue();
            if (defectSym == 1) {
              //    defect increases increases
              // console.log("up");
              self.getView().byId("xDefectiveProduct").setState("Loading");
              self
                .getView()
                .byId("xDefectiveProduct")
                .setValueColor("Critical");
              self.getView().byId("xDefectiveProduct").setIndicator("Up");
              self
                .getView()
                .byId("xDefectiveProduct")
                .setValue(parseInt(defects) + defectInt);
              var selfie = self;
              setTimeout(function () {
                selfie.getView().byId("xDefectiveProduct").setState("Loaded");
              }, 1500);
            } else {
              //    defect decreases
              // console.log("Down");
              self.getView().byId("xDefectiveProduct").setState("Loading");
              self.getView().byId("xDefectiveProduct").setValueColor("Good");
              self.getView().byId("xDefectiveProduct").setIndicator("Down");
              self
                .getView()
                .byId("xDefectiveProduct")
                .setValue(parseInt(defects) - defectInt);
              var selfie = self;
              setTimeout(function () {
                selfie.getView().byId("xDefectiveProduct").setState("Loaded");
              }, 1500);
            }

            //  4. Yield Rate
            var yieldInt = randomIntFromInterval(100, 300);
            var yieldSym = randomIntFromInterval(1, 2);
            var yields = self.getView().byId("xYield").getValue();
            if (yieldSym == 1) {
              //    defect increases increases
              // console.log("up");
              self.getView().byId("xYield").setState("Loading");
              self.getView().byId("xYield").setValueColor("Good");
              self.getView().byId("xYield").setIndicator("Up");
              self
                .getView()
                .byId("xYield")
                .setValue(parseInt(yields) + yieldInt);
              var selfie = self;
              setTimeout(function () {
                selfie.getView().byId("xYield").setState("Loaded");
              }, 1500);
            } else {
              //    defect decreases
              // console.log("Down");
              self.getView().byId("xYield").setState("Loading");
              self.getView().byId("xYield").setValueColor("Critical");
              self.getView().byId("xYield").setIndicator("Down");
              self
                .getView()
                .byId("xYield")
                .setValue(parseInt(yields) - yieldInt);
              var selfie = self;
              setTimeout(function () {
                selfie.getView().byId("xYield").setState("Loaded");
              }, 1500);
            }

            //  Can be moved to Outside Auto Refresh. So to Check always.
            //  Disable for now till further notice.
            //   3. Attention
            /** var attentionCount;
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
              if (this.readyState === 4) {
                //   console.log(this.responseText);
                var attnObj = JSON.parse(this.responseText);
                //   console.log(attnObj);
                //   console.log(attnObj.@odata.count);
                //   console.log(attnObj.length);
                //   console.log(attnObj.value.length);
                attentionCount = attnObj.value.length;
                if (attentionCount == 0) {
                  self.getView().byId("xAttention").setValueColor("Good");
                  self.getView().byId("xAttention").setIndicator("None");
                  self.getView().byId("xAttention").setState("Loading");
                } else {
                  self.getView().byId("xAttention").setValueColor("Critical");
                  self.getView().byId("xAttention").setIndicator("Up");
                  self.getView().byId("xAttention").setState("Loaded");
                }

                self.getView().byId("xAttention").setValue(attentionCount);
              }
            });

            //  [To-Improve] Requires Attention tile to improve logic.
            xhr.open(
              "GET",
              "/browse/EqCondsQuery?$filter=followUpDocNum%20ne%20null&$count=true"
            );

            xhr.send(); **/

            var attentionCount = randomIntFromInterval(1, 5);
            self.getView().byId("xAttention").setState("Loading");
            self.getView().byId("xAttention").setValue(attentionCount);
            self.getView().byId("xAttention").setValueColor("Critical");
            self.getView().byId("xAttention").setIndicator("Up");
            setTimeout(function () {
              self.getView().byId("xAttention").setState("Loaded");
            }, 1500);

            //  6. Plant Status
            //  [NOTE]: There is a catch to this logic.
            //  - Every 3 seconds, Plant Status will be retrieved in real time to check if the latest condition is fine or not.
            //  - Even refresh button is off.
            //  - BUT, this will check on the Attention Tile if the KPI is > 0, then it will simulate downtime.
            var plant,
              plantStatus,
              recStartDate,
              recEndDate,
              shift,
              msg,
              attnCount;
            var zhr = new XMLHttpRequest();
            zhr.withCredentials = true;

            zhr.addEventListener("readystatechange", function () {
              if (this.readyState === 4) {
                //   console.log(this.responseText);
                var attnObj = JSON.parse(this.responseText);
                // console.log(attnObj);
                // console.log(attnObj.value[0].plantStatus);
                plant = attnObj.value[0].plant;
                plantStatus = attnObj.value[0].plantStatus;
                recStartDate = attnObj.value[0].recStartedAt;
                recEndDate = attnObj.value[0].recEndedAt;
                shift = attnObj.value[0].shift;
                attnCount = self.getView().byId("xAttention").getValue();
                // console.log(attnCount);

                if (plantStatus == "Normal" && attnCount > 0) {
                  //  Normal BUT with Anom
                  msg =
                    "[Simulation Mode]: Plant " +
                    plant +
                    " is Functioning with Anomalies Detected. Checks done starting from Shift: (" +
                    shift +
                    "), " +
                    recStartDate +
                    " to " +
                    recEndDate +
                    ".";
                  var plantCondPageHref =
                    "/fiori-apps.html#PlantConditions-manage";
                  self
                    .getView()
                    .byId("xPlantConditionLink")
                    .setHref(plantCondPageHref);
                  self.getView().byId("xPlantCondition").setVisible(true);
                  self.getView().byId("xPlantCondition").setText(msg);
                  self.getView().byId("xPlantCondition").setType("Warning");
                  self.getView().byId("xPlant").setValue("Anom");
                  self.getView().byId("xPlant").setValueColor("Critical");
                } else if (plantStatus == "Normal") {
                  //  Success
                  msg =
                    "[Simulation Mode]: Plant " +
                    plant +
                    " is Functioning with Full Capacity. Checks done starting from Shift: (" +
                    shift +
                    "), " +
                    recStartDate +
                    " to " +
                    recEndDate +
                    ".";
                  var plantCondPageHref =
                    "/fiori-apps.html#PlantConditions-manage";
                  self
                    .getView()
                    .byId("xPlantConditionLink")
                    .setHref(plantCondPageHref);
                  self.getView().byId("xPlantCondition").setVisible(true);
                  self.getView().byId("xPlantCondition").setText(msg);
                  self.getView().byId("xPlantCondition").setType("Success");
                  self.getView().byId("xPlant").setValue("Norm");
                  self.getView().byId("xPlant").setValueColor("Good");
                } else if (plantStatus == "Break Down") {
                  //  Warning
                  msg =
                    "[Simulation Mode]: Plant " +
                    plant +
                    " has Broken Down. Checks done starting from Shift: (" +
                    shift +
                    "), " +
                    recStartDate +
                    " to " +
                    recEndDate +
                    ".";
                  var plantCondPageHref =
                    "/fiori-apps.html#PlantConditions-manage";
                  self
                    .getView()
                    .byId("xPlantConditionLink")
                    .setHref(plantCondPageHref);
                  self.getView().byId("xPlantCondition").setVisible(true);
                  self.getView().byId("xPlantCondition").setText(msg);
                  self.getView().byId("xPlantCondition").setType("Error");
                  self.getView().byId("xPlant").setValue("Down");
                  self.getView().byId("xPlant").setValueColor("Critical");
                } else if (plantStatus == "Maintenance") {
                  //  Error
                  msg =
                    "[Simulation Mode]: Plant " +
                    plant +
                    " is under going Maintenance Works. Checks done starting from Shift: (" +
                    shift +
                    "), " +
                    recStartDate +
                    " to " +
                    recEndDate +
                    ".";
                  var plantCondPageHref =
                    "/fiori-apps.html#PlantConditions-manage";
                  self
                    .getView()
                    .byId("xPlantConditionLink")
                    .setHref(plantCondPageHref);
                  self.getView().byId("xPlantCondition").setVisible(true);
                  self.getView().byId("xPlantCondition").setText(msg);
                  self.getView().byId("xPlantCondition").setType("Warning");
                  self.getView().byId("xPlant").setValue("Main");
                  self.getView().byId("xPlant").setValueColor("Critical");
                }
              }
            });

            zhr.open("GET", "/admin/PlantConditions?$orderby=ID desc&$top=1");

            zhr.send();
          } else {
            //  Auto Refresh switch is off - stop all loading & loaded
            localStorage.setItem("AICORE-SHOWCASE", "real");

            //  [START]
            var sParam = UriParameters.fromQuery(window.location.href).get(
              "ID"
            );
            // console.log(sParam);

            self.getView().byId("xAttention").setState("Loading");

            localStorage.setItem("AICORE-ANOMALY-PLANTCONDITIONID", sParam);

            // http://localhost:4004/analytics/AnomaliesExtendedView?$filter=eqCondId%20eq%209076&orderby=detectedAt%20desc&$top=1

            var queryPath, latestMsg;

            //  Breadcrumbs
            if (sParam != null) {
              self
                .getView()
                .byId("xBreadCrumbs")
                .setCurrentLocationText(
                  "Insights to Plant Condition (" + sParam + ")"
                );
              // using filter so to have response in array to not replicate logic in code
              queryPath = "/browse/PlantConditions?$filter=ID eq " + sParam;
              latestMsg = "";
            } else {
              self
                .getView()
                .byId("xBreadCrumbs")
                .setCurrentLocationText(
                  "Insights to Plant Condition (Latest Update)"
                );
              queryPath = "/browse/PlantConditions?$orderby=ID desc&$top=1";
              latestMsg = "[Latest Update] ";
            }

            var plant,
              ID,
              plantStatus,
              recStartDate,
              recEndDate,
              shift,
              msg,
              currentYield,
              currentDefects,
              currentEnergy;
            var zhr = new XMLHttpRequest();
            zhr.withCredentials = true;

            zhr.addEventListener("readystatechange", function () {
              if (this.readyState === 4) {
                // console.log("listening to get latest plantid");
                latestPlantCondObj = JSON.parse(this.responseText);
                plant = latestPlantCondObj.value[0].plant;
                ID = latestPlantCondObj.value[0].ID;
                plantStatus = latestPlantCondObj.value[0].plantStatus;
                recStartDate = latestPlantCondObj.value[0].recStartedAt;
                recEndDate = latestPlantCondObj.value[0].recEndedAt;
                shift = latestPlantCondObj.value[0].shift;
                currentYield = latestPlantCondObj.value[0].yield;
                currentDefects = latestPlantCondObj.value[0].defectiveProd;
                currentEnergy = latestPlantCondObj.value[0].energyCons;

                /**
                 * [START]
                 */
                var ahr = new XMLHttpRequest();
                ahr.withCredentials = true;

                ahr.addEventListener("readystatechange", function () {
                  if (this.readyState === 4) {
                    // console.log("listening to local storage setting");
                    // console.log(this.responseText);
                    var eqConds = JSON.parse(this.responseText);
                    for (let i = 0; i < eqConds.value.length; i++) {
                      var cond = setEqStatus(
                        eqConds.value[i].toEquipmentStatus_code
                      );
                      if (eqConds.value[i].equipment_NR == "220300010") {
                        localStorage.setItem(
                          "AICORE-ANOMALY-EQUIPMENTA-STATUS",
                          cond
                        );
                      } else if (eqConds.value[i].equipment_NR == "220300020") {
                        localStorage.setItem(
                          "AICORE-ANOMALY-EQUIPMENTB-STATUS",
                          cond
                        );
                      } else if (eqConds.value[i].equipment_NR == "220300031") {
                        localStorage.setItem(
                          "AICORE-ANOMALY-EQUIPMENT1-STATUS",
                          cond
                        );
                      } else if (eqConds.value[i].equipment_NR == "220300032") {
                        localStorage.setItem(
                          "AICORE-ANOMALY-EQUIPMENT2-STATUS",
                          cond
                        );
                      } else if (eqConds.value[i].equipment_NR == "220300033") {
                        localStorage.setItem(
                          "AICORE-ANOMALY-EQUIPMENT3-STATUS",
                          cond
                        );
                      } else if (eqConds.value[i].equipment_NR == "220300034") {
                        localStorage.setItem(
                          "AICORE-ANOMALY-EQUIPMENT4-STATUS",
                          cond
                        );
                      } else if (eqConds.value[i].equipment_NR == "220300035") {
                        localStorage.setItem(
                          "AICORE-ANOMALY-EQUIPMENT5-STATUS",
                          cond
                        );
                      } else if (eqConds.value[i].equipment_NR == "220300036") {
                        localStorage.setItem(
                          "AICORE-ANOMALY-EQUIPMENT6-STATUS",
                          cond
                        );
                      }
                    }
                  }
                });

                ahr.open(
                  "GET",
                  "/browse/PlantConditions(" + ID + ")/equipmentConditions"
                );

                ahr.send();

                /** [END] */

                self.getView().byId("xYield").setValue(currentYield);
                self
                  .getView()
                  .byId("xDefectiveProduct")
                  .setValue(currentDefects);
                self
                  .getView()
                  .byId("xEnergyConsumption")
                  .setValue(currentEnergy);
                self
                  .getView()
                  .byId("xCarbonEmission")
                  .setValue(currentEmissions);

                if (plantStatus == "Normal") {
                  //  Success
                  msg =
                    latestMsg +
                    "Plant Condition (" +
                    ID +
                    "): Plant " +
                    plant +
                    " is Functioning with Full Capacity. Checks done starting from Shift: (" +
                    shift +
                    "), " +
                    recStartDate +
                    " to " +
                    recEndDate +
                    ".";
                  var plantCondPageHref =
                    "/fiori-apps.html#PlantConditions-manage&/PlantConditions(" +
                    ID +
                    ")";
                  self
                    .getView()
                    .byId("xPlantConditionLink")
                    .setHref(plantCondPageHref);
                  self.getView().byId("xPlantCondition").setVisible(true);
                  self.getView().byId("xPlantCondition").setText(msg);
                  self.getView().byId("xPlantCondition").setType("Success");
                  self.getView().byId("xPlant").setValue("Norm");
                  self.getView().byId("xPlant").setValueColor("Good");
                } else if (
                  plantStatus == "Break Down" ||
                  plantStatus == "Fault"
                ) {
                  //  Warning
                  msg =
                    latestMsg +
                    "Plant Condition (" +
                    ID +
                    "): Plant " +
                    plant +
                    " has Broken Down. Checks done starting from Shift: (" +
                    shift +
                    "), " +
                    recStartDate +
                    " to " +
                    recEndDate +
                    ".";
                  var plantCondPageHref =
                    "/fiori-apps.html#PlantConditions-manage&/PlantConditions(" +
                    ID +
                    ")";
                  self
                    .getView()
                    .byId("xPlantConditionLink")
                    .setHref(plantCondPageHref);
                  self.getView().byId("xPlantCondition").setVisible(true);
                  self.getView().byId("xPlantCondition").setText(msg);
                  self.getView().byId("xPlantCondition").setType("Error");
                  self.getView().byId("xPlant").setValue("Down");
                  self.getView().byId("xPlant").setValueColor("Critical");
                } else if (plantStatus == "Maintenance") {
                  //  Error
                  msg =
                    latestMsg +
                    "Plant Condition (" +
                    ID +
                    "): Plant " +
                    plant +
                    " is under going Maintenance Works. Checks done starting from Shift: (" +
                    shift +
                    "), " +
                    recStartDate +
                    " to " +
                    recEndDate +
                    ".";
                  var plantCondPageHref =
                    "/fiori-apps.html#PlantConditions-manage&/PlantConditions(" +
                    ID +
                    ")";
                  self
                    .getView()
                    .byId("xPlantConditionLink")
                    .setHref(plantCondPageHref);
                  self.getView().byId("xPlantCondition").setVisible(true);
                  self.getView().byId("xPlantCondition").setText(msg);
                  self.getView().byId("xPlantCondition").setType("Warning");
                  self.getView().byId("xPlant").setValue("Main");
                  self.getView().byId("xPlant").setValueColor("Critical");
                }
              }
            });

            // zhr.open("GET", "/admin/PlantConditions?$orderby=ID desc&$top=1");
            zhr.open("GET", queryPath);

            zhr.send();

            /** Navigation Properties from LocalStorage
             *
             */

            localStorage.setItem("AICORE-ACTION", "");
            localStorage.setItem("AICORE-OBJECT", "");
            localStorage.setItem("AICORE-OBJECTID", "");
            //  [END]
          }
        }, 3000);
      },

      onExit: function () {
        //    Best Practice: stop intervals refresh on exit
        if (this.intervalHandler) clearInterval(this.intervalHandler);
      },
    });

    function setNoOfAnom(eqProperty, eqCondId) {
      var bhr = new XMLHttpRequest();
      bhr.withCredentials = true;

      var anomCount;

      bhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this.responseText);
          var anomObj = JSON.parse(this.responseText);
          anomCount = anomObj["@odata.count"];
          // eqName = anomObj.value[0].equipmentName;
          // anomCountJson = '{ "noOfAnomalies": "' + anomCount + '", "eqName": ' + eqName + '" }';
          console.log(anomCount);
          localStorage.setItem(eqProperty, anomCount);
        }
      });

      bhr.open(
        "GET",
        "/analytics/AnomaliesExtendedView?$filter=eqCondId eq " +
          eqCondId +
          "&$count=true"
      );

      bhr.send();
    }

    function randomIntFromInterval(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function setEqStatus(eqStatus) {
      // OK;Normal;3;Normal Production
      // FL;Fault;2;On-site Inspection
      // BD;Break Down;1;Create Maintenance Order to fix it
      // MT;Maintenance;2;Wait until the maintenance completed
      if (eqStatus == "MT") {
        return "fix";
      } else if (eqStatus == "FL") {
        return "down";
      } else if (eqStatus == "BD") {
        return "alert";
      } else if (eqStatus == "OK") {
        return "up";
      }
    }

    function replaceUrlParam(url, paramName, paramValue) {
      var pattern = new RegExp("(\\?|\\&)(" + paramName + "=).*?(&|$)");
      var newUrl = url;
      if (url.search(pattern) >= 0) {
        newUrl = url.replace(pattern, "$1$2" + paramValue + "$3");
      } else {
        newUrl =
          newUrl +
          (newUrl.indexOf("?") > 0 ? "&" : "?") +
          paramName +
          "=" +
          paramValue;
      }
      return newUrl;
    }
  }
);
