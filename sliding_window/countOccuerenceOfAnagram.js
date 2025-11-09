// Count Occurences of Anagrams
// Difficulty: MediumAccuracy: 48.09%Submissions: 78K+Points: 4
// Given a word pat and a text txt. Return the count of the occurrences of anagrams of the word in the text.

// Example 1:

// Input:
// txt = forxxorfxdofr
// pat = for
// Output: 3
// Explanation: for, orf and ofr appears
// in the txt, hence answer is 3.
// Example 2:

// Input:
// txt = aabaabaa
// pat = aaba
// Output: 4
// Explanation: aaba is present 4 times
// in txt.
// Your Task:
// Complete the function search() which takes two strings pat, txt, as input parameters and returns an integer denoting the answer.
// You don't need to print answer or take inputs.

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(26) or O(256)

// Constraints:
// 1 <= |pat| <= |txt| <= 105
// Both strings contain lowercase English letters.

// we store the frequency of each character in map
// we count the number of characters in map
// fir window size k tak window create krni hai
// craete krte time agr map pr hai prsent to ski value ko decrease krdo 1 se
//or agar value 0 jati us character ki mtlb uski frequency 0 ho gyi to unique char count 1 se decrease kr do
// and if unique char count 0 ho gyi to ct  1 se increase kr do
// window shift krte time agr prev i ki value map pr hai to uske count agar 0 hai to unique char count 1 se increase kr do
// or map to update krna hi hai i k liye agr value hai to
function search(pat, txt) {
  //code here
  let map = new Map();
  for (let i = 0; i < pat.length; i++) {
    map.set(pat[i], (map.get(pat[i]) || 0) + 1);
  }
  let count = map.size;
  let ct = 0,
    j = 0,
    k = pat.length;
  for (let i = 0; i < txt.length - k + 1; i++) {
    while (j < i + k) {
      if (map.has(txt[j])) {
        map.set(txt[j], map.get(txt[j]) - 1);
        if (map.get(txt[j]) == 0) {
          count--;
        }
      }
      j++;
    }
    if (count == 0) {
      ct++;
    }
    if (map.has(txt[i])) {
      if (map.get(txt[i]) == 0) {
        count++;
      }
      map.set(txt[i], map.get(txt[i]) + 1);
    }
  }
  return ct;
}
