"use strict";

const textBox = document.querySelector(".box");

const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

const showWeek = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    textBox.innerHTML += arr[i] + "<br/>";

    if (arr[i] == "Воскресенье") {
      textBox.style.fontFamily = "italic";
    }
  }
};

showWeek(week);

var today = new Date();
var weekday = today.getUTCDay();

// const showWeek = function (arr) {
//   for (let prop of arr) {
//     textBox.innerHTML += prop + '<br/>';

//     if (prop == 'Суббота' ) {
//       textBox.style.fontStyle = 'italic';
//       prop.pop();
//     }
//   }

// };





















function generateOddNumber(a, b) {
  let temp = Math.ceil(Math.random() * (a - b) + b);
  if (temp % 2 == 0) {
  generateOddNumber(a, b);
  } else {
  console.log(temp);
  }
}

generateOddNumber(1,5);
generateOddNumber(1, 100);
generateOddNumber(0, -10);
generateOddNumber(-7, -3);
generateOddNumber(-100, 100);
generateOddNumber(1, -1);
generateOddNumber(10,0);
generateOddNumber(10,-10);





