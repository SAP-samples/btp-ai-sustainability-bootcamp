# Prerequisites to execute SAP AI Core exercises for Windows


## 1. Install Docker Desktop and create a personal Docker Registry
Instructions can be found [here](https://docs.docker.com/docker-hub/), Step 1 to 3.

 We recommend you to create an access token to be used in place of your password. Instructions on how to generate a token can be found [here](https://docs.docker.com/docker-hub/access-tokens/#create-an-access-token).


##  2. Install Git and clone bootcamp repositories
*	**Install Git** following instructions [here](https://github.com/git-guides/install-git).

*	**Clone [btp-ai-sustainability-bootcamp repository](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp)**. This is the main bootcamp repository containing all the necessary code. To clone the repo, start the <span style="color:orange">**Git Bash** </span> that was installed with git and type these following commands:
```sh
mkdir sap_aicore_bootcamp
cd sap_aicore_bootcamp
git clone https://github.com/SAP-samples/btp-ai-sustainability-bootcamp.git
```
If need be, a guide on how to clone a repository can be found [here]( https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

*	**Clone [lgp-green-factory repository](https://github.com/sap-btp-ai-sustainability-bootcamp)**. This is the repository that will be synchronized with the SAP AI Core environment provided for this bootcamp. Please notice that this is a private repository and each participant will need to share with us his/her Github username to be granted access. Please use the official bootcamp Teams channel to get in touch with us. Once we will have invited you to join the lgp-green-factory repo, you should receive an automatic email at the address connected to you Github account. Follow instructions there to accept our invitation. Then, you should be able to clone the repo typing this in your <span style="color:orange">**Git Bash** </span>:
```sh
git clone https://github.com/sap-btp-ai-sustainability-bootcamp/lgp_green_factory.git
```

## 3. Install a Python3 environment

To reproduce our AI models and train them in SAP AI Core you will need to have a local Python3 environment, including all the libraries listed in [requirements.txt](requirements.txt). For the exercises, we have used Python3.8.9.

* **Install Python3.8.9** from [this website](https://www.python.org/downloads/release/python-389/). Scroll down to Files and pick the recommended Windows installer, normally it should do.
  * When the installation starts, select the flag to **add Python 3.8 to PATH**
  * Select **Customize Installation**, don't change any option and click **Next**.
  * You will then be in **Advanced Option**. Under **Customize install location** change the path to C:\Python389. Then click **Install**


* **Create a virtual environment and install the requirements**: in your <span style="color:orange">**Git Bash** </span>, type the following commands:
```sh
pip install virtualenv
virtualenv -p /c/Python389/python.exe bootcamp_env
source bootcamp_venv/Scripts/activate
pip install -r btp-ai-sustainability-bootcamp/prerequisites/requirements.txt
```

