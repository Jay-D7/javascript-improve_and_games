////////////////////////////////////
// Linking a JavaScript File
// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);
// if (js === 'amazing') alert('Javascript is FUN!');

////////////////////////////////////
// Values and Variables
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
console.log(language);

console.log('\n' + '\n' + '\n');

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

language = 'Polish';

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

let myCountry = 40000000;
console.log(myCountry / 2);
myCountry++;
console.log(myCountry);
const populationOfFinland = 6000000;
console.log(myCountry > populationOfFinland);
const averagePopulation = 33000000;

console.log(myCountry <= averagePopulation);
const description =
  'Portugal is in Europe, and its 11 million people speak portuguese';

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

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log('Wynik zadania: ', BMIMark, BMIJohn, markHigherBMI);

////////////////////////////////////
// Strings and Template Literals
const firstName = 'John';
const job = 'Programmer';
const birthYear = 1994;
const year = 2037;

const john =
  "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

console.log(john);

const johnNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(johnNew);

console.log(`Just a regular string...`);

console.log(`String with \n\
multiple \n\lines`);

////////////////////////////////////
// Taking Decisions: if / else Statements
const age = 15;
