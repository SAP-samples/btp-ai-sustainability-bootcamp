# Building a sustainable-smart-factory-app sample on SAP BTP embedding Intelligence and Sustainability with SAP AI Core
<!--- Register repository https://api.reuse.software/register, then add REUSE badge:
[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/REPO-NAME)](https://api.reuse.software/info/github.com/SAP-samples/REPO-NAME)
-->

## Description

## Requirements (Mandatory Steps)

### **Creating a `SAP BTP HANA Cloud Service`**
>From SAP BTP Cockpit > Cloud Foundry > Spaces > dev > **SAP HANA Cloud** <br>(make sure you select the option to "Allow ALL IP Addresses" during creation)

![SAP BTP HANA Cloud](https://user-images.githubusercontent.com/8436161/128988191-f079627d-59c3-4015-a689-d4933613ba41.png)

### **Connecting to a `S/4 HANA Cloud System` via SAP BTP Connectivity Destination**

In this step, you will require a S/4 HANA Cloud instance for this to work.
* Create a destination in your SAP BTP trial account, pointing to a S/4 HANA Cloud system.
> Name: `S4HC_AICOREBOOTCAMP` 

> Type: HTTP

> Description: AI Core & Sustainability Bootcamp Purpose for S4HC Test Tenant

> URL: https://`<tenant>`.s4hana.ondemand.com

> Proxy Type: Internet

> Authentication: BasicAuthentication

> User: make sure this is a technical user setup with the right authorisation to manage maintenance order service

> Password: xxxxxxxxxx

![S4HANA Destination in SAP BTP Cockpit](https://user-images.githubusercontent.com/8436161/126614728-8741d39e-5d1a-4429-823c-5558435b15a2.png)

_Please note that the above destination name `S4HC_AICOREBOOTCAMP` is defined inside [package.json](package.json) for the app and will be used in the Custom Logic file on S4 Maintenance Order `Line 82` located in [btp-ai-core-bootcamp/src/sustainable-smart-factory-app/srv/admin-service.js](srv/admin-service.js)._ Prior to that, please make sure you've done your own testing of calling the API with Postman to ensure that your credentials works.

## Download and Installation
Please kindly note that the following instructions below is strictly for the deployment model of a hybrid approach (local app, cloud services).
Thus, the app (as it is) will only work locally while consuming SAP BTP services (hana, destination, xsuaa, ai-core) through a defined default-env.json file.
<br>
You may try to either take this as a reference and troubleshoot on your own if you'd like to deploy it on other landscapes.
<br>
For more information on the other deployment models, you may refer to the other branches as highlighed above. Each has its own configurations setup.

**Step 1:** Clone this Git Repo into a `btp-ai-core-bootcamp` project folder.

```bash
git clone https://github.com/SAP-samples/btp-ai-core-bootcamp.git btp-ai-core-bootcamp
```

**Step 2:** Navigate into the folder and `install the required dependencies` locally.

```bash
cd btp-ai-core-bootcamp/src/sustainable-smart-factory-app
```
```bash
npm install
```

**Step 3:** Deploy the `SAP HANA Artifacts` (required for the app) in your SAP BTP HANA Cloud as a `SAP HANA HDI Container`.

> (Optional) For development & testing purposes, you may also utilise SQLite to run the DB locally in your workstation

<p></p>
<details>
  <summary>Hint: Click here to learn how to deploy DB locally in SQLite.</summary>
   <p>
  Please note that there are some limitations on SQLite and if you're looking to productise this solution eventually, it is strongly recommended to still test it with SAP HANA Cloud. 
  <p> 

> Update the following payload in [btp-ai-core-bootcamp/src/sustainable-smart-factory-app/package.json](package.json) under `cds.db.kind`

```json
"db": {
    "kind": "hana"
}
```
> Execute the following command
```bash
cds watch
```

</details>
<p></p>

> `(Recommended)` Deploy the SAP HANA Artifacts as SAP HANA HDI Container on SAP BTP
login to your own Cloud Foundry on BTP
```bash
cf login
```
```bash
cds build --for hana
cds deploy --to hana
```

**Step 4:** Connect your Local app to `SAP BTP Cloud services` by storing various credentials locally.

To run it locally and connect with SAP BTP services, you'd need to create a local file `default-env.json` in your btp-ai-core-bootcamp folder [btp-ai-core-bootcamp/src/sustainable-smart-factory-app/default-env.json](default-env.json) with the `hana`, `destination` & `xsuaa` service key credentials. You may refer to the default-env file as a template, then `copy the service key into each component's credentials part`. 

> SAP BTP HANA Cloud HDI service instance

In the earlier steps, we have already deployed the SAP HANA Artifacts into SAP HANA Cloud on SAP BTP. By default, the name of the service instance is `sustainable-smart-factory-app-db`. <br>_Please note that on a SAP BTP trial account, the SAP HANA Cloud instance will be shut down every 24 hours, thus, do remember to start it up._ <br>Now, let's create and use the service key.
```bash
cf create-service-key sustainable-smart-factory-app-db sustainable-smart-factory-app-db-key
cf service-key sustainable-smart-factory-app-db sustainable-smart-factory-app-db-key
```

Paste the entire payload into the **credentials** section under `hana` in the [btp-ai-core-bootcamp/src/sustainable-smart-factory-app/default-env.json](default-env.json) file.

> SAP BTP Connectivity Destination service instance

```bash
cf create-service destination lite smartfactory-dest
cf create-service-key smartfactory-dest smartfactory-dest-key
cf service-key smartfactory-dest smartfactory-dest-key
```

Paste the entire payload into the **credentials** section under `destination` in the [btp-ai-core-bootcamp/src/sustainable-smart-factory-app/default-env.json](default-env.json) file.

> SAP BTP Security XSUAA service instance

```bash
cf create-service xsuaa apiaccess smartfactory-xsuaa
cf create-service-key smartfactory-xsuaa smartfactory-xsuaa-key
cf service-key smartfactory-xsuaa smartfactory-xsuaa-key
```

Paste the entire payload into the **credentials** section under `xsuaa` in the [btp-ai-core-bootcamp/src/sustainable-smart-factory-app/default-env.json](default-env.json) file.

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

**Step 5:** Run the `CAP App` connected to SAP BTP Services.

Note: Please make sure you're in the right folder directory. `btp-ai-core-bootcamp/src/sustainable-smart-factory-app`

```bash
cds run
```

> Open the sustainable-smart-factory-app UI, please open the url "http://localhost:4004/fiori-apps.html#Shell-home" with `Mozilla Firefox` or `Google Chrome`

## Known Issues

## How to obtain support
[Create an issue](https://github.com/SAP-samples/<repository-name>/issues) in this repository if you find a bug or have questions about the content.
 
For additional support, [ask a question in SAP Community](https://answers.sap.com/questions/ask.html).

## Contributing
If you wish to contribute code, offer fixes or improvements, please send a pull request. Due to legal reasons, contributors will be asked to accept a DCO when they create the first pull request to this project. This happens in an automated fashion during the submission process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

## License
Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.
