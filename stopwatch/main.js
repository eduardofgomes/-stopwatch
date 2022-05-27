var sec = 0;
var min = 0;
var hour = 0;
var interval;
var btnStart = document.querySelector("#start");


function start(){
    interval = setInterval(watch, 1000);
    btnStart.disabled = true;
}

function stop(){
    clearInterval(interval);
    btnStart.disabled = false;
}

function reset(){
    clearInterval(interval);
    sec = 0;
    min = 0;
    hour = 0;
    document.querySelector("#watch").innerText = '00:00:00';
    btnStart.disabled = false;
}

function twoDigits(digit){
    if(digit < 10) {
        return ('0' + digit);
    }
    else {
        return (digit);
    }
}

function watch(){
    sec++;
    if (sec == 60) {
        min++;
        sec = 0;
        if(min == 60) {
            hour++;
            min = 0;
        }
    }
    document.querySelector("#watch").innerText = twoDigits(hour) + ':' + twoDigits(min) + ':' + twoDigits(sec);
}

