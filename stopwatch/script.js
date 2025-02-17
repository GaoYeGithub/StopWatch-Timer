const milisec = document.querySelector(".miliseconds")
const sec = document.querySelector(".seconds")
const min = document.querySelector(".minutes")
const hr = document.querySelector(".hours")

const button = document.querySelector(".start")
let miliNum = 0;
let secNum = 0;
let minNum = 0;
let INTERVAL;
let isRunning = false;

function miliseconds() {
  miliNum++;
  if (miliNum < 10) {
    milisec.innerHTML = "0" + miliNum;
  }
  else {
    milisec.innerHTML = miliNum;
  }

  if (miliNum == 99) {
    miliNum = 0;
    seconds();
  }
}

function seconds() {
  secNum++
  if (secNum < 10) {
    sec.innerHTML = "0" + secNum;
    }
  else {
    sec.innerHTML = secNum;
  }

  if (secNum == 59) {
    secNum = 0;
    minutes();
  }
}

function minutes() {
  minNum++;
  if (minNum < 10) {
    min.innerHTML = "0" + minNum;
  }
  else {
    min.innerHTML = minNum;
  }
}

function hours() {
  hrNum++;
  if (hrNum < 10) {
    hr.innerHTML = "0" + hrNum;
  }
  else {
    hr.innerHTML = hrNum;
  }
}

function start() {
  clearInterval(INTERVAL);
  button.innerHTML = "START"
  INTERVAL = setInterval(() => {
    miliseconds()
  }, 10)
}

function stop() {
  clearInterval(INTERVAL);
  button.innerHTML = "RESUME"
}

function reset() {
  clearInterval(INTERVAL);
  miliNum = 0;
  secNum = 0;
  minNum = 0;
  milisec.innerHTML = "00";
  sec.innerHTML = "00";
  min.innerHTML = "00";
}