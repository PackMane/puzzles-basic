let x = ['Hello', 'Goodbye'];

function arrString(arr, str) {
  x.push(str);
  x.unshift(str);
}

arrString(x, 'fuck');
console.log(x);
