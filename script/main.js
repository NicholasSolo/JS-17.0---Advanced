"use strict";

let arr = [
  "2343434",
  "3434231",
  "4444343424",
  "10009878",
  "5663422424",
  "43331345",
  "22220099899",
];

function filterArr(arr) {
  let result = arr.filter((item) => {
    if (item[0] === "2" || item[0] === "4") {
      return item;
    }
  });

  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}

filterArr(arr);

//вывод простого числа

newIteration: for (let i = 1; i <= 100; i++) {
  if (i === 1) {
    continue newIteration;
  }
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      continue newIteration;
    }
  }
  console.log(i + " -" + " Делители этого числа 1 и " + i);
}

// function isNumber(number) {
//   return !isNaN(parseFloat(number)) && isFinite(number);
// }

// function isSimple(number) {
//   if (isNumber(number)) {
//   }
// }

// console.log(isSimple());

let a = 50;

function funcMath() {
  let a = 10;
  return function () {
    console.log(a * a);
  };
}

const mathPow = funcMath();
mathPow();
