"use strict";

const string =
  "   По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.    ";

function stringTransform(parameter) {
  if (typeof parameter !== "string") {
    alert("Ахтунг! Неверный тип данных");
    return;
  } else if (parameter.length > 30) {
    const newString = parameter.trim().slice(0, 30) + "...";
    return newString;
  } else {
    return parameter.trim();
  }
}

console.log(stringTransform(string));
