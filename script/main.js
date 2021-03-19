"use strict";

const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

const man = document.querySelector(".man");
const plane = document.querySelector(".plane");

let count = 0;
let requestID;

function flyAnimate() {
  requestID = requestAnimationFrame(flyAnimate);
  count++;

  if (count < 350) {
    man.style.top = count + "px";
    plane.style.left = count + "px";
  } else if (count < 500) {
    plane.style.left = count + "px";
  } else {
    cancelAnimationFrame(requestID);
  }
}
let animate = false;

const initAnimation = () => {
  if (!animate) {
    requestID = requestAnimationFrame(flyAnimate);
    animate = true;
  } else {
    animate = false;
    cancelAnimationFrame(requestID);
  }
};
startBtn.addEventListener("click", () => {
  initAnimation();
});
resetBtn.addEventListener("click", () => {
  if (animate) initAnimation();
  count = 0;
  man.style.top = count + "px";
  plane.style.left = count + "px";
});

















