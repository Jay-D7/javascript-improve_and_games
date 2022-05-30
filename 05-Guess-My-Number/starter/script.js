'use strict';

// // #Selecting and manipulating elements
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
const x = function () {};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number';
    // displayMessage('⛔️ No number');
  }
});
