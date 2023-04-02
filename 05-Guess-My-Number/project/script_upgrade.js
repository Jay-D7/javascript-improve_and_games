'use strict';

// Define main variables
const guess = document.querySelector('.guess');
let secretNumber = Math.trunc(Math.random() * 20) + 1; // Always between 1-20
let score = 20;
let highscore = 0;
let backgroundBody = document.querySelector('body');
let numberWindowResize = document.querySelector('.number');

// Refactoring query selectors into functions for clearify code
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const showNumber = number => {
  document.querySelector('.number').textContent = number;
};

const setScore = score => {
  document.querySelector('.score').textContent = score;
};

// Select Check button
const checkNumber = function () {
  document.querySelector('.check').addEventListener('click', () => {
    const guessing = Number(guess.value);

    console.log(guess, typeof guess);
    console.log(guessing, typeof guessing);

    // When there is no input
    if (!guessing) {
      displayMessage('No number⛔️');
      // When player wins
    } else if (guessing === secretNumber) {
      displayMessage('🎉 Correct number!');
      showNumber(secretNumber);

      // Styling
      backgroundBody.style.backgroundColor = '#60b347';
      numberWindowResize.style.width = '30rem';

      // Save highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      // When the guess is wrong - Too high or low
    } else if (guessing !== secretNumber) {
      if (score > 1) {
        displayMessage(
          guessing > secretNumber ? '📈 Too High!' : '📉 Too Low!'
        );
        score--;
        setScore(score);
      } else {
        displayMessage('😢 You lost the game!');
        setScore(0);
      }
    }
  });
};
checkNumber();

const resetGame = function () {
  document.querySelector('.again').addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    // Reset fields
    displayMessage('Start guessing...');
    setScore(score);
    showNumber('?');
    guess.value = '';

    // Styling
    backgroundBody.style.backgroundColor = '#222';
    numberWindowResize.style.width = '15rem';
  });
};
resetGame();
