// LECTURE: Values and Variables
console.log(`Lecture 1`);

const country = 'Poland';
const continent = 'Europe';
let population = 6795000;

console.log(country, continent, population);
console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Types
console.log(`\nLecture 2`);

const isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// LECTURE: let, const and var
console.log(`\nLecture 3`);

language = 'Polish';
population = 400000;

// LECTURE: Basic Operators
console.log(`\nLecture 4`);

let lectureMyCountry = population / 2;
console.log(lectureMyCountry);
lectureMyCountry++;
console.log(lectureMyCountry);

let populationOfFinland = 6000000;
if (populationOfFinland > population)
  console.log(`${country} have less people than Finland`);

const averagePopulation = 33;
console.log(lectureMyCountry <= averagePopulation);

const description = `${country} is in ${continent}, and it's ${population} milion people speak ${language}`;
console.log(description);

// LECTURE: Strings and Template Literals ABOVE
console.log(`\nCoding Challenge #1`);

// Coding Challenge #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// BMI = mass / height ** 2 = mass

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIJohn, BMIMark);

const markHigherBMI = BMIMark > BMIJohn;
console.log(`Result: ${BMIMark}, ${BMIJohn}, ${markHigherBMI}`);

// LECTURE: Taking Decisions: if / else Statements
console.log(`\nLecture 6`);
// myCountry = 4000000;

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} milion below average, `
  );
}

// LECTURE: Type Conversion and Coercion
console.log('9' - '5'); // '4'
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); //  23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// Coding Challenge #2
console.log(`\nCoding Challenge #2`);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI(${BMIMark}) is higher than John's(${BMIJohn})`);
} else {
  console.log(`John's BMI(${BMIJohn}) is higher than Mark's(${BMIMark})`);
}

// LECTURE: Equality Operators: == vs. ===

// const numNeighbours = Number(
//   prompt(`How many neighbour countries does your country have?`)
// );

// if (numNeighbours === 1) {
//   console.log(`Only 1 border!`);
// } else if (numNeighbours > 1) {
//   console.log(`More than 1 border`);
// } else {
//   console.log(`No borders`);
// }

// == is used for comparison between two variables irrespective of the datatype of variable.
// === is used for comparision between two variables but this will check strict type,
//  which means it will check datatype and compare two values

// LECTURE: Logical Operators
if (language === 'Polish' && population < 5000000 && country != isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria ;<`);
}

////////////////////////////////////
// Coding Challenge #3

// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
//1
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log(`Winner is Dolphins ${scoreDolphins}`);
// } else if (scoreKoalas > scoreDolphins) {
//   console.log(`Winner is Koalas ${scoreKoalas}`);
// } else if (scoreDolphins === scoreKoalas){
//   console.log(`This is draw 🤷🏼‍♂️`);
// }

//BONUS 1
// const scoreDolphins = (96 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
const minScore = 100;

if (scoreDolphins > scoreKoalas && scoreDolphins >= minScore) {
  console.log(`Winner is Dolphins ${scoreDolphins}`);
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= minScore) {
  console.log(`Winner is Koalas ${scoreKoalas}`);
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= minScore &&
  scoreKoalas >= minScore
) {
  console.log(`this is draw`);
} else {
  console.log(`nobody wins`);
}

// LECTURE: The switch Statement
const language1 = '';

switch (language1) {
  case 'chinesse':
  case 'mandarin':
    console.log(`MOST number of native speakers`);
    break;
  case 'spanish':
    console.log(`2nd place in number of native speakers`);
    break;
  case 'english':
    console.log(`3rd place`);
    break;
  case 'hindi':
    console.log(`Number 4`);
    break;
  case 'arabic':
    console.log(`5th most spoken language`);
    break;
  default:
    console.log(`Great language too`);
    break;
}

// LECTURE: The Conditional (Ternary) Operator
const populationOfPoland = 4000000;

console.log(
  `${country}'s population is ${
    populationOfPoland > 130000000 ? 'above' : 'below'
  } average`
);
