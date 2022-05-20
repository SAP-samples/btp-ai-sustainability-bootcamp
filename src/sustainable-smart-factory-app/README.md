# Building a sustainable-smart-factory-app sample on SAP BTP embedding Intelligence and Sustainability with SAP AI Core
<!--- Register repository https://api.reuse.software/register, then add REUSE badge:
[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/REPO-NAME)](https://api.reuse.software/info/github.com/SAP-samples/REPO-NAME)
-->

## Description
Part of the AI & Sustainability Bootcamp, we have built an UI sample app to assist partners to take reference from and build their own solutions focusing on AI & Sustainability topics. The following technologies are used as part of building and extending this app, such as, SAP AI Core and SAP Analytics Cloud.
<p>The sample application is built on various frameworks, such as SAP Fiori elements, Custom SAPUI5, SAP Cloud Application Programming (CAP) model and extending with SAP systems such as SAP BTP & SAP S/4HANA Cloud.

## Deployment Models
Here we have prepared a few models for your to consume and take reference from to deploy this sample app to your preferred model/landscapes.

### Hybrid Model: Local App consuming SAP BTP Cloud Services
Follow instructions from this current [README.md](README.md).
### Cloud Model with SAP BTP Launchpad: Cloud Native App as MTA, deployed in SAP BTP with SAP Launchpad services & Managed Approuter
More instructions to come. Stay tuned.
### Cloud Model with Cloud Foundry Environment: Cloud Native App as MTA, deployed in SAP BTP Cloud Foundry Environment
More instructions to come. Stay tuned.

## Requirements (Mandatory Setup Steps)
Below are some setup steps that are required to ensure a success run of the application.

### **(i) Create `SAP HANA Cloud Service` in SAP BTP**
> From SAP BTP Cockpit > Cloud Foundry > Spaces > dev > **SAP HANA Cloud** <br>(make sure you select the option to "Allow ALL IP Addresses" during creation)

![SAP BTP HANA Cloud](https://user-images.githubusercontent.com/8436161/128988191-f079627d-59c3-4015-a689-d4933613ba41.png)

### **(ii) Connecting to a `S/4HANA Cloud System` via SAP BTP Connectivity Destination**

In this step, you will require a S/4HANA Cloud instance for this to work.

> **Name**: `S4HC_AICOREBOOTCAMP` 

> **Type**: HTTP

> **Description**: AI Core & Sustainability Bootcamp Purpose for S4HC Test Tenant

> **URL**: https://`<tenant>`.s4hana.ondemand.com

> **Proxy Type**: Internet

> **Authentication**: BasicAuthentication

> **User**: make sure this is a technical user setup with the right authorisation to manage maintenance order service

> **Password**: xxxx

![S4HANA Destination in SAP BTP Cockpit](https://user-images.githubusercontent.com/8436161/168980113-837f9341-c385-41d9-a0aa-065c186fa57d.png)

_Please note that the above destination name `S4HC_AICOREBOOTCAMP` is defined inside [package.json](package.json) for the app and will be used in the Custom Logic file on S4 Maintenance Order `Line 82` located in [btp-ai-core-bootcamp/src/sustainable-smart-factory-app/srv/admin-service.js](srv/admin-service.js)._ Prior to that, please make sure you've done your own testing of calling the API with Postman to ensure that your credentials works.

### **(ii) Create a Destination in SAP BTP, using your SAP AI Core Service key credentials**

In this step, you will require an instance of SAP AI Core in your SAP BTP account for this to work. 

![AICORE Instance in SAP BTP Cockpit](https://user-images.githubusercontent.com/8436161/169442399-70a1197b-af35-4e7b-8f95-565a585aa677.gif)

Create a service key where you will use the OAuth credentials provided, and entered the value to the Destination config.
> For bootcamp related setup, if you received the AI Core credentials, please proceed to set this up in your own SAP BTP account.

![AICORE Instance Key in SAP BTP Cockpit](https://user-images.githubusercontent.com/8436161/169443099-fbc69c61-46be-4fd9-b514-11aac987d928.png)

Copy and Paste the relevant value of a few credentials properties **`(clientid, clientsecret, url, ai_api_url)`** into SAP BTP Connectivity Destination.

> **Name**: `AICORE` 

> **Type**: HTTP

> **Description**: Destination for AI Core Bootcamp

> **URL**: `ai_api_url`

> **Proxy Type**: Internet

> **Authentication**: OAuth2ClientCredentials

> **Client ID**: `clientid`

> **Client Secret**: `clientsecret`

> **Token Service URL Type**: Dedicated

> **Token Service URL**: `url` (NOT ai_api_url)

> **Token Service User**: <LEAVE_EMPTY>

> **Token Service Password**: <LEAVE_EMPTY>

> **Additional Properties > xsappname**: `appname`

![AICORE Destination in SAP BTP Cockpit](https://user-images.githubusercontent.com/8436161/169439295-025eef7d-79d8-4c6b-9cae-aaec105ad569.png)

## Download and Installation
> Make sure you have completed the [Mandatory Setup Steps](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/tree/main/src/sustainable-smart-factory-app#requirements-mandatory-setup-steps) before proceeding.

Please kindly note that the **following instructions below is strictly for the deployment model of a hybrid approach (local app, cloud services)**.
Thus, the app (as it is) will only work locally while consuming SAP BTP services (hana, destination, xsuaa, ai-core) through a defined default-env.json file.
<p>
While developing your own solution, you may take this as a reference (AS-IT-IS) and troubleshoot on your own if you'd like to deploy it on other SAP/non-SAP landscapes.
</p>

Refer [here for more information on the other deployment models](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/tree/main/src/sustainable-smart-factory-app#deployment-models). Each has its own configurations to setup.

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

> (Optional) For development & testing purposes, you may also utilise SQLite to run the DB locally in your workstation

<p></p>
<details>
  <summary>Hint: Click here to learn how to deploy DB locally in <b>SQLite</b>.</summary>
   <p>
  Please note that there are some limitations on SQLite and if you're looking to productise this solution eventually, it is strongly recommended to still test it with SAP HANA Cloud. 
  <p> 

> Update the following payload in [btp-ai-core-bootcamp/src/sustainable-smart-factory-app/package.json](package.json) under `cds.db.kind`

```json
"db": {
    "kind": "sql"
}
```
</details>
<p></p>

> `(Recommended)` Deploy the SAP HANA Artifacts as **SAP HANA HDI Container** on SAP BTP
login to your own Cloud Foundry on BTP
```bash
cf login
```
```bash
cds build --for hana
cds deploy --to hana
```

### **Step 4:** Connect your Local app to `SAP BTP Cloud services` by storing various credentials locally.

To run it locally and connect with SAP BTP services, you'd need to create a local file `default-env.json` in your btp-ai-core-bootcamp folder [btp-ai-core-bootcamp/src/sustainable-smart-factory-app/default-env.json](default-env.json) with the `hana`, `destination` & `xsuaa` service key credentials. You may refer to the default-env file as a template, then `copy the service key into each component's credentials part`. 

#### A. SAP BTP HANA Cloud HDI service instance

<p>In the earlier steps, we have already deployed the SAP HANA Artifacts into SAP HANA Cloud on SAP BTP. By default, the name of the service instance is `sustainable-smart-factory-app-db`.
<br><i>Please note that on a SAP BTP trial account, the SAP HANA Cloud instance will be shut down every 24 hours, thus, do remember to start it up.</i></p>

>If you're using SQLite to run it locally, you may skip this specific part on HDI.

_If you're using SAP HANA Cloud, create and use the service key._
```bash
cf create-service-key sustainable-smart-factory-app-db sustainable-smart-factory-app-db-key
cf service-key sustainable-smart-factory-app-db sustainable-smart-factory-app-db-key
```

**Copy & Paste the entire payload**, replace `_REPLACE_W_HANA_SERVICE_KEY_CREDENTIALS_` in the **credentials** section under `hana` in the [btp-ai-core-bootcamp/src/sustainable-smart-factory-app/default-env.json](default-env.json) file.

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
Prior to this step, you should already have completed the AI Core model training and serving setup. You should have the following values ready for inferencing against the ML model. Please note that the following values are specific to your own setup following the AI Core Hands-on Exercises.
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


### **Step 6:** Run the `CAP App` connected to SAP BTP Services.

Note: Please make sure you're in the right folder directory. `btp-ai-core-bootcamp/src/sustainable-smart-factory-app`

```bash
cds run
```

> Open the sustainable-smart-factory-app UI, Navitate to "http://localhost:4004/fiori-apps.html#Shell-home" with `Mozilla Firefox` or `Google Chrome`

## Known Issues

## How to obtain support
[Create an issue](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/issues) in this repository if you find a bug or have questions about the content.
 
For additional support, [ask a question in SAP Community](https://answers.sap.com/questions/ask.html).

## Contributing
If you wish to contribute code, offer fixes or improvements, please send a pull request. Due to legal reasons, contributors will be asked to accept a DCO when they create the first pull request to this project. This happens in an automated fashion during the submission process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

## License
Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.
