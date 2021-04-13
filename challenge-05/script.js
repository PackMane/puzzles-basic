// #write a program that accepts two user inputs
// check if each input is a number
// add the numbers together and print the result

let input1 = window.prompt('Please enter number 1');
let input2 = window.prompt('Please enter number 2');

if (isNaN(input1) && isNaN(input2)) {
  window.alert('Please enter a number?');
} else {
  let sum1 = parseInt(input1);
  let sum2 = parseInt(input2);
  window.alert(sum1 + sum2);
}
