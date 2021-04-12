function toHex(r, g, b) {
  if (r < 0 || r > 255) return null;
  if (g < 0 || g > 255) return null;
  if (b < 0 || b > 255) return null;
  console.log(`#${r.toString(16)}${g.toString(16)}${b.toString(16)}`);
}

toHex(10, 10, 10);
toHex(255, 255, 255);

toHex(400, 255, 5000);
toHex(24, 45, -1);
