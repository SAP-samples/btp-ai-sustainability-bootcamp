# Building Intelligent Scenarios and Sustainability on SAP BTP with SAP AI Core and SAP Analytics Cloud for Planning
<!--- Register repository https://api.reuse.software/register, then add REUSE badge:
[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/REPO-NAME)](https://api.reuse.software/info/github.com/SAP-samples/REPO-NAME)
-->

No doubt Sustainability is a hot topic in recent years. To have a sustainable environment for future generations, we need to take climate action for zero emission of greenhouse gas. In our economy, we should embrace a new circular economy model instead the tranditional take-make-waste linear model for zero waste. In our society, we fight against injustice and inequality for zero inequality. Modern Technologies play an important role to achieve these sustainability goals, such as AI(Artificial Intelligence), IoT(Internet of Things), Cloud Computing etc. In SAP, we have a name for these technologies as Intelligent Technologies.

AI(Artificial Intelligence) and Sustainability are the very frontier of frontiers in today's digital technologies, where count for enormous oppotuines in various industries. 

In agriculture, AI can transform agricultural production by better monitoring and managing environmental conditions, and higher crop/livestock yields. For example, Drone can fly over and film the field, and Computer Vision Algorithm can be applied for Automated Pest & Disease Diagnosis of crops etc. Another example in grape field, IoT sensors are used to monitor the light, wind, humility and temperature etc environmental factors, while AI algorithms come in to help with prediction on when to water, fertise and harvest. 

In manufacturing, AI can help factories by improving production efficiency, and reducing waste, energy consumption and Green House Gas Emissions. Such as automatic defect detection for production with computer vision.

In SAP, we put Sustainability into the core of our strategy, having a vision to enable every customer to become a Sustainable Intelligent Enterprise. We have developed this AI&Sustainability Bootcamp to inspire and enable our partners to build intelligent scenarios and sustainability on BTP with AI and Planning.

## Description
This github repository includes the sample code and exercises of the btp-ai-core-bootcamp, which is developed and delivered by Partner Ecosystem Success Organization (formerly known as GPO) of SAP SE, showcasing SAP partners how to add <b>Intelligence</b> and <b>Sustainability</b> into your solutions on SAP Business Technology Platform with SAP AI Core/SAP Launchpad and SAP Analytics Cloud for Planning. The bootcamp uses an end-to-end storyline about a Sustainable Smart Factory filled with Intelligence and Sustainability
- Building a deep learning Soud Classificaiton Model on acoustical sounds of machinery with SAP AI Core for condition monitoring based Predictive Maintenance 
- Building a deep learning Image Segmentation Model on product images with SAP AI Core for automatic Defeat Detection in production lines
- Configure and Deploy the [sustainable-smart-factory-app](src/sustainable-smart-factory-app)(CAP based) to SAP HANA Cloud  
- Creating a Plant 360 story to analyse Production and Sustainability KPIs of plant such as production, defective rate, energy consumption and CO2 emission etc SAP Analytics Cloud.
- Maintenance Cost Planning/budgeting with Predictive Planning of SAP Analytics Cloud for Planning. 
- Sustainability Planning and Energy Rate Prediction with Predictive Planning of SAP Analytics Cloud for Planning.

### Solution Architecture
![Solution Architecture](resources/solution-architecture.png)
- SAP AI Core and SAP AI Launchpad: <br>
Streamline the execution and operations of Deep Learning Models in a standardized, scalable, and hyperscaler-agnostic way <br>
    * Image Segmentation Model for Auto. Defect Detection
    * Sound Anomaly Classificaiton Model for Predictive Maintenance

- Sustainable Smart Factory Application: <br>
A CAP-based application on BTP glues all the pieces together by inferring the AI models with IoT streaming data(product images from camera, machinery sound collectec by the), and recoridng data of plant daily operaiton and sustainability KPIs, extending Maintenance Management of SAP S/4HANA Cloud with Predictive Maintenance 
    * Auto. Defect Detection<br>
    -Quality records via computer vision
    * Sound-based Predictive Maintenance<br>
    -Historical conditions of plant and equipment, and sound anomalies <br>
    -Integration with Maintenance Management of SAP S/4HANA Cloud
- SAP S/4HANA Cloud<br>
    * Central Master Data for Products and Equipments
    * Maintenance Management
- SAP Analytics Cloud for Planning
    * Plant 360 story
    * Maintenance Cost Planning
    * Sustainability Planning and Energy Rate Prediction

### Storyline
- LGP Product<br>
This business manufactures Light Guide Plates (LGP) used in LED panels.<br>
An LGP is an optical product which can transform a line light source into a surface light source, widely applied in liquid crystal display screens such as computer monitors, car navigations, and PADs.
![LGP Product](resources/lgp-product.png)
- Factory Layout
![LGP Factory Layout](resources/factory-layout.png)
- 2020 before implementing sustainable-smart-factory-app  
![2020](resources/lgp-factory-2020.png)
- 2021 after implementing sustainable-smart-factory-app  
![2021](resources/lgp-factory-2021.png)
### Final Outcomes
#### Sustainable Smart Factory App
![Sustainable Smart Factory App](resources/sustainable-smart-factory-app.png)
#### Auto. Defect Detection
![Auto. Defect Detection](resources/auto-defect-detection.gif)
#### Predictive Maintenance
![Predictive Maintenance](resources/predictive-maintenance.gif)
#### Plant 360
![Predictive Maintenance](resources/plant-360.gif)
#### Maintenance Cost & Sustainability Planning
![Maintenance Cost & Sustainability Planning](resources/maintenance-cost&sustainability-planning.gif)
## Requirements
### Software Requirements
- SAP AI Core
- SAP AI Launch Pad
- SAP Analytics Cloud for Planning
- SAP S/4HANA Cloud
### Other Requirements
- Complete the [openSAP course](https://open.sap.com/courses/sac3) about Planning with SAP Analytics Cloud

## Download and Installation

## Known Issues

## How to obtain support
[Create an issue](https://github.com/SAP-samples/btp-ai-core-bootcamp/issues) in this repository if you find a bug or have questions about the content.
 
For additional support, [ask a question in SAP Community](https://answers.sap.com/questions/ask.html).

## Contributing
If you wish to contribute code, offer fixes or improvements, please send a pull request. Due to legal reasons, contributors will be asked to accept a DCO when they create the first pull request to this project. This happens in an automated fashion during the submission process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

## License
Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.
