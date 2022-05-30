'use strict';

function logger() {
  console.log('My name is James');
}

logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 4);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(9, 12);
console.log(appleOrangeJuice);

// Calling function inside a function: DATA FLOW
const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor2 = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};

console.log(fruitProcessor2(2, 3));

// LECTURE: Functions
function describeCountry(country, population, capitalCity) {
  const str = `${country} has ${population} milion people and its capital is ${capitalCity}`;
  return str;
}

const descPoland = describeCountry('Poland', 40, 'Warsaw');
const descFinland = describeCountry('Finland', 6, 'Helsinki');
const descColumbia = describeCountry('Columbia', 49, 'Bogota');

console.log(descPoland);
console.log(descFinland);
console.log(descColumbia);

// LECTURE: Function Declarations vs. Expressions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percChina1 = percentageOfWorld1(1441);
const percPoland1 = percentageOfWorld1(754);
const percPeru1 = percentageOfWorld1(13003344);
const percChina2 = percentageOfWorld2(535334);
const percPoland2 = percentageOfWorld2(7555554);
const percPeru2 = percentageOfWorld2(13044444403344);
console.log(percChina1);
console.log(percPoland1);
console.log(percPeru1);
console.log(percChina2);
console.log(percPoland2);
console.log(percPeru2);

// LECTURE: Arrow Functions
const percentageOfWorld3 = (population) => {
  return (population / 7900) * 100;
};

const percPoland3 = percentageOfWorld3(43434);
console.log(percPoland3);

// LECTURE: Functions Calling Other Functions
const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  let str = `${country} has ${population} milion people, which is about ${percentage}`;
  console.log(str);
};

describePopulation('Poland', 5);
describePopulation('Peru', 10);
describePopulation('Ukraine', 20);

// Coding Challenge #1
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 5, 6));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins);
console.log(scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins wins (${avgDolphins}, ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas wins (${avgKoalas}, ${avgDolphins})`);
  } else {
    console.log(`No team wins..`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(111, 444);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

// LECTURE: Introduction to Arrays
const populations = [39, 32, 2234, 80];
console.log(populations.length);
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

// LECTURE: Basic Array Operations (Methods)
const neighbours = ['Germany', 'Ukraine', 'Slovenia'];
const newCountry = neighbours.push('Utopia');

neighbours.pop();
const dissolvedCountry = neighbours.pop();
console.log(dissolvedCountry);

console.log(neighbours);
console.log(newCountry);

if (!neighbours.includes('USA')) {
  console.log(`Probably not a central European country :D`);
}

console.log(neighbours.indexOf('Ukraine'));

neighbours[neighbours.indexOf('Ukraine')] = 'Republic of Ukraine'; // IMPORTANT
console.log(neighbours);

///////////////////////////////////////
// Coding Challenge #2
// TEST DATA: 125, 555 and 44

//#1 Write function
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; // Arrow function
console.log(calcTip(100));

//#2 Write Array
const bills = [125, 555, 44];
// console.log(bills[1]);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);
console.log(totals);

// LECTURE: Introduction to Objects
const myCountry = {
  country: 'Poland',
  capital: 'Warsaw',
  language: 'Polish',
  population: '4000000',
  neighbours: ['Germany', 'Ukraine', 'Slovakia'],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} milion ${this.language} speaking people, ${this.neighbours.length} neightbouring countries and a capital called ${this.capital}`
    );
    return;
  },

  checkIsIsland: function () {
    this.isIsland = !Boolean(this.neighbours.length);
    return;
  },
};

// console.log(myCountry);
myCountry.describe();
myCountry.checkIsIsland();
console.log(myCountry);

// LECTURE: Dot vs. Bracket Notation
const myCountrySentence = function () {
  console.log`${myCountry.country} has ${myCountry.population} milion ${myCountry.language} speaking people, ${myCountry.neighbours.length} neightbouring countries and a capital called ${myCountry.capital}`;
};
// myCountrySentence();

// console.log(myCountry.population * 2);
// console.log(myCountry['population'] / 2);

// LECTURE: Iteration: The for Loop

for (let i = 0; i <= 50; i++) {
  // console.log(`Voter number ${i} is currently voting`);
}

const johnArray = [
  'John',
  'Wick',
  2022 - 1994,
  'Assasin',
  ['Peter', 'Tony', 'Martha'],
  true,
];
const types = [];

// console.log(johnArray[0]);
// console.log(johnArray[1]);
// ...
// console.log(johnArray[4]);
// johnArray[5]; does NOT exist

for (let i = 0; i < johnArray.length; i++) {
  // Reading from john array
  console.log(johnArray[i], typeof johnArray[i]);

  // Filling types array
  // types[i] = typeof johnArray[i];
  types.push(typeof johnArray[i]);
}
console.log(types);

// LECTURE: Looping Arrays, Breaking & Continuing
const populations1 = [10, 1441, 332, 83];
const percentages2 = [];

for (let i = 0; i < populations1.length; i++) {
  const perc = percentageOfWorld1(populations1[i]);
  percentages2.push(perc);
}
console.log(percentages2);

const paul = [
  'Paul',
  'Walker',
  2022 - 1994,
  'driver',
  ['Michael', 'Peter', 'Steven'],
  true,
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = paul.length - 1; i >= 0; i--) {
  console.log(i, paul[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋🏼‍♂️`);
  }
}

const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Poland'],
];
// change to function
const newFunction = function () {
  for (let i = 0; i < listOfNeighbours.length; i++) {
    // console.log(i, listOfNeighbours[i]);
    for (let y = 0; y < listOfNeighbours[i].length; y++) {
      console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    }
  }
};
newFunction();
