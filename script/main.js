"use strict";

function DomElement(params) {
  this.selector = params.selector;
  this.height = params.height;
  this.width = params.width;
  this.bg = params.bg;
  this.fontSize = params.fontSize;
  this.position = params.position;
}

DomElement.prototype.generateElem = function () {
  const parent = document.querySelector("body");

  if (this.selector[0] === ".") {
    const newElem = document.createElement("div");
    newElem.classList.add(this.selector.slice(1));
    newElem.style.cssText = `height: ${this.height};  width: ${this.width};  background-color: ${this.bg};  font-size: ${this.fontSize}; position: ${this.position}`;
    newElem.style.color = "red";
    parent.append(newElem);
  } else if (this.selector[0] === "#") {
    const newElem = document.createElement("div");
    newElem.id = this.selector.slice(1);
    newElem.style.cssText = `height: ${this.height};  width: ${this.width};  background-color: ${this.bg};  font-size: ${this.fontSize}; position: ${this.position}`;
    newElem.style.color = "red";
    parent.append(newElem);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const test = new DomElement({
    selector: ".block",
    height: "100px",
    width: "100px",
    bg: "green",
    fontSize: "20px",
    position: "absolute",
  });
  test.generateElem();

  document.querySelector("body").addEventListener("keydown", (event) => {
    console.log(event);
    const block = document.querySelector(".block");

    function move() {
      if (event.code === "ArrowUp") {
        block.style.top = "100px";
        move();
      } else if (event.code === "ArrowDown") {
        block.style.bottom = "100px";
        move();
      } else if (event.code === "ArrowLeft") {
        block.style.left = "100px";
        move();
      } else if (event.code === "ArrowRight") {
        block.style.right = "100px";
        move();
      } else {
        alert("use arrows");
      }
    }
    move();
  });
});
