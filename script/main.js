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
    newElem.style.color = "red";
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

document.querySelector("body").addEventListener("keydown", (event) => {
    move(event);
});

function move(event) {
const block = document.querySelector(".block");

  if (event.code === "ArrowUp") {
    block.style.top = "-10px";
  } else if (event.code === "ArrowDown") {
    block.style.bottom = "-10px";
  } else if (event.code === "ArrowLeft") {
    block.style.left = "-10px";
  } else if (event.code === "ArrowRight") {
    block.style.right = "-10px";
  } else {
    alert("use arrows");
  }
}