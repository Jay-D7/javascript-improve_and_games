'use strict';

function logger() {
  console.log('Start');
}
// logger();

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //Important All - gives you access to nodeList

console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].textContent);

// const openModal = function () {
//   modal.classList.add('hidden');
// };
