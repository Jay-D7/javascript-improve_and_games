'use strict';

// Define main variables
const secretNumber = Math.trunc(Math.random() * 20) + 1; // Always between 1-20
let score = 20;
let highscore = 0;
document.querySelector('.number').textContent = secretNumber;
const winResizeWindow = document.querySelector('.number');
const note = document.querySelector('.note');

// Select button
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // When there is no input
    document.querySelector('.message').textContent = 'No number⛔️';
  } else if (guess === secretNumber) {
    // When player wins
    document.querySelector('.message').textContent = '🎉 Correct number!';

    document.querySelector('body').style.backgroundColor = '#60b347';
    winResizeWindow.style.width = '30rem';
  } else if (guess > secretNumber) {
    // When guess is too high
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    // When guess is too low
    if (score < 1) {
      document.querySelector('.message').textContent = '📈 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
