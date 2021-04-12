// write a function called addDays that takes a Date object and a number.
// return a NEW date object with the added days

// call the function and assign the result to a new variable
// print the original date and the result of the function
// repeat steps 3 and 4
// call the function without any params or with a number, did you guard against such cases?

function addDays(date, days) {
  if (typeof date !== 'object') return;
  if (typeof days !== 'number') return;

  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// happy path 😊
let date = new Date();
let moddate = addDays(date, 12);

console.log(date, moddate);

let moddate1 = addDays(moddate, 10);

console.log(moddate, moddate1);

let moddate2 = addDays(moddate1, 20);

console.log(moddate1, moddate2);

// sad path 😭
console.log(addDays('shit', 'ass'));
