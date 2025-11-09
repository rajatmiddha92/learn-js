// You are given an array consisting of n integers which denote the position of a stall. You are also given an integer k which denotes the number of aggressive cows. You are given the task of assigning stalls to k cows such that the minimum distance between any two of them is the maximum possible.
// The first line of input contains two space-separated integers n and k.
// The second line contains n space-separated integers denoting the position of the stalls.

// Example 1:

// Input:
// n=5
// k=3
// stalls = [1 2 4 8 9]
// Output:
// 3
// Explanation:
// The first cow can be placed at stalls[0],
// the second cow can be placed at stalls[2] and
// the third cow can be placed at stalls[3].
// The minimum distance between cows, in this case, is 3,
// which also is the largest among all possible ways.
// Example 2:

// Input:
// n=5
// k=3
// stalls = [10 1 2 7 5]
// Output:
// 4
// Explanation:
// The first cow can be placed at stalls[0],
// the second cow can be placed at stalls[1] and
// the third cow can be placed at stalls[4].
// The minimum distance between cows, in this case, is 4,
// which also is the largest among all possible ways.
// Your Task:
// Complete the function int solve(), which takes integer n, k, and a vector stalls with n integers as input and returns the largest possible minimum distance between cows.

function check(arr, k, mid) {
  let c = 1;
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[index]) >= mid) {
      c++;
      index = i;
    }
  }
  if (c >= k) {
    return true;
  }
  return false;
}

function binary(arr, start, end, k) {
  let ans = -1;
  while (start <= end) {
    let mid = start + parseInt((end - start) / 2);
    let possibleSolution = check(arr, k, mid);
    if (possibleSolution) {
      start = mid + 1;
      ans = mid;
    } else {
      end = mid - 1;
    }
  }
  return ans;
}
var maxDistance = function (stalls, k) {
  //your code here
  let max = Math.max(...stalls);
  stalls.sort((a, b) => a - b);
  return binary(stalls, 0, max, k);
};
