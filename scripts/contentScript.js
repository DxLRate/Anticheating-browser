

console.log("contentScript");
var element = document.documentElement;

// 2.	The browser should open in full screen mode.
const enterFullScreen = ()=> {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    }else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();     // Firefox
    }else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();  // Safari
    }else if(element.msRequestFullscreen) {
      element.msRequestFullscreen();      // IE/Edge
    }
};
let btno = document.getElementsByClassName("car__btn-details");
btno[0].addEventListener("click", function(){
    console.log("open");
    
    enterFullScreen();
});

document.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState == "visible") {
      console.log("tab is active")
    } else {
      window.alert("your test will end if you leave this window");
    }
});


(async () => {
  var response = await chrome.runtime.sendMessage({greeting: "hello"});
  
  if(response.length > 1){
    window.alert("Please close all the tabs before starting the exam");
    
  }
})();

