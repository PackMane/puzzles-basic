let x = ['Hello', 'Goodbye'];

function arrString(arr, str) {
  x.push(str);
  x.unshift(str);
  return x;
}

console.log(x);
console.log(arrString(x, 'fuck'));
