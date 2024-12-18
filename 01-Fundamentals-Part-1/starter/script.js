////////////////////////////////////
// Linking a JavaScript File
// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);
// if (js === 'amazing') alert('Javascript is FUN!');

////////////////////////////////////
// Values and Variables
console.log(`Lecture 1`);
// console.log('Jakub');
// console.log(23);

// let firstName = 'Jakub';

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// Variable name conventions
// let person = 'jakub';
// let PI = 3.1415;

// const myFirstJob = 'Coder';
// let myCurrentJob = 'Teacher';

// let job1 = 'programmer';
// let job2 = 'teacher';

// console.log(myFirstJob);

// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

// 1

// const country = 'Poland';
// let continent = 'Europe';
// let population = 3795000;

// console.log(country);
// console.log(continent);
// console.log(population);

////////////////////////////////////
// Data Types
let javascriptIsFun = true; // boolean
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jakub');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1994;
// console.log(typeof year);

console.log(typeof null); // undefined its ERROR in JS

// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

const isIsland = false;
let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// console.log('\n' + '\n' + '\n');

////////////////////////////////////
// let, const and var
// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;
// const job;

// var job = 'programmer'; don't use VAR
// job = 'teacher';

// lastName = 'Dragowski'; // NEVER DECLARE VARIABLES IN THAT WAY
// console.log(lastName);

// LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

// language = 'Polish';
// const isIsland = false;
// isIsland = true;

////////////////////////////////////
// Basic Operators
// Math Operators
// const now = 2037;
// const ageJohn = now - 1994;
// const ageSarah = now - 2018;
// console.log(ageJohn, ageSarah);

// console.log(ageJohn * 2, ageJohn / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// firstName = 'John';
// const lastName = 'Dragowski';
// console.log(firstName + ' ' + lastName);

// Assigment operators;
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

// Comparision operators
// console.log(ageJohn > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

////////////////////////////////////
// LECTURE: Basic Operators

let myCountry = 40000000;
console.log(myCountry / 2);
myCountry++;
console.log(myCountry);

const populationOfFinland = 6000000;
console.log(myCountry > populationOfFinland);

const averagePopulation = 33000000;
console.log(myCountry <= averagePopulation);

myCountry = 'Poland';
language = 'Polish';
const description = `${myCountry} is in Europe, and its ${averagePopulation} people speak ${language}`;
console.log(description);
console.log('\n' + '\n' + '\n');

////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJohn = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJohn + ageSarah) / 2;
console.log(ageJohn, ageSarah, averageAge);

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height). 
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;
// console.log('Wynik zadania: ', BMIMark, BMIJohn, markHigherBMI);

////////////////////////////////////
// Strings and Template Literals
// const firstName = 'John';
// const job = 'Programmer';
// const birthYear = 1994;
// const year = 2037;

// const john =
//   "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

// console.log(john);

// const johnNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(johnNew);

console.log(`Just a regular string...`);

console.log(`String with \n\
multiple \n\lines`);

////////////////////////////////////
// Taking Decisions: if / else Statements
// const age = 15;

// if (age >= 18) {
//   console.log('Sarah can start driving license 🚗');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

////////////////////////////////////
// Coding Challenge #2

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, saying who has the higher BMI.
// The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs.
// Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// HINT: Use an if/else statement 😉

// GOOD LUCK 😀

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
console.log('\n Coding Challenge #2');

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn);
console.log('Wynik zadania: ', BMIMark, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is Higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is Higher than Mark's (${BMIMark})!`);
}

console.log('\n' + '\n' + '\n');

////////////////////////////////////
// Type Conversion and Coercion

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jakub'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

console.log('\n' + '\n' + '\n');
////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jakub'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spent it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

////////////////////////////////////
// Equality Operators: == vs. ===

// const age = '18';
// if (age === 18) console.log('You just became an adult :D (strict)');

// if (age == 18) console.log('You just became an adult :D (loose)');

// const favourite

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   // 22 === 23 -> FALSE
//   console.log('Cool! 23 is an amazing number!');
// } else if (favourite === 7) {
//   console.log('7 is also a cool number');
// } else if (favourite === 9) {
//   console.log('9 is also a cool number');
// } else {
//   console.log('Number is not 23 or 7 or 9');
// }

// if (favourite !== 23) console.log('Why not 23?');

// LECTURE

// const numNeighbours = Number(
//   prompt('How many neighbours countries does your country have?')
// );

// if (numNeighbours === 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }

////////////////////////////////////
// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

console.log('\n' + '\n' + '\n');

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. 
They compete against each other 3 times. 
The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, 
so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, 
a team only wins if it has a higher score than the other team, 
and the same time a score of at least 100 points. 
HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

console.log('Coding Challenge #3');
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('This is a draw!');
// }

// BONUS 1 & BONUS 2:
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);
const minScore = 100;

if (scoreDolphins > scoreKoalas && scoreDolphins >= minScore) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= minScore) {
  console.log('Koalas win the trophy 🏆');
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= minScore &&
  scoreKoalas >= minScore
) {
  console.log('This is a draw!');
} else {
  console.log('Nobody wins 😿');
}

////////////////////////////////////
// The switch Statement

const day = 'monday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend 🔥');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend! 💪🏻');
} else {
  console.log('Not a valid day!');
}

// LECTURE: The switch Statement

const language1 = '';

switch (language1) {
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too');
    break;
}

////////////////////////////////////
// Statements and Expressions

3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jakub';
console.log(`I'm ${2037 - 1994} years old ${me}`);

console.log('\n' + '\n' + '\n');

////////////////////////////////////
// The Conditional (Ternary) Operator

const age = 23;
// age >= 18
//   ? console.log('l like to drink wine 🍷')
//   : console.log('l like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

// LECTURE: The Conditional (Ternary) Operator

const populationPl = 3900000;

console.log(
  `Poland population is ${populationPl > 3000000 ? 'above' : 'below'} average.`
);

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. 
In his country, it's usual to tip 15% if the bill value is between 50 and 300. 
If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. 
Create a variable called 'tip' for this. 
It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
 Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

const bill = 275; //41.25, total 316.25
// const bill = 40; // 8, total 48
// const bill = 430; //86, total 516
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `the bill was ${bill}, the tip was ${tip} and the total value: ${tip + bill} `
);
