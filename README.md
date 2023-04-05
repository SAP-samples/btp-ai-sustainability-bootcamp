[![REUSE status](https://api.reuse.software/badge/github.com/sap-samples/btp-ai-sustainability-bootcamp)](https://api.reuse.software/info/github.com/sap-samples/btp-ai-sustainability-bootcamp)

# Building Intelligent Scenarios and Sustainability on SAP BTP with SAP AI Core and SAP Analytics Cloud for Planning
<!--- Register repository https://api.reuse.software/register, then add REUSE badge:
[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/REPO-NAME)](https://api.reuse.software/info/github.com/SAP-samples/REPO-NAME)
-->
## Overview and Motivation
Sustainability is a hot topic for us all today, and for CEOs profitability is no longer the sole goal of a business, as they also have to carefully consider sustainability goals and take our Planet and People into consideration. <br/>
<br/>
At SAP, we are not only acting now on sustainability with goals of zero emissions, zero waste, and zero inequality by 2030, but also having a vision to enable every enterprise to become an intelligent, networked, sustainable enterprise with our technologies and solutions. <br/>
<br/>
SAP’s Business Technology Platform provides the foundation of application development, integration, data and AI. On top of this technology platform, SAP has created a new sustainability portfolio to help the enterprise drive sustainable practices inside its organization and across its entire value chain, such as [SAP Product Footprint Management](https://help.sap.com/docs/SAP_BTP_PFM), [SAP Responsible Design and Production](https://www.sap.com/products/responsible-design-and-production.html) and [SAP Sustainability Control Tower](https://www.sap.com/products/sustainability-control-tower.html) etc.<br/>
<br/>
We also would like our SAP Partners to create industry cloud solutions for end-to-end industry-specific business processes that consider sustainability dimensions. Therefore, we have developed this AI&Sustainability Bootcamp to inspire and enable our partners to build intelligent scenarios and sustainability on BTP with AI and Planning. Please read more in [our blog series about this topic](https://blogs.sap.com/2022/05/19/building-intelligent-scenarios-and-sustainability-on-sap-btp/).<br/>
<br/>
Profitability and sustainability are two sides of a coin for an intelligent, networked, and sustainable enterprise. To achieve the ultimate goals of making profitability sustainable, and sustainability profitable, organizations need to embed sustainability goals into strategy planning and business operations. Importantly, Artificial Intelligence plays a critical role in this journey by helping businesses to be more efficient and intelligent. AI(Artificial Intelligence) and Sustainability are the very frontier of frontiers in today's digital technologies, where count for enormous opportunities in various industries.<br/>
<br/>
In agriculture, AI can transform agricultural production by better monitoring and managing environmental conditions, and higher crop/livestock yields. For example, Drone can fly over and film the field, and Computer Vision Algorithm can be applied for Automated Pest & Disease Diagnosis of crops etc. Another example in grape field, IoT sensors are used to monitor the light, wind, humility and temperature etc environmental factors, while AI algorithms come in to help with prediction on when to water, fertilize and harvest. <br/>
<br/>
In manufacturing, AI can help factories by improving production efficiency, and reducing waste, energy consumption and Green House Gas Emissions. Such as automatic defect detection for production with computer vision and equipment sound-based predictive maintenance...<br/>

## Description
This github repository includes the sample code and exercises of the btp-ai-core-bootcamp, which is developed and delivered by Partner Ecosystem Success Organization (formerly known as GPO) of SAP SE, showcasing SAP partners how to add <b>Intelligence</b> and <b>Sustainability</b> into your industry cloud solutions on SAP Business Technology Platform with SAP AI Core/SAP Launchpad and SAP Analytics Cloud for Planning. The bootcamp uses an end-to-end storyline about a Sustainable Smart Factory filled with Intelligence and Sustainability
- Building a deep learning [Image Segmentation Model](src/ai-models/defect-detection) on product images with SAP AI Core for automatic Defeat Detection in production lines
- Building a deep learning [Sound Anomaly Classification Model](src/ai-models/predictive-maintenance) on acoustical sounds of machinery with SAP AI Core for condition monitoring based Predictive Maintenance 
- Configure and Deploy the [sustainable-smart-factory-app](src/sustainable-smart-factory-app)(CAP based) to your own SAP HANA Cloud  
- Creating a Plant 360 story to analyze Production and Sustainability KPIs of plant such as production, defective rate, energy consumption and CO2 emission etc SAP Analytics Cloud.
- Maintenance Cost Planning with Predictive Planning of SAP Analytics Cloud for Planning. 
- Sustainability Planning and Energy Rate Prediction with Predictive Planning of SAP Analytics Cloud for Planning.

### Target Audience
The bootcamp showcases an end-to-end process of building intelligence and sustainability scenarios on SAP BTP with AI and Planning, which involve several personas as below, also as a reflection of real-life to build an industry cloud solution of Intelligence and Sustainability.
* Data Scientist or Machine Learning Engineer, who are responsible for building, training and serving AI Models as APIs.
* Application Developer, who is in charge of creating a cloud-based application which will extend the backend ERP with industry-related business process in a side-by-side manner, record and collect the sustainability data in daily business process, and inference the AI Models APIs. 
* Enterprise Planning Consultant or Analytics Consultant, who can help to make sense of the sustainability KPIs along with business KPIs for corporate performance management, and assure the planning and execution of sustainability goals.

### Solution Architecture
![Solution Architecture](resources/solution-architecture-full.png)
- SAP AI Core and SAP AI Launchpad: <br>
Streamline the execution and operations of Deep Learning Models in a standardized, scalable, and hyperscaler-agnostic way <br>
    * [Image Segmentation Model for Auto. Defect Detection](src/ai-models/defect-detection)
    * [Sound Anomaly Classification Model for Predictive Maintenance](src/ai-models/predictive-maintenance)

- [Sustainable Smart Factory Application](src/sustainable-smart-factory-app): <br>
A CAP-based application on BTP glues all the pieces together by inferencing the AI models with IoT streaming data(product images from camera, machinery sound collected by the microphones), and recording data of plant daily operation and sustainability KPIs, extending [Maintenance Management of SAP S/4HANA Cloud](https://help.sap.com/docs/SAP_S4HANA_CLOUD/2dfa044a255f49e89a3050daf3c61c11/f9f9400b81de4235b910887d91d925c4.html?version=2202.500) with [Predictive Maintenance](https://en.wikipedia.org/wiki/Predictive_maintenance)
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
Bagnoli Co. is a manufacturer of Light Guide Plates (LGP) used in LED panels since 2008, based in Milan, Italy. The company has design and manufacturing of LGP, adopted SAP S/4HANA Cloud as digital business platform since 2020. The Bagnoli brothers have a vision to become an sustainable smart LGP manufacturer by reducing waste and improving production efficiency and workplace safety. In 2021, An SAP gold partner has been hired to implement their vision with SAP Business Technology Platform. SAP AI Core has been proposed to optimize these business process efficiency in quality inspection with computer vision, and sound anomaly detection based predictive maintenance in which sustainability key figures are recorded during plant daily operation such as energy consumption and CO2 emission. And SAP Analytics Cloud for Planning is also suggested to provide insights of production and sustainability KPI to plant manager, also used for Planning of Maintenance Cost and Sustainability. And a CAP-based Sustainable Smart Factory Application is also created for end users to glue different components for extending SAP S/4HANA Cloud in Quality Inspection and Maintenance Management with intelligence and sustainability.
- LGP Product<br>
Light Guide Plates (LGP) is used in LED panels, which can transform a line light source into a surface light source, widely applied in liquid crystal display screens such as computer monitors, car navigators, and PADs.
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
System access below for exercises will be provided in bootcamp by SAP. Therefore, no action required for the bootcamp participants.
- SAP AI Core
- SAP AI Launch Pad
- SAP Analytics Cloud for Planning
- SAP S/4HANA Cloud
### Other Requirements
- Complete the [openSAP course](https://open.sap.com/courses/sac3) about Planning with SAP Analytics Cloud

## Exercises
Please follow [this manual](exercises/README.md) to perform the excises, which allows you to replicate the end-to-end Sustainable Smart Factory solution on your own SAP BTP account as described in above. 

## More Materials
### Blog post series of Building AI and Sustainability Solutions on SAP BTP
* [An overview of sustainability on top of SAP BTP](https://blogs.sap.com/2022/05/19/building-intelligent-scenarios-and-sustainability-on-sap-btp/)
* [Introduction of end-to-end ML ops with SAP AI Core](https://blogs.sap.com/2022/06/13/introduction-of-the-end-to-end-ml-ops-with-sap-ai-core/)
* [BYOM with TensorFlow in SAP AI Core for Defect Detection](https://blogs.sap.com/2022/06/28/build-your-own-model-with-tensorflow-in-sap-ai-core-for-defect-detection/)
* [BYOM with TensorFlow in SAP AI Core for Sound-based Predictive Maintenance](https://blogs.sap.com/2022/07/07/sound-based-predictive-maintenance-with-sap-ai-core-and-sap-ai-launchpad/)
* [Embedding Intelligence and Sustainability into Custom Applications on SAP BTP](https://blogs.sap.com/2022/07/14/embedding-intelligence-and-sustainability-into-custom-applications-on-sap-btp/)
* [Maintenance Cost & Sustainability Planning with SAP Analytics Cloud Planning](https://blogs.sap.com/2022/08/05/maintenance-cost-budgeting-sustainability-planning-with-sap-analytics-cloud/)

### Demo videos recorded by SAP HANA Academy
We have closely worked with SAP HANA Academy Team for more deep dive content about AI&Sustainability based on the bootcamp storyline. If you would like to learn more, please visit this following YouTube video playlists prepared by SAP HANA Academy Team  
* [SAP Artificial Intelligence Onboarding / Pre-reqs Playlist](https://youtube.com/playlist?list=PLkzo92owKnVyJ5bZXYHb8QUTNRaUMYNST)
* [SAP Artificial Intelligence Defect Detection Playlist](https://youtube.com/playlist?list=PLkzo92owKnVzjYmJJMk17pu567BAKW5NL) 
* [SAP Artificial Intelligence Predictive Maintenance Playlist](https://youtube.com/playlist?list=PLkzo92owKnVw6OOhfauKAM7MJSamnWBLn)
* [SAP Artificial Intelligence; Application Playlist](https://youtube.com/playlist?list=PLkzo92owKnVxcURT-afSJePEUTSqFYVP_)
* [Maintenance Cost & Sustainability Planning with SAP Analytics Cloud Playlist](https://youtube.com/playlist?list=PLkzo92owKnVy2ED2ZfPzJcSLZVlcQ0jDw)

### Useful links for SAP AI Core and SAP AI Launchpad
* [SAP AI Core Help Center](https://help.sap.com/docs/AI_CORE?locale=en-US)
* [SAP AI Launchpad Help Center](https://help.sap.com/docs/AI_LAUNCHPAD?locale=en-US)
* [Learning Journey of SAP AI](https://learning.sap.com/learning-journey/discover-sap-business-technology-platform/describing-artificial-intelligence-ai-_f6c2ab8d-2fa1-45db-9895-ac84b635ced5)
* [SAP Computer Vision Package](https://pypi.org/project/sap-computer-vision-package/)
* [Metaflow library for SAP AI Core](https://pypi.org/project/sap-ai-core-metaflow/)

### Useful links for SAP Analytics Cloud
* [SAP Analytics Cloud Help Center](https://help.sap.com/docs/SAP_ANALYTICS_CLOUD)
* [Role-based learnign journey of SAP Analytics Cloud](https://help.sap.com/learning-journeys/overview?categories=SOL_10_01&search=SAP%20Analytics%20Cloud)
* [openSAP course about Intelligent Decisions with SAP Analytics Cloud](https://open.sap.com/courses/sac1)
* [openSAP course about SAP Analytics Cloud – Authentication and Data Connectivity](https://open.sap.com/courses/sac2)
* [openSAP course about Planning with SAP Analytics Cloud](https://open.sap.com/courses/sac3)
* [openSAP course about Planning with SAP Analytics Cloud – Advanced Topics](https://open.sap.com/courses/sac4)

### Useful links for SAP Cloud for Sustainable Enterprise
* [SAP Product Footprint Management Help Center](https://help.sap.com/docs/SAP_BTP_PFM)
* [SAP Responsible Design and Production Help Center](https://help.sap.com/docs/SAP_RESPONSIBLE_DESIGN_AND_PRODUCTION)
* [SAP Sustainability Control Tower Help Center](https://help.sap.com/docs/SAP_SUS_SCT)

### Other useful links
* [openSAP course about Helping Business Thrive in a Circular Economy](https://open.sap.com/courses/ce1)
* [openSAP course about AI Ethics at SAP](https://open.sap.com/courses/aie1)

## Download and Installation
Exercise manuals are available [here](exercises) if you would like to replicate the solution on your own BTP account.

## Known Issues
IoT Gateway part is out of the scope in this sample. However, in a real-life project, IoT Gateway is required for IoT sensor data streaming and ingestion.

## How to obtain support
[Create an issue](https://github.com/SAP-samples/btp-ai-core-bootcamp/issues) in this repository if you find a bug or have questions about the content.
 
For additional support, [ask a question in SAP Community](https://answers.sap.com/questions/ask.html).

## Contributing
If you wish to contribute code, offer fixes or improvements, please send a pull request. Due to legal reasons, contributors will be asked to accept a DCO when they create the first pull request to this project. This happens in an automated fashion during the submission process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

## License
Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.
