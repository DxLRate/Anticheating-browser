var element = document.documentElement;
console.log("closed");
function exitFullScreen() {
    if(element.exitFullScreen) {
      element.exitFullScreen();
    } else if (element.mozCancelFullScreen) {
      element.mozCancelFullScreen();
    } else if (element.webkitexitFullScreen) {
      element.webkitexitFullScreen();
    }
};

let btnc = document.getElementsByClassName("w-25");
btnc[0].addEventListener("click", function(){
    console.log("closed");
    
    exitFullScreen();
});