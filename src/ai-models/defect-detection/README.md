# Building a deep learning model on product images for Automatic Defeat Detection with SAP AI Core
<!--- Register repository https://api.reuse.software/register, then add REUSE badge:
[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/REPO-NAME)](https://api.reuse.software/info/github.com/SAP-samples/REPO-NAME)
-->

## Description

In this folder you can find everything used to develop the solution to the business challenge of LGP automated defect detection with Deep Learning techniques in SAP AI Core and SAP AI Launchpad. Please, find below the list and description of each folder and their content:

- **code**
 	* **train_seg** 
  		* It contains the python code to build the semantic segmentation model, to preprocess the data and to train the model itself on SAP AI Core
  		* It contains also the requirements.txt and the Docker file to dockerize the train.py python code.
 	* **infer_seg**
  		* It contains the code for the serving web application that will be deployed in SAP AI Core to serve the inference requests to the semantic segmentation model.
  		* It comntains also the requirements.txt and the Docker file to dockerize the infer.py python code.
- **data**
	* It contains the LGP image datasets and the relative ground truth divided per category: defected (labeled as NG) and normal LGP devices (labeled as OK).
	* This is basically the dataset that is already uploaded in the AWS S3 bucket at the path:<br/>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aws s3 ls s3://ai-sustainability-dataset/image/data/
- **notebooks**
	* **defect_detection_development_segmentation.ipynb**
		* This is the Jupyter notebook where all the development steps are tested: loading the data, preprocess the data, prepare the datasets for training, validation and test, build and initialize the model, test the model).
	* **defect_detection_aicore_notebook_one_time_config.ipynb**
		* This is the Jupyter notebook to execute all the one-time configurations in SAP AI Core.
	* **defect_detection_aicore_notebook_train_infer.ipynb**
		* This is the Jupyter notebook to execute the training of the semantic segmentation model and retrieve the metrics in SAP AI Core.
		* This is also the Jupyter notebook to execute the deployment of the semantic segmentation model in SAP AI Core and that shows how to use the exposed URL to make an inference.
	* NB: These notebookes are intended to be used locally.
- **workflows**
	* **training_workflow_seg.yaml**
		* It's the template that specifies the training parameters and the training workflows in terms of Docker containers.
		* This file has to be loaded in the GitHub repository that will be connected to SAP AI Core.
	* **serving_workflow_seg.yaml**
		* It's the template that specifies all the parameters needed to deploy and serve the web application.
		* This file has to be loaded in the GitHub repository that will be connected to SAP AI Core.


## Requirements

## Download and Installation

## Known Issues

## How to obtain support
[Create an issue](https://github.com/SAP-samples/<repository-name>/issues) in this repository if you find a bug or have questions about the content.
 
For additional support, [ask a question in SAP Community](https://answers.sap.com/questions/ask.html).

## Contributing
If you wish to contribute code, offer fixes or improvements, please send a pull request. Due to legal reasons, contributors will be asked to accept a DCO when they create the first pull request to this project. This happens in an automated fashion during the submission process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

## License
Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.
