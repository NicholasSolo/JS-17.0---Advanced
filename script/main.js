"use strict";

function generateOddNumber(a, b) {
  let temp = Math.ceil(Math.random() * (a - b) + b);
  if (temp % 2 == 0) {
  generateOddNumber(a, b);
  } else {
  console.log(temp);
  }
}

generateOddNumber(1,5);
generateOddNumber(1, 100);
generateOddNumber(0, -10);
generateOddNumber(-7, -3);
generateOddNumber(-100, 100);
generateOddNumber(1, -1);
generateOddNumber(10,0);
generateOddNumber(10,-10);





