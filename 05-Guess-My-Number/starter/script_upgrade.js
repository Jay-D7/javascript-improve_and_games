'use strict';

// Define main variables
const number = Math.trunc(Math.random() * 20); // Always between 1-20
let score = 20;
let highscore = 0;

// Select button
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number⛔️';
  }
});
