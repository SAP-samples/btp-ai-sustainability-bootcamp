# SAP AI Core exercises - Linux, MacOS


These instructions are for MacOS or Linux users. If you are a Windows user, please check out Windows instructions [here](./prerequisites_win.md).

## Prerequisites

### 0. Free Tier plan for SAP AI Core and SAP AI Launchpad
In order to go through the exercises proposed in this OpenSAP course, you need an AI Core instance and a subscription to AI Launchpad. The exercises in this specific branch of the repository we are providing are meant to be executed with the standard (paid) plan. You can follow the instructions reported at the following links to provision AI Core and AI Launchpad in SAP BTP.

* [SAP AI Core: Initial setup](https://help.sap.com/docs/AI_CORE/2d6c5984063c40a59eda62f4a9135bee/38c4599432d74c1d94e70f7c955a717d.html)
* [SAP AI Launchpad](https://help.sap.com/docs/AI_LAUNCHPAD/92d77f26188e4582897b9106b9cb72e0/5d8adb6f43ea4eeca97c9a2b2bb93c6b.html?locale=en-US)

AI Core and AI Lauchpad are also available in the SAP BTP Free Tier plan (more information can be found at this [blog post](https://blogs.sap.com/2022/10/20/sap-ai-core-sap-ai-launchpad-free-tier-is-out-now/)). Please, notice that the free tier AI Core and AI Launchpad are free of charge, but they have some limitations, for instance in the use of GPU acceleration. You can check all the limitations at this [link](https://help.sap.com/docs/AI_CORE/2d6c5984063c40a59eda62f4a9135bee/c7244c6a7e3b4ffc928a2564c216e7c7.html).
In case you want to use the Free Tier plan for AI Core and AI Launchpad, please, refer to [this branch](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/tree/opensap-freetier) where the same exercises are sized to cope with the forementioned limitations.

### 1. Install Docker Desktop and create a personal Docker Registry
Instructions can be found [here](https://docs.docker.com/docker-hub/), Step 1 to 4.
We recommend you to create an access token to be used in place of your password. Instructions on how to generate a token can be found [here](https://docs.docker.com/docker-hub/access-tokens/#create-an-access-token).

###  2. Install Git and clone bootcamp repositories
*	Install Git following instructions [here](https://github.com/git-guides/install-git).

*	Clone [btp-ai-sustainability-bootcamp repository](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp). This is the main bootcamp repository containing all the necessary code.  A guide on how to clone a repository can be found [here]( https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).
```sh
mkdir sap_aicore_bootcamp
cd sap_aicore_bootcamp
git clone https://github.com/SAP-samples/btp-ai-sustainability-bootcamp.git
cd btp-ai-sustainability-bootcamp
git checkout opensap-standard
```


*	**Clone your GitHub repository**. This is the GitHub repository that you have to create in order to go through the exercises of this OpenSAP course. The repository will host the AI Core (training and serving) templates and will be synchronized with the AI Core environment. You can find some instrcutions about how to create a GitHub repository at this [link](https://developers.sap.com/tutorials/ai-core-helloworld.html).
```sh
cd sap_aicore_bootcamp
git clone YOUR_GITHUB_REPO_URL
```

### 3. Install a Python3 environment

To reproduce our AI models and train them in SAP AI Core you will need to have a local Python3 environment, including all the libraries listed in [requirements.txt](requirements.txt). We have tested the code using Python 3.8.9, so we strongly advise you to stick to this version to avoid any showstopper. Below you can find indicative guidelines to create a virtual environment with all the requirements.

#### Install a Python3 environment with virtualenv
*	Install virtualenv following instructions [here](https://virtualenv.pypa.io/en/latest/installation.html).
* Open a terminal and execute the following commands:

```sh
cd sap_aicore_bootcamp
virtualenv bootcamp_venv
source bootcamp_venv/bin/activate
pip install -r btp-ai-sustainability-bootcamp/prerequisites/requirements.txt
```

## Exercises - BYOM with TensorFlow

Open a terminal and type:
```sh
cd sap_aicore_bootcamp/btp-ai-sustainability-bootcamp
git pull
cd ..
source bootcamp_venv/bin/activate
jupyter lab
```

### Exercise 1 - Defect Detection

Jupyter will start in your default browser. In the lefthand side pane, navigate to: <br> 

btp-ai-sustainability-bootcamp &rarr; src &rarr; ai-models &rarr; defect-detection &rarr; exercises <br>

and double click on defect-detection-part1.ipynb to open it. Follow through the notebook instructions.


### Exercise 2 - Sound classification

Jupyter will start in your default browser. In the lefthand side pane, navigate to: <br> 

btp-ai-sustainability-bootcamp &rarr; src &rarr; ai-models &rarr; predictive-maintenance &rarr; exercises <br>

and double click on sound-classification-part1.ipynb to open it. Follow through the notebook instructions.

