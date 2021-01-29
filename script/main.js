"use strict";

const num = 266219;

function transform(number) {
  number = number.toString().split("");

  const multipleAll = number.reduce((res, current) => res * current);

  const numPow = multipleAll ** 3;
  console.log(numPow);

  const result = numPow.toString().slice(0, 2);
  console.log(result);
}

transform(num);
