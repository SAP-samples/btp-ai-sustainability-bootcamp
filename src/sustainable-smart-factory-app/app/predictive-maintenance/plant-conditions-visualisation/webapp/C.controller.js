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
              console.log(this.responseText);
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

        xhr.open(
          "GET",
          "/admin/PlantConditions?$select=shift,energyCons"
        );

        xhr.send();

        console.log(oModel);

        // set mock data
        // var sPath = require.toUrl("./SampleData.json");
        // var oModel = new JSONModel(sPath);
        // this.getView().setModel(oModel);

        this.onTileRefresh();
      },
      toEqCond: function () {
        //    [TO-IMPROVE] Quick fix: Navigate to main app on EqConditions Overview
        window.location.href = "/fiori-apps.html#EquipmentConditions-manage";
      },
      onTileRefresh: function () {
        /**
         * Mock up values on KPI Tile Management
         * 1. Energy Consumption: Plant perspective on energy consumption
         * - Randomise # and symbol if - or +
         * - every intervals, -/+ to existing value
         * 2. Carbon
         * 3. Attention
         */
        var self = this;
        this.intervalHandler = setInterval(function () {
          //  1. Energy Consumption
          var x = randomIntFromInterval(1, 200);
          var sym = randomIntFromInterval(1, 2);
          var energy = self.getView().byId("xEnergyConsumption").getValue();
          if (sym == 1) {
            //    energy increases
            // console.log("up");
            self.getView().byId("xEnergyTile").setState("Loading");
            // setTimeout(2000);
            self.getView().byId("xEnergyConsumption").setValueColor("Critical");
            self.getView().byId("xEnergyConsumption").setIndicator("Up");
            self
              .getView()
              .byId("xEnergyConsumption")
              .setValue(parseInt(energy) + x);
            self.getView().byId("xEnergyTile").setState("Loaded");
          } else {
            //    energy decreases
            // console.log("Down");
            self.getView().byId("xEnergyTile").setState("Loading");
            self.getView().byId("xEnergyConsumption").setValueColor("Good");
            self.getView().byId("xEnergyConsumption").setIndicator("Down");
            self
              .getView()
              .byId("xEnergyConsumption")
              .setValue(parseInt(energy) - x);
            self.getView().byId("xEnergyTile").setState("Loaded");
          }

          //  2. Carbon Emissions
          var carInt = randomIntFromInterval(1, 50);
          var carSym = randomIntFromInterval(1, 2);
          var carbon = self.getView().byId("xCarbonEmission").getValue();
          if (carSym == 1) {
            //    co2 increases
            // console.log("up");
            self.getView().byId("xCarbonTile").setState("Loading");
            self.getView().byId("xCarbonEmission").setValueColor("Critical");
            self.getView().byId("xCarbonEmission").setIndicator("Up");
            self
              .getView()
              .byId("xCarbonEmission")
              .setValue(parseInt(carbon) + carInt);
            self.getView().byId("xCarbonTile").setState("Loaded");
          } else {
            //    co2 decreases
            // console.log("Down");
            self.getView().byId("xCarbonTile").setState("Loading");
            self.getView().byId("xCarbonEmission").setValueColor("Good");
            self.getView().byId("xCarbonEmission").setIndicator("Down");
            self
              .getView()
              .byId("xCarbonEmission")
              .setValue(parseInt(carbon) - carInt);
            self.getView().byId("xCarbonTile").setState("Loaded");
          }

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

          //   console.log("inside internvals");
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
