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

const now = new Date();

week.forEach((item) => {
  const container = document.createElement("p");
  container.textContent = item;
  if (item === "Суббота" || item === "Воскресенье") {
    container.classList.add('italic');
  }

  const currentDay = now.toLocaleString('ru', {weekday:'long'}).toLowerCase();
  if (item.toLowerCase() === currentDay) {
    container.classList.add('bold');
  }
  textBox.append(container);
});


