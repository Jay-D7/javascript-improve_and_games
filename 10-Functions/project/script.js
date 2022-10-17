'use strict';

/*
///////////////////////////////////////
// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000); // Skip default parameter
*/

///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference
const flight = 'LH234';

const james = {
  name: 'James Bond',
  passport: 24739479284,
};

const checkIn = (flightNum, passenger) => {
  flightNum = 'LH999';
  passenger.name = 'Mr, ' + passenger.name;

  if (passenger.passport === 24739479284) alert('Check in');
  else alert('Wrong passport!');
};

// checkIn(flight, james);
// console.log(flight);
// console.log(james);

// Is the same as doing...
// const flightNum = flight;
// const passenger = james;

const newPassport = function (person) {
  person.passport = Math.random() * 100000000000;
};

newPassport(james);
checkIn(flight, james);
