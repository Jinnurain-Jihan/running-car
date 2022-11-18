let carImg=document.getElementById("carimg");
let start=document.getElementById("start");
let stop=document.getElementById("stop");
let carStart;
let m=0;
start.addEventListener("click",function(){
    carStart=setInterval(run,100);
    function run(){
        if(m==1150){
            clearInterval(carStart);
            m=0;
        }else{
            m+=10;
            carImg.style.marginLeft=m+"px";
        }
    }
});
stop.addEventListener("click", function(){
    clearInterval(carStart);
});