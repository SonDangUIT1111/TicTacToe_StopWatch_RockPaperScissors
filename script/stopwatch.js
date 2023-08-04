let isStart = false;
let stt = 1;
var stopwatch = document.querySelector('.js-clock-time');
var startBtn = document.querySelector('.js-start-btn');
var listSplit = document.querySelector('.js-list-split');
var timeoutId = null;
var ms = 0;
var sec = 0;
var min = 0;
 
/* function to start stopwatch */
function start() {
 
    timeoutId = setTimeout(function() {
        ms = parseInt(ms);
        sec = parseInt(sec);
        min = parseInt(min);
 
        ms++;
 
        if (ms == 100) {
            sec = sec + 1;
            ms = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (ms < 10) {
            ms = '0' + ms;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        if (min < 10) {
            min = '0' + min;
        }
 
        stopwatch.innerHTML = min + ':' + sec + ':' + ms;
 
        // calling start() function recursivly to continue stopwatch
        start();
 
    }, 10); // setTimeout delay time 10 milliseconds
}
 
/* function to pause stopwatch */
function pause() {
    clearTimeout(timeoutId);
    startBtn.disabled = false;
}
 
/* function to reset stopwatch */
function reset() {
    ms = 0;
    sec = 0;
    min = 0;
    clearTimeout(timeoutId);
    stopwatch.innerHTML = '00:00:00';
    startBtn.disabled = false;
    listSplit.innerHTML = ``;
    stt = 1;

}



const splitBtn = document.querySelector('.js-split-btn');

const resetBtn = document.querySelector('.js-reset-btn');

startBtn.addEventListener('click', () => {
    if (!isStart)
    {
        start();
        startBtn.innerHTML = `Pause`;
        startBtn.classList.add("pause-btn");
        isStart = true;
    }
    else {
        pause();
        startBtn.innerHTML = `Start`;
        startBtn.classList.remove("pause-btn");
        isStart = false;
    }
});

resetBtn.addEventListener('click', () => {
    reset();
    startBtn.innerHTML = `Start`;
    startBtn.classList.remove("pause-btn");
    isStart = false;
});

splitBtn.addEventListener('click', () => {
    let htmlText = listSplit.innerHTML;
    htmlText += `<div class="split-time stt">${stt}</div>
    <div class="split-time time ">${stopwatch.innerHTML}</div>`;
    listSplit.innerHTML = htmlText;
    stt++;
});

