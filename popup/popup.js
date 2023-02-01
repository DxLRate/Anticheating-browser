
// document.onkeydown = function (e) 
//  {
//   return false;
//  }
// document.oncontextmenu = function (e)        //check for the right click
// {
//     return false;
// }
// document.ondragstart = function (e)
// {
//     return false;
// }

function toggleFullScreen() {
    console.log("full screen");
    var docElm = document.documentElement;
    if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        }
        else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        }
        else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        }
    }
    else {


        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }



    }
}

const btnint = document.getElementById('ichk');
btnint.addEventListener('click', function(){
    const connection = navigator.connection;
    if(connection.downlink > 8){
        btnint.innerText = "Success";
    }else {
        window.alert("internet speed too slow, please switch to fast internet");
    }
});

const btnaudio = document.getElementById('audiochk');
btnaudio.addEventListener('click', function(){
    console.log("audio");
});




