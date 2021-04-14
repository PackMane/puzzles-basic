// make an array of incrementing numbers form 0 to 10
// write a function that takes an array and a number N
// return a new array with all the numbers in the array incremented by N

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arrAdd(newArr, n) {
  const add = newArr[+n];
  return add;
}

console.log(arrAdd(arr, 2));
