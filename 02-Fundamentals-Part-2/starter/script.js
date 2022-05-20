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

// LECTURE: Basic Array Operations (Methods)

const neighbours = ['Germany', 'Ukraine', 'Slovenia'];
const newCountry = neighbours.push('Utopia');
console.log(neighbours);
console.log(newCountry);
neighbours.pop();
const dissolvedCountry = neighbours.pop();
console.log(dissolvedCountry);
console.log(neighbours);

if (!neighbours.includes('USA')) {
  console.log('Probably not a central European country');
}

// console.log(neighbours.indexOf('Ukraine'));
// neighbours[1] = 'Republic of Ukraine';
// console.log(neighbours);
neighbours[neighbours.indexOf('Ukraine')] = 'Republic of Ukraine';
console.log(neighbours);

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, 
calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). 
Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function!
So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; // Arrow function

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);
// console.log(totals);

///////////////////////////////////////
// Introduction to Objects

// Array
// const JohnArray = [
//   'John',
//   'Wick',
//   1945 - 2037,
//   'Assasin',
//   ['Peter', 'Tony', 'Martha'],
// ];

// Object
// const John = {
//   firstName: 'John',
//   lastName: 'Wick',
//   age: 1945 - 2037,
//   job: 'Assasin',
//   friends: ['Peter', 'Tony', 'Martha'],
// };

// LECTURE: Introduction to Objects

const myCountry = {
  country: 'Poland',
  capitalCity: 'Warsaw',
  language: 'Polish',
  population: 3900000,
  neighbours: ['Germany', 'Ukraine', 'Slovenia'],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capitalCity}`
    );
    return;
  },

  checkIsland: function () {
    // this.isIsland = this.neighbours.length === 0 ? true : false;

    // Even simpler version (see why this works...)
    this.isIsland = !Boolean(this.neighbours.length);
    return;
  },
};

console.log(myCountry);

///////////////////////////////////////
// Dot vs. Bracket Notation
const john = {
  firstName: 'John',
  lastName: 'Wick',
  age: 2037 - 1994,
  job: 'Assasin',
  friends: ['Peter', 'Tony', 'Martha'],
};
console.log(john);

console.log(john.lastName);
console.log(john['lastName']);

const nameKey = 'Name';
console.log(john['first' + nameKey], john['last' + nameKey]);
// console.log(john['last' + nameKey]);

// console.log(john.'last' + nameKey); // can't do this with dot '.'

// const interestedIn =

// const interestedIn = prompt(
//   'What do you want to know about John? Choose between firstName, lastName, age, job, and friends'
// );

// console.log(interestedIn);

// if (john[interestedIn]) {
//   console.log(john[interestedIn]);
// } else {
//   console.log(
//     'Wrong request! Choose between firstName, lastName, age, job, and friends'
//   );
// }

john.location = 'Poland';
john['twitter'] = '@johnwick';
console.log(john);

// Challenge
// "John has 3 friends, and his best friend is called Tony"
console.log(
  `${john.firstName} has ${john.friends.length} friends, and his best friend is called ${john.friends[1]}`
);

// LECTURE: Dot vs. Bracket Notation

// Added Function Expression
const myCountrySentence = function () {
  console.log(
    `${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbours and a capital called ${myCountry.capitalCity}`
  );
  return;
};

myCountrySentence();

console.log(myCountry.population * 2);
console.log(myCountry['population'] / 2);

///////////////////////////////////////
// Object Methods
const john1 = {
  firstName: 'John',
  lastName: 'Wick',
  birthYeah: 1994,
  job: 'Assasin',
  friends: ['Peter', 'Tony', 'Martha'],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYeah;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
  },

  // getSummary: function () {
  //   return `${this.firstName} is a ${this.calcAge()}-year old ${
  //     john1.job
  //   }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
  // },
};

console.log(john1.calcAge());
// console.log(john1['calcAge'](1994));

// console.log(john1.age);
// console.log(john1.age);
// console.log(john1.age);

// Challenge
// "John is a 46-year old teacher, and he has a driver's license"
console.log(john1.getSummary());

// LECTURE: Object Methods

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

// 1.
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    //  mass / height ** 2 = mass / (height * height). = BMI
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john2 = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    //  mass / height ** 2 = mass / (height * height). = BMI
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john2.calcBMI();
console.log(mark);
console.log(mark.bmi);
console.log(john2);
console.log(john2.bmi);

console.log(mark.bmi, john2.bmi);

if (mark.bmi > john2.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john2.fullName}'s (${john2.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john2.fullName}'s BMI (${john2.bmi}) is higher than ${mark.fullName}'s(${mark.bmi})`
  );
}

///////////////////////////////////////
// Iteration: The for Loop
console.log(`\n Loops \n\n`);

// console.log('Lifting weights repetition 1 🏋🏼‍♂️');
// console.log('Lifting weights repetition 2 🏋🏼‍♂️');
// console.log('Lifting weights repetition 3 🏋🏼‍♂️');
// console.log('Lifting weights repetition 4 🏋🏼‍♂️');
// console.log('Lifting weights repetition 5 🏋🏼‍♂️');
// console.log('Lifting weights repetition 6 🏋🏼‍♂️');
// console.log('Lifting weights repetition 7 🏋🏼‍♂️');
// console.log('Lifting weights repetition 8 🏋🏼‍♂️');
// console.log('Lifting weights repetition 9 🏋🏼‍♂️');
// console.log('Lifting weights repetition 10 🏋🏼‍♂️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋🏼‍♂️`);
}

// LECTURE: Iteration: The for Loop
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is actually voting`);
}

///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
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

const years1 = [1991, 2007, 1969, 2020];
const ages1 = [];

for (let i = 0; i < years1.length; i++) {
  ages1.push(2037 - years1[i]);
}
console.log(ages1);

// continue and break
console.log(`--- ONLY STRINGS ---`);
for (let i = 0; i < johnArray.length; i++) {
  if (typeof johnArray[i] !== 'string') continue;

  console.log(johnArray[i], typeof johnArray[i]);
}

console.log(`--- BREAK WITH NUMBER ---`);
for (let i = 0; i < johnArray.length; i++) {
  if (typeof johnArray[i] === 'number') break;

  console.log(johnArray[i], typeof johnArray[i]);
}

// LECTURE: Looping Arrays, Breaking & Continuing
const populations1 = [10, 1441, 332, 83];
const percentages2 = [];

for (let i = 0; i < populations1.length; i++) {
  const perc = percentageOfWorld1(populations1[i]);
  percentages2.push(perc);
}

console.log(percentages2);

///////////////////////////////////////
// Looping Backwards and Loops in Loops
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

// Loop in Loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋🏼‍♂️`);
  }
}

// LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Poland'],
];

// change to function
// newFunction();
// function newFunction() {
//   for (let i = 0; i < listOfNeighbours.length; i++) {
//     // console.log(i, listOfNeighbours[i]);
//     for (let y = 0; y < listOfNeighbours[i].length; y++) {
//       console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
//     }
//   }
// }

// shortcut
for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

///////////////////////////////////////
// The while Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋🏼‍♂️`);
// }

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋🏼‍♂️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice != 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}

// LECTURE: The while Loop
// const populations1 = [10, 1441, 332, 83];
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
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

console.log('\n Bonus Challenge');

const calcAverage1 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage1([2, 3, 7]));
console.log(calcAverage1(totals));
console.log(calcAverage1(tips));
