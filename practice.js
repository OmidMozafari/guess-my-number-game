"use strict";

// understanding the problem
// how can we get the value of the input? answer: using input.value
// how can we generate a random number ? answer: using the random method
// check the random number with the input number ?
// how to make the score and high score dynamic ?
// how to saved the high score ?
// how to reset the score and high scores ?
// how to change the bakcround color to green when the user guessed the real number ?

// diving the problems into sub-problems
// get the value of the input
// use the random method to generate a number from 1 up to 20 dynamically
// use if and else to check the random number with the user input number
// declare variables to store the score and high score
// for score - 1 from 20 if the user guessed wrong
// reset the score and high score when the user clicked the again button
// change the style of backround to green color

const body = document.body;
const againButton = document.getElementsByClassName("again");
const inputNum = document.getElementById("inputNumber");
const checkButton = document.getElementById("checkButton");
const score = document.getElementById("score");

let currentScore = 20;

score.innerHTML = currentScore;

const highScore = document.getElementById("highScore");
const guessingPara = document.getElementById("guessingPara");

guessingPara.innerText = "Start guesssing...";

let randomNumber = Math.trunc(Math.random() * 21);
checkButton.addEventListener("click", function checkGuess() {
  let inputNumber = Number(inputNum.value);
  if (randomNumber === inputNumber) {
    body.style.backgroundColor = "green";
    guessingPara.innerText = "🎉 Correct Number!";
    highScore.innerText = currentScore;
  } else {
    // inputNum.value = ""; FIX ME
    currentScore--;
    score.innerHTML = currentScore;
  }
  if (inputNumber < randomNumber) {
    guessingPara.innerText = "📉 Too low!";
  } else if (inputNumber > randomNumber) {
    guessingPara.innerText = "📈 Too high!";
  }

  if (currentScore === 0) {
    guessingPara.innerText =
      "💥 You lost the game! \n Press again button if you \n want to play again";
    checkButton.removeEventListener("click", checkGuess);
  }
});
