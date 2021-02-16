"use strict";

const color = document.querySelector("#color");
const change = document.querySelector("#change");

change.addEventListener("click", () => {
  const red = Math.trunc(Math.random() * 255);
  const green = Math.trunc(Math.random() * 255);
  const blue = Math.trunc(Math.random() * 255);
  const outputColor = "#" + red.toString(16) + green.toString(16) + blue.toString(16);

  color.innerHTML = outputColor;
  change.style.color = outputColor;
  document.body.style.backgroundColor = outputColor;
  document.body.style.transition = "0.5s ease-in";
});
