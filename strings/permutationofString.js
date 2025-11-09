// 567. Permutation in String
// Solved
// Medium
// Topics
// Companies
// Hint
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
//first we count the frequency of each character
//then we check if s1 is a permutation of s2
//then we check if s1 is a substring of s2
//alphabets stored in 0-26
function countOccurernce(str) {
  arr = new Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    arr[str.charCodeAt(i) - 97] += 1;
  }
  return arr;
}

var checkInclusion = function (s1, s2) {
  let c1 = countOccurernce(s1);

  for (let i = 0; i < s2.length - s1.length + 1; i++) {
    let check = countOccurernce(s2.substring(i, s1.length + i));
    // console.log(c1,check)
    let start = 0,
      bool = true;
    while (start < s1.length) {
      if (c1[s1.charCodeAt(start) - 97] != check[s1.charCodeAt(start) - 97]) {
        bool = false;
        break;
      }
      start++;
    }
    if (bool) return bool;
  }
  return false;
};
