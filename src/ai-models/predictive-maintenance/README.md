# Building a deep learning model on acoustical sound for predictive maintenance with SAP AI Core
<!--- Register repository https://api.reuse.software/register, then add REUSE badge:
[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/REPO-NAME)](https://api.reuse.software/info/github.com/SAP-samples/REPO-NAME)
-->

## **Business challenge: Acoustic Based Proactive Maintenance**
The LGP plant maintenance is managed by using:
- reactive maintenance, where the process of repairing assets to standard operating conditions occur after poor performance or breakdown is observed;
- preventive time-based maintenance, where assets are maintained on a calendar-based schedule. 
This approach leads to challenges with plant efficiency, shorter life expectancies of assets, safety issues, sporadic asset downtime and overspending. Quality control was human based and prone to errors. End customers would return entire product batches in case of defective products


### **Solution**
IoT sensors measuring features such as temperature, humidity, pressure, vibrations, rotational speed, electric current are traditionally used for machine condition monitoring and predictive maintenance. With advances in Computer Audition, acoustic based predictive maintenance is becoming possible.

So an SAP Partner proposed to implement a Smart Factory Application on top of SAP BTP to improve manufactoring operations and raise awareness on sustainability KPIs. Machine condition monitoring based on sound classification was implemented to replace time-based preventive maintenance with proactive (and predictive) maintenance and to prevent downtimes.


### **Sustainability benefits**

- Reduced energy consumption.
- Extended lifetime of machinery and therefore reduced waste.
- Reduced operational and maintenance costs that will lead to reduced price of end product.
- Reduced risk of incidents leading to a safer work place.
 

## The Deep Learning model: CNN

### Acoustic features

Sound is a pressure wave that propagates through air. Sound files record the amplitude of this wave captured by one or more microphones at discrete time intervals. Sounds files come with a few fundamental metadata: sampling rate, bits per sample, number of channels.

Sound can be represented in two domains: time domain or frequency domain. From both representation, it’s possible to extract features that can be the input for analytics model.
Log Mel Spectrogram and MFCCs are very commonly used, especially (but not only) for the description of human vocal tract.
We use the spectrogram as input for a Deep Learning model and reduce the problem to an image classification task.

<p align="center">
<img src="https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/blob/main/resources/sound_features.png" width="800"/>
</p>


### CNN architecture

A Convolutional Neural Network (CNN) is a Deep Learning algorithm which can take in an input image, assign importance to various aspects/objects in the image and be able to differentiate one from the other. 
The architecture of a CNN is analogous to that of the connectivity pattern of Neurons in the Human Brain and was inspired by the organization of the Visual Cortex.

Conventionally, the first CNN is responsible for capturing the Low-Level features such as edges, colour, gradient orientation, etc. With added layers, the architecture adapts to the High-Level features as well, giving a network which has the wholesome understanding of images in the dataset.

The Pooling layer is responsible for reducing the spatial size of the Convolved Feature. This is to decrease the computational power required to process the data through dimensionality reduction. 
Furthermore, it is useful for extracting dominant features which are rotational and positional invariant
In the last part of a CNN a regular Neural Network for classification purposes learns non-linear combinations of the high-level features as represented by the output of the convolutional layer.

<p align="center">
<img src="https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/blob/main/resources/sound_cnn.png" width="800"/>
</p>


### Metrics and loss function




## Dataset
We assume that for each machine a dataset of sounds clips is available. Sound clips are annotated in three category: OK, Anomaly Type I, Anomaly Type II . This means we know how the machine sound like in normal vs anomalous conditions.  
Therefore, we will choose a supervised approach (Acoustic Scene Classification). Other approaches are also valid in machine condition monitoring use cases, such as unsupervised anomaly detection.
Disclaimer: The dataset is custom made and the exercise has the only purpuse to demo how we can use deep learning for sound analysis. This is not to be taken blindly as a real-life working model.


## Description

In this folder you can find everything used to develop the solution to the business challenge of acoustic based proactive maintenance with Deep Learning techniques in SAP AI Core and SAP AI Launchpad. Please, find below the list and description of each folder and their content:

- **code**
 	* **train** 
  		* It contains the python code to build the sound classification model, to preprocess the data and to train the model itself on SAP AI Core.
  		* It contains also the requirements.txt and the Docker file to dockerize the train.py python code.
 	* **infer**
  		* It contains the code for the serving web application that will be deployed in SAP AI Core to serve the inference requests to the sound classification model.
  		* It comntains also the requirements.txt and the Docker file to dockerize the infer.py python code.
- **LGPsound**
	* It contains the custom made datasets divided per category: OK, Anomaly Type I, Anomaly Type II.
	* This is basically the dataset that is already uploaded in the AWS S3 bucket at the path:<br/>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aws s3 ls s3://ai-sustainability-dataset/sound/data/
- **notebooks**
	* **sound_based_predictive_maintenance.ipynb**
		* This is the Jupyter notebook where all the development steps are tested: loading the data, preprocess the data, prepare the datasets for training, validation and test, build and initialize the model, test the model).
	* **sound_based_predictive_maintenance_in_AICore.ipynb**
		* This is the Jupyter notebook to execute all the one-time configurations in SAP AI Core.
	* **main.ipynb**
		* This is the Jupyter notebook to execute the training of the sound classification model and retrieve the metrics in SAP AI Core.
		* This is also the Jupyter notebook to execute the deployment of the sound classification model in SAP AI Core and that shows how to use the exposed URL to make an inference.
	* NB: These notebooks are intended to be used locally.
- **workflows**
	* **training_workflow_seg.yaml**
		* It's the template that specifies the training parameters and the training workflows in terms of Docker containers.
		* This file has to be loaded in the GitHub repository that will be connected to SAP AI Core.
	* **serving_workflow_seg.yaml**
		* It's the template that specifies all the parameters needed to deploy and serve the web application.
		* This file has to be loaded in the GitHub repository that will be connected to SAP AI Core.


## **Training python code**

<p align="center">
<img src="https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/blob/main/resources/sound_classification_workflow.png" width="800"/>
</p>


## **Training python code**

train.py is a Python class which implements all the required steps developed and tested in the Jupyter development notebook. This piece of code can be run in SAP AI Core and is expected to include the following methods:

- **read_dataset:** to load the images and apply some pre-processing;
- **split_dataset:** to split the dataset among train, validation and test samples;
- **build_unet_model:** to build the chosen mode;
- **init_model:** to initialize and compile the model:
- **train_model:** to configure the training and execute it;
- **save_model:** to save the model;
- **get_model:** to load the model;
- **model_metrics:** to define and register the chosen metrics.


## **Serving python code**



## **SAP AI Core end-to-end workflow**

<p align="center">
<img src="https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/blob/main/resources/ai_core_e2e.png" width="800"/>
</p>


## Requirements
* [Prerequisites](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/blob/main/prerequisites/prerequisites.md) <br>
* [Requirements](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/blob/main/prerequisites/requirements.txt)


## Download and Installation

## Known Issues

## How to obtain support
[Create an issue](https://github.com/SAP-samples/<repository-name>/issues) in this repository if you find a bug or have questions about the content.
 
For additional support, [ask a question in SAP Community](https://answers.sap.com/questions/ask.html).

## Contributing
If you wish to contribute code, offer fixes or improvements, please send a pull request. Due to legal reasons, contributors will be asked to accept a DCO when they create the first pull request to this project. This happens in an automated fashion during the submission process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

## License
Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.

