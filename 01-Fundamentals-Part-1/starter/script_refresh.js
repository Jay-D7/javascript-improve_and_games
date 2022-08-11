// LECTURE: Values and Variables
console.log(`Lecture 1`);

const country = 'Poland';
const continent = 'Europe';
let population = 3.7;

console.log(country, continent, population);

// LECTURE: Data Types
console.log(`\nLecture 2`);

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// LECTURE: let, const and var
console.log(`\nLecture 3`);

language = 'Polish';
population = 4;
console.log(language, population);

// LECTURE: Basic Operators
console.log(`\nLecture 4`);

let splitCountryInHalf = population / 2;
console.log(splitCountryInHalf);
splitCountryInHalf++;
console.log(splitCountryInHalf);

let populationOfFinland = 6;
if (populationOfFinland > population)
  console.log(`${country} is bigger than Finland`);

const averagePopulation = 3.3;
console.log(population <= averagePopulation);

const description = `${country} is in ${continent}, and it's ${population} milion people speak ${language}`;
console.log(description);

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

console.log(`\nCoding Challenge #1`);

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIJohn = massJohn / heightJohn ** 2; // First ver.
const BMIMark = massMark / (heightMark * heightMark); // Second ver.
console.log(BMIJohn, BMIMark);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

// LECTURE: Taking Decisions: if / else Statements
console.log(`\nLECTURE 5`);

let population_1 = 40;

if (population_1 < 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${population_1 - 33}`);
}

// LECTURE: Equality Operators: == vs. ===
console.log(`\nLecture 6`);

// const numNeighbours = Number(
//   prompt('How many neighbour countries does your country have')
// );

// if (numNeighbours === 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }

//Coding Challenge 2
console.log(`\nCoding Challenge`);

if (BMIJohn > BMIMark) {
  console.log(`John's BMI (${BMIJohn}) is higher than John's! (${BMIMark})`);
} else {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's! (${BMIJohn})`);
}
