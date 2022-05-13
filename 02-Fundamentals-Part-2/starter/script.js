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
// function calcAge1(birthYeah) {
//   return 2037 - birthYeah;
// }
// const age1 = calcAge1(1994);

// // Function expression
// const calcAge2 = function (birthYeah) {
//   return 2037 - birthYeah;
// };
// const age2 = calcAge2(1994);

// console.log(age1, age2);

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

// const calcAge3 = (birthYeah) => 2022 - birthYeah;
// const age3 = calcAge3(1994);
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//   const age = 2022 - birthYeah;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1994, 'Jakub'));
// console.log(yearsUntilRetirement(1980, 'John'));

//
// LECTURE: Arrow Functions
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percPortugal3 = percentageOfWorld3(100);
const percChina3 = percentageOfWorld3(1438);
const percUSA3 = percentageOfWorld3(332);
console.log(percPortugal3, percChina3, percUSA3);

///////////////////////////////////////
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

//
// LECTURE: Functions Calling Other Functions

// const describePopulation = (country, population) => `${country} has ${population} million people,
// which is about 18.2% of the world.'`;

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage} of the world.'`;
  console.log(description);
}

describePopulation('Portugal', 10);
describePopulation('Poland', 39);
describePopulation('Nowhere', 25);

///////////////////////////////////////
// Reviewing Functions

// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// const yearsUntilRetirement = function (birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1994, 'Jakub'));
// console.log(yearsUntilRetirement(1970, 'Amanda'));

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

console.log(`Challenge #4 \n\n`);

const calcAverage = (a, b, c) => (a + b + c) / 3; // Arrow function stand-alone
console.log(calcAverage(3, 4, 5));

// TEST 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

// Function expression
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins wins 🏆  (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Dolphins wins 🏆  ${avgDolphins} vs ${avgKoalas}`);
  } else {
    console.log('No teams wins..');
  }
};

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// TEST 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

//
console.log(`\n\n ARRAYS \n`);
///////////////////////////////////////
// Introduction to Arrays
const friend1 = 'Tony';
const friend2 = 'Steve';
const friend3 = 'Peter';

let friends = ['Tony', 'Steve', 'Peter'];
console.log(friends);

const y = new Array(1994, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); // Get last element

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']; We don't do that here 😏

const firstName = 'Paul';
const Paul = [firstName, 'Walker', 1973 - 2013, 'teacher', friends];

console.log(Paul);
console.log(Paul.length);

//Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

//
// LECTURE: Introduction to Arrays
const populations = ['39', '2334', '55', '80'];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

///////////////////////////////////////
// Basic Array Operations (Methods)
friends = ['Michael', 'Steven', 'Peter'];

// Add new elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First element
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // There is no value like this in array

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
} else {
  console.log('I think you dont');
}
