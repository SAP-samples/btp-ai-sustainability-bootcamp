sap.ui.define(
  [
    "sap/ui/Device",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "require",
  ],
  function (Device, Controller, JSONModel, require) {
    "use strict";

    return Controller.extend("plantconditionsvisual.C", {
      onInit: function () {
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

        var sPath = require.toUrl("./SampleData.json");
        var oModel = new JSONModel(sPath);
        this.getView().setModel(oModel);

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
        // var oModel = new JSONModel(sPath);
        // this.getView().setModel(oModel);

        this.onTileRefresh();
        // this.onAutoRefresh();
      },
      onToolbarPress: function () {
        console.log("onToolbarPress");
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
          } else {
            //  Auto Refresh switch is off - stop all loading & loaded
          }

          //  Outside Auto Refresh. Check always.
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

          xhr.open(
            "GET",
            "/browse/EqCondsQuery?$filter=followUpDocNum%20ne%20null&$count=true"
          );

          xhr.send();

          //  6. Plant Status
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
                  "Manufacturing Plan " +
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
                  "Manufacturing Plan " +
                  plant +
                  " is Fully Functioning with Full Capacity. Checks done starting from Shift: (" +
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
                  "Manufacturing Plan " +
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
                  "Manufacturing Plan " +
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
                self.getView().byId("xPlantCondition").setType("Maintenance");
                self.getView().byId("xPlant").setValue("Main");
                self.getView().byId("xPlant").setValueColor("Critical");
              }
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

          zhr.open("GET", "/admin/PlantConditions?$orderby=ID desc&$top=1");

          zhr.send();
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
