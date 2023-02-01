# Online Exam Assessment Extension

One of the most common challenges faced is preventing cheating during online
exams. So this Extension is build to minimize the mal practices during assessment.

## Installation and Set-up

1. Download the Zip file of this repository.
2. or you can clone this repository using git.
- ```git
    git init 
    git add .
    git commit -m "initialization"
    git branch -M main
    git remote add origin 
    ```

## Usage

Now  we are ready to add this project as an extension in our Chrome browser.<br/> 
* First Select More Tools and then choose Extensions from the browser menu. ![](/images/1.png) <br/> 
* After choosing Extensions, it redirects to the extensions page in Chrome. Make sure to enable the Developer mode here. ![](/images/2.png)<br/> 
* Now you need to click the Load unpacked button which will allow us to load our project in the Chrome extension store. <br/> 
* the extension is available in our Chrome extension store. <br/> 
<br/> 
<br/> 

## Features implemented

- [x] 	Extension should work only in selected URLs(test page). 
- [X]  	The browser should open in full screen mode.
- [x]  Pop up should be shown when someone switches between 2 tabs or Application.
- [x]	More than one tab can’t be opened.

## Instruction for usage
- for prototype purpose I have implemented this project on one of my projects 'https://www.car-rental-app-c2b4f.web.app'. But you can can implement all the features on any specific URL by just changing 'matches' parameter under 'content_scripts' in manifest.json.  
- If you click on 'details' of first car item window will go on full screen mode.
- If you try to switch applications or tabs you will get alert warning popup.
- Also if you open more than one tabs you will again get warning popup.  
