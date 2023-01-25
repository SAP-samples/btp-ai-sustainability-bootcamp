# SAP AI Core exercises - Linux, MacOS


These instructions are for MacOS or Linux users. If you are a Windows user, please check out Windows instructions [here](./prerequisites_win.md).

## Prerequisites

### 0. Free Tier plan for SAP AI Core and SAP AI Launchpad
In order to go through the exercises proposed in this OpenSAP course, you need an AI Core instance and a subscription to AI Launchpad. The exercises in this specific branch of the repository we are providing are meant to be executed with the standard (paid) plan. You can follow the instructions reported at the following links to provision AI Core and AI Launchpad in SAP BTP:

* [SAP AI Core: Initial setup](https://help.sap.com/docs/AI_CORE/2d6c5984063c40a59eda62f4a9135bee/38c4599432d74c1d94e70f7c955a717d.html)
* [SAP AI Launchpad: Initial setup](https://help.sap.com/docs/AI_LAUNCHPAD/92d77f26188e4582897b9106b9cb72e0/5d8adb6f43ea4eeca97c9a2b2bb93c6b.html?locale=en-US)

After subscribing to SAP AI Launchpad, follow [these instructions](https://help.sap.com/docs/AI_LAUNCHPAD/92d77f26188e4582897b9106b9cb72e0/71dfe2cab0e94cf5bec9d707140ea0d1.html?locale=en-US) to create a connection to your SAP AI Core instance.

AI Core and AI Lauchpad are also available in the SAP BTP Free Tier plan (more information can be found at this [blog post](https://blogs.sap.com/2022/10/20/sap-ai-core-sap-ai-launchpad-free-tier-is-out-now/)). Please, notice that the free tier AI Core and AI Launchpad are free of charge, but they have some limitations, for instance in the use of GPU acceleration. You can check all the limitations at this [link](https://help.sap.com/docs/AI_CORE/2d6c5984063c40a59eda62f4a9135bee/c7244c6a7e3b4ffc928a2564c216e7c7.html).
In case you want to use the Free Tier plan for AI Core and AI Launchpad, please, refer to [this branch](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/tree/opensap-freetier) where the same exercises are sized to cope with the forementioned limitations.


### 1. Install Docker Desktop and create a personal Docker Registry
Instructions can be found [here](https://docs.docker.com/docker-hub/quickstart/), Step 1 to 4.
We recommend you to create an access token to be used in place of your password. Instructions on how to generate a token can be found [here](https://docs.docker.com/docker-hub/access-tokens/#create-an-access-token).

###  2. Install Git and clone bootcamp repositories
*	**Install Git** following the instructions [here](https://github.com/git-guides/install-git).

*	**Clone the [btp-ai-sustainability-bootcamp repository](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp)**. This is the main bootcamp repository containing all the necessary code. In a terminal, execute the following commands:
```sh
mkdir sap_aicore_bootcamp
cd sap_aicore_bootcamp
git clone https://github.com/SAP-samples/btp-ai-sustainability-bootcamp.git
cd btp-ai-sustainability-bootcamp
git checkout opensap-standard
```
In case of issues, please check out how to clone a repository [at this link]( https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

*	**Create your Github repository for AI Core templates**. This is the GitHub repository that you have to create in order to go through the exercises of this OpenSAP course. The repository will host the AI Core (training and serving) templates and will be synchronized with the AI Core environment. Create a new repository in your Github account and give it an arbitrary name that we will refer to as \<YOUR-GITHUB-REPO>. Instructions on how to create a repository are available [here](https://docs.github.com/en/get-started/quickstart/create-a-repo). Then open a terminal and execute the following commands to clone your repository:
```sh
cd sap_aicore_bootcamp
git clone https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-GITHUB-REPO>.git
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

