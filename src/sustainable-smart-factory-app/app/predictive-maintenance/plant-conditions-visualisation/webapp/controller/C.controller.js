sap.ui.define(
    [
        "sap/ui/core/BusyIndicator",
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/odata/v2/ODataModel",
        "sap/m/MessageToast",
        "sap/base/util/UriParameters",
        "sap/suite/ui/commons/TimelineItem",
        "sap/suite/ui/commons/TimelineFilterType",
        "sap/suite/ui/commons/util/DateUtils",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
        "require",
    ],
    function (
        BusyIndicator,
        Controller,
        JSONModel,
        ODataModel,
        MessageToast,
        UriParameters,
        TimelineItem,
        TimelineFilterType,
        DateUtils,
        Filter,
        FilterOperator,
        require
    ) {
        "use strict";

        /** Toggle Simulation & Real Model
         *  - Real model is referring to the selected/latest Plant Conditions
         *  - Simulation model refers to a specific simulation that can be variable or (hardcoded)
         *  - Simulation mode can be used for real-time streaming.
         */
        var latestPlantCondObj;

        /** Save on Global Settings for better UX Experience
         *  - Panel Expansion | AICORE-SETTINGS-TIMELINE-PANEL
         *  - Filter | AICORE-FILTER-CURRENT | Fault, Maintenance, Normal, All
         * @SearchParams: Global Settings
         */
        var filterCurrent = "All";
        var timelinePanel = false;

        /** [TO IMPROVE] Workaround for Local vs BTP LP Deployment - Global Variable
         *  - how to get appname or xsenv or cds env so that my model can be retrieve in real time url
         *  - currently to define here before deployment
         */
        var deploymentModel = "cloud";  //  local or cloud
        var modelURL = sap.ui.require.toUrl("plantconditionsvisual");  // empty if it's local
        // console.log("modelURL is here");
        // var btpLpServiceURL = "https://smart-factory-8221c96ftrial.cfapps.eu10.hana.ondemand.com";

        return Controller.extend("plantconditionsvisual.controller.C", {
            customFTFilterChecked: function (oEvent) {
                var sSelectedItem = oEvent.getParameter("selected"),
                    filter = null,
                    aSelectedDataItems = [];
                if (sSelectedItem) {
                    filter = new Filter({
                        path: "plantStatus",
                        value1: "Fault",
                        operator: FilterOperator.EQ,
                    });

                    aSelectedDataItems = ["Fault"];
                }

                this.byId("idTimeline").setModelFilter({
                    type: TimelineFilterType.Data,
                    filter: filter,
                });
                this.byId("idTimeline").setCurrentFilter(aSelectedDataItems);
            },
            onTimelineExpand: function (oEvent) {
                //  Global Parameter on Panel Expansion
                timelinePanel = this.byId("idTimelinePanel").getExpanded();
            },
            plantStatusChanged: function (oEvent) {
                //  Global Parameter on Filter Settings
                filterCurrent = oEvent.getParameter("selectedItem").getKey();

                var sSelectedItem = oEvent.getParameter("selectedItem").getKey();
                if (sSelectedItem === "All") {
                    // clear country filter
                    this._timeline.setCustomFilterMessage("");
                    this._timeline.setCustomModelFilter("statusFilter", null);
                } else {
                    this._timeline.setCustomFilterMessage(
                        "Plant Status (" + sSelectedItem + ")"
                    );
                    this._timeline.setCustomModelFilter(
                        "statusFilter",
                        new Filter({
                            path: "plantStatus",
                            value1: sSelectedItem,
                            operator: FilterOperator.EQ,
                        })
                    );
                }
            },
            _initBindingEventHandler: function () {
                var oBinding = this._timeline.getBinding("content");
                this._timeline.setNoDataText(
                    "Loading all plant conditions. Please be patient."
                );

                oBinding.attachDataReceived(function () {
                    this._timeline.setNoDataText(
                        "There isn't any plant conditions based on that filter parameters."
                    );
                }, this);

                this._timeline.attachFilterSelectionChange(function (oEvent) {
                    var sType = oEvent.getParameter("type"),
                        bClear = oEvent.getParameter("clear");

                    if (bClear) {
                        this.byId("idStatusSelector").setSelectedKey("All");
                        filterCurrent = "All";
                        return;
                    }

                    if (sType === TimelineFilterType.Search) {
                        this._search(oEvent);
                    }
                    // if (sType === TimelineFilterType.Data) {
                    //   this._dataFilter(oEvent);
                    // }
                    // if (sType === TimelineFilterType.Time) {
                    //   this._timeFilter(oEvent);
                    // }
                }, this);
            },
            _search: function (oEvent) {
                var aColumns = ["plantStatus", "yield", "defectiveProd", "energyCons"],
                    oFilter = null,
                    sSearchTerm = oEvent.getParameter("searchTerm");
                if (sSearchTerm) {
                    oFilter = new Filter(
                        aColumns.map(function (sColName) {
                            return new Filter(sColName, FilterOperator.Contains, sSearchTerm);
                        })
                    );
                }

                oEvent.bPreventDefault = true;

                this._timeline.setModelFilter({
                    type: "Search",
                    filter: oFilter,
                });
            },
            onAfterRendering: function () {
                //  Work-in-Progress: Dynamic Filter List
                // console.log("filterList");
                // console.log(this._timeline.getFilterList());
                // console.log("headerBar");
                // console.log(this._timeline.getHeaderBar());
                // console.log("itemFilter");
                // this._timeline.getItemFilter
                var xBar = this._timeline.getHeaderBar();
                xBar.addContent(new sap.m.Label({ text: "Plant Status: " }));
                // console.log(this.byId("idStatusSelector"));
                xBar.addContent(this.byId("idStatusSelector"));

                var toGoURL = sap.ui.require.toUrl("plantconditionsvisual/plant-visual/index.html");
                try {
                    // document.getElementById("application-PlantConditionsVisual-display-component---V--plantVisual").src = toGoURL;
                    document.getElementById("application-PlantConditionsVisual-Display-component---V--plantVisual").src = toGoURL;
                } catch (error) {
                    console.log(error);
                }

                // xBar.addContent(new sap.m.Select({
                //   id: "idStatusSelector",
                //   items: [
                //     new sap.ui.core.Item({key:"All", text:"All"}),
                //     new sap.ui.core.Item({key:"Fault", text:"Fault"}),
                //     new sap.ui.core.Item({key:"Maintenance", text:"Maintenance"})
                //   ]
                // this.byId("titleImage").setSrc(sap.ui.require.toUrl("btp/samples/simple/app/images/logo_ui5.png"));            

                // try {
                //     if (deploymentModel == "local") {
                //         // this.byId("plantVisual").setSrc("predictive-maintenance/plant-conditions-visualisation/webapp/plant-visual/index.html");
                //         document.getElementById("application-PlantConditionsVisual-display-component---V--plantVisual").src = "/predictive-maintenance/plant-conditions-visualisation/webapp/plant-visual/index.html";
                //         document.getElementById("application-PlantConditionsVisual-Display-component---V--plantVisual").src = "/predictive-maintenance/plant-conditions-visualisation/webapp/plant-visual/index.html";
                //         modelURL = "";
                //     } else {
                //         console.log("in here cloud");
                //         // this.byId("plantVisual").setSrc("plant-visual/index.html");
                //         document.getElementById("application-PlantConditionsVisual-display-component---V--plantVisual").src = "/plant-visual/index.html";
                //         //  in FLP service id is application-PlantConditionsVisual-Display-component---V--plantVisual
                //         document.getElementById("application-PlantConditionsVisual-Display-component---V--plantVisual").src = "/plant-visual/index.html";
                //         modelURL = btpLpServiceURL;
                //     }
                // } catch (error) {

                // }
                // }));

                /** GLOBAL SETTINGS
                 *  - On Filter
                 *  - On Select
                 *  - On Panel
                 */
                if (filterCurrent === "All") {
                    // clear country filter
                    this._timeline.setCustomFilterMessage("");
                    this._timeline.setCustomModelFilter("statusFilter", null);
                } else {
                    this._timeline.setCustomFilterMessage(
                        "Plant Status (" + filterCurrent + ")"
                    );
                    this._timeline.setCustomModelFilter(
                        "statusFilter",
                        new Filter({
                            path: "plantStatus",
                            value1: filterCurrent,
                            operator: FilterOperator.EQ,
                        })
                    );
                }
                this.byId("idStatusSelector").setSelectedKey(filterCurrent);
                this.byId("idTimelinePanel").setExpanded(timelinePanel);
            },
            onInit: function () {
                /** [LOGIC FLOW - in initialLogicFlow()]
                 *  1. URL Parameters coming from Plant Condtions
                 *  2. Hide Visual Simulation Panel
                 *  3. Read URL Params to Get more details to Populate KPI Tiles
                 *  4. Pass Plant Conditions properties to embedded app (visual) by localstorage
                 *  5. Bind Model for Timeline of Events and other KPI Tiles
                 *
                 *  [START]
                 */
                var self = this;
                this.initialLogicFlow(self);
                /**
                 *  Navigation Properties from LocalStorage
                 *  - Note: These config are defined by the visual app in iframe on user's click.
                 *  - Object & Action is captured by the click to trigger navigation/action by main app.
                 *  - Values are resetted onInit.
                 */
                localStorage.setItem("AICORE-ACTION", "");
                localStorage.setItem("AICORE-OBJECT", "");
                localStorage.setItem("AICORE-OBJECTID", "");

                /**
                 *  For Timeline Control to Load Plant Conditions.
                 *  - JSON Model - convertData required for date. sizeLimit 3000 | change xml /value | convert doesn't work for v2
                 *  - OData Model - convertData not required | change xml /PlantConditions
                 *  > filterValue & filterTitle not showing in filter window need to figure out.
                 *  > search doesn't seem to work for both JSON & Odata.
                 *
                 *  Note: Hide Search Field in onAfterRendering method.
                 *
                 * 2022-04-27 14:55:06.385500 Request failed with status code 400: GET PlantConditions/$count?$filter=(substringof(%27Fault%27,plantStatus)%20or%20substringof(Faultm,yield)%20or%20substringof(Faultm,defectiveProd)%20or%20substringof(Faultm,energyCons)) - [{"code":"400","message":"The type 'Edm.Decimal' is not compatible to 'Edm.String'","persistent":true,"targets":["/PlantConditions/$count"],"type":"Error"}] sap.ui.model.odata.ODataMessageParser
                 *
                 */
                var oDModel = new ODataModel(modelURL + "/v2/admin/", true);
                var oModel = new JSONModel(
                    modelURL + "/admin/PlantConditions?$top=3000&$orderby=ID%20desc&$select=ID,plantStatus,recStartedAt,recEndedAt,date,shift,yield,defectiveProd,energyCons"
                );
                // console.log(oDModel);
                // console.log(oModel);
                // oModel.setSizeLimit(3000);
                // oModel.attachRequestCompleted(convertData); //  switch on for json model
                this.getView().setModel(oDModel);

                //  Timeline control manipulation
                this._timeline = this.byId("idTimeline");
                this._initBindingEventHandler();

                //  Custom Message
                this._timeline.setCustomMessage(
                    "All Plant Conditions loaded in Timeline of Events"
                );

                // this.byId("idTimeline").setCustomGrouping(function(oDate) {
                //   return {
                //     key: oDate.getFullYear() + "/" + (oDate.getMonth() < 6 ? 1 : 2),
                //     title: oDate.getFullYear() + "/" + (oDate.getMonth() < 6 ? "1. half" : "2. half"),
                //     date: oDate
                //   };
                // });

                /** [LOGIC FLOW]
                 *  1. URL Parameters coming from Plant Condtions
                 *  2. Hide Visual Simulation Panel
                 *  3. Read URL Params to Get more details to Populate KPI Tiles
                 *  4. Pass Plant Conditions properties to embedded app (visual) by localstorage
                 *  5. Bind Model for Timeline of Events and other KPI Tiles
                 *
                 *  [END]
                 */

                /** [LISTENER - 3s Intervals] */
                this.onTileRefresh();
            },
            /** Method is call every 3 seconds to update tile + simulation of real-time monitoring
             * - Note: this method is instantiated onInit.
             */
            onTileRefresh: function () {
                /** [LOGIC FLOW]
                 *  Please note that there are 2 apps running, thus it's important to "listen"
                 *  from the 2nd embedded iframed app on what action should be taken by the Main App.
                 *
                 *  A.  Mock Up Simulation Values on KPI Tiles
                 *  B.  Switch for Actual or Simulation Plant Condition
                 *  C.
                 *
                 * [Load Mock up values on KPI Tiles]
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
                self.getView().byId("xCarbonEmission").setValue(currentEmissions);

                this.intervalHandler = setInterval(function () {
                    /** Navigation Properties on iFrame App
                     * [SCENARIO]: Specific Anomaly or Equipment in Detail page to Navigate user to.
                     * - Action: Navigate | Update | etc.
                     * - Object: Anomaly, Equipment
                     * - ID: AnomalyID, EquipmentID
                     *
                     * [START]
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
                        } else if (visObject === "EquipmentCondition") {
                            // #Equipments-manage&/Equipments('220300010')
                            window.location.href =
                                "/fiori-apps.html#EquipmentConditions-manage&/EquipmentConditions(" +
                                visObjectID +
                                ")";
                        }
                    }

                    self.getView().byId("xAnomCount").setState("Loaded");
                    self
                        .getView()
                        .byId("xAnomCount")
                        .setValue(localStorage.getItem("AICORE-ANOM-EQCOND-COUNT"));

                    /** Navigation Properties on iFrame App
                     * [SCENARIO]: Specific Anomaly or Equipment in Detail page to Navigate user to.
                     * - Action: Navigate | Update | etc.
                     * - Object: Anomaly, Equipment
                     * - ID: AnomalyID, EquipmentID
                     *
                     * [END]
                     */

                    var refSwitch = self.getView().byId("refreshSwitch").getState();
                    // console.log("switch " + refSwitch);

                    //  Simulation switch is ON
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

                        zhr.open("GET", modelURL + "/admin/PlantConditions?$orderby=ID desc&$top=1");

                        zhr.send();
                    } else {
                        //  Simulation switch is OFF - stop all loading & loaded
                        localStorage.setItem("AICORE-SHOWCASE", "real");
                        //  should move initialLogicFlow to switch function method as this will be called repeatedly.
                        // self.initialLogicFlow(self);
                        /**
                         *  Navigation Properties from LocalStorage
                         *  - Note: These config are defined by the visual app in iframe on user's click.
                         *  - Object & Action is captured by the click to trigger navigation/action by main app.
                         *  - Values are resetted onInit.
                         */
                        localStorage.setItem("AICORE-ACTION", "");
                        localStorage.setItem("AICORE-OBJECT", "");
                        localStorage.setItem("AICORE-OBJECTID", "");
                        //  [END]
                    }
                }, 5000);
            },
            /** [LOGIC FLOW - in initialLogicFlow()]
             *  1. URL Parameters coming from Plant Condtions
             *  2. Hide Visual Simulation Panel
             *  3. Read URL Params to Get more details to Populate KPI Tiles
             *  4. Pass Plant Conditions properties to embedded app (visual) by localstorage
             *  5. Bind Model for Timeline of Events and other KPI Tiles
             *
             *  [START]
             */
            initialLogicFlow: function (self) {
                var sParam = UriParameters.fromQuery(window.location.href).get("ID");
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
                    queryPath = modelURL + "/browse/PlantConditions?$filter=ID eq " + sParam;
                    latestMsg = "";
                } else {
                    self
                        .getView()
                        .byId("xBreadCrumbs")
                        .setCurrentLocationText(
                            "Insights to Plant Condition (Latest Update)"
                        );
                    queryPath = modelURL + "/browse/PlantConditions?$orderby=ID desc&$top=1";
                    latestMsg = "[Latest Update] ";
                    localStorage.setItem("AICORE-ANOMALY-PLANTCONDITIONID", sParam);
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
                        // currentEmissions = randomIntFromInterval(20, 100);

                        localStorage.setItem("AICORE-ANOMALY-PLANTCONDITIONID", ID);

                        var ahr = new XMLHttpRequest();
                        ahr.withCredentials = true;
                        //  Query on PlantConditions/eqConditions
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
                                        localStorage.setItem(
                                            "AICORE-ANOMALY-EQUIPMENTA-CONDID",
                                            condId
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
                                        localStorage.setItem(
                                            "AICORE-ANOMALY-EQUIPMENTB-CONDID",
                                            condId
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
                                        localStorage.setItem(
                                            "AICORE-ANOMALY-EQUIPMENT1-CONDID",
                                            condId
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
                                        localStorage.setItem(
                                            "AICORE-ANOMALY-EQUIPMENT2-CONDID",
                                            condId
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
                                        localStorage.setItem(
                                            "AICORE-ANOMALY-EQUIPMENT3-CONDID",
                                            condId
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
                                        localStorage.setItem(
                                            "AICORE-ANOMALY-EQUIPMENT4-CONDID",
                                            condId
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
                                        localStorage.setItem(
                                            "AICORE-ANOMALY-EQUIPMENT5-CONDID",
                                            condId
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
                                        localStorage.setItem(
                                            "AICORE-ANOMALY-EQUIPMENT6-CONDID",
                                            condId
                                        );
                                    }
                                }
                            }
                        });
                        ahr.open(
                            "GET",
                            modelURL + "/browse/PlantConditions(" + ID + ")/equipmentConditions"
                        );
                        ahr.send();

                        self.getView().byId("xYield").setValue(currentYield);
                        self.getView().byId("xDefectiveProduct").setValue(currentDefects);
                        self.getView().byId("xEnergyConsumption").setValue(currentEnergy);
                        // self.getView().byId("xCarbonEmission").setValue(currentEmissions);

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
                zhr.open("GET", queryPath);
                zhr.send();
            },
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
            onBreadCrumbsToHome: function (oEvent) {
                var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
                console.log(oCrossAppNavigator);
                var hash = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
                    target: {
                        semanticObject: "Shell",
                        action: "Home"
                    }
                })) || "";
                oCrossAppNavigator.toExternal({
                    target: {
                        shellHash: hash
                    }
                });

            },
            onBreadCrumbsToPlantConditions: function (oEvent) {
                var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
                var hash = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
                    target: {
                        semanticObject: "PlantConditions",
                        action: "Manage"
                    }
                })) || "";
                oCrossAppNavigator.toExternal({
                    target: {
                        shellHash: hash
                    }
                });
            },
            onBreadCrumbsToPlantCondition: function (oEvent) {
                var sParam = UriParameters.fromQuery(window.location.href).get("ID");

                if (sParam != null) {
                    var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
                    var hash = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
                        target: {
                            semanticObject: "PlantConditions",
                            action: "Manage"
                        },
                        params: {
                            "ID": sParam
                        }
                    })) || "";
                    oCrossAppNavigator.toExternal({
                        target: {
                            shellHash: hash
                        }
                    });
                } else {
                    var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
                    var hash = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
                        target: {
                            semanticObject: "PlantConditions",
                            action: "Manage"
                        },
                        params: {
                            "ID": latestPlantCondObj.value[0].ID
                        }
                    })) || "";
                    oCrossAppNavigator.toExternal({
                        target: {
                            shellHash: hash
                        }
                    });
                }
            },
            /** Icon for Timeline */
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
            /** Icon Colour for Timeline */
            plantConditionStatusIconColour: function (sStatus) {
                switch (sStatus) {
                    case "Normal":
                        return "Success";
                    case "Fault":
                        return "Warning";
                    case "Maintenance":
                        return "Error";
                    default:
                        return "Success";
                }
            },
            onUserNameClick: function (oEvent) {
                // MessageToast.show(oEvent.getSource().getUserName() + " is pressed.");
                var plantCondId = oEvent.getSource().getTitle();
                // var path =
                //     "/fiori-apps.html#PlantConditionsVisual-display?HasActiveEntity=false&ID=" +
                //     plantCondId;
                // window.location.href = path;
                var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
                var hash = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
                    target: {
                        semanticObject: "PlantConditionsVisual",
                        action: "Display"
                    },
                    params: {
                        "HasActiveEntity": false,
                        "ID": plantCondId
                    }
                })) || "";
                oCrossAppNavigator.toExternal({
                    target: {
                        shellHash: hash
                    }
                });
            },
            toEqCond: function () {
                //    [TO-IMPROVE] Quick fix: Navigate to main app on EqConditions Overview
                // window.location.href = "/fiori-apps.html#EquipmentConditions-manage";
                var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
                var hash = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
                    target: {
                        semanticObject: "EquipmentConditions",
                        action: "Manage"
                    }
                })) || "";
                oCrossAppNavigator.toExternal({
                    target: {
                        shellHash: hash
                    }
                });
            },
            toPlantCond: function () {
                var sParam = UriParameters.fromQuery(window.location.href).get("ID");
                // var path =
                //     "/fiori-apps.html#PlantConditions-manage&/PlantConditions(" +
                //     sParam +
                //     ")";
                // window.location.href = path;
                var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
                var hash = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
                    target: {
                        semanticObject: "PlantConditions",
                        action: "Display"
                    },
                    params: {
                        "ID": sParam
                    }
                })) || "";
                oCrossAppNavigator.toExternal({
                    target: {
                        shellHash: hash
                    }
                });
            },
            onSimulateSwitch: function (oEvent) {
                //  Load Busy Indicator for Simulation
                this.showBusyIndicator(3500, 0);

                var self = this;
                var sState = oEvent.getSource().getState();
                if (!sState) {
                    self.getView().byId("simulationConfig").setVisible(false);

                    //  refresh kpi tiles
                    self.initialLogicFlow(self);
                } else {
                    self.getView().byId("simulationConfig").setVisible(true);
                }
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
                    var anomObj = JSON.parse(this.responseText);
                    anomCount = anomObj["@odata.count"];
                    localStorage.setItem(eqProperty, anomCount);
                    return anomCount;
                }
            });
            bhr.open(
                "GET",
                modelURL + "/analytics/AnomaliesExtendedView?$filter=eqCondId eq " +
                eqCondId +
                "&$count=true"
            );
            bhr.send();
        }

        function convertData(oEvent) {
            var oData,
                oModel = oEvent.getSource();

            if (!oEvent.getParameters().success) {
                return;
            }

            oData = oModel.getData();
            oData.value.forEach(function (oPlantCond) {
                oPlantCond.recStartedAt = DateUtils.parseDate(oPlantCond.recStartedAt);
            });
            oModel.updateBindings(true);
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
    }
);
