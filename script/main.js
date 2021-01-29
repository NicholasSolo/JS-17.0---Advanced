"use strict";

let num = 266219;

//получаем элемент со страницы, где будут отображаться первые 2 цифры полученного числа
const numberBox = document.querySelector(".box");

function transform(number) {
  //число, которое функция приняла в качестве параметра, приводим к строке, а потом разбиваем посимвольно в массив
  number = number.toString().split("");

  // перемножаем все цифры в массиве
  let result = number.reduce((res, current) => res * current);

  //возводим полученное число в 3 степень
  result **= 3;
  console.log(result);

  //приводим число к строке и получаем первые две цифры
  result = result.toString().slice(0, 2);
  console.log(result);

  //выводим эти две цифры на экран
  numberBox.textContent = result;
}

transform(num);




//Также можно было осуществить перебор массива и перемножение его элементов вместо reduce с помощью цикла for или for...of:

// num = num.toString().split('') - также приводим число к строке ---> массиву
// let result = 1; - переменной, куда будет записываться рез-т присваиваем 1, т.к. со значением 0 рез-т будет равен 0

// for (let i = 0; i < num.length; i++) {
//   result *= num[i];
// }

// for (let item of num) {
//     result *= item;
// }
