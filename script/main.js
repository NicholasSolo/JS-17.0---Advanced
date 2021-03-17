"use strict";

class DomElement {
  constructor(params) {
    this.selector = params.selector;
    this.height = params.height;
    this.width = params.width;
    this.bg = params.bg;
    this.fontSize = params.fontSize;
    this.position = params.position;
  }
  generateElem() {
    let newElem;
    if (this.selector[0] === ".") {
      newElem = document.createElement("div");
      newElem.classList.add(this.selector.slice(1));
    } else if (this.selector[0] === "#") {
      newElem = document.createElement("p");
      newElem.id = this.selector.slice(1);
    }
    newElem.style.cssText = `height: ${this.height};  width: ${this.width};  background-color: ${this.bg};  font-size: ${this.fontSize}; position: ${this.position}`;
    document.querySelector("body").append(newElem);
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const test = new DomElement({
    selector: ".block",
    height: "100px",
    width: "100px",
    bg: "green",
    position: "absolute",
  });
  test.generateElem();
});

document.addEventListener("keydown", (event) => {
const block = document.querySelector(".block");

  let domStyle = getComputedStyle(block);
  let top = parseInt(domStyle.top);
  let left = parseInt(domStyle.left);
  switch(event.key){
    case "ArrowUp":
      block.style.top = top - 10 + "px";
      break;
    case "ArrowDown":
      block.style.top = top + 10 + "px";
      break;
    case "ArrowRight":
      block.style.left = left + 10 + "px";
      break;
    case "ArrowLeft":
      block.style.left = left - 10 + "px";
      break;
  }
});