"use strict";

const lang = prompt("Выберите язык отображения:", "ru");
const russian = "Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье";
const english = "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday";

// a - через if

if (lang === "ru") {
  console.log(russian);
} else if (lang === "en") {
  console.log(english);
} else {
  console.log("Ошибка, повторите ввод");
}

// b - через switch-case

switch (lang) {
  case "ru":
    console.log(russian);
    break;
  case "en":
    console.log(english);
    break;
  default:
    console.log("Ошибка, повторите ввод");
}

// c - через многомерный массив

const week = {
  ru: [russian],
  eng: [english],
};

console.log("через многомерный массив:", week[lang].join(""));

// Вторая задача

const namePerson = prompt("Ты кто?", "");

(namePerson === "Артём" || namePerson === "Артем") ? console.log("Привет, директор") : 
(namePerson === "Максим") ? console.log("Привет, преподаватель") : 
(namePerson === null || namePerson === "") ? console.log("Ошибка, повторите ввод") : 
                                             console.log(`Привет, ${namePerson}`);
