# SAP AI Core exercises - Linux, MacOS


These instructions are for MacOS or Linux users. If you are a Windows user, please check out Windows instructions [here](./prerequisites_win.md).

## Prerequisites

### 1. Install Docker Desktop and create a personal Docker Registry
Instructions can be found [here](https://docs.docker.com/docker-hub/), Step 1 to 4.
We recommend you to create an access token to be used in place of your password. Instructions on how to generate a token can be found [here](https://docs.docker.com/docker-hub/access-tokens/#create-an-access-token).

###  2. Install Git and clone bootcamp repositories
*	Install Git following instructions [here](https://github.com/git-guides/install-git).

*	Clone [btp-ai-sustainability-bootcamp repository](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp). This is the main bootcamp repository containing all the necessary code. A guide on how to clone a repository can be found [here]( https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).
```sh
mkdir sap_aicore_bootcamp
cd sap_aicore_bootcamp
git clone https://github.com/SAP-samples/btp-ai-sustainability-bootcamp.git
cd btp-ai-sustainability-bootcamp
git checkout opensap-exercises
```


*	**Clone your GitHub repository**. This is the repository that will be synchronized with the SAP AI Core environment that you have to create by yourself for this OpenSAP course.
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

