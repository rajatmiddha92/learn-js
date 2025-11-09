function printCounting(n) {
  if (n == 0) return;

  console.log(n);
  printCounting(n - 1);
}
//5
// 5 4 3 2 1

printCounting(7);
