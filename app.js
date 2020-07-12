var min = 0;
var sec = 0;
var msec = 0;
var minId = document.getElementById("min");
var secId = document.getElementById("sec");
var msecId = document.getElementById("msec");
var interval;
var st;

function timer() {
    msec++;
    msecId.innerHTML = msec;

    if (msec >= 100) {
        sec++;
        secId.innerHTML = sec;
        msec = 0;
    }
    else if (sec >= 60) {
        min++;
        minId.innerHTML = min;
        sec = 0;
    }
}
function start(){
    clearInterval(interval);
    interval = setInterval(timer, 10)
}
function stop(){
    clearInterval(interval);
}
function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minId.innerHTML = min;
    secId.innerHTML = sec;
    msecId.innerHTML = msec;
    st = stop();
}