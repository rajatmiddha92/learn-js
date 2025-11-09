// Max Sum Subarray of size K
// Difficulty: EasyAccuracy: 49.6%Submissions: 158K+Points: 2
// Given an array of integers Arr of size N and a number K. Return the maximum sum of a subarray of size K.

// NOTE*: A subarray is a contiguous part of any given array.

// Example 1:

// Input:
// N = 4, K = 2
// Arr = [100, 200, 300, 400]
// Output:
// 700
// Explanation:
// Arr3  + Arr4 =700,
// which is maximum.
// Example 2:

// Input:
// N = 4, K = 4
// Arr = [100, 200, 300, 400]
// Output:
// 1000
// Explanation:
// Arr1 + Arr2 + Arr3 + Arr4 =1000,
// which is maximum.
// Your Task:

// You don't need to read input or print anything. Your task is to complete the function maximumSumSubarray() which takes the integer K, vector Arr with size N, containing the elements of the array and returns the maximum sum of a subarray of size K.

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 <= N <= 105
// 1 <= Arri <= 105
// 1 <= K <= N

class Solution {
  maximumSumSubarray(K, Arr, N) {
    let max = -1;
    let sum = 0;
    //code here
    for (let i = 0; i <= N - K; i++) {
      let c = K;
      if (i == 0) {
        let left = i;
        while (c) {
          sum += Arr[left];
          left++;
          c--;
        }
      } else {
        sum = sum - Arr[i - 1] + Arr[i + K - 1];
      }
      max = Math.max(max, sum);
    }
    return max;
  }
}
