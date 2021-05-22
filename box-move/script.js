var boxEL = document.getElementById("box");
var box2EL = document.getElementById("box2");
var curTime = 0;
/**
* dist: total distance to move to the right, unit: px
* time: total time to move to the right, unit: s
*/
function move(dist, time) {
    time = time * 1000;
    var interval = 20; // ms
    var timer = setInterval(() => {
        curTime += interval;
        if (curTime >= time) {
            console.log("time out!");
            clearInterval(timer);
            curTime = 0;
            boxEL.style.left = '0px';
            return;
        }
        boxEL.style.left = Math.floor((curTime / time) * dist) + 'px';
    }, interval);
}

function animationMove() {
    box2EL.classList.add('move');
    setTimeout(() => {
        box2EL.classList.remove('move');
    }, 2500);
}