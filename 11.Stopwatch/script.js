let displayTime = document.getElementById("displayTime");
let timer = null;

let [seconds, minutes, hours] = [0, 0, 0];

function stopwatch() {
    seconds = seconds + 1;
    if (seconds == 60) {
        seconds = 0;
        minutes = minutes + 1;
        if (minutes == 0) {
            minutes = 0;
            hours = hours + 1
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds
    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}


function watchStop(){
    clearInterval(timer);
}
function watchReset(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML= "00:00:00"
}