//2^n

// function power(num, n) {
//   if (n == 0) return 1;

//   let chootti = power(num, n - 1);
//   let badi = num * chootti;

//   return badi;
// }

// console.log(power(2, 5));

//optimized
function power(a, b) {
  if (b == 0) return 1;

  if (b == 1) return a;

  let ans = power(a, parseInt(b / 2));

  if (b % 2 == 0) {
    return ans * ans;
  } else {
    return ans * ans * a;
  }
}

console.log(power(2, 6));
