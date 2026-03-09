function houseRobber(arr, n, memo) {
  if (n <= 0) return 0;

  if (memo[n] != -1) return memo[n];

  let take = arr[n - 1] + houseRobber(arr, n - 2, memo);
  let notTake = houseRobber(arr, n - 1, memo);
  max = Math.max(take, notTake);
  return (memo[n] = max);
}

function houseRobber(arr) {
  let n = arr.length;

  let dp = Array(n + 1);
  dp[0] = 0;

  for (let i = 1; i < n + 1; i++) {
    let take = arr[i - 1] + (dp[i - 2] ?? 0);
    let notTake = dp[i - 1];
    dp[i] = Math.max(take, notTake);
  }
  return dp[n];
}
