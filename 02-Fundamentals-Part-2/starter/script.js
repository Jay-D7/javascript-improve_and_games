'use strict';

///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive 💪🏻');

// CANT USE SOME WORDS FOR VARIABLES
// const interface = 'Audio';
// const private = 534;

///////////////////////////////////////
// Functions
function logger() {
  console.log('My name is Jacob');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23'); // Built-in function
// console.log('') // Built-in function

//
// LECTURE: Functions
function describeCountry(country, population, capitalCity) {
  const sentence1 = `${country} has ${population} milion people and its capital city is ${capitalCity}`;
  return sentence1;
}

const descPoland = describeCountry('Poland', 39, 'Warsaw');
const descGermany = describeCountry('Germany', 83, 'Berlin');
const descUkraine = describeCountry('Ukraine', 44, 'Kyiv');
console.log(descPoland);
console.log(descUkraine);
console.log(descGermany);

///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration can be called before the initialization
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1994);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};
const age2 = calcAge2(1994);

console.log(age1, age2);

//
// LECTURE: Function Declarations vs. Expressions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percChina1 = percentageOfWorld2(1441);
const percPoland1 = percentageOfWorld2(1777);
const percPeru1 = percentageOfWorld2(1734);
console.log(percChina1);
console.log(percPoland1);
console.log(percPeru1);

///////////////////////////////////////
// Arrow functions
// Arrow functions don't have 'this' keyword

const calcAge3 = (birthYeah) => 2022 - birthYeah;
const age3 = calcAge3(1994);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2022 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1994, 'Jakub'));
console.log(yearsUntilRetirement(1980, 'John'));

//
// LECTURE: Arrow Functions
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percPortugal3 = percentageOfWorld3(100);
const percChina3 = percentageOfWorld3(1438);
const percUSA3 = percentageOfWorld3(332);
console.log(percPortugal3, percChina3, percUSA3);

///////////////////////////////////////
// Functions Calling Other Functions
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
