// Subset Sum Problem
// Difficulty: MediumAccuracy: 32.0%Submissions: 380K+Points: 4
// Given an array of positive integers arr[] and a value sum, determine if there is a subset of arr[] with sum equal to given sum.

// Examples:

// Input: arr[] = [3, 34, 4, 12, 5, 2], sum = 9
// Output: true
// Explanation: Here there exists a subset with target sum = 9, 4+3+2 = 9.
// Input: arr[] = [3, 34, 4, 12, 5, 2], sum = 30
// Output: false
// Explanation: There is no subset with target sum 30.
// Input: arr[] = [1, 2, 3], sum = 6
// Output: true
// Explanation: The entire array can be taken as a subset, giving 1 + 2 + 3 = 6.
// Constraints:
// 1 <= arr.size() <= 200
// 1<= arr[i] <= 200
// 1<= sum <= 104

// simple recursive solution
// function subsetSum(arr,sum,n){
// if(sum==0) return true
// if(n<0 || sum<0) return false

// return (subsetSum(arr,sum-arr[n],n-1,) || subsetSum(arr,sum,n-1))
// }

// memoize solution
// function subsetSum(arr,sum,n,dp){
//     if(sum==0) return true
//     if(n<0 || sum<0) return false
//     if(dp[n][sum]!= -1) return dp[n][sum]

//     return dp[n][sum] = (subsetSum(arr,sum-arr[n],n-1,dp) || subsetSum(arr,sum,n-1,dp))
//    }

// dp solution
function subsetSum(arr, sum, n) {
  let dp = Array(n + 1)
    .fill()
    .map((_data, index) => Array(sum + 1).fill(false));
  for (let j = 0; j < n + 1; j++) {
    dp[j][0] = true;
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 0; j < sum + 1; j++) {
      dp[i][j] = dp[i - 1][j - arr[i - 1]] || dp[i - 1][j];
    }
  }

  return dp[n][sum];
}

class Solution {
  isSubsetSum(arr, sum) {
    // code here
    return subsetSum(arr, sum, arr.length);
  }
}
let s = new Solution();
console.log(s.isSubsetSum([3, 34, 4, 12, 5, 2], 9));
