"use strict";

const string = prompt('Enter here', '         Если в процессе чтения возникает ошибка, они возвращают полученное до ошибки число        ');

function stringTransform(parameter) {
  if (isFinite(parameter)) {
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


