// write a function that takes 2 numbers
// return the number that is higher than the other
// if the numbers are the same, return one of the numbers.

// call the function 3 times with different values, assigning a new variable each time, and then print all 3 values.

// call the function without all the params or with strings

// did you guard against such cases?

// fumction def
function higher(x, y) {
  if (isNaN(x) || isNaN(y)) {
    return null;
  } else if (x < y) {
    return y;
  } else if (x > y) {
    return x;
  } else return x || y;
}

// program
let answer1 = higher(7, 22);
let answer2 = higher(5, 6);
let answer3 = higher(42, 8);

console.log(answer1, answer2, answer3);

let bad1 = higher(null);
let bad2 = higher('wrf');

console.log(bad1, bad2);
