function printCounting(n) {
  if (n == 0) return;

  printCounting(n - 1);
  console.log(n);
}

printCounting(7);
