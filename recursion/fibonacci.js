// 0 1 1 2 3 5 8 13
//
//
//
// let obj = {};
// function fibonacci(n) {
//   if (n == 0 || n == 1) return n;

//   let ans = fibonacci(n - 1) + fibonacci(n - 2);

//   return ans;
// }

// console.log(fibonacci(11));
// memoization of function calls in fibonacci
// let memo = {};

// function fibonacci(n) {
//   console.log(memo, "came here");
//   if (n in memo) return memo[n]; // Return the cached result if it exists
//   if (n == 0 || n == 1) return n;

//   // Compute the result and store it in the cache
//   memo[n] = fibonacci(n - 1) + fibonacci(n - 2);

//   return memo[n];
// }

// console.log(fibonacci(5));
//DP top down approach
// function fibonacci(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   // Create an array to store Fibonacci numbers up to n
//   let dp = new Array(n + 1);
//   console.log(dp);
//   dp[0] = 0;
//   dp[1] = 1;
//   console.log(dp);

//   // Fill the dp array
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }

//   // The nth Fibonacci number is in dp[n]
//   return dp[n];
// }

// console.log(fibonacci(11));
