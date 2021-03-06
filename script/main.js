"use strict";

const clock = document.querySelector(".box");
const clock2 = document.querySelector(".box2");

const time1 = () => {
  const now = new Date();
  const day = now.toLocaleString("ru", { weekday: "long" });
  const date = now.getDate();

  const declOfNum = (number, words) => {  
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
  }

  let month = now.toLocaleString("ru", { month: "long" });
  if (month === "март" || month === "август") {
    month = month + "а";
  } else {
    month = month.slice(0, month.length - 1) + "я";
  }
  const year = now.getFullYear();
  const hour = now.getHours() + declOfNum(now.getHours(), [' час', ' часа', ' часов']);
  const minutes = now.getMinutes() + declOfNum(now.getMinutes(), [' минута', ' минуты', ' минут']);
  const seconds = now.getSeconds() + declOfNum(now.getSeconds(), [' секунда', ' секунды', ' секунд'])

  clock.textContent = `Сегодня ${day[0].toUpperCase() + day.slice(1)}, ${date} ${month} ${year} года, ${hour} ${minutes} ${seconds}`;
}

setInterval(() => {
  time1();
}, 1000);


const time2 = () => {
  const now = new Date();
  const addZero = (arg) => {
    if (arg < 10) {
      return arg = '0' + arg;
    }
    return arg;
  }

  const date = addZero(now.getDate());
  const month = addZero(now.getMonth() + 1);
  const year = now.getFullYear();
  const hour = addZero(now.getHours());
  const minutes = addZero(now.getMinutes());
  const seconds = addZero(now.getSeconds());

  clock2.textContent = date + "." + month + "." + year + " - " + hour + ":" + minutes + ":" + seconds;
}

setInterval(() => {
  time2();
}, 1000);


// комент для себя

// const rightWord = (arg) => {
//   let output = '';
//   if (arg[1] === ' час') {
//     if (arg[0] === 0 || (arg[0] >= 5 && arg[0] <= 20)) {
//       output = arg[0] + (arg[1] + 'ов');
//       return output;
//     } else if (arg[0] === 21 || arg[0] === 1) {
//       output = arg[0] + arg[1];
//       return output;
//     } else {
//       output = arg[0] + (arg[1] + 'а');
//       return output;
//     }
//   } else {
//     if (arg[0] == 1 || arg[0] == 21 || arg[0] == 31 || arg[0] == 41 || arg[0] == 51){
//       output = arg[0] + (arg[1]+'а');
//       return output;
//     } else if (arg[0] >= 2 && arg[0] <= 4 || arg[0] >= 22 && arg[0] <= 24 || arg[0] >= 32 && arg[0] <= 34 || arg[0] >= 42 && arg[0] <= 44 || arg[0] >= 52 && arg[0] <= 54 ) {
//       output = arg[0] + (arg[1]+'ы');
//       return output;
//     } else {
//       output = arg[0] + arg[1];
//       return output;
//     } 
//   }
//  }
