'use strict';

// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive 💪🏻`);

// LECTURE: Functions
console.log(`\nLecture 1: Functions`);

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

function describeCountry(
  country = 'Unknown',
  population = 0,
  capitalCity = 'Unknown'
) {
  if (
    typeof country !== 'string' ||
    typeof capitalCity !== 'string' ||
    typeof population !== 'number'
  ) {
    throw new Error('Invalid input types');
  }
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descPoland = describeCountry('Poland', 39, 'Warsaw');
const descGermany = describeCountry('Germany', 83, 'Berlin');
const descUkraine = describeCountry('Ukraine', 44, 'Kyiv');
console.log(descPoland, descGermany, descUkraine);

// LECTURE: Function Declarations vs. Expressions
console.log(`\nLecture 2: Function Declarations vs. Expressions`);

// Function Declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// Function Expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
// console.log(percentageOfWorld1(1441));

const chinaPopulation = percentageOfWorld1(1441);
const indiaPopulation = percentageOfWorld1(1380);
const usaPopulation = percentageOfWorld1(331);
console.log(chinaPopulation, indiaPopulation, usaPopulation);

const indonesiaPopulation = percentageOfWorld2(273);
const pakistanPopulation = percentageOfWorld2(220);
const brazilPopulation = percentageOfWorld2(213);
console.log(indonesiaPopulation, pakistanPopulation, brazilPopulation);
