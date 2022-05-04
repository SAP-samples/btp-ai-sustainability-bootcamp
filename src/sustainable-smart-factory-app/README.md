# Building a sustainable-smart-factory-app sample on SAP BTP embedding Intelligence and Sustainability with SAP AI Core
<!--- Register repository https://api.reuse.software/register, then add REUSE badge:
[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/REPO-NAME)](https://api.reuse.software/info/github.com/SAP-samples/REPO-NAME)
-->

## Description

## Requirements

## Download and Installation

```
git clone https://github.com/SAP-samples/btp-ai-core-bootcamp.git
cd btp-ai-core-bootcamp/src/sustainable-smart-factory-app
npm install
```
- To run the app with sql DB for development
Please udpate the section below in package.json
```
"db": {
        "kind": "sql"
    }
```
Then run the command
```
cds watch
```
- To deploy the app as SAP HANA HDI Container on BTP
login to your own Cloud Foundry on BTP
```
cf login
cds build --for hana
cds deploy --to hana
cds watch
```
- To open the sustainable-smart-factory-app UI, please open the url "http://localhost:4004/fiori-apps.html#Shell-home" with Firefox or Google Chrome
## Known Issues

## How to obtain support
[Create an issue](https://github.com/SAP-samples/<repository-name>/issues) in this repository if you find a bug or have questions about the content.
 
For additional support, [ask a question in SAP Community](https://answers.sap.com/questions/ask.html).

## Contributing
If you wish to contribute code, offer fixes or improvements, please send a pull request. Due to legal reasons, contributors will be asked to accept a DCO when they create the first pull request to this project. This happens in an automated fashion during the submission process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

## License
Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.
