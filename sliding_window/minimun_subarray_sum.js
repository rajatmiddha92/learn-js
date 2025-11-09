// Minimum Sum Subarray Of Given Size
// Easy
// 40/40
// Average time to solve is 15m
// Contributed by
// 328 upvotes
// Asked in companies
// Problem statement
// You have been given an array 'ARR' of integers consisting of ‘N’ integers and a positive integer ‘K’. Your task is to find a subarray(contiguous) of size ‘K’ such that the sum of its elements is minimum.

// Note :
// You can assume that the value of ‘K’ will always be less than or equal to ‘N’. So, the answer will always exist.
// Detailed explanation ( Input/output format, Notes, Images )
// Constraints :
// 1 <= N <=  10^5
// 1 <= K <= N
// -10^5 <= ARR[i] <= 10^5

// Time Limit: 1sec
// Sample Input 1 :
// 8 3
// 10 4 2 5 6 3 8 1
// Sample Output 1 :
// 11
// Explanation Of Sample Input
// All subarrays of size 3 and their respective sums are-
// {10, 4, 1} : sum → 10+4+1 = 15
// {4, 2, 5} : sum → 4+2+5 = 11
// {2, 5, 6} : sum → 2+5+6 = 13
// {5, 6, 3} : sum → 5+6+3 = 14
// {6, 3, 8} : sum → 6+3+8 = 17
// {3, 8, 1} : sum → 3+8+1 = 12

// The subarray with a minimum sum of 11 is {4, 2, 5}.
// Sample Input 2 :
// 8 4
// 1 -4 2 10 -2 3 1 0 -20
// Sample Output 2 :
// 2

function minSubarraySum(Arr, N, K) {
  // Write your code here
  let min = Number.POSITIVE_INFINITY;
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
    min = Math.min(min, sum);
  }
  return min;
}
