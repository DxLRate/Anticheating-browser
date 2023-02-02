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
- [x] close the tab by the normal close button [shortcut keys should not work too].(User should only be able to close tab by clicking on Button provided )
- [x]  Internet speed check on extension popup

## Instruction for usage
- for prototype purpose I have implemented the functionalities of this project on one of my deployed project 'https://www.car-rental-app-c2b4f.web.app'. But all the features can be implemented on any specific URL by just changing 'matches' parameter under 'content_scripts' in manifest.json and adjusting some changes in contentscript.  
- For demo purpose I have set the full screen mode to 'f' key but it can be set to click of start test button. 
- If you click on 'details' of first car item window will exit from full screen mode.
- If you try to switch applications or tabs you will get alert warning popup.
- Also if more than one tabs are opened, you will again get warning popup.  
