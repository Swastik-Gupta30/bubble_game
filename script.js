function makeBubble(){
    var clutter = "";
for(var i=1;i<=119;i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;

}
document.querySelector("#pbtm").innerHTML = clutter;
}
var timer = 60;
var hitrn=0;
function runTimer(){
   var timerint = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timervalue").textContent = timer;
        } else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML =`<h1>Game Over</h1>`;
        }
    },1000);
}
function getnewhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
var score = 0;
function increasescore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}

runTimer();
makeBubble();
getnewhit();

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increasescore();
        makeBubble();
        getnewhit();
    }
});