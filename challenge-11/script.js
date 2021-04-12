// write a function called noParams that takes 2 strings (a, b)
// in your function, check and see if any values are passed into the function, if they are, throw an Error, if not return "You did it!"
// call the function with params,
// call the function without params, assign the value to a variable and log the variable.

function noParams(a, b) {
  if (a) return Error;
  if (b) return Error;
  else {
    return 'You did it!';
  }
}

test = noParams();

console.log(test);

badTest = noParams(10, 10);

console.log(badTest); // write a function called noParams that takes 2 strings (a, b)
// in your function, check and see if any values are passed into the function, if they are, throw an Error, if not return "You did it!"
// call the function with params,
// call the function without params, assign the value to a variable and log the variable.

function noParams(a, b) {
  if (a) return Error;
  if (b) return Error;
  else {
    return 'You did it!';
  }
}

test = noParams();

console.log(test);

badTest = noParams(10, 10);
