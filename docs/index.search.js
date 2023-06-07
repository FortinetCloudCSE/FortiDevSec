var relearn_search_index = [
  {
    "content": "Welcome !!! This class will focus on using FortiDevSec to scan applications using both SAST and DAST methods. You will begin by deploying a FortiGate in front of a Ubuntu server running docker with OWASP Juice shop.\nSetup and requirements This hands-on lab lets you do the lab activities yourself in a real cloud environment, not in a simulation or demo environment. It does so by giving you new, temporary credentials that you use to sign in and access Google Cloud for the duration of the lab.\nTo complete this lab, you need:\nAccess to a standard internet browser (Chrome browser recommended).\nNote: Use an Incognito or private browser window to run the qwiklabs portion of this lab. This prevents any conflicts between your personal account and the Student account, which may cause extra charges incurred to your personal account.\nA github (github.com) account. This is free and as a bonus, you will be able refer back to the code for future work.\nA FortiCloud account. I have already added you to the FortiCloud IAM portal. You should have received an email with a password reset link for support.fortinet.com, along with some other useful information. If you have not already, please go and complete the self-explanatory password reset process. You will need to use your email and password to log into FortiDevSec. Two Factor Authentication is used, so you will need to provide an email address so that you can receive tokens during the login process.\nTime to complete the lab—remember, once you start, you cannot pause a lab.\nHow to start your lab and sign in to the Google Cloud Console Click the Start Lab button. If you need to pay for the lab, a pop-up opens for you to select your payment method. On the left is the Lab Details panel with the following: Time remaining Your temporary credentials that you must use for this lab Your temporary project ID Links to additional student resources Open Google Cloud console in new browser tab by clicking the Open Console link in Student Resources. Tip: Arrange the tabs in separate windows, side-by-side. Note: If you see the Choose an account dialog, click Use Another Account.\nCopy the GCP Username and Password from the Lab Details panel and paste it into the Sign in dialog. Click Next. Important: You must use the credentials from the left panel. Do not use your Google Cloud Skills Boost credentials. Note: Using your own Google Cloud account for this lab may incur extra charges.\nClick through the subsequent pages: Accept the terms and conditions. Do not add recovery options or two-factor authentication (because this is a temporary account). Do not sign up for free trials. Open the Cloud Shell in new browser tab by clicking the Google Cloud Shell link in the Student Resources and log in again using GCP Username and Password from the Lab Details panel. Cloud Shell is a virtual machine that is loaded with development tools. It offers a persistent 5GB home directory and runs on the Google Cloud. Cloud Shell provides command-line access to your Google Cloud resources. Important: make sure you are logged in using the temporary student username and you use the temporary qwiklabs project in both web console and cloud shell. Using your own project and username WILL incur charges.\n",
    "description": "",
    "tags": null,
    "title": "GCP FortiDevSec TEC workshop",
    "uri": "/index.html"
  },
  {
    "content": "This procedure will take you through the process of creating a Github Token. This token will authenticate you to github.com. This is required in order to push or pull information from a tools server to github.com.\nFrom your github.com home page, click the drop down next to your profile picture on the top right of the screen and select Settings On the left side of the settings screen, scroll all the way to the bottom of the list of options and select “\u003c\u003eDeveloper settings” from the menu. Again on the left side of the screen click the drop down next to “Personal access tokens” and select “Tokens (classic)” Click the “Generate new token box. This will give two options. Chose “Generate new token (classic). You will be asked to input your password. Do so. On the following screen, add a useful note and then enable “repo”, “workflow”, “write:packages” and “delete:packages” by clicking on the main arrow on the top left the box of the options and select “Generate token” at the bottom of the list. On the next screen you are presented with a token. This is the only time you will be able to copy it. Please do so and save it in a safe place where you can access it easily. ",
    "description": "",
    "tags": null,
    "title": "Task 1 - Create Github Token",
    "uri": "/01gettingstarted/2_task1.html"
  },
  {
    "content": " Navigate to “https://fortidevsec.forticloud.com/\" and Login using your support.fortinet.com credentials. Make sure that “IAM Login” is selected and input the account ID (from the original invitation email) as well as your username and password. From the Summary page click on “+ New Application” Input a the name of the application as “Student” for step 1. The name of the application is arbitrary, but this is a shared environment, and we need to make sure we are all working on our own application. Steps 2 and 3 will be left at the default settings for the purposes of this lab. Step 2 askes a couple of simple questiosn about the application in order to properly weight threats. This becomes important in production where many applications may be present but some are mission critical and others may be less so. Step 3 allows you to activate the Jira plugin, which we will not be using for this lab.\nIn Step 4, click on “SCANNER CONFIG” this will download a file named “fdevsec.yaml”, which will be used in GitHub to properly route scan requests to this FortiDevSec Instance. Once that has been downloaded, click “Done”. The result will be a newly onboarded application which is “Not scanned yet” From Google Cloud Shell navigate to the cloned directory from lab 1 and add a new file named “fdevsec.yaml” using nano.\nls cd FortiDevSecJuice/ ls nano fdevsec.yaml Open the downloaded version of “fdevsec.yaml” with your favorite text editor and copy the text. Next, you will paste that information into the newly opened nano file in the cloud shell. Once the text has been pasted, in order to save the file, type ctrl+o, hit enter. Finally, type ctrl+x to exit. Note: I have partially covered the uuid’s in the images to make the point that this information should not be shared publicly. In this lab, we will be posting these files to a public repository. That is ok in this instance, because this FortiDevSec envrionment will be deleted shortly after the lab. This would not be a best practice in production.\nNow that we have added the appropriate fdevsec.yaml file to our repository, we need to enable GitHub Actions. In order to accomplish this, we will add a directory named “.github” to our repository with a sub-directory named “workflows”. We will then add a file called main.yaml using nano. mkdir .github cd .github/ mkdir workflows cd workflows/ nano main.yaml Copy the below code and paste it information into the newly opened nano file in the cloud shell. Once the text has been pasted, in order to save the file, type ctrl+o, hit enter. Finally, type ctrl+x to exit. --- # This is a basic workflow to help you get started with Actions name: FortiDevSec Scanner CI # Controls when the workflow will run on: # Triggers the workflow on push or pull request events but only for the main branch push: branches: [ main ] pull_request: branches: [ main ] # Allows you to run this workflow manually from the Actions tab workflow_dispatch: # A workflow run is made up of one or more jobs that can run sequentially or in parallel jobs: # This workflow contains a single job called \"build\" build: # The type of runner that the job will run on runs-on: ubuntu-latest # Steps represent a sequence of tasks that will be executed as part of the job steps: # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it - uses: actions/checkout@v2 # Runs a set of commands using the runners shell - name: SAST run: | docker pull registry.fortidevsec.forticloud.com/fdevsec_sast:latest docker run --rm --mount type=bind,source=$PWD,target=/scan registry.fortidevsec.forticloud.com/fdevsec_sast:latest We will first need to add some information about ourselves using “git config”. We are issuing the “–global” version of this configuration, but we could leave that out and only set these parameters for this repo. cd ../.. git config --global user.email \u003cthe email address you used to create the github account\u003e git config --global user.name \u003cyour github username\u003e Next we will update commit and push the changes we have made. git status git add . git commit -m 'adding necessary files and directories for FortiDevSec' git push The resulting output should look something like this: Now go back to your Github.com repository. You should see the new folder and the new “fdevsec.yaml” file. On the same site, click on the “Actions” tab at the top of the repo. You should see a successful workflow run. In my example, you can see that I had one failed and one successful. If you want more details, you can click into the runs. Navigate back to “https://fortidevsec.forticloud.com” and log in. You should now see some information under the application. From FortiDevSec click into the application and view the diiferent scans that wer run. Note that we did not have to configure these scans specifically. FortiDevsec initiated these scans, based on the content of the repository. Congratulations! You have finished Lab 2. You are now ready to proceed to Lab 3.\n",
    "description": "",
    "tags": null,
    "title": "Task 1 - Log into FortiDevSec and add your application",
    "uri": "/02chapter2/2_task1.html"
  },
  {
    "content": "By clicking on the “Vulnerabilities” link in the IaC box, you can drill in to the issues found. Note the filters on the left side of the screen and the sort functionality on the right.\nLet’s dig into the vulnerability labeled as “Firewall rule allows ingress traffic from multiple addresses on the public internet” by clicking on it. This will cause a pop up with more detail to appear on the right side of the screen. From here we get more detail on the actual issue. We can see that it was raised against main.tf, and that there are two occurrences of the error, and we are given the line numbers on which the errors can be found. We can go back to our Google cloud shell and open the file to fix the error, using the “nano main.tf” command. With nano open, we can type ctrl+shift+- this will open a prompt at the bottom of the screen. Type the line number from the vulnerability and hit enter. This will move your cursor to the appropriate line (86). We can see that this is a firewall rule applied to the untrust network, which is allowing all protocols from all IP sources (0.0.0.0/0). We have a couple of options. We can either choose to accept the risk, or modify the code to limit the source IP addresses allowed. Accept risk:\nModify Code: Change line 86 so that “source_ranges = [“1.2.3.4/32”]” Once don the firewall rule should look like below:\n# Firewall Rule External resource \"google_compute_firewall\" \"allow-all-fgt\" { name = \"allow-fgt-${random_string.random_name_post.result}\" network = google_compute_network.untrust.name allow { protocol = \"all\" } allow { protocol = \"icmp\" } source_ranges = [\"1.2.3.4/32\"] target_tags = [\"allow-fgt\"] } Now that we have made the modification, locally, we need to push it to our Github repository. This will cause Github actions to deploy a docker host on ubuntu and run a scan against the application, ultimately reporting the results back to FortiDevSec. git status git add main.tf git commit -m 'changed untrust gcp firewall rule to limit protocols' git push The outputs should look something like this:\nOnce the scan is complete, go back to FortiDevSec and check that the number of vulnerabilities is reduced and that the “Firewall rule allows ingress traffic from multiple addresses on the public internet” vulnerability is no longer present. ",
    "description": "",
    "tags": null,
    "title": "Task 1 - Look at Vulnerabilities from the first scan ",
    "uri": "/03chapter3/2_task1.html"
  },
  {
    "content": "In this task, you will fork an application repository from my github.com account into your own.\nIn your favorite browser, paste the below link into the URL bar. https://github.com/fortidg/FortiDevSecJuice.git At the top of the window, click on Fork. On the following page, select “Create fork” ",
    "description": "",
    "tags": null,
    "title": "Task 2 - Fork the Repo",
    "uri": "/01gettingstarted/3_task2.html"
  },
  {
    "content": "As we saw during the initial scan, the presence of the “con_sql.js” file instigated a NodeJS scan. Initially, that did not return any errors. Let’s modify that file to add a vulnerability.\nUsing nano add the below ling to the con_sql.js file. var password = \"123Password123\" Push the change to our Github repository. git status git add con_sql.js git commit -m 'added password to con_sql.js to trigger vulnerability' git push **After the push and subsequent scan is complete, you should notice a new vulnerability for NodeJS. Congratulations! You have finished Lab 3. You are now ready to proceed to Lab 4.\n",
    "description": "",
    "tags": null,
    "title": "Task 2 - Introduce a new vulnerability",
    "uri": "/03chapter3/3_task2.html"
  },
  {
    "content": "Now that you have your own copy of the repo, you can modify it as you see fit. For this Lab, we are going to Clone the repo into the Google Cloud Shell.\nFrom your newly forked repository on Github.com, select the “\u003c\u003e Code” dropdown. Click on the copy button to copy the HTTPS path to this repo. Activate the GCP Cloud Shell by clicking on the cursor icon at the top right side of the Console screen. Click Continue when asked. This will open a cloud shell at the bottom of the screen. At the cloud shell prompt, clone YOUR repository. The below command is a\ngit clone https://github.com/\u003cyour github username\u003e/FortiDevSecJuice.git The result should look something like this Congratulations! You have finished Lab 1. You are now ready to proceed to Lab 2.\n",
    "description": "",
    "tags": null,
    "title": "Task 3 - Clone the Repo in Google cloud shell",
    "uri": "/01gettingstarted/4_task3.html"
  },
  {
    "content": "LAB 1 - Get (git) Ready This lab will take you through the process of creating a User Token for Github and then a few other administrative tasks to prepare the environment. More advanced users, already familiar with Github, can just use the link from Task 2 below to fork the repository and then move on to LAB 2.\n",
    "description": "",
    "tags": null,
    "title": "Get (git) Ready",
    "uri": "/01gettingstarted.html"
  },
  {
    "content": "In this lab, we will onboard your new application into FortiDevSec. We will also update your repository so that Github Actions will kick off a FortiDevSec application scan upon successful git pull or git push. This is separated into it’s own lab to highlight how simple the process is.\n",
    "description": "",
    "tags": null,
    "title": "Onboard Application",
    "uri": "/02chapter2.html"
  },
  {
    "content": "Now that we have successfully onboarded our application into FortiDevSec, we will go take a look at the findings from the first scan as well as add a few bits of code to cause new errors.\n",
    "description": "",
    "tags": null,
    "title": "Ch 3 - Break stuff (and fix it)",
    "uri": "/03chapter3.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags.html"
  }
]
