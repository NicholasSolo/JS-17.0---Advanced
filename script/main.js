"use strict";

const lang = prompt("Выберите язык отображения:", "ru");

// a - через if

if (lang === "ru") {
  console.log(
    "Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье"
  );
} else if (lang === "en") {
  console.log("Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday");
}

// b - через switch-case

switch (lang) {
  case "ru":
    console.log(
      "Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье"
    );
    break;
  case "en":
    console.log(
      "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday"
    );
    break;
}

// c - через многомерный массив

const week = [
  ["Понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"],
  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
];

const output = (lang === 'ru') ? week[0].join(', ') : (lang === 'en') ? week[1].join(', ') : 'Ошибка, повторите ввод';

console.log(output);

 
// Вторая задача

const namePerson = prompt('Ты кто?', '');

(namePerson === 'Артём' || namePerson === 'Артем') ? console.log('Привет, директор') : (namePerson === 'Максим') ? console.log('Привет, преподаватель') : ( namePerson === null || namePerson === '' ) ? console.log('Ошибка, повторите ввод') : console.log(`Привет, ${namePerson}`);


