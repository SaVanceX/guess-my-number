'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const bodyColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;

  console.log();
};
const bodyWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
const currentScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const guessScore = function () {
  return Number(document.querySelector('.guess').value);
};
document.querySelector('.check').addEventListener('click', function () {
  // when there is no input
  if (!guessScore()) {
    displayMessage('🍅 No Number!');
    // when player wins
  } else if (guessScore() === secretNumber) {
    displayMessage('🥳 Correct Number!');
    displayNumber(secretNumber);
    bodyColor('#60b347');
    bodyWidth('30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when guess is too high
  } else if (guessScore() !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guessScore() > secretNumber ? ' 📈Too High!' : '📉Too Low!'
      );
      score--;
      currentScore(score);
    } else {
      displayMessage('💥You lose the game!');
      currentScore(0);
    }
  }
});

// select again and attach click event listener
document.querySelector('.again').addEventListener('click', function () {
  console.log('Restart Game');
  secretNumber = secretNumber;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  currentScore(score);
  displayNumber('?');
  bodyColor('#1c1c1b');
  bodyWidth('15rem');
});
