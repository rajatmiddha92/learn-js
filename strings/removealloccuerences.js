// 1910. Remove All Occurrences of a Substring
// Solved
// Medium
// Topics
// Companies
// Hint
// Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:

// Find the leftmost occurrence of the substring part and remove it from s.
// Return s after removing all occurrences of part.

// A substring is a contiguous sequence of characters in a string.

// Example 1:

// Input: s = "daabcbaabcbc", part = "abc"
// Output: "dab"
// Explanation: The following operations are done:
// - s = "daabcbaabcbc", remove "abc" starting at index 2, so s = "dabaabcbc".
// - s = "dabaabcbc", remove "abc" starting at index 4, so s = "dababc".
// - s = "dababc", remove "abc" starting at index 3, so s = "dab".
// Now s has no occurrences of "abc".
// Example 2:

// Input: s = "axxxxyyyyb", part = "xy"
// Output: "ab"
// Explanation: The following operations are done:
// - s = "axxxxyyyyb", remove "xy" starting at index 4 so s = "axxxyyyb".
// - s = "axxxyyyb", remove "xy" starting at index 3 so s = "axxyyb".
// - s = "axxyyb", remove "xy" starting at index 2 so s = "axyb".
// - s = "axyb", remove "xy" starting at index 1 so s = "ab".
// Now s has no occurrences of "xy".

// var removeOccurrences = function (s, part) {
//   let start = 0;
//   for (let i = 0; i < s.length; i++) {
//     let cur = i;
//     // console.log(start,"s,",s)
//     if (s[i] == part[start]) {
//       while (start < part.length) {
//         if (s[i] == part[start]) {
//           start++;
//           i++;
//         } else {
//           start = 0;
//           i = cur;
//           break;
//         }
//       }

//       if (start) {
//         let b = s.slice(0, cur) + s.slice(cur + part.length, s.length);
//         s = b;
//         i = cur - part.length;
//         start = 0;
//       }
//     }
//   }
//   return s;
// };
var removeOccurrences = function (s, part) {
  for (let i = 0; i < s.length; i++) {
    if (s.substring(i, i + part.length) == part) {
      s = s.slice(0, i) + s.slice(i + part.length);
      i -= part.length;
    }
  }
  return s;
};
