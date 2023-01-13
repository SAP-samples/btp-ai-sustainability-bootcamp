# SAP AI Core exercises - Windows

These instructions are for Windows users. If you are a MacOS or Linux user, please check out the MacOS/Linux instructions [here](./prerequisites.md).

## Prerequisites

### 0. Free Tier plan for SAP AI Core and SAP AI Launchpad
In order to go through the exercises proposed in this OpenSAP course, you need an AI Core instance and a subscription to AI Launchpad. Both are available in the SAP BTP Free Tier plan (more information can be found at this [blog post](https://blogs.sap.com/2022/10/20/sap-ai-core-sap-ai-launchpad-free-tier-is-out-now/)).
You can follow this [tutorial](https://developers.sap.com/tutorials/ai-core-launchpad-provisioning.html) to setup free tier for SAP AI Core and SAP AI Launchpad in your BTP global account (or subaccount). Please, notice that the free tier AI Core and AI Launchpad are free of charge, but they have some limitations, for instance in the use of GPU acceleration. You can check all the limitations at this [link](https://help.sap.com/docs/AI_CORE/2d6c5984063c40a59eda62f4a9135bee/c7244c6a7e3b4ffc928a2564c216e7c7.html). The exercises in this specific branch of the repository we are providing are meant to be executed with the free tier plan, so they are tailored for that.
In case you are going to use the standard (paid) plan for AI Core and AI Launchpad, you can refer to [this branch](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/tree/opensap-standard) where the same exercises are sized to exploit the full capabilities of these two products.


### 1. Install Docker Desktop and create a personal Docker Registry
Instructions can be found [here](https://docs.docker.com/docker-hub/), Step 1 to 4.
We recommend you to create an access token to be used in place of your password. Instructions on how to generate a token can be found [here](https://docs.docker.com/docker-hub/access-tokens/#create-an-access-token).


###  2. Install Git and clone bootcamp repositories
*	**Install Git** following the instructions [here](https://github.com/git-guides/install-git).

*	**Clone [btp-ai-sustainability-bootcamp repository](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp)**. This is the main bootcamp repository containing all the necessary code. To clone the repo, start the <span style="color:orange">**Git Bash** </span> that was installed with git and type these following commands:
```sh
mkdir sap_aicore_bootcamp
cd sap_aicore_bootcamp
git clone https://github.com/SAP-samples/btp-ai-sustainability-bootcamp.git
cd btp-ai-sustainability-bootcamp
git checkout opensap-freetier
```
If needed, a guide on how to clone a repository can be found [here]( https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

*	**Clone LGP Factory repository**. This is the GitHub repository that you have to create in order to go through the exercises of this OpenSAP course. The repository will host the AI Core (training and serving) templates and will be synchronized with the AI Core environment. You can find some instrcutions about how to create a GitHub repository at this [link](https://developers.sap.com/tutorials/ai-core-helloworld.html). Once you have created it, open a <span style="color:orange">**Git Bash** </span> and type the following commands:
```sh
cd sap_aicore_bootcamp
git clone YOUR_GITHUB_REPO_URL
```

### 3. Install a Python3 environment

To reproduce our AI models and train them in SAP AI Core you will need to have a local Python3 environment, including all the libraries listed in [requirements.txt](requirements.txt). For the exercises, we have used Python3.8.9.

* **Install Python3.8.9** from [this website](https://www.python.org/downloads/release/python-389/). Scroll down to Files and pick the recommended Windows installer, normally it should do.
  * When the installation starts, select the flag to **add Python 3.8 to PATH**
  * Select **Customize Installation**, don't change any option and click **Next**.
  * You will then be in **Advanced Option**. Under **Customize install location** change the path to C:\Python389. Then click **Install**


* **Create a virtual environment and install the requirements**: open a <span style="color:orange">**Git Bash** </span>, type the following commands:
```sh
cd sap_aicore_bootcamp
pip install virtualenv
virtualenv -p /c/Python389/python.exe bootcamp_venv
source bootcamp_venv/Scripts/activate
pip install -r btp-ai-sustainability-bootcamp/prerequisites/requirements.txt
```

## Exercises - BYOM with TensorFlow

Open a <span style="color:orange">**Git Bash** </span> and type:
```sh
cd sap_aicore_bootcamp/btp-ai-sustainability-bootcamp
git pull
cd ..
source bootcamp_venv/Scripts/activate
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
