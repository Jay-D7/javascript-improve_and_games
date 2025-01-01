'use strict';

// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive 💪🏻`);

// LECTURE: Functions
console.log(`\nLecture 1: Functions`);
// 1. Option Function Declaration (can be called before it's defined)
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// 2. Option Function Expression (can't be called before it's defined)
const describeCountry = function (
  country = 'Unknown',
  population = 0,
  capitalCity = 'Unknown'
) {
  if (
    typeof country !== 'string' ||
    typeof capitalCity !== 'string' ||
    typeof population !== 'number'
  ) {
    throw new Error('Invalid input types');
  }
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
};

const descPoland = describeCountry('Poland', 39, 'Warsaw');
const descGermany = describeCountry('Germany', 83, 'Berlin');
const descUkraine = describeCountry('Ukraine', 44, 'Kyiv');
console.log(descPoland, descGermany, descUkraine);

// LECTURE: Function Declarations vs. Expressions
console.log(`\nLecture 2: Function Declarations vs. Expressions`);

// Function Declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// Function Expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
// console.log(percentageOfWorld1(1441));

const chinaPopulation = percentageOfWorld1(1441);
const indiaPopulation = percentageOfWorld1(1380);
const usaPopulation = percentageOfWorld1(331);
console.log(chinaPopulation, indiaPopulation, usaPopulation);

const indonesiaPopulation = percentageOfWorld2(273);
const pakistanPopulation = percentageOfWorld2(220);
const brazilPopulation = percentageOfWorld2(213);
console.log(indonesiaPopulation, pakistanPopulation, brazilPopulation);

// LECTURE: Arrow Functions
console.log(`\nLecture 3: Arrow Functions`);

const percentageOfWorld3 = (population) => (population / 7900) * 100;

// Upgraded version of the previous function with error handling
// const percentageOfWorld3 = (population) => {
//   if (typeof population !== 'number' || population <= 0) {
//     throw new Error('Invalid population value');
//   }
//   const worldPopulation = 7900;
//   return (population / worldPopulation) * 100;
// };

console.log(
  percentageOfWorld3(1441),
  percentageOfWorld3(1380),
  percentageOfWorld3(331)
);

// LECTURE: Functions Calling Other Functions
console.log(`\nLecture 4: Functions Calling Other Functions`);

const describePopulation = (country, population) => {
  let percentage = percentageOfWorld1(population).toFixed(2);

  return `${country} has ${population} million people, which is about ${percentage} of the world.`;
};

console.log(
  describePopulation('Poland', 39) + '\n',
  describePopulation('Germany', 83) + '\n',
  describePopulation('Ukraine', 44)
);

// Coding Challenge #1
console.log('\nCoding Challenge #1');

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
console.log(calcAverage(3, 4, 5));

// 2. Use the function to calculate the average for both teams
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins wins ${avgDolphins} vs ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas wins ${avgKoalas} vs ${avgDolphins}`);
  } else {
    console.log(`No team wins!`);
  }
};

// 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
checkWinner(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins2, avgKoalas2);
