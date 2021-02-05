"use strict";

function isNumber(number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
}

function guessNumber() {
  let number = 34;
  let attemptsCounter = 10;

  function guessNumberInner() {
    let userAnswer = prompt("Угадайте число от 1 до 100!", "");

    if (userAnswer === null) {
      alert("Игра окончена");
      return;
    } else if (!isNumber(userAnswer) || userAnswer > 100 || userAnswer < 0) {
      alert("Введите число от 1 до 100!");
      guessNumberInner();
    } else if (userAnswer == number) {
      let repeat = confirm("Угадали! Сыграем еще?");
          if (repeat) {
            attemptsCounter = 10;
            number = Math.ceil(Math.random() * (1 - 100) + 100);
            guessNumberInner();
          } else {
            alert("Приходите еще!");
          }
    } else if (userAnswer > number) {
      alert(
        `Загаданное число меньше. У вас осталось ${--attemptsCounter} попыток`
      );
      console.log("Загаданное число:", number); // указал для демонстрации рандома после первого выигрыша
      guessNumberInner();
    } else if (userAnswer < number) {
      alert(
        `Загаданное число больше. У вас осталось ${--attemptsCounter} попыток`
      );
      console.log("Загаданное число:", number); // указал для демонстрации рандома после первого выигрыша
      guessNumberInner();
    } else {
      alert("Что-то пошло не так");
      return;
    }
  }
  return guessNumberInner;
}

let game = guessNumber();
game();
