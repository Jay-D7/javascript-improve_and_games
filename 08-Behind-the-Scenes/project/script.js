'use strict';

///////////////////////////////////////
// Scoping in Practice

/* 
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassinging outer scope's variable
      output = 'NEW OUTPUT';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3)); // Without the 'use strict' mode it's working but we should always use scrit mode. so this is to keep here as reference.
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jacob';
calcAge(1994);
// console.log(age);
// printAge();

*/

///////////////////////////////////////
// Hoisting and TDZ in Practice

/* 
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jakub';
let job = 'teacher';
const year = 1994;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
// if (!numProducts) deleteShoppingCart();

const numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

*/

// console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAge(1994);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAgeArrow(1980);

const john = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

john.calcAge();

const matilda = {
  year: 2017,
};

// Method borrowing ! This keyword is dynamic, we can use method from other object to another and it depends, how the function is called
matilda.calcAge = john.calcAge;
matilda.calcAge();

const f = john.calcAge;
f();
