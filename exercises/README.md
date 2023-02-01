# Building AI and Sustainability Solutions on SAP BTP - Exercises
This document will guide you through the bonus hands-on exercises of openSAP course about [Building AI and Sustainability Solutions on SAP BTP](https://open.sap.com/courses/sustai1) based on the free-tier systems such as SAP AI Core, SAP AI Launchpad and SAP Analytics Cloud in SAP BTP, which are completed <b>free of charge</b> to conduct the exercise by following this exercise document. 
<br>
<br>
Alternatively, if you wish to perform the hands-on exercise with the paid plan in your SAP BTP account, please switch to [this exercise document](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/tree/opensap-standard/exercises), which will <b>produce some cost</b> on your SAP BTP account. As a result, you will be able to use more resource(GPU) in AI model training for Week 2 and 3 exercises.  
<br>
<br>
Completing the hands-on exercise will help you to gain a better understanding of the systems. however, it is not mandatory, neither count for any point for openSAP course certificate.

## Week 1 - AI and Sustainability
No hands-on exercise.

## Week 2 - Enterprise AI in Action – Defect Detection

### Environment

For this exercise, you will work on an SAP AI Core and an SAP AI Launchpad instance. 
For information on how to provision them, please, check point 0 of the prerequisites:

1. [Prerequisites for Windows](../prerequisites/prerequisites_win.md#0-free-tier-plan-for-sap-ai-core-and-sap-ai-launchpad)
2. [Prerequisites for Linux/MacOS](../prerequisites/prerequisites.md#0-free-tier-plan-for-sap-ai-core-and-sap-ai-launchpad)

### Exercise instructions

1. **Setup prerequisites**. Please, refer to the links reported below:
    1. [Prerequisites for Windows](../prerequisites/prerequisites_win.md)
    2. [Prerequisites for Linux/MacOS](../prerequisites/prerequisites.md)
    
2. How to launch Jupyter notebook and reach the exercise Jupyter notebooks:
    1. [Instructions to start exercise 1 in Windows](../prerequisites/prerequisites_win.md#exercises---byom-with-tensorflow)
    2. [Instructions to start exercise 1 in Linux/MacOS](../prerequisites/prerequisites.md#exercises---byom-with-tensorflow)

3. Follow the rest of the instructions given in the [two Jupyter notebooks](../src/ai-models/defect-detection/exercises).


## Week 3 - Enterprise AI in Action – Sound-Based Predictive Maintenance

### Environment

For this exercise, you will work on an SAP AI Core and an SAP AI Launchpad instance. 
For information on how to provision them, please, check point 0 of the prerequisites:

1. [Prerequisites for Windows](../prerequisites/prerequisites_win.md)
2. [Prerequisites for Linux/MacOS](../prerequisites/prerequisites.md)

### Exercise instructions

1. **Setup prerequisites**. Please, refer to the links reported below:
    1. [Prerequisites for Windows](../prerequisites/prerequisites_win.md)
    2. [Prerequisites for Linux/MacOS](../prerequisites/prerequisites.md)
    
2. How to launch Jupyter notebook and reach the exercise Jupyter notebooks:
    1. [Instructions to start exercise 2 in Windows](../prerequisites/prerequisites_win.md#exercises---byom-with-tensorflow)
    2. [Instructions to start exercise 2 in Linux/MacOS](../prerequisites/prerequisites.md#exercises---byom-with-tensorflow)
    
3. Follow the rest of the instructions given in the [two Jupyter notebooks](../src/ai-models/predictive-maintenance/exercises).

4. Once you have gone through the notebooks, we have prepared an extra exercise where you will repeat what you have already done in the notebooks but this time by using SAP AI Launchpad as client. Please, follow the instructions reported in the document [here](./03-ai-and-sustainability/Week3-Exercise02-BYOM_sound_based_pdm_with_SAP_AI_Launchpad_v2.pdf).


## Week 4 - Embedding AI into a Custom Application on SAP BTP(Optional)

**Optional exercise**. Follow this [manual](../src/sustainable-smart-factory-app/README.md) to deploy and run the sustainable-smart-factory app to your own BTP trial account. The hybrid deployment option is recommended for the course exercise.


## Week 5 - Collaborative Enterprise Planning

### Environment

For this exercise, you will work on a SAP Analytics Cloud for Planning tenant. 
For information about how to provision a free trial account, please, refer to [this tutorial](https://developers.sap.com/tutorials/sac-intro-2-trial.html).

### Exercise Instructions

Please, follow the sequence (Week5_Exercise01~04) specified in the [exercises folder](./05-collaborative-enterprise-planning).
The master and transaction data required to complete the exercise are available [here](./05-collaborative-enterprise-planning/datasets/) to download.
