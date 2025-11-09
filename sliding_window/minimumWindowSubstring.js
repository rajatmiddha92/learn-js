// 76. Minimum Window Substring
// Solved
// Hard
// Topics
// Companies
// Hint
// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.

// Follow up: Could you find an algorithm that runs in O(m + n) time?

var minWindow = function (s, t) {
  let map = new Map();
  for (let i = 0; i < t.length; i++) {
    map.set(t[i], (map.get(t[i]) || 0) + 1);
  }
  let left = 0;
  let right = 0;
  let min = Number.POSITIVE_INFINITY;
  let count = map.size;
  let si = 0;
  let endi = 0;
  while (right < s.length) {
    if (map.has(s[right])) {
      map.set(s[right], map.get(s[right]) - 1);
      if (!map.get(s[right])) {
        count--;
      }
    }

    if (count == 0) {
      while (count == 0) {
        if (right - left + 1 < min) {
          min = right - left + 1;
          si = left;
          endi = right + 1;
        }
        //
        if (map.has(s[left])) {
          map.set(s[left], map.get(s[left]) + 1);
          if (map.get(s[left]) == 1) {
            count++;
          }
        }

        left++;
      }
    }

    right++;
  }
  return min == Number.NEGATIVE_INFINITY ? "" : s.substring(si, endi);
};
