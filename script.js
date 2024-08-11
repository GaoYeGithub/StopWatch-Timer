const milisec = document.querySelector(".miliseconds");
const secInput = document.querySelector(".input-seconds");
const minInput = document.querySelector(".input-minutes");
const alarmSound = document.getElementById("alarm-sound");
let miliNum = 0;
let secNum = parseInt(secInput.value);
let minNum = parseInt(minInput.value);
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
      minInput.value = minNum < 10 ? "0" + minNum : minNum;
      secNum = 59;
    } else {
      secNum--;
    }
    secInput.value = secNum < 10 ? "0" + secNum : secNum;
    miliNum = 99;
  } else {
    miliNum--;
  }
  milisec.innerHTML = miliNum < 10 ? "0" + miliNum : miliNum;
}

function start() {
  minNum = parseInt(minInput.value);
  secNum = parseInt(secInput.value);
  clearInterval(INTERVAL);
  INTERVAL = setInterval(miliseconds, 10);
}

function stop() {
  clearInterval(INTERVAL);
}

function reset() {
  clearInterval(INTERVAL);
  miliNum = 0;
  secNum = parseInt(secInput.value);
  minNum = parseInt(minInput.value);
  milisec.innerHTML = "00";
}
