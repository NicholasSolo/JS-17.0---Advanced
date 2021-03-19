"use strict";

const input = document.getElementById("input");
const output = document.getElementById("output");

function debounce(func, time) {
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && this.lastCall - previousCall <= time) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => func(args), time);
  };
}
const textDelay = () => {
  output.textContent = input.value;
};
input.addEventListener("input", debounce(textDelay, 500));