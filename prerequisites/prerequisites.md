# Prerequisites to execute SAP AI Core exercises

## 1. Install a Python3 environment

To reproduce our AI models and train them in SAP AI Core you will need to have a local Python3 environment, including all the libraries listed in [requirements.txt](requirements.txt). If you do not have Python3 yet, you can install it in different ways, for instance via [Anaconda](https://www.anaconda.com/) or [virtualenv](https://pypi.org/project/virtualenv/).

### How to install a Python3 environment with virtualenv
*	Install virtualenv following instructions [here](https://virtualenv.pypa.io/en/latest/installation.html).
* Download [requirements.txt](requirements.txt) file.
* Open a terminal and create a virtual environment:

```sh
mkdir sap_aicore_bootcamp
cd sap_aicore_bootcamp
virtualenv bootcamp_venv
source bootcamp_venv/bin/activate
pip install -r path/to/requirements.txt
```

##  2. Install Git and clone bootcamp repositories
*	Install Git following instructions [here](https://github.com/git-guides/install-git).
*	Clone [btp-ai-sustainability-bootcamp repository](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp). This is the main bootcamp repository containing all the necessary code.  A guide on how to clone a repository can be found [here]( https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

*	Clone [lgp-green-factory repository](https://github.com/sap-btp-ai-sustainability-bootcamp). This is the repository that will be synchronized with the SAP AI Core environment provided for this bootcamp. Please notice that this is a private repository and each participant will need to share with us his/her Github username to be granted access. Please use the official bootcamp Teams channel to get in touch with us. Once we will have invited you to join the lgp-green-factory repo, you should receive an automatic email at the address connected to you Github account. Follow instructions there to accept our invitation. 

* We recommend you to create an access token to be used in place of your password to access the lgp-green-factory repository. Instructions on how to generate a token can be found [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). Select **repo** permissions for your token.


## 3. Install Docker Desktop and create a personal Docker Registry 
Instructions can be found [here](https://docs.docker.com/docker-hub/), Step 1 to 4.
