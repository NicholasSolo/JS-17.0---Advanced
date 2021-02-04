"use strict";

const string = prompt('dewfdwef');

function stringTransform(parameter) {
  if (isFinite(parameter) || Number.isNaN(parameter) || typeof parameter === ('object' || 'null')) {
    alert("Ахтунг! Неверный тип данных");
    return;
  }
  
  let trimmedString = parameter.trim();

  if (trimmedString.length > 30) {
    let result = trimmedString.slice(0, 30) + "...";
    return result;
  } else {
    return trimmedString;
  }
}

console.log(stringTransform(string));


