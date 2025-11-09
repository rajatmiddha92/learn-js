// 70. Climbing Stairs
// Solved
// Easy
// Topics
// Companies
// Hint
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

//Problem statement
// You have been given a number of stairs. Initially, you are at the 0th stair, and you need to reach the Nth stair.

// Each time, you can climb either one step or two steps.

// You are supposed to return the number of distinct ways you can climb from the 0th step to the Nth step.

// Example :
// N=3

// We can climb one step at a time i.e. {(0, 1) ,(1, 2),(2,3)} or we can climb the first two-step and then one step i.e. {(0,2),(1, 3)} or we can climb first one step and then two step i.e. {(0,1), (1,3)}.
// Detailed explanation ( Input/output format, Notes, Images )
// Constraints :
// 1 <= 'T' <= 10
// 0 <= 'N' <= 10^5

// Where 'T' is the number of test cases, and 'N' is the number of stairs.

// It is guaranteed that sum of 'N' over all test cases is <= 10^5.
// Sample Input 1 :
// 2
// 2
// 3
// Sample Output 1 :
// 2
// 3
// Explanation Of Sample Input 1 :
// In the first test case, there are only two ways to climb the stairs, i.e. {1,1} and {2}.

// In the second test case, there are three ways to climb the stairs i.e. {1,1,1} , {1,2} and {2,1}.
// Sample Input 2 :
// 2
// 4
// 5
// Sample Output 2 :
// 5
// 8
// Explanation Of Sample Input 2 :
// In the first test case, there are five ways to climb the stairs i.e. {1,1,1,1} , {1,1,2} , {2,1,1} , {1,2,1} , {2,2}.

// In the second test case, there are eight ways to climb the stairs i.e. {1,1,1,1,1} , {1,1,1,2} , {1,1,2,1}, {1,2,1,1}, {1,2,2},{2,1,1,1},{2,1,2} and {2,2,1}.

var climbStairs = function (n) {
  if (n == -1) return 0;
  if (n == 0) return 1;

  let dp = new Array(n + 2);
  dp[0] = 0;
  dp[1] = 1;
  //n=2
  //dp=[0,1,<2 empty item>]
  // [0,1,1,2]

  for (let i = 2; i <= n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
    //0 + 1
  }

  return dp[n + 1];
};
