sap.ui.define(
  [
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

    return Controller.extend("plantconditionsvisual.C", {
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

        //  [ToDo] Take Params above to retrieve latest info about the plant condition then update into the tiles

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
            var attnObj = JSON.parse(this.responseText);
            plant = attnObj.value[0].plant;
            ID = attnObj.value[0].ID;
            plantStatus = attnObj.value[0].plantStatus;
            recStartDate = attnObj.value[0].recStartedAt;
            recEndDate = attnObj.value[0].recEndedAt;
            shift = attnObj.value[0].shift;
            currentYield = attnObj.value[0].yield;
            currentDefects = attnObj.value[0].defectiveProd;
            currentEnergy = attnObj.value[0].energyCons;
            //  [ToDo] where do i get emissions
            currentEmissions = "22";

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
              self.getView().byId("xPlantCondition").setVisible(true);
              self.getView().byId("xPlantCondition").setText(msg);
              self.getView().byId("xPlantCondition").setType("Success");
              self.getView().byId("xPlant").setValue("Norm");
              self.getView().byId("xPlant").setValueColor("Good");
            } else if (plantStatus == "Break Down") {
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

        this.getView().setModel(
          new JSONModel({
            widthS: Device.system.phone ? "2em" : "5em",
            widthM: Device.system.phone ? "4em" : "10em",
            widthL: Device.system.phone ? "6em" : "15em",
          })
        );

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

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
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
          }
        });

        xhr.open("GET", "/admin/PlantConditions?$select=shift,energyCons");

        xhr.send();

        // console.log(oModel);

        // set mock data
        // var sPath = require.toUrl("./SampleData.json");
        var oDModel = new ODataModel("/v2/admin/", true);
        var oModel = new JSONModel(
          "/admin/PlantConditions?$top=3000&$orderby=ID%20desc&$select=ID,plantStatus,recStartedAt,recEndedAt,date,shift,yield,defectiveProd,energyCons"
        );
        // console.log(oModel);
        // console.log(oDModel);
        oModel.setSizeLimit(3000);
        this.getView().setModel(oModel);
        // this.getView().getModel().setSizeLimit(1000);

        this.onTileRefresh();
        // this.onAutoRefresh();
      },
      onBreadCrumbsToHome: function (oEvent) {
        // MessageToast.show(oEvent.getSource().getText() + " has been activated");
        window.location.href = "/fiori-apps.html";
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
        window.location.href =
          "/fiori-apps.html#PlantConditions-manage&/PlantConditions(" +
          plantCondId +
          ")";
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
        //    [TO-IMPROVE] Quick fix: Navigate to main app on EqConditions Overview
        window.location.href = "/fiori-apps.html#PlantConditions-manage";
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
          // console.log(refSwitch);

          //  Auto Refresh switch is on
          if (refSwitch) {
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
            //   3. Attention
            var attentionCount;
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

            xhr.send();

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
                    "Simulation: Plant " +
                    plant +
                    " is Functioning with Anomalies Detected. Checks done starting from Shift: (" +
                    shift +
                    "), " +
                    recStartDate +
                    " to " +
                    recEndDate +
                    ".";
                  self.getView().byId("xPlantCondition").setVisible(true);
                  self.getView().byId("xPlantCondition").setText(msg);
                  self.getView().byId("xPlantCondition").setType("Warning");
                  self.getView().byId("xPlant").setValue("Anom");
                  self.getView().byId("xPlant").setValueColor("Critical");
                } else if (plantStatus == "Normal") {
                  //  Success
                  msg =
                    "Simulation: Plant " +
                    plant +
                    " is Functioning with Full Capacity. Checks done starting from Shift: (" +
                    shift +
                    "), " +
                    recStartDate +
                    " to " +
                    recEndDate +
                    ".";
                  self.getView().byId("xPlantCondition").setVisible(true);
                  self.getView().byId("xPlantCondition").setText(msg);
                  self.getView().byId("xPlantCondition").setType("Success");
                  self.getView().byId("xPlant").setValue("Norm");
                  self.getView().byId("xPlant").setValueColor("Good");
                } else if (plantStatus == "Break Down") {
                  //  Warning
                  msg =
                    "Simulation: Plant " +
                    plant +
                    " has Broken Down. Checks done starting from Shift: (" +
                    shift +
                    "), " +
                    recStartDate +
                    " to " +
                    recEndDate +
                    ".";
                  self.getView().byId("xPlantCondition").setVisible(true);
                  self.getView().byId("xPlantCondition").setText(msg);
                  self.getView().byId("xPlantCondition").setType("Error");
                  self.getView().byId("xPlant").setValue("Down");
                  self.getView().byId("xPlant").setValueColor("Critical");
                } else if (plantStatus == "Maintenance") {
                  //  Error
                  msg =
                    "Simulation: Plant " +
                    plant +
                    " is under going Maintenance Works. Checks done starting from Shift: (" +
                    shift +
                    "), " +
                    recStartDate +
                    " to " +
                    recEndDate +
                    ".";
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
          }
        }, 5000);
      },

      onExit: function () {
        //    Best Practice: stop intervals refresh on exit
        if (this.intervalHandler) clearInterval(this.intervalHandler);
      },
    });

    function randomIntFromInterval(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }
);
