

console.log("contentScript");
var element = document.documentElement;

// Enter Full screen
const enterFullScreen = () => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();     // Firefox
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();  // Safari
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();      // IE/Edge
  }
  document.onkeydown = function (e) {
    return false;
  }
  document.oncontextmenu = function (e)        //check for the right click
  {
    return false;
  }
  document.ondragstart = function (e) {
    return false;
  }
};

// Exit full screen
function exitFullScreen() {
  if (document.exitFullScreen) {
    document.exitFullScreen();
  } else if (element.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (element.webkitexitFullScreen) {
    document.webkitexitFullScreen();
  }
};
document.onkeydown = function (e) {
  e = e || window.event;
  var key = e.which || e.keyCode;
  if (key === 70) {
    if (!document.fullscreenElement) {
      enterFullScreen();
    }
  }
};
let btnc = document.getElementsByClassName("car__btn-details");
btnc[0].onclick = function () {
  console.log("closed");
  if (document.fullscreenElement) {
    document.exitFullscreen();
    window.close();
  }
}

// Tabs or application switching restriction
document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState == "visible") {
    console.log("tab is active")
  } else {
    if (document.fullscreenElement) { document.exitFullscreen(); }
    alert("your test will end if you leave this window");
  }
});

// Requirement check
chrome.runtime.sendMessage({ type: "requirementsCheck" }, function (response) {
  if (!response.internetStability) {
    window.alert("Connection is not stable.");
  }
  if (!response.audio) {
    window.alert("Please allow microphone.");
  }
  if (!response.camera) {
    window.alert("Please allow camera.");
  }
});

// more than one tabs open restriction
(async () => {
  var response = await chrome.runtime.sendMessage({ type: "hello" });

  if (response.length > 1) {
    window.alert("Please close all the tabs before starting the exam");

  }
})();



