'use strict';

// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive 💪🏻`);

// LECTURE: Functions
console.log(`\nLecture 1: Functions`);
// 1. Option Function Declaration (can be called before it's defined)
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// 2. Option Function Expression (can't be called before it's defined)
const describeCountry = function (
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
};

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

// LECTURE: Arrow Functions
console.log(`\nLecture 3: Arrow Functions`);

const percentageOfWorld3 = (population) => (population / 7900) * 100;

// Upgraded version of the previous function with error handling
// const percentageOfWorld3 = (population) => {
//   if (typeof population !== 'number' || population <= 0) {
//     throw new Error('Invalid population value');
//   }
//   const worldPopulation = 7900;
//   return (population / worldPopulation) * 100;
// };

console.log(
  percentageOfWorld3(1441),
  percentageOfWorld3(1380),
  percentageOfWorld3(331)
);

// LECTURE: Functions Calling Other Functions
console.log(`\nLecture 4: Functions Calling Other Functions`);
// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice
const describePopulation = (country, population) => {
  let percentage = percentageOfWorld1(population).toFixed(2);

  return `${country} has ${population} million people, which is about ${percentage} of the world.`;
};

console.log(
  describePopulation('Poland', 39) + '\n',
  describePopulation('Germany', 83) + '\n',
  describePopulation('Ukraine', 44)
);
