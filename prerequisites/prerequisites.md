# Prerequisites to execute SAP AI Core exercises

##  1. Install Git and clone bootcamp repositories
*	Install Git following instructions [here](https://github.com/git-guides/install-git).

*	Clone [btp-ai-sustainability-bootcamp repository](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp). This is the main bootcamp repository containing all the necessary code.  A guide on how to clone a repository can be found [here]( https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).
```sh
mkdir sap_aicore_bootcamp
cd sap_aicore_bootcamp
git clone https://github.com/SAP-samples/btp-ai-sustainability-bootcamp.git
```

*	Clone [lgp-green-factory repository](https://github.com/sap-btp-ai-sustainability-bootcamp). This is the repository that will be synchronized with the SAP AI Core environment provided for this bootcamp. Please notice that this is a private repository and each participant will need to share with us his/her Github username to be granted access. Please use the official bootcamp Teams channel to get in touch with us. Once we will have invited you to join the lgp-green-factory repo, you should receive an automatic email at the address connected to you Github account. Follow instructions there to accept our invitation. 
```sh
git clone https://github.com/sap-btp-ai-sustainability-bootcamp/lgp_green_factory.git
```

## 2. Install a Python3 environment

To reproduce our AI models and train them in SAP AI Core you will need to have a local Python3 environment, including all the libraries listed in [requirements.txt](requirements.txt)

### Install a Python3 environment with virtualenv
*	Install virtualenv following instructions [here](https://virtualenv.pypa.io/en/latest/installation.html).
* Open a terminal and cd to your sap_aicore_bootcamp, then execute the following commands: 

```sh
virtualenv bootcamp_venv
source bootcamp_venv/bin/activate
pip install -r btp-ai-sustainability-bootcamp/prerequisites/requirements.txt
```

## 3. Install Docker Desktop and create a personal Docker Registry 
Instructions can be found [here](https://docs.docker.com/docker-hub/), Step 1 to 4.

 We recommend you to create an access token to be used in place of your password. Instructions on how to generate a token can be found [here](https://docs.docker.com/docker-hub/access-tokens/#create-an-access-token). 
