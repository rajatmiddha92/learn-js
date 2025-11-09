// Partition Equal Subset Sum
// Difficulty: MediumAccuracy: 30.24%Submissions: 272K+Points: 4
// Given an array arr[], determine if it can be partitioned into two subsets such that the sum of elements in both parts is the same.

// Note: Each element must be in exactly one subset.

// Examples:

// Input: arr = [1, 5, 11, 5]
// Output: true
// Explanation: The two parts are [1, 5, 5] and [11].
// Input: arr = [1, 3, 5]
// Output: false
// Explanation: This array can never be partitioned into two such parts.
// Constraints:
// 1 ≤ arr.size ≤ 100
// 1 ≤ arr[i] ≤ 200

// recursive solution
// class Solution {
//   equalPart(arr, n, sum) {
//     if (sum == 0) return true;
//     if (n < 0 || sum < 0) return false;

//     return this.equalPart(arr, n - 1, sum - arr[n]) || this.equalPart(arr, n - 1, sum);
//   }
//   equalPartition(arr) {
//     // your code here
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }

//     let half = sum / 2;
//     let n = arr.length;

//     return this.equalPart(arr, n, half);
//   }
// }

// memoize solution
// class Solution {
//   equalPart(arr, n, sum, dp) {
//     if (sum == 0) return true;
//     if (n < 0 || sum < 0) return false;

//     if (dp[n][sum] != -1) return dp[n][sum];

//     return (dp[n][sum] =
//       this.equalPart(arr, n - 1, sum - arr[n], dp) || this.equalPart(arr, n - 1, sum, dp));
//   }
//   equalPartition(arr) {
//     // your code here
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }

//     let half = sum / 2;
//     let n = arr.length;
//     let dp = Array(n + 1)
//       .fill()
//       .map((_data, index) => Array(Math.ceil(half + 1)).fill(-1));

//     return this.equalPart(arr, n, half, dp);
//   }
// }

// dp solution
class Solution {
  equalPartition(arr) {
    // your code here
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    if (sum % 2 != 0) return false;

    let half = sum / 2;
    let n = arr.length;
    let dp = Array(n + 1)
      .fill()
      .map((_data, index) => Array(half).fill(false));

    for (let i = 0; i < n + 1; i++) {
      dp[i][0] = true;
    }

    for (let i = 1; i < n + 1; i++) {
      for (let j = 0; j < Math.ceil(half + 1); j++) {
        dp[i][j] = dp[i - 1][j - arr[i - 1]] || dp[i - 1][j];
      }
    }

    return dp[n][half];
  }
}
