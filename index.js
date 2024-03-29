var timer = 60;
var score = 0;
var hitVal = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function setHitval() {
    hitVal = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitVal;
}

function countTime() {
    setInterval(function(){
        if(timer === 0)
        {
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</br><span>Your Score: ${score}</span></h1>`;
            return; 
        } 
        timer--;
        document.querySelector("#timer").textContent = timer;
    }, 1000);
}

function makeBubble() {
    var clutter = "";
    
    for(var i = 1; i <= 112; i++)
    {
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;   
}

document.querySelector("#pbtm")
.addEventListener("click",function(details) {
    var userHit = Number(details.target.textContent);
    if(userHit === hitVal)
    {
        increaseScore();
        makeBubble();
        setHitval();
    }
});


setHitval();
countTime();
makeBubble();