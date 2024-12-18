// LECTURE: Values and Variables
console.log(`Lecture 1: Values and Variables`);

let country = 'Poland';
let continent = 'Europe';
let population = 710000000;

console.log(country, continent, population);

// LECTURE: Data Types
console.log(`\nLecture 2: Data Types`);

let isIsland = false;
let language;

console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);

// LECTURE: let, const and var
console.log(`\nLecture 3: let, const and var`);

language = 'Portuguese';
population = 741800000;
console.log(language, population);

language = 'Polish';
// const country = 'Portugal';
// const continent = 'Europe';
// const isIsland = false;
isIsland = true;

// LECTURE: Basic Operators
console.log(`\nLecture 4: Basic Operators`);

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
  let a = populationPl > population ? 'above' : 'below';

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

let description =
  country +
  ' is in ' +
  continent +
  ", and it's " +
  population +
  ' million people speak ' +
  language;

console.log(description);

// Coding Challenge #1
console.log('\nCoding Challenge #1');

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
// equally well you can use
// const BMIJohn = massJohn / heightJohn * heightJohn;
console.log(BMIMark, BMIJohn);
// 3.
markHigherBMI = BMIMark > BMIJohn;
console.log(`Result of task: ${markHigherBMI}`);

// LECTURE: Strings and Template Literals
console.log(`\nLecture 5: Strings and Template Literals`);

description = `${country} is in ${continent}, and it's ${population} milion people speak ${language}.`;

console.log(description);

// LECTURE: Taking Decisions: if / else Statements
console.log(`\nLecture 6: Taking Decisions: if / else Statements`);

const countryGreater = function (average, populationOfCountry, country) {
  // Option 1 //
  // let average = 33000000;
  // let populationOfCountry = 403040455;
  // let country = 'Poland';

  if (country != '') {
    if (populationOfCountry > average) {
      console.log(
        `${country}'s population (${populationOfCountry}) is above average(${average})`
      );
    } else {
      console.log(
        `${country}'s population (${populationOfCountry}) is 22 milion below average(${average})`
      );
    }
  } else {
    console.log(`Country isn't defined`);
  }
};

//              Option 2 //
countryGreater(33000000, 403040455, 'Poland');

//Coding Challenge 2
console.log('\nCoding Challenge #2');

/*
Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/
function higherBMI() {
  if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
  } else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
  }
}

higherBMI();

// LECTURE: Type Conversion and Coercion
console.log(`\nLecture 7: Type Conversion and Coercion`);

console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // '617'
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// LECTURE: Equality Operators: == vs. ===
console.log(
  `\nLecture 8: Equality Operators: == vs. === \n Must be commented because of PROMPT`
);
// Must be commented because of PROMPT
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
console.log(`\nLecture 9: Logical Operators`);

const rightCountry = function () {
  let language = 'Polish';
  let population = 4000000;

  if (language === 'Polish' && population < 5000000 && country != isIsland) {
    console.log(`You should live in Poland`);
  } else {
    console.log(`Poland does not meet your criteria😢`);
  }
};

rightCountry();

// Coding Challenge #3
console.log('\nCoding Challenge #3');

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

//1 Average score
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
//Bonus 1
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
// Bonus 2
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
console.log(`Score Dolphins: ${scoreDolphins} \nScore Koalas: ${scoreKoalas}`);
const minScore = 100;

//2 Compare the team's average scores
const compareAverageScores = function () {
  if (scoreDolphins > scoreKoalas && scoreDolphins >= minScore) {
    console.log(`Winner is Dolphins ${scoreDolphins}`);
  } else if (scoreKoalas > scoreDolphins && scoreKoalas >= minScore) {
    console.log(`Winner is Koalas ${scoreKoalas}`);
  } else if (
    scoreDolphins === scoreKoalas &&
    scoreDolphins >= minScore &&
    scoreKoalas >= minScore
  ) {
    console.log(`This is draw`);
  } else {
    console.log(`Nobody wins 😿`);
  }
};

compareAverageScores();

// LECTURE: The switch Statement
console.log(`\nLecture 10: The switch Statement`);

language = '';
// language = 'chinese';

function nativeSpeakers() {
  switch (language) {
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
      console.log('Great language too :D');
  }
}

nativeSpeakers();

// LECTURE: The Conditional (Ternary) Operator
console.log(`\nLecture 11: The Conditional (Ternary) Operator`);

const populationGreater = (population) => {
  let number = 33000000;
  let count = population > number ? 'above' : 'below';

  return `${country}'s, ${population} is ${count} average`;
};

console.log(populationGreater(population));

// console.log(
//   `${country} population is ${
//     populationPl > 3000000 ? 'above' : 'below'
//   } average.`
// );

// // Coding Challenge #4
// console.log('\nCoding Challenge #4');

// /*
// Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant.
// In his country, it's usual to tip 15% if the bill value is between 50 and 300.
// If the value is different, the tip is 20%.

// 1. Your task is to caluclate the tip, depending on the bill value.
// Create a variable called 'tip' for this.
// It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
//  Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

// TEST DATA: Test for bill values 275, 40 and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

// GOOD LUCK 😀
// */
// const bill = 275; //tip: 41.25, total: 316.25
