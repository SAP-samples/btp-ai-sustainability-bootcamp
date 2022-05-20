# Building a sustainable-smart-factory-app sample on SAP BTP embedding Intelligence and Sustainability with SAP AI Core
<!--- Register repository https://api.reuse.software/register, then add REUSE badge:
[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/REPO-NAME)](https://api.reuse.software/info/github.com/SAP-samples/REPO-NAME)
-->

Part of the AI & Sustainability Bootcamp, we have developed a sample UI app to assist partners to take reference from to build their own solutions focusing on AI & Sustainability topics.
<p>The sample application is built using various frameworks, such as SAP Fiori elements, Custom SAPUI5, SAP Cloud Application Programming (CAP) model and extending with SAP systems such as SAP Business Technology Platform, SAP S/4HANA Cloud & SAP Analytics Cloud.

## Deployment Models
We have prepared a few models for you to consider and take reference from in order to deploy this sample app successfully to your preferred platform/landscapes.
Please note that the sample app is shipped AS-IT-IS, and if you faced with any issues, **SAP will not be providing any support**. However, if you find any bugs or issues, you may [create an issue here](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/issues).

### **1. Hybrid Model**: Local App consuming SAP BTP Cloud Services
Follow instructions from this current [README.md](README.md).
### **2. Cloud Model with SAP BTP Launchpad**: Cloud Native App as MTA, deployed in SAP BTP with SAP Launchpad services & Managed Approuter
More instructions to come. Stay tuned.
### **3. Cloud Model with Cloud Foundry Environment in SAP BTP**: Cloud Native App as MTA, deployed in SAP BTP Cloud Foundry Environment
More instructions to come. Stay tuned.

## Prerequisites (Mandatory Setup Steps to Perform)
Below are some setup steps that are required to ensure a success deployment of the application.

### **(i) Create `SAP HANA Cloud Service` in SAP BTP**
> SAP BTP Cockpit > Cloud Foundry > Spaces > dev > **SAP HANA Cloud** <br>(make sure you select the option to "Allow ALL IP Addresses" during creation)

![SAP BTP HANA Cloud](https://user-images.githubusercontent.com/8436161/128988191-f079627d-59c3-4015-a689-d4933613ba41.png)

### **(ii) Connecting to a `S/4HANA Cloud System` via SAP BTP Connectivity Destination**
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

_Please note that the above destination name `S4HC_AICOREBOOTCAMP` is defined inside [package.json](package.json) for the app and will be used in the **Custom Logic** file on S/4HANA Maintenance Order `Line 82` located in [btp-ai-core-bootcamp/src/sustainable-smart-factory-app/srv/admin-service.js](srv/admin-service.js)._ Prior to that, please make sure you've done your own testing of calling the API with Postman to ensure that your credentials works.

### **(ii) Create a Destination in SAP BTP, using your SAP AI Core Service key credentials**

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

> **Token Service URL**: `url`/oauth/token **(NOT referring to the ai_api_url. And make sure to add /oauth/token towards the end of the path.)**

> **Token Service User**: <LEAVE_EMPTY>

> **Token Service Password**: <LEAVE_EMPTY>

> **Additional Properties > xsappname**: `appname`

![AICORE Destination in SAP BTP Cockpit](https://user-images.githubusercontent.com/8436161/169439295-025eef7d-79d8-4c6b-9cae-aaec105ad569.png)

## Download and Installation
> Make sure you have completed **ALL** of the [Mandatory Setup Steps](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/tree/main/src/sustainable-smart-factory-app#requirements-mandatory-setup-steps) before proceeding.

Please kindly note that the **following instructions below is strictly for the deployment model of a hybrid approach (local app, cloud services)**.
Thus, the app will only work locally while consuming SAP BTP services (hana, destination, xsuaa, ai-core) through a defined default-env.json file.
<p>
While developing your own solution, you may take this as a reference (AS-IT-IS) and troubleshoot on your own if you'd like to deploy it on other SAP/non-SAP landscapes.
</p>

Refer [here for more information on the other deployment models](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/tree/main/src/sustainable-smart-factory-app#deployment-models). Each has its own configurations to setup accordingly.

### Choice of Development Tools (IDE)
You may use either one of following IDE based on your preferences.
1. **Microsoft Visual Studio Code**: Do note that you have to install some of the required libraries.
2. **(Recommended) SAP Business Application Studio**: Select Full Stack Cloud Application as the Predefined Extensions when creating the Dev Space.

### **Step 1:** Clone this Git Repo into a `btp-ai-core-bootcamp` project folder.

```bash
git clone https://github.com/SAP-samples/btp-ai-core-bootcamp.git btp-ai-core-bootcamp
```

### **Step 2:** Navigate into the folder and `install the required dependencies` locally.

```bash
cd btp-ai-core-bootcamp/src/sustainable-smart-factory-app
```
```bash
npm install
```

### **Step 3:** Deploy the `SAP HANA Artifacts` (required for the app) in your SAP BTP HANA Cloud as a `SAP HANA HDI Container`.

```bash
cf login
```
```bash
cds build --for hana
cds deploy --to hana
```

### **Step 4:** Connect your Local app to `SAP BTP Cloud services` by storing various credentials locally.

To run it locally and connect with SAP BTP services, you'd need to create a local file `default-env.json` in your btp-ai-core-bootcamp folder [btp-ai-core-bootcamp/src/sustainable-smart-factory-app/default-env.json](default-env.json) with the `hana`, `destination` & `xsuaa` service key credentials. <p></p>

You may refer to the default-env file as a template, then `copy JSON payload of each service key into the respective credentials part`. 

#### A. SAP BTP HANA Cloud HDI service instance

<p>In the earlier steps, we have already deployed the SAP HANA Artifacts into SAP HANA Cloud on SAP BTP. By default, the name of the service instance is `sustainable-smart-factory-app-db`.
<br><i>Please note that on a SAP BTP trial account, the SAP HANA Cloud instance will be shut down every 24 hours, thus, do remember to start it up.</i></p>

>If you're using SQLite to run it locally, you may skip this specific part on HDI.

_If you're using SAP HANA Cloud, create and use the service key._
```bash
cf create-service-key sustainable-smart-factory-app-db sustainable-smart-factory-app-db-key
cf service-key sustainable-smart-factory-app-db sustainable-smart-factory-app-db-key
```

**Copy & Paste the entire payload**, replace `_REPLACE_W_HANA_SERVICE_KEY_CREDENTIALS_` in the **credentials** section under `hana` in the [btp-ai-core-bootcamp/src/sustainable-smart-factory-app/default-env.json](default-env.json) file. You might realise that the deployment of the SAP HANA HDI would have overwritten the default-env.json with the HANA credentials already. Not to worry, you can refer to this template below again.

#### B. SAP BTP Connectivity Destination service instance

```bash
cf create-service destination lite smartfactory-dest
cf create-service-key smartfactory-dest smartfactory-dest-key
cf service-key smartfactory-dest smartfactory-dest-key
```

**Copy & Paste the entire payload**, replace `_REPLACE_W_DEST_SERVICE_KEY_CREDENTIALS_` in the **credentials** section under `destination` in the [btp-ai-core-bootcamp/src/sustainable-smart-factory-app/default-env.json](default-env.json) file.

#### C. SAP BTP Security XSUAA service instance

```bash
cf create-service xsuaa apiaccess smartfactory-xsuaa
cf create-service-key smartfactory-xsuaa smartfactory-xsuaa-key
cf service-key smartfactory-xsuaa smartfactory-xsuaa-key
```

**Copy & Paste the entire payload**, replace `_REPLACE_W_XSUAA_SERVICE_KEY_CREDENTIALS_` in the **credentials** section under `xsuaa` in the [btp-ai-core-bootcamp/src/sustainable-smart-factory-app/default-env.json](default-env.json) file.

> Below is a template of the [btp-ai-core-bootcamp/src/sustainable-smart-factory-app/default-env.json](default-env.json) file. Please proceed to create the file.
```json
{
    "VCAP_SERVICES": {
        "hana": [
            {
                "name": "sustainable-smart-factory-app-db",
                "tags": [
                    "hana"
                ],
                "credentials": _REPLACE_W_HANA_SERVICE_KEY_CREDENTIALS_
            }
        ],
        "destination": [
            {
                "name": "sustainable-smart-factory-app-destination-service",
                "label": "destination",
                "tags": [
                    "destination"
                ],
                "credentials": _REPLACE_W_DEST_SERVICE_KEY_CREDENTIALS_
            }
        ],
        "xsuaa": [
            {
                "name": "sustainable-smart-factory-app-xsuaa-service",
                "label": "xsuaa",
                "tags": [
                    "xsuaa"
                ],
                "credentials": _REPLACE_W_XSUAA_SERVICE_KEY_CREDENTIALS_
            }
        ]
    }
}
```

### **Step 5:** App Variables to Configure, pointing to your AI Core Deployed trained ML Model.
Prior to this step, you should already have completed the AI Core model training and serving setup, and should have the following values ready for inferencing against the ML model. Please note that the values are specific to your own setup following the AI Core Hands-on Exercises.
- Resource Group
- Deployment Inference URL
- Image Segmentation Deployment ID
- Sound Classification Deployment ID

#### Resource Group
> _Bootcamp participant, you might not have access to SAP AI Launchpad, however, you should already have created the Resource Group via an API request either via Jupyter Notebook or Postman._

![Resource Group in AI Launchpad](https://user-images.githubusercontent.com/8436161/169454780-3a352edf-132b-4617-8400-4d34e087035d.png)

#### Deployment Inference URL
> _Bootcamp participant, you might not have access to SAP AI Launchpad, however, you should already have came across this Deployment Inference URL via your exercises on getting details on your successful deployment._

You may also formulate this with the service key's service url > AI_API_URL with `/v2/inference/deployments`
<p> Please note that the full URL path required for the app will be without `/deployment_id` at the end. e.g. <b>https://api.ai.xxx.aws.ml.hana.ondemand.com/v2/inference/deployments</b></p>

![Deployment URL in AI Launchpad](https://user-images.githubusercontent.com/8436161/169454814-d6f1bfbc-b4da-4d30-a037-ad1073c15b9c.png)


#### Once you have the values formulated above and ready, open [package.json](package.json) and modify the following parameters to your AI Core parameters
1. Copy & paste the **Deployment Inference URL** (**without `/deployment_id` at the end**) into package.json, replacing this variable `_AICORE_DEPLOYMENT_URL_`, under cds > aicore > url & cds > requires > aicore > credentials > url.
2. Copy & paste the **Resource Group** into package.json, replacing this variable `_AICORE_RESOURCE_GROUP_`, under cds > aicore > resourcegroup.
3. Copy & paste the successful deployement of the **Image Segmentation Deployment ID** into package.json, replacing this variable `_AICORE_IMAGESEG_DEPLOYMENT_ID_`, under cds > aicore > inferences > imageseg.
4. Copy & paste the successful deployement of the **Sound Classification Deployment ID** into package.json, replacing this variable `_AICORE_SOUNDCLASS_DEPLOYMENT_ID_`, under cds > aicore > inferences > soundclass.

You may refer below as an example of the variables defined in your [package.json](package.json).

![Package Reference of Variables defined](https://user-images.githubusercontent.com/8436161/169464323-0100bce9-885f-4218-b67e-d608acc07bf7.png)

### **Step 6:** Run the `CAP App` connected to SAP BTP Services.

Note: Please make sure you're in the right folder directory. `btp-ai-core-bootcamp/src/sustainable-smart-factory-app`

```bash
cds run
```

Open the sustainable-smart-factory-app UI, Navitate to "http://localhost:4004/fiori-apps.html#Shell-home" with `Mozilla Firefox` or `Google Chrome`.

![App Running](../../resources/predictive-maintenance.gif)

## Known Issues

## How to obtain support
[Create an issue](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/issues) in this repository if you find a bug or have questions about the content.
 
For additional support, [ask a question in SAP Community](https://answers.sap.com/questions/ask.html).

## Contributing
If you wish to contribute code, offer fixes or improvements, please send a pull request. Due to legal reasons, contributors will be asked to accept a DCO when they create the first pull request to this project. This happens in an automated fashion during the submission process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

## License
Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.
