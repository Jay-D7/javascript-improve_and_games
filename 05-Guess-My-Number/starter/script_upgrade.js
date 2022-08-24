'use strict';

// Define main variables
let secretNumber = Math.trunc(Math.random() * 20) + 1; // Always between 1-20
let score = 20;
let highscore = 0;

const winResizeWindow = document.querySelector('.number');

// Select button
const checkNumber = function () {
  document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
      // When there is no input
      document.querySelector('.message').textContent = 'No number⛔️';
    } else if (guess === secretNumber) {
      // When player wins
      document.querySelector('.message').textContent = '🎉 Correct number!';
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#60b347';
      winResizeWindow.style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      //
    } else if (guess > secretNumber) {
      // When guess is too high
      if (score > 1) {
        document.querySelector('.message').textContent = '📈 Too High!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          '😢 You lost the game!';
        document.querySelector('.score').textContent = 0;
      }
    } else if (guess < secretNumber) {
      // When guess is too low
      if (score > 1) {
        document.querySelector('.message').textContent = '📈 Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          '😢 You lost the game!';
        document.querySelector('.score').textContent = 0;
      }
    }
  });
};

checkNumber();

const resetGame = function () {
  document.querySelector('.again').addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    winResizeWindow.style.width = '15rem';
  });
};

resetGame();
