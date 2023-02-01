

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

function tableCreate() {
    const body = document.body,
          tbl = document.createElement('table');
    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';
  const btn = document.createElement('button');
  btn.style.width = '100px';
  btn.style.height = '50px';
  btn.addEventListener('click', ()=>{
    internetTest();
  });
    for (let i = 0; i < 3; i++) {
      const tr = tbl.insertRow();
      for (let j = 0; j < 2; j++) {
        if (i === 2 && j === 1) {
          break;
        } else {
          const td = tr.insertCell();
          td.appendChild(document.createTextNode(`Cell I${i}/J${j}`));
          td.style.border = '1px solid black';
          if (i === 1 && j === 1) {
            td.setAttribute('rowSpan', '2');
          }
        }
      }
    }
    body.appendChild(btn);
}
  tableCreate();


// document.addEventListener("visibilitychange", (event) => {
//     if (document.visibilityState == "visible") {
//       console.log("tab is active")
//     } else {
//       window.alert("please dont leave");
//     }
// });


(async () => {
  var response = await chrome.runtime.sendMessage({greeting: "hello"});
  // do something with response here, not outside the function
  if(response.length > 1){
    window.alert("Please close all the tabs before starting the exam");
    
  }
})();

