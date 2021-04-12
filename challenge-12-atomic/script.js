function toHex(r, g, b) {
  if (r < 0 || r > 255) return null;
  if (g < 0 || g > 255) return null;
  if (b < 0 || b > 255) return null;
  return [r.toString(16), g.toString(16), b.toString(16)];
}

console.log(toHex(10, 10, 10));
console.log(toHex(255, 255, 255));

console.log(toHex(400, 255, 5000));
console.log(toHex(24, 45, -1));
