function decimalToBinary(n) {
  let binaryVal = "";
  while (n != 0) {
    let rem = n % 2;
    binaryVal += rem;
    n = parseInt(n / 2);
  }
  return binaryVal.split("").reverse().join("");
}

console.log(decimalToBinary(10));
console.log(decimalToBinary(15));
console.log(decimalToBinary(8));
console.log(decimalToBinary(81));
