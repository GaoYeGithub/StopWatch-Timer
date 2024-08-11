const milisec = document.querySelector(".miliseconds");
const sec = document.querySelector(".seconds");
const min = document.querySelector(".minutes");
const alarmSound = document.getElementById("alarm-sound");
let miliNum = 0;
let secNum = 0;
let minNum = 1;
let INTERVAL;

function miliseconds() {
  if (miliNum === 0) {
    if (secNum === 0) {
      if (minNum === 0) {
        stop();
        alarmSound.play();
        alert("Time's up!");
        return;
      }
      minNum--;
      min.innerHTML = minNum < 10 ? "0" + minNum : minNum;
      secNum = 59;
    } else {
      secNum--;
    }
    sec.innerHTML = secNum < 10 ? "0" + secNum : secNum;
    miliNum = 99;
  } else {
    miliNum--;
  }
  milisec.innerHTML = miliNum < 10 ? "0" + miliNum : miliNum;
}

function start() {
  clearInterval(INTERVAL);
  INTERVAL = setInterval(miliseconds, 10);
}

function stop() {
  clearInterval(INTERVAL);
}

function reset() {
  clearInterval(INTERVAL);
  miliNum = 0;
  secNum = 0;
  minNum = 1;
  milisec.innerHTML = "00";
  sec.innerHTML = "00";
  min.innerHTML = minNum < 10 ? "0" + minNum : minNum;
}
