'use strict';

console.log('\n 1');
const describeCountry = (country, population, capitalCity) => {
  const outputSentence = `${country} has ${population} milion people and its capital is ${capitalCity}`;
  return outputSentence;
};

const countryPl = describeCountry('Poland', 39, 'Warsaw');
const countryDe = describeCountry('Germany', 83, 'Berlin');
const countryUs = describeCountry('USA', 329, 'Washington');

console.log(countryPl);
console.log(countryDe);
console.log(countryUs);

console.log('\n 2');
// declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
// expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

// const percChina = percentageOfWorld1(1441);
// const percUSA = percentageOfWorld1(2000);
// const percPoland = percentageOfWorld1(4000);
const percChina = percentageOfWorld2(1441);
const percUSA = percentageOfWorld2(2000);
const percPoland = percentageOfWorld2(4000);

console.log(percChina);
console.log(percUSA);
console.log(percPoland);

console.log('\n 3');

const percentageOfWorld3 = (population) => {
  return (population / 7900) * 100;
};

console.log('\n 4');

const describePopulation = (country, population) => {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} milion people, which is about ${percentage} of the world`;
  console.log(description);
};

describePopulation('Poland', 10);
describePopulation('Portugal', 575);
describePopulation('Nowhere', 10454);

console.log('\n 5');

const populations = [39, 2334, 55, 80];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

console.log('\n 6');

const neighbours = ['Germany', 'Ukraine', 'Slovensko'];
let newCountry = neighbours.push('Utopia');
newCountry = neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
  console.log('Probably not a central European country :D');
} else {
  console.log('a central European country');
}

const ChangeNameCountry = (neighbours[neighbours.indexOf('Germany')] = 'USA');
console.log(neighbours);

///////////////////////////////////////
// Coding Challenge #2
console.log('\n Coding Challenge #2');

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }; Function expression

// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(total, tips, bills);
// console.log(total);

// Objects
console.log('\nObjects Introduction');

const Jacob = {
  firstName: 'Jakub',
  lastName: 'Dragowski',
  age: 28,
  job: 'Programmer',
  friends: ['Peter', 'John', 'Robert'],
};

console.log(Jacob);

console.log('\n Lecture Objects');

const myCountry = {
  country: 'Poland',
  capital: 'Warsaw',
  language: 'Polish',
  population: 39,
  neighbours: ['Germany', 'Ukraine', 'Slovakia'],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} milion ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capitalCity}`
    );
  },

  checkIsland: function () {
    // this.isIsland = this.neighbours.length === 0 ? true : false;

    // Even simpler version (see why this works...)
    this.isIsland = !Boolean(this.neighbours.length);
    return;
  },
};

console.log(myCountry);

console.log('\n Lecture Dot vs Bracket Notation');

const myCountrySentence = () =>
  console.log(
    `${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbours and a capital called ${myCountry.capitalCity}`
  );

myCountrySentence();

console.log((myCountry.population += 2));
console.log((myCountry['population'] -= 2));

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const Mark = {
  FullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};

const John = {
  FullName: 'John Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};

Mark.calcBMI();
John.calcBMI();
console.log(Mark.bmi);
console.log(John.bmi);

if (Mark.bmi > John.bmi) {
  console.log(
    `${Mark.FullName}'s BMI (${Mark.bmi}) is higher than ${John.FullName}'s (${John.bmi})`
  );
} else {
  console.log(
    `${John.FullName}'s BMI (${John.bmi}) is higher than ${Mark.FullName}'s (${Mark.bmi})`
  );
}

console.log(`\n Loops \n\n`);

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 😜`);
}

console.log(`\n Lecture iteration: The for Loop`);

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

const JohnWickArray = [
  'John',
  'Wick',
  2022 - 1994,
  'Assasin',
  ['Peter', 'Adam', 'Tony'],
  true,
];

console.log(JohnWickArray);

const types = [];

for (let i = 0; i < JohnWickArray.length; i++) {
  // Reading from john Array
  console.log(JohnWickArray[i], typeof JohnWickArray[i]);

  // Filling types Array
  types[i] = typeof JohnWickArray[i];
  // types.push(typeof JohnWick[i]);
}

console.log(types);

const years = [2020, 1992, 1994, 1996];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

console.log('\n Break and Continue');

console.log('--- only strings ---');

for (let i = 0; i < JohnWickArray.length; i++) {
  if (typeof JohnWickArray[i] !== 'string') continue;

  console.log(JohnWickArray[i], typeof JohnWickArray[i]);
}

console.log('--- only numbers ---');
for (let i = 0; i < JohnWickArray.length; i++) {
  if (typeof JohnWickArray[i] === 'number') break;

  console.log(JohnWickArray[i], typeof JohnWickArray[i]);
}

// LECTURE: Looping Arrays, Breaking & Continuing
const populations1 = [40, 80, 4342, 8432];
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
  'Driver',
  ['Michael', 'Peter', 'Dom'],
  true,
];

// Loop backwards
for (let i = paul.length - 1; i >= 0; i--) {
  console.log(i, paul[i]);
}

// Loop in Loop
for (let exercise = 0; exercise < 4; exercise++) {
  console.log(`------------ Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋🏼‍♀️`);
  }
}

// LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

for (let i = listOfNeighbours.length - 1; i >= 0; i--)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

console.log(`\n While Loop`);
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋🏼‍♀️`);
//   rep++;
// }

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋🏼‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice != 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end`);
}

console.log(`\n LECTURE: The While Loop`);

const percentages3 = [];
let i = 0;

while (i < populations1.length) {
  const perc = percentageOfWorld1(populations1[i]);
  percentages3.push(perc);
  i++;
}

console.log(percentages3);

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) 
to calculate tips and total values (bill + tip) for every bill value in the bills array.
 Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

console.log(`\nCoding Challenge #4`);

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
