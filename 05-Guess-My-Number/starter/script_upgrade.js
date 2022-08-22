'use strict';

// Define main variables
const secretNumber = Math.trunc(Math.random() * 20) + 1; // Always between 1-20
let score = 20;
let highscore = 0;
document.querySelector('.number').textContent = secretNumber;

// Select button
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // When no input
    document.querySelector('.message').textContent = 'No number⛔️';
  } else if (guess === secretNumber) {
    // When player wins
    document.querySelector('.message').textContent = '🎉 Correct number!';
  } else if (guess > secretNumber) {
    // When number is too high
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    // When number is too low
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
