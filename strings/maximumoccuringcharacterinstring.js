// Given a string str of lowercase alphabets. The task is to find the maximum occurring character in the string str. If more than one character occurs the maximum number of time then print the lexicographically smaller character.

// Example 1:

// Input:
// str = testsample
// Output: e
// Explanation: e is the character which
// is having the highest frequency.
// Example 2:

// Input:
// str = output
// Output: t
// Explanation:  t and u are the characters
// with the same frequency, but t is
// lexicographically smaller.
// Your Task:
// The task is to complete the function getMaxOccuringChar() which returns the character which is most occurring.

// Expected Time Complexity: O(N).
// Expected Auxiliary Space: O(Number of distinct characters).
// Note: N = |s|

// Constraints:
// 1 ≤ |s| ≤ 100

function getMaxOccuringChar(str) {
  // code here
  let char = new Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    char[str.charCodeAt(i) - 97] += 1;
  }
  let max = -1,
    ans;
  for (let i = 0; i < char.length; i++) {
    if (char[i] > max) {
      max = char[i];
      ans = String.fromCharCode(i + 97);
    }
  }
  return ans;
}
