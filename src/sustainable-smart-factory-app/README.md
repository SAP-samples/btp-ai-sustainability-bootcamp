# Building a sustainable-smart-factory-app sample on SAP BTP embedding Intelligence and Sustainability with SAP AI Core
<!--- Register repository https://api.reuse.software/register, then add REUSE badge:
[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/REPO-NAME)](https://api.reuse.software/info/github.com/SAP-samples/REPO-NAME)
-->

As part of the AI & Sustainability Bootcamp, we have developed a sample app named sustainable-smart-factory-app to inference the [AI models](../ai-models) which you have developed in Enterprise AI in Action sessions of this bootcamp. 
* [Image segmentation](..//ai-models/defect-detection) for auto. defect detection
* [Sound anomalies detection](/src/ai-models/predictive-maintenance) for predictive maintenance
In this way, you also learn from to build end-to-end industry cloud solutions on SAP BTP focusing on AI & Sustainability topics.
<p>

The sample application is mainly built on top of **SAP Cloud Application Programming (CAP) model** and **SAP Fiori Elements**. It helps in:

* Monitoring the daily operation of the plant.
* Recording the sustainability KPI(energy consumption) of the plant on daily. 
* Scoring the AI models against the live sensor Data
* Extending the Maintenance Management of SAP S/4HANA Cloud with side-by-side extensibility on SAP BTP with sound-based predictive maintenance.
* Integrating with SAP Analytics Cloud for plant 360 analytics, and maintenance cost & sustainability KPIs planning.

![Solution Architecture](../../resources/solution-architecture.png)

In this [deployment option #2](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/tree/deploy-btp-mta-launchpad/src/sustainable-smart-factory-app#2-cloud-option-with-sap-btp-launchpad-cloud-native-app-as-mta-deployed-in-sap-btp-with-sap-launchpad-services--managed-approuter-recommended-for-development-testing-or-even-production), you will be pushing all your **SAP Fiori applications** (in the app folder) into a **Managed Approuter HTML5 Repository** & Cloud Foundry Environment in SAP BTP, then subsequently create a central entry point via **SAP Launchpad Service + SAP Mobile Start**. Here is a glimpse of what you will achieve.

![Deployment to SAP BTP Launchpad](https://user-images.githubusercontent.com/8436161/169964568-68aa39ba-90a8-4c11-88aa-8c090731a503.gif)

## Deployment Options
We have prepared a few models for you to consider and take reference from in order to deploy this sample app successfully to your preferred platform/landscapes.
Please note that the sample app is shipped AS-IT-IS, and if you faced with any issues, **SAP will not be providing any support**. However, if you find any bugs or issues, you may [create an issue here](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/issues).

> Note: Please DO NOT attempt to implement both deployment models in a single repo project as each deployment option has different approaches in steps and configuration variables setup. It is recommended to have different repo project directories for the different deployment branches.

### **1. Hybrid Option**: Local App consuming SAP BTP Cloud Services <br>**(Recommended for development or test, also for bootcamp exercise)**
Follow instructions from **[`main` branch](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/tree/main/src/sustainable-smart-factory-app)**.

### **2. Cloud Option with SAP BTP Launchpad**: Cloud Native App as MTA, deployed in SAP BTP with SAP Launchpad services & Managed Approuter <br>**(Recommended for development, testing or even production)**
Follow instructions from **[`deploy-btp-mta-launchpad` branch](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/tree/deploy-btp-mta-launchpad/src/sustainable-smart-factory-app)**.

### **3. Cloud Option with Cloud Foundry Environment in SAP BTP**: Cloud Native App as MTA, deployed in SAP BTP Cloud Foundry Environment
More instructions to come. Stay tuned.

## Prerequisites
Below are some setup steps that are required to ensure a success deployment of the application.

### **(i) Obtain an SAP BTP Trial, Free Tier or Productive Account**. 
Please complete this [tutorial](https://developers.sap.com/tutorials/hcp-create-trial-account.html) about Getting a Free Account on SAP BTP Trial.

### **(ii) Set Up SAP HANA Cloud and SAP Business Application Studio** 
Please complete this [tutorial](https://developers.sap.com/group.hana-cloud-setup.html).

> SAP BTP Cockpit > Cloud Foundry > Spaces > dev > **SAP HANA Cloud** <br>(make sure you select the option to "Allow ALL IP Addresses" during creation)

![SAP BTP HANA Cloud](https://user-images.githubusercontent.com/8436161/128988191-f079627d-59c3-4015-a689-d4933613ba41.png)

### **(iii) Subscribed to `SAP Launchpad Service` in SAP BTP**
In this deployment model, we will be using SAP BTP Launchpad Service and its Managed Approuter to deploy and manage all the SAP Fiori Applications.

Please complete this [tutorial to setup](https://developers.sap.com/tutorials/cp-portal-cloud-foundry-getting-started.html) with the right authorisation role assigned to your user as well.

![SAP BTP Launchpad Subscribed](https://user-images.githubusercontent.com/8436161/170425138-f0cc7e73-1577-4ac2-afb3-01a9ecf3a99c.png)

### **(iv) Connecting to a `S/4HANA Cloud System` via SAP BTP Connectivity Destination**
> SAP BTP Cockpit > Connectivity > Destinations > **New Destination**

In this step, you will require a S/4HANA Cloud instance for this to work. You will be using a technical user with the right authorisation to Manage Maintenance Order in your S/4HANA Cloud tenant. This will be triggered in the app itself part of the Equipments Condition module.

> **Name**: `S4HC_AICOREBOOTCAMP`

> **Type**: HTTP

> **Description**: AI Core & Sustainability Bootcamp Purpose for S4HC Test Tenant

> **URL**: https://`<tenant>`.s4hana.ondemand.com

> **Proxy Type**: Internet

> **Authentication**: BasicAuthentication

> **User**: make sure this is a technical user setup with the right authorisation to manage maintenance order service

> **Password**: xxxx

![S4HANA Destination in SAP BTP Cockpit](https://user-images.githubusercontent.com/8436161/168980113-837f9341-c385-41d9-a0aa-065c186fa57d.png)

_Please note that the above destination name `S4HC_AICOREBOOTCAMP` is being used (thus please **DO NOT** change) and defined inside [package.json](package.json) for the app and will be used in the **Custom Logic** file on S/4HANA Maintenance Order `Line 82` located in [btp-ai-core-bootcamp/src/sustainable-smart-factory-app/srv/admin-service.js](srv/admin-service.js)._ <p>
Prior to that, please make sure you've done your own testing of calling the API with Postman to ensure that your credentials works.

### **(iv) Create a Destination in SAP BTP, using your SAP AI Core Service key credentials**

In this step, you will require an instance of SAP AI Core in your SAP BTP account for this to work. 

![AICORE Instance in SAP BTP Cockpit](https://user-images.githubusercontent.com/8436161/169442399-70a1197b-af35-4e7b-8f95-565a585aa677.gif)

Create a service key where you will use the OAuth credentials provided, and entered the value to the Destination config.
> For bootcamp related setup, if you have received the AI Core credentials, you may proceed to use it accordingly to configure the destination in your own SAP BTP Account.

![AICORE Instance Key in SAP BTP Cockpit](https://user-images.githubusercontent.com/8436161/169466232-ee914f60-f19d-4364-88c7-324b21b908d2.png)

> SAP BTP Cockpit > Connectivity > Destinations > **New Destination**

Copy and Paste the relevant property value (from Service Key above) such as, **`clientid, clientsecret, url, ai_api_url`** into the config of **SAP BTP Connectivity Destination**.

> **Name**: `AICORE`

> **Type**: HTTP

> **Description**: Destination for AI Core Bootcamp

> **URL**: `ai_api_url`

> **Proxy Type**: Internet

> **Authentication**: OAuth2ClientCredentials

> **Client ID**: `clientid`

> **Client Secret**: `clientsecret`

> **Token Service URL Type**: Dedicated

> **Token Service URL**: `url`/oauth/token **(NOT referring to the ai_api_url, make sure to append /oauth/token at the end of the URL path.)**

> **Token Service User**: <LEAVE_EMPTY>

> **Token Service Password**: <LEAVE_EMPTY>

> **Additional Properties > xsappname**: `appname`

![AICORE Destination in SAP BTP Cockpit](https://user-images.githubusercontent.com/8436161/169439295-025eef7d-79d8-4c6b-9cae-aaec105ad569.png)

_Please note that the above destination name `AICORE` is being used (thus please **DO NOT** change) and defined in the **Custom Logic** file on `getDestination()` method located in [btp-ai-core-bootcamp/src/sustainable-smart-factory-app/srv/admin-service.js](srv/admin-service.js)._

## Download and Installation
> Make sure you have completed **ALL** of the [Prerequisite Steps](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/tree/deploy-btp-mta-launchpad/src/sustainable-smart-factory-app#prerequisites) before proceeding.

Please kindly note that the **following instructions below is strictly for the deployment option of a Cloud Native approach as MTA, deployed in SAP BTP with SAP Launchpad services & Managed Approuter**.
<p>
While developing your own solution, you may take this as a reference (AS-IT-IS) and troubleshoot on your own if you'd like to deploy it on other SAP/non-SAP landscapes.
</p>

Refer [here for more information on the other deployment options](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/tree/deploy-btp-mta-launchpad/src/sustainable-smart-factory-app#deployment-options). Each has its own configurations to setup accordingly.

### Choice of Development Tools (IDE)
You may use either one of following IDE based on your preferences.
1. **Microsoft Visual Studio Code**: Do note that you would be required to install some of the required libraries, such as mtb, etc..
2. **(Recommended) SAP Business Application Studio**: Select Full Stack Cloud Application as the Predefined Extensions when creating the Dev Space.

### **Step 1:** Clone this specific branch `deploy-btp-mta-launchpad` of Git Repo into a `btp-ai-core-bootcamp` project folder.

```bash
git clone --branch deploy-btp-mta-launchpad https://github.com/SAP-samples/btp-ai-sustainability-bootcamp.git btp-ai-core-bootcamp
```

### **Step 2:** Navigate into the folder and `install the required dependencies` locally.

```bash
cd btp-ai-core-bootcamp/src/sustainable-smart-factory-app
```
```bash
npm install
```

### **Step 3:** Build & Deploy MTA
Open [mta.yaml](mta.yaml), go to **line 6**, locate **appname** property and replace `_REPLACE_W_YOUR_UNIQUE_SUBDOMAINID_` with your **Unique Subdomain Name** or a unique name for the solution.

![SAP BTP Unique Subdomain](https://user-images.githubusercontent.com/8436161/170443901-e3e9d8d1-fc9f-47a4-9b0f-0981f3fb471d.png)

> Results: Parameter `appname` should be something like `smart-factory-8221c96ftrial`.

<p></p>
<details>
  <summary>Hint: How to locate your unique Subdomain name.</summary>

![SAP BTP Unique Subdomain](https://user-images.githubusercontent.com/8436161/126601394-9d2ea36d-8d2a-44bc-b178-3aed760dbe9e.png)

</details>
<p></p>

Once renamed your solution, it's time to **package your app with the MTA Build Tool**.<br>
<i>Alternatively, you can right click the [mta.yaml](mta.yaml) file and select **Build MTA Project**.</i>
```bash
mbt build
```
<p></p>
<details>
  <summary>Hint: Make sure you've installed the build tool in your IDE.</summary>

```bash
npm install -g mta
npm install -g mbt
```

</details>
<p></p>

Once packaged, it's time to **deploy the MTAR archive**.<br>
<i>Alternatively, you can right click the archive file in the folder mta_archives and select **Deploy MTA Archive**.</i>

```bash
cf deploy mta_archives/sustainable-smart-factory-app_1.1.0.mtar
```
<p>

It will take about a few minutes for the deployment to be completed. <p>
If you're an experienced developer in this domain, you should be able to define the variables in advance and thus not requiring a redeployment (later step).
As there are some server-side variables that are required for the frontend to integrate with, thus the Post Deployment steps are required.
- Define variables in various locations
- Create destinations so the endpoint is reachable for KPI tiles.

> Note: One common issue most deployment faced is not being able to deploy to HANA DB successfully. This is due to the instance being stopped (shut down every 24 hours automatically). Thus, please make sure your HANA Cloud instance is started prior to deployment.

### **Step 4:** Post-Deployment: App Variables to Configure, Destinations to Create, Redeploy
At this stage, please check and ensure that your **app is up and running with all the various services created** as well.
From there, you'll need the following **URL values** from various location, then configure them in the app itself. You'll be guided along below.

```bash
cf apps
```

![Apps Deployed in CF dev space](https://user-images.githubusercontent.com/8436161/170435549-74b3017c-0c3f-4ee5-a8c6-ee61f14b48d8.png)

- **a. File Server Backend App deployed in CF**: `_AICORE_APP_FS_URL_`
- **b. CAP CDS Servlet App deployed in CF**: `_AICORE_APP_CAP_CDS_URL_`

Also, prior to this step, you should already have completed the AI Core model training and serving setup, and should have the following values ready for inferencing against the ML model. Please note that the values are specific to your own setup following the AI Core Hands-on Exercises.
- **c. Resource Group**: `_AICORE_RESOURCE_GROUP_`
- **d. Deployment Inference URL**: `_AICORE_DEPLOYMENT_URL_`
- **e. Image Segmentation Deployment ID**: `_AICORE_IMAGESEG_DEPLOYMENT_ID_`
- **f. Sound Classification Deployment ID**: `_AICORE_SOUNDCLASS_DEPLOYMENT_ID_`

#### File Server Backend App deployed in CF
As MTA deployment recommends lightweight Fiori app deployment, thus we are unable to load such a huge size (200+MB) of media resources into the Anomalies Fiori App. Thus, we have deployed this NodeJS app to your Cloud Foundry environment as part of the entire MTA deployment.
You may retrieve the URL by ethier looking at your deployment logs, cf commands or browsing through your dev space.
> SAP BTP Cockpit > Cloud Foundry > Spaces > dev > sustainable-smart-factory-app-file-server > **Application Routes**

![File Server App in SAP BTP Cockpit](https://user-images.githubusercontent.com/8436161/170294046-4a7534f7-9a6a-411c-8c96-3386a29980c3.png)

Copy the URL Path and replace `_AICORE_APP_FS_URL_` in the **following location**:
- [package.json](package.json): cds > aicore > **fsurl** property value

#### CAP CDS Servlet App deployed in CF
Required for the KPI Tiles setup in your SAP BTP Launchpad service.

You may retrieve the URL by ethier looking at your deployment logs, cf commands or browsing through your dev space.
> SAP BTP Cockpit > Cloud Foundry > Spaces > dev > sustainable-smart-factory-app-srv > **Application Routes**

![CAP CDS App in SAP BTP Cockpit](https://user-images.githubusercontent.com/8436161/170294022-ee8f7ffb-8620-401f-a052-9a5219247c3a.png)

Copy the **URL Path from Application Route** and replace `_AICORE_APP_CAP_CDS_URL_` below by Creating a New Destination.

> SAP BTP Cockpit > Connectivity > Destinations > **New Destination**

In this step, you will require a S/4HANA Cloud instance for this to work. You will be using a technical user with the right authorisation to Manage Maintenance Order in your S/4HANA Cloud tenant. This will be triggered in the app itself part of the Equipments Condition module.

> **Name**: `smart-factory-app-api`

> **Type**: HTTP

> **Description**: Service endpoint for Smart Factory KPI Purposes in Launchpad

> **URL**: `_AICORE_APP_CAP_CDS_URL_`

> **Proxy Type**: Internet

> **Authentication**: NoAuthentication

> **Additional Properties > HTML5.DynamicDestination**: `true`

> **Additional Properties > WebIDEEnabled**: `true`

> **Additional Properties > WebIDESystem**: `SmartFactory`

> **Additional Properties > WebIDEUsage**: `odata_gen`

![CAP CDS Destination in SAP BTP Cockpit](https://user-images.githubusercontent.com/8436161/170293032-4868a221-f135-41e4-ae2e-c5da8badfe7f.png)

_Please note that the above destination name `smart-factory-app-api` is defined inside all of your Fiori app's manifest under cross navigation (**below is a code snippet just for your reference**). Defined in **indicatorDataSource > path**.<p>
What we are trying to achieve here is to expose the URL so that our KPI tile in the Launchpad will be able to retrieve a data count of the data entities._

```json
/** Code snippet taken from app/plant-conditions/webapp/manifest.json */

"crossNavigation": {
    "inbounds": {
        "plantconditions-inbound": {
            ...
            "semanticObject": "PlantConditions",
            ...
            "indicatorDataSource": {
                "dataSource": "mainService",
                "path": "/dynamic_dest/smart-factory-app-api/admin/PlantConditions/$count",
                "refresh": 5000
            }
        }
    }
}
/** No changes are required. */
```

#### Resource Group
> _Bootcamp participant, you might not have access to SAP AI Launchpad, however, you should already have created the Resource Group via an API request either via Jupyter Notebook or Postman._

![Resource Group in AI Launchpad](https://user-images.githubusercontent.com/8436161/169454780-3a352edf-132b-4617-8400-4d34e087035d.png)

#### Deployment Inference URL
> _Bootcamp participant, you might not have access to SAP AI Launchpad, however, you should already have came across this Deployment Inference URL via your exercises on getting details on your successful deployment._

You may also formulate this with the service key's service url > AI_API_URL with `/v2/inference/deployments`
<p> Please note that the full URL path required for the app will be without `/deployment_id` at the end. e.g. <b>https://api.ai.xxx.aws.ml.hana.ondemand.com/v2/inference/deployments</b></p>

![Deployment URL in AI Launchpad](https://user-images.githubusercontent.com/8436161/169454814-d6f1bfbc-b4da-4d30-a037-ad1073c15b9c.png)


#### Once you have the values formulated above and ready, open [package.json](package.json) and modify the following parameters to your AI Core parameters
1. Copy & paste the **Deployment Inference URL** (**without `/deployment_id` at the end**) into package.json, replacing this variable `_AICORE_DEPLOYMENT_URL_`, under cds > aicore > url.
2. Copy & paste the **Resource Group** into package.json, replacing this variable `_AICORE_RESOURCE_GROUP_`, under cds > aicore > resourcegroup.
3. Copy & paste the successful deployement of the **Image Segmentation Deployment ID** into package.json, replacing this variable `_AICORE_IMAGESEG_DEPLOYMENT_ID_`, under cds > aicore > inferences > imageseg.
4. Copy & paste the successful deployement of the **Sound Classification Deployment ID** into package.json, replacing this variable `_AICORE_SOUNDCLASS_DEPLOYMENT_ID_`, under cds > aicore > inferences > soundclass.

You may refer below as an example of the variables defined in your [package.json](package.json).

![Package Reference of Variables defined](https://user-images.githubusercontent.com/8436161/170442675-036d1d17-fd9a-4ebf-827c-9c0b5f5c9e88.png)

### **Step 5:** (Re)Build the MTA & (Re)Deploy.

**Package your app with the MTA Build Tool**.<br>
<i>Alternatively, you can right click the [mta.yaml](mta.yaml) file and select Build MTA Project.</i>
```bash
mbt build
```
Once packaged, it's time to **deploy the MTAR archive**.<br>
<i>Alternatively, you can right click the archive file in the folder mta_archives and select **Deploy MTA Archive**.</i>

```bash
cf deploy mta_archives/sustainable-smart-factory-app_1.1.0.mtar
```
<p>

It will take about a few minutes for the deployment to be completed.

### **Step 6:** Test & Run your Fiori Applications in your HTML5 Repository.
Congratulations! 👏 If you've achieved till here, give yourself a pat on your back! Now, it's just a matter of configuring the Launchpad. Before we dive into the specifics of Launchpad configuration, let's navigate around and explore into the 11 Fiori apps you've deployed in your HTML5 repo. There are 2 ways to access the URLs.
- Bash Terminal
```bash
cf html5-list -u -di sustainable-smart-factory-app-destination-service --runtime launchpad
```
![HTML5 Repo List Bash](https://user-images.githubusercontent.com/8436161/170434827-0f2cfd01-ea5d-4dc9-8947-73756f73b054.png)

- SAP BTP Cockpit

> SAP BTP Cockpit > **HTML5 Applications**

![HTML5 Repo List Cockpit](https://user-images.githubusercontent.com/8436161/170434807-f0951f65-5a39-4926-aa48-b86d3e5ee66e.png)

### **Step 7:** Add the deployed 11 Fiori Apps to your Launchpad Site.

SAP BTP Cockpit > Instances & Subscriptions > SAP Launchpad Service > In a New Window. <br>
Site Manager > Provider Manager > Content Provider > HTML5 Apps Repository > **Synchronise** <br>
Site Manager > Content Manager > Content Explorer > **HTML5 Apps**<br>
Tick all the checkboxes of the 11 Fiori Applications we have deployed. Add to my Content. <br>
Site Manager > Content Manager > **My Content**<br>
For simplicity, we will not implement any roles & authorisation here.<br>
Click on `Everyone` role > Edit > Click into the + Search bar > Assign all the 11 Apps to it (+) <br>
Save. <br>
Site Manager > Site > **Go to Site**<br>

![Launchpad Site Setup Successfully](https://user-images.githubusercontent.com/8436161/170450595-887a34ae-a1e1-4b57-bb62-1f608d8b6c06.png)

## Known Issues

## How to obtain support
[Create an issue](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/issues) in this repository if you find a bug or have questions about the content.
 
For additional support, [ask a question in SAP Community](https://answers.sap.com/questions/ask.html).

## Contributing
If you wish to contribute code, offer fixes or improvements, please send a pull request. Due to legal reasons, contributors will be asked to accept a DCO when they create the first pull request to this project. This happens in an automated fashion during the submission process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

## License
Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.
