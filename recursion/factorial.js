function fact(num) {
  if (num == 0 || num == 1) return num;

  let ans = num * fact(num - 1);

  return ans;
}

console.log(fact(5));
