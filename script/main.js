"use strict";

const clock = document.querySelector(".box");
const clock2 = document.querySelector(".box2");

function time1() {
  let now = new Date();
  const day = now.toLocaleString("ru", { weekday: "long" });
  const date = now.getDate();
  let month = now.toLocaleString("ru", { month: "long" });
  if (month === "март" || month === "август") {
    month = month + "а";
  } else {
    month = month.slice(0, month.length - 1) + "я";
  }
  const year = now.getFullYear();
  let hour = now.getHours();
  if (hour === 0 || (hour >= 5 && hour <= 20)) {
    hour = hour + " часов";
  } else if (hour === 21 || hour === 1) {
    hour = hour + " час";
  } else {
    hour = hour + " часа";
  }
  let minutes = now.getMinutes().toString();

  if(minutes == 1 ||minutes == 21 || minutes == 31 || minutes == 41 || minutes == 51){
    minutes = minutes + ' минута';
  } else if (minutes >= 2 && minutes <= 4 || minutes >= 22 && minutes <= 24 || minutes >= 32 && minutes <= 34 || minutes >= 42 && minutes <= 44 || minutes >= 52 && minutes <= 54 ) {
    minutes = minutes + ' минуты';
  } else {
    minutes = minutes + ' минут';
  }
let seconds = now.getSeconds().toString(); 
if(seconds == 1 ||seconds == 21 || seconds == 31 || seconds == 41 || seconds == 51){
  seconds = seconds + ' секунда';
} else if (seconds >= 2 && seconds <= 4 || seconds >= 22 && seconds <= 24 || seconds >= 32 && seconds <= 34 || seconds >= 42 && seconds <= 44 || seconds >= 52 && seconds <= 54 ) {
  seconds = seconds + ' секунды';
} else {
  seconds = seconds + ' секунд';
}
  clock.textContent = `Сегодня ${day[0].toUpperCase() + day.slice(1)}, ${date} ${month} ${year} года, ${hour} ${minutes} ${seconds}`;
}

setInterval(() => {
  time1();
}, 1000);



function time2() {
  let now = new Date();

  let date = now.getDate();
  if (date < 10) {
    date = "0" + date;
  }
  let month = now.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  let year = now.getFullYear();
  let hour = now.getHours();
  if (hour < 10) {
    hour = "0" + hour;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let seconds = now.getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  clock2.textContent =
    date +
    "." +
    month +
    "." +
    year +
    " - " +
    hour +
    ":" +
    minutes +
    ":" +
    seconds;
}

setInterval(() => {
  time2();
}, 1000);
