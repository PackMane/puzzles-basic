// write a function that takes an array and a number
// return the item at the index, as well as the item before and after it in a new array
// descructure the returned array on assignment to three variables before, item, & after

function arr(aray) {
  let before = aray[0];
  let item = aray[1];
  let after = aray[2];

  return `${before}, ${item}, ${after}`;
}

console.log(arr([1, 2, 3, 4, 5, 6, 7]));
