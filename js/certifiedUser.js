let prevPos = window.pageYOffset;


window.onscroll = function(){
    let currentPos = window.pageYOffset;
    if(prevPos > currentPos){
        document.getElementById("mainNav").style.top = "0";
    }else{
        document.getElementById("mainNav").style.top = "-100px"
    }
    prevPos = currentPos;
}