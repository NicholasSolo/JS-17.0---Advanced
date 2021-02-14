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

let now = new Date();

week.forEach((item) => {
  let container = document.createElement("p");
  textBox.append(container);
  container.innerHTML = item;
  if (item === "Суббота" || item === "Воскресенье") {
    container.style.fontStyle = "italic";
  }
  if (item.toLowerCase() === now.toLocaleString('ru', {weekday:'long'}).toLowerCase()) {
    container.style.fontWeight = "bold";
  }
});


