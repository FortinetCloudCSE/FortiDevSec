---
title: "GCP FortiDevSec TEC workshop"
menuTitle: "TECWorkshop Template"
weight: 1
archetype: home
---

### Welcome !!!



***This class will focus on using FortiDevSec to scan applications using both SAST and DAST methods.  You will begin by deploying a FortiGate in front of a Ubuntu server running docker with OWASP Juice shop.***

## Setup and requirements

This hands-on lab lets you do the lab activities yourself in a real cloud environment, not in a simulation or demo environment. It does so by giving you new, temporary credentials that you use to sign in and access Google Cloud for the duration of the lab.

To complete this lab, you need:

* Access to a standard internet browser (Chrome browser recommended).
    >*Note: Use an Incognito or private browser window to run the qwiklabs portion of this lab. This prevents any conflicts between your personal account and the Student account, which may cause extra charges incurred to your personal account.*

* A github (github.com) account.  This is free and as a bonus, you will be able refer back to the code for future work.

* A FortiCloud account.  I have already added you to the FortiCloud IAM portal.  You should have received an email with a password reset link for support.fortinet.com, along with some other useful information.  If you have not already, please go and complete the self-explanatory password reset process.  You will need to use your email and password to log into FortiDevSec.  Two Factor Authentication is used, so you will need to provide an email address so that you can receive tokens during the login process.

* Time to complete the lab---remember, once you start, you cannot pause a lab.


### How to start your lab and sign in to the Google Cloud Console
1. Click the **Start Lab** button. If you need to pay for the lab, a pop-up opens for you to select your payment method. On the left is the **Lab Details** panel with the following:
    * Time remaining
    * Your temporary credentials that you must use for this lab
    * Your temporary project ID
    * Links to additional student resources
2. Open Google Cloud console in new browser tab by clicking the **Open Console** link in **Student Resources**.
    ***Tip:*** Arrange the tabs in separate windows, side-by-side.
    > *Note: If you see the Choose an account dialog, click Use Another Account.*
3. Copy the **GCP Username** and **Password** from the **Lab Details** panel and paste it into the Sign in dialog. Click **Next**.
    > Important: You must use the credentials from the left panel. Do not use your Google Cloud Skills Boost credentials.
    >*Note: Using your own Google Cloud account for this lab may incur extra charges.*
4. Click through the subsequent pages:
    * Accept the terms and conditions.
    * Do not add recovery options or two-factor authentication (because this is a temporary account).
    * Do not sign up for free trials.
5. Open the Cloud Shell in new browser tab by clicking the **Google Cloud Shell** link in the **Student Resources** and log in again using **GCP Username** and **Password** from the **Lab Details** panel. Cloud Shell is a virtual machine that is loaded with development tools. It offers a persistent 5GB home directory and runs on the Google Cloud. Cloud Shell provides command-line access to your Google Cloud resources.

***Important:*** *make sure you are logged in using the temporary student username and you use the temporary qwiklabs project in both web console and cloud shell. Using your own project and username WILL incur charges.*

