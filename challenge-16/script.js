let x = ['Hello', 'Goodbye'];
let y = [...x]

function arrString(arr, str) {
  y.push(str);
  y.unshift(str);
  return y
}

console.log(x)
console.log(arrString(y,'fuck'))