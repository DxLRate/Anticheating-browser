
document.onkeydown = function (e) 
 {
  return false;
 }
// document.oncontextmenu = function (e)        //check for the right click
// {
//     return false;
// }
// document.ondragstart = function (e)
// {
//     return false;
// }



const btnint = document.getElementById('ichk');
btnint.addEventListener('click', function(){
    const connection = navigator.connection;
    if(connection.downlink > 8){
        btnint.innerText = "Success";
    }else {
        window.alert("internet speed too slow, please switch to fast internet");
    }
});

// const btnaudio = document.getElementById('audiochk');
// btnaudio.addEventListener('click', function(){
//     console.log("audio");
// });




