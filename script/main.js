"use strict";

function isNumber(number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
}

function guessNumber() {
  const number = Math.ceil(Math.random() * (1 - 100) + 100);
  let attemptsCounter = 10;

  function guessNumberInner() {
    if (attemptsCounter < 1) {
      let repeatLose = confirm("Ты проиграл! Попробуешь еще?");
      if (repeatLose) {
        attemptsCounter = 10;
        guessNumberInner();
      } else {
        alert("Возвращайся");
      }
      return;
    }

    let userAnswer = prompt("Угадайте число от 1 до 100!", "");

    if (userAnswer === null) {
      alert("Игра окончена");
      return;
    } else if (!isNumber(userAnswer) || userAnswer > 100 || userAnswer < 0) {
      alert("Введите число от 1 до 100!");
      guessNumberInner();
    } else if (userAnswer == number) {
      let repeatWin = confirm("Угадали! Сыграем еще?");
            if (repeatWin) {
                attemptsCounter = 10;  // вот тут не получалось. После этой строки я просто вызывал guessNumber() и скрипт завершался. 
                //После присвоения результата выполнения guessNumber в новую переменную и последующего ее вызова все ок. Это правильно?
                let newGame = guessNumber();
                newGame();
            } else {
                alert("Приходите еще!");
            }
    } else if (userAnswer > number) {
      alert(`Загаданное число меньше. Осталось попыток: ${--attemptsCounter}`);
      console.log("Загаданное число:", number); // указал для демонстрации рандома после первого выигрыша
      console.log(attemptsCounter);
      guessNumberInner();
    } else if (userAnswer < number) {
      alert(`Загаданное число больше. Осталось попыток: ${--attemptsCounter}`);
      console.log("Загаданное число:", number); // указал для демонстрации рандома после первого выигрыша
      console.log(attemptsCounter);
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

