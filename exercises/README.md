# AI and Sustainability Bootcamp Exercises

## Important Notice
If you are attending the openSAP course about [Building AI&Sustainability Solutions with SAP BTP](https://open.sap.com/courses/sustai1) and attempting to conduct the bonus hands-on exercises, please follow 
* Option 1: If you have a SAP BTP Free Tier account, please switch to the exercise document [here](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/tree/opensap-freetier/exercises), which is completely <b>free of charge</b>. Please note that the systems required by the hands-on exercise such as SAP AI Core, SAP AI Launchpad and SAP Analytics Cloud are not available in SAP BTP Trial account, but available in SAP BTP Free Tier Account.
* Option 2: If you have a paid SAP BTP account under consumption-based Cloud Platform Enterprise Agreement (CPEA) and Cloud Credit or Pay-As-You-Go(PAYG) or Subscription etc other than free-tier and would like to conduct the hands-on exercises with your paid SAP BTP account(Please note that the provision of systems required by the hands-on exercise will produce some cost on your SAP BTP account), please switch to the exercise document [here](https://github.com/SAP-samples/btp-ai-sustainability-bootcamp/tree/opensap-standard/exercises). Otherwise, switch to Option 1 above.
<br/>
The exercise flow and content are almost identical between option 1 and 2 above except that you will be able to use more resource during the AI model training in option 2 with a paid SAP BTP account. And option 1 with SAP BTP Free Tier account is completely free.
<br/>
The following section is only relevant for SAP hosted bootcamp, which is different from openSAP course. Please ignore it if you are an participant of the openSAP course.
## Day 1 Exercise - BYOM with Tensorflow part 1 - Defect Detection

### Environment

For this exercise, you will work on an SAP AI Core instance. 
For information on how to request system access please refer to the [bootcamp Teams channel](https://teams.microsoft.com/l/channel/19%3AQRr1arwovOFnp4D_1qHdECRWUa8qimdsAuH-nmagcjE1%40thread.tacv2/tab%3A%3A0ff9f779-bcfa-4d9c-8d3a-7cfc7890f5ed?groupId=887e94c7-ad74-47f4-a4de-8daf4bb0227f&tenantId=42f7676c-f455-423c-82f6-dc2d99791af7).

### Exercise Instructions

#### High level Flow of Events in the Exercise:
1. You should have already submitted your **GitHub Username** during registration.
2. **Setup Prerequisites**. Please, refer to the links reported below:
    1. [Prerequisites for Windows](../prerequisites/prerequisites_win.md)
    2. [Prerequisites for Linux/MacOS](../prerequisites/prerequisites.md)
3. How to launch Jupyter notebook and reach the exercise Jupyter notebooks:
    1. [Instructions to start exercise 1 in Windows](../prerequisites/prerequisites_win.md#exercises---byom-with-tensorflow)
    2. [Instructions to start exercise 1 in Linux/MacOS](../prerequisites/prerequisites.md#exercises---byom-with-tensorflow)
4. Find out your **Participant/Team ID** (in the [bootcamps Teams private channel](https://sap.sharepoint.com/:x:/r/teams/SAPBTP-AISustainabilityBootcamp-SystemProvisionInvitedOnly/Shared%20Documents/%F0%9F%8E%AF%20System%20Provision%20(Invited%20Only)/Credentials.xlsx?d=w5acb57efb6f44351ac7503d1be43f494&csf=1&web=1&e=zvlXAJ) ) that is required as a Suffix to various variables throughout the exercise.
5. Follow the rest of the instructions given in the [two Jupyter notebooks](../src/ai-models/defect-detection/exercises).


## Day 2 Exercise - BYOM with Tensorflow part 2 - Sound-based Predictive Maintenance

### Environment

For this exercise, you will work on an SAP AI Core and an SAP AI Launchpad instance. 
For information on how to request system access please refer to the [bootcamp Teams channel](https://teams.microsoft.com/l/channel/19%3AQRr1arwovOFnp4D_1qHdECRWUa8qimdsAuH-nmagcjE1%40thread.tacv2/tab%3A%3A0ff9f779-bcfa-4d9c-8d3a-7cfc7890f5ed?groupId=887e94c7-ad74-47f4-a4de-8daf4bb0227f&tenantId=42f7676c-f455-423c-82f6-dc2d99791af7).

### Exercise Instructions

 
#### High level Flow of Events in the Exercise:
1. You should have already submitted your **GitHub Username** during registration.
2. **Setup Prerequisites**. Please, refer to the links reported below:
    1. [Prerequisites for Windows](../prerequisites/prerequisites_win.md)
    2. [Prerequisites for Linux/MacOS](../prerequisites/prerequisites.md)
3. How to launch Jupyter notebook and reach the exercise Jupyter notebooks:
    1. [Instructions to start exercise 2 in Windows](../prerequisites/prerequisites_win.md#exercises---byom-with-tensorflow)
    2. [Instructions to start exercise 2 in Linux/MacOS](../prerequisites/prerequisites.md#exercises---byom-with-tensorflow)
4. Find out your **Participant/Team ID** (in the [bootcamp private Teams channel](https://sap.sharepoint.com/:x:/r/teams/SAPBTP-AISustainabilityBootcamp-SystemProvisionInvitedOnly/Shared%20Documents/%F0%9F%8E%AF%20System%20Provision%20(Invited%20Only)/Credentials.xlsx?d=w5acb57efb6f44351ac7503d1be43f494&csf=1&web=1&e=zvlXAJ) ) that is required as a Suffix to various variables throughout the exercise.
5. Follow the rest of the instructions given in the [two Jupyter notebooks](../src/ai-models/predictive-maintenance/exercises).
6. Once you have gone through the notebooks, we have prepared an extra exercise where you will repeat what you have already done in the notebooks but this time by using SAP AI Launchpad as client. Please, follow the instructions reported in the document [here](./02-ai-and-sustainability/AI210-Exercise02-BYOM_sound_based_pdm_with_SAP_AI_Launchpad_v2.pdf).
7. **(Optional)**. Follow this [manual](../src/sustainable-smart-factory-app/README.md) to deploy and run the sustainable-smart-factory app to your own BTP trial account. The hybrid deployment option is recommended for bootcamp exercise.

## Day 3 Exercises - Maintenance Cost and Sustainability Planning

### Environment

For this exercise, you will work on an SAP Analytics Cloud for Planning tenant. 
For information on how to request system access please refer to the [bootcamp Teams channel](https://teams.microsoft.com/l/channel/19%3AQRr1arwovOFnp4D_1qHdECRWUa8qimdsAuH-nmagcjE1%40thread.tacv2/tab%3A%3A0ff9f779-bcfa-4d9c-8d3a-7cfc7890f5ed?groupId=887e94c7-ad74-47f4-a4de-8daf4bb0227f&tenantId=42f7676c-f455-423c-82f6-dc2d99791af7).

### Exercise Instructions

Please follow the sequence(EP320_Exercise01~04) specified in the [exercises folder](./03-collaborative-enterprise-planning).
The Master and transaction data required to complete the exercise is available at [here](./03-collaborative-enterprise-planning) to download.
Save the SAC artifacts with your Participant/Team ID as Suffix, as described in the [bootcamp private Teams channel](https://sap.sharepoint.com/:x:/r/teams/SAPBTP-AISustainabilityBootcamp-SystemProvisionInvitedOnly/Shared%20Documents/%F0%9F%8E%AF%20System%20Provision%20(Invited%20Only)/Credentials.xlsx?d=w5acb57efb6f44351ac7503d1be43f494&csf=1&web=1&e=zvlXAJ).
