function decimalToBinarybit(n) {
  let binaryval = 0,
    i = 0;
  while (n != 0) {
    let bits = n & 1; // ex 110. picks the right most value
    //and and means 0*1 == 0. 1*1 == 1
    binaryval = bits * 10 ** i + binaryval;

    n = n >> 1; //right shift bit let say 110 so now left with 11
    // console.log(n,"n")
    i++;
  }
  return binaryval;
}

console.log(decimalToBinarybit(6));
