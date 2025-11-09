function BinaryToDecimal(s) {
  s = s.split("").map(Number).reverse();
  let decimalVal = 0;
  for (let i = 0; i < s.length; i++) {
    decimalVal += s[i] * 2 ** i;
  }
  return decimalVal;
}

console.log(BinaryToDecimal("0110"));
console.log(BinaryToDecimal("1010"));
console.log(BinaryToDecimal("1111"));
