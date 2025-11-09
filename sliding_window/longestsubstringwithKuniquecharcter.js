// Longest K unique characters substring
// Difficulty: MediumAccuracy: 34.65%Submissions: 160K+Points: 4
// Given a string you need to print the size of the longest possible substring that has exactly K unique characters. If there is no possible substring then print -1.

// Example 1:

// Input:
// S = "aabacbebebe", K = 3
// Output:
// 7
// Explanation:
// "cbebebe" is the longest substring with 3 distinct characters.
// Example 2:

// Input:
// S = "aaaa", K = 2
// Output: -1
// Explanation:
// There's no substring with 2 distinct characters.
// Your Task:
// You don't need to read input or print anything. Your task is to complete the function longestKSubstr() which takes the string S and an integer K as input and returns the length of the longest substring with exactly K distinct characters. If there is no substring with exactly K distinct characters then return -1.

// Expected Time Complexity: O(|S|).
// Expected Auxiliary Space: O(|S|).

// Constraints:
// 1 ≤ |S| ≤ 105
// 1 ≤ K ≤ 26
// All characters are lowercase latin characters.

function longestKSubstr(s, k) {
  //code here
  let right = 0;
  let left = 0;
  let map = new Map();
  let max = -1;

  while (right < s.length) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);

    while (map.size > k) {
      if (map.get(s[left])) {
        map.set(s[left], map.get(s[left]) - 1);
      }
      if (!map.get(s[left])) {
        map.delete(s[left]);
      }
      left++;
    }

    if (map.size == k) {
      max = Math.max(max, right - left + 1);
    }
    right++;
  }
  return max;
}
