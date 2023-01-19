# SAP AI Core exercises - Windows

These instructions are for Windows users. If you are a MacOS or Linux user, please check out the MacOS/Linux instructions [here](./prerequisites.md).

## Prerequisites

### 0. Free Tier plan for SAP AI Core and SAP AI Launchpad
In order to go through the exercises proposed in this OpenSAP course, you need an AI Core instance and a subscription to AI Launchpad. Both are available in the SAP BTP Free Tier plan (more information can be found at this [blog post](https://blogs.sap.com/2022/10/20/sap-ai-core-sap-ai-launchpad-free-tier-is-out-now/)).
You can follow this [tutorial](https://developers.sap.com/tutorials/ai-core-launchpad-provisioning.html) to setup free tier for SAP AI Core and SAP AI Launchpad in your BTP global account (or subaccount). Follow the tutorial until [Set Up Tools to Connect With and Operate SAP AI Core - STEP 3 - Set up tools for usage with SAP AI Core](https://developers.sap.com/tutorials/ai-core-setup.html). Please, notice that the free tier AI Core and AI Launchpad are free of charge, but they have some limitations, for instance in the use of GPU acceleration. You can check all the limitations at this [link](https://help.sap.com/docs/AI_CORE/2d6c5984063c40a59eda62f4a9135bee/c7244c6a7e3b4ffc928a2564c216e7c7.html). The exercises in this specific branch of the repository we are providing are meant to be executed with the free tier plan, so they are tailored for that.
In case you are going to use the standard (paid) plan for AI Core and AI Launchpad, you can refer to [this branch](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/tree/opensap-standard) where the same exercises are sized to exploit the full capabilities of these two products.


### 1. Install Docker Desktop and create a personal Docker Registry
Instructions can be found [here](https://docs.docker.com/docker-hub/quickstart/), Step 1 to 4.
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

*	**Create your Github repository for AI Core templates**. This is the GitHub repository that you have to create in order to go through the exercises of this OpenSAP course. The repository will host the AI Core (training and serving) templates and will be synchronized with the AI Core environment. Create a new repository in your Github account and give it an arbitrary name that we will refer to as \<YOUR-GITHUB-REPO>. Instructions on how to create a repository are available [here](https://docs.github.com/en/get-started/quickstart/create-a-repo). Once you have created it, open a <span style="color:orange">**Git Bash** </span> and type the following commands to clone your repo:
```sh
cd sap_aicore_bootcamp
git clone https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-GITHUB-REPO>.git
```

### 3. Install a Python3 environment

To reproduce our AI models and train them in SAP AI Core you will need to have a local Python3 environment, including all the libraries listed in [requirements.txt](requirements.txt). For the exercises, we have used Python3.8.9.

* **Install Python3.8.9** from [this website](https://www.python.org/downloads/release/python-389/). Scroll down to Files and pick the recommended Windows installer, normally it should do.
  * When the installation starts, select the flag to **add Python 3.8 to PATH**
  * Select **Customize Installation**, do not change any option and click **Next**.
  * You will then be in **Advanced Option**. Under **Customize install location** change the path to C:\Python389. Then click **Install**


* **Create a virtual environment and install the requirements**: open a <span style="color:orange">**Git Bash** </span>, type the following commands:
```sh
cd sap_aicore_bootcamp
pip install virtualenv
virtualenv -p /c/Python389/python.exe bootcamp_venv
source bootcamp_venv/Scripts/activate
pip install -r btp-ai-sustainability-bootcamp/prerequisites/requirements.txt
```

###  4. Set up an AWS S3 storage bucket
In this course we will use AWS S3 Object Store as a cloud storage for our AI Core datasets and models.You can get an AWS S3 storage bucket from either of these two ways:
* [through SAP BTP Cockpit](https://help.sap.com/docs/ObjectStore/2ee77ef7ea4648f9ab2c54ee3aef0a29/4236b942f67349d5a583773162d99660.html);
* directly through AWS. In this case, refer to the [AWS User Guide for S3](https://aws.amazon.com/s3/).

Once you have got your S3 bucket:
1. [Install the AWS Command Line Interface](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
2. Make sure you are working on the correct branch, **opensap-freetier** or **opensap-standard**, depending on the AI Core instance you are working with:
```sh
cd sap_aicore_bootcamp/btp-ai-sustainability-bootcamp/
git branch
```
Use the command:
```sh
git checkout <BRANCH_NAME>
```
to switch to the correct branch if necessary.

3. Upload the data in S3:
```sh
aws s3 cp --recursive src/ai-models/defect-detection/data/Images s3://<YOUR-BUCKET-ID>/image/data/
aws s3 cp --recursive src/ai-models/predictive-maintenance/LGPsound s3://<YOUR-BUCKET-ID>/sound/data/
```
**A complete demo** is available in
[this video](https://www.youtube.com/watch?v=K-moHwVFe6Q&list=PLkzo92owKnVyJ5bZXYHb8QUTNRaUMYNST&index=14)

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
