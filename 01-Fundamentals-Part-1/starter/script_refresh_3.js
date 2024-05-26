// LECTURE: Values and Variables
console.log(`Lecture 1`);

const country = 'Poland';
const continent = 'Europe';
let population = 710000000;

console.log(country, continent, population);

// LECTURE: Data Types
console.log(`\nLecture 2`);

let isIsland = false;
let language;

console.log(
  typeof isIsland,
  typeof language,
  typeof population,
  typeof country
);

// LECTURE: let, const and var
console.log(`\nLecture 3`);

language = 'Polish';
population = 741800000;
console.log(language, population);

// LECTURE: Basic Operators
console.log(`\nLecture 4`);

let splitCountryInHalf = population / 2;
console.log(splitCountryInHalf);
splitCountryInHalf++;
console.log(splitCountryInHalf);

const populationOfFinland = 6000000;

console.log(
  `${country} has ${
    population > populationOfFinland ? 'more' : 'less'
  } people than Finland.`
);

const populationPl = 40400000;
const populationPlAverage = (population) => {
  const a = populationPl > population ? 'above' : 'below';

  return `hello, ${a}`;
};

console.log(populationPlAverage(4000));

const averagePopulation = 33;
console.log(splitCountryInHalf <= averagePopulation);

console.log(
  `${country} population is ${
    populationPl > 3000000 ? 'above' : 'below'
  } average.`
);

const description1 =
  country +
  ' is in ' +
  continent +
  ", and it's " +
  population +
  ' million people speak ' +
  language;

console.log(description1);

// Coding Challenge #1
console.log('\n Coding Challenge #1');

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

// 1.
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

// let massMark = 95;
// let heightMark = 1.88;
// let massJohn = 85;
// let heightJohn = 1.76;

// 2.
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIMark, BMIJohn);
// 3.
markHigherBMI = BMIMark > BMIJohn;
console.log(`Result of task ${markHigherBMI}`);

// LECTURE: Strings and Template Literals
const description = `${country} is in ${continent}, and it's ${population} milion people speak ${language}.`;
console.log(description);

// LECTURE: Taking Decisions: if / else Statements
const countryGreater = function () {
  const average = 33000000;
  let population = 403040455;
  let country = 'Poland';

  if (country != '') {
    if (population > average) {
      console.log(
        `${country}'s population (${population}) is above average(${average})`
      );
    } else {
      console.log(
        `${country}'s population (${population}) is 22 milion below average(${average})`
      );
    }
  } else {
    console.log(`Country isn't defined`);
  }
};

countryGreater();

//Coding Challenge 2
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!"`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!"`);
}

// LECTURE: Type Conversion and Coercion

console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // '617'
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// LECTURE: Equality Operators: == vs. ===
// DONE
// const numNeighbours = Number(
//   prompt('How many neighbour countries does your country have?')
// );

// if (numNeighbours === 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }

// LECTURE: Logical Operators
// TODO

// TODO
// LECTURE: The switch Statement
