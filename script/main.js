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

