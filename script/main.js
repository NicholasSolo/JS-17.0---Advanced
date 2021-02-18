"use strict";

const clock = document.querySelector(".box");

let today = new Date();

function time2() {
  let now = new Date();

  let date = now.getDate();
  // if(date){

  // }
  let month = now.getMonth() + 1;
  if (month < 10) {
    month = "0" + (+now.getMonth() + 1);
  }
  let year = now.getFullYear();
  let hour = now.getHours();

  let minutes = now.getMinutes();

  let seconds = now.getSeconds();

  console.log(date, month, year, hour, minutes, seconds);
}

time2();
