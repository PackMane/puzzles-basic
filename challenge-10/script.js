// write a function that takes a string and returns a string that looks like [length of string]-[string]

// call the function and assign the result
// call the function and assign the result a second time with a new string
// log the two results in a single string
// call the function without any params or with a number, did you guard against such cases?

function takeString(s) {
  if (typeof s !== 'string') return;
  let display = s.length + ' ' + s;
  return display;
}

let test1 = takeString('shit');
let test2 = takeString('head');

console.log(test1, test2);

console.log(takeString(20));
