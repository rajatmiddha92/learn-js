// First non-repeating character in a stream
// Difficulty: MediumAccuracy: 31.65%Submissions: 207K+Points: 4
// Given an input stream A of n characters consisting only of lower case alphabets. While reading characters from the stream, you have to tell which character has appeared only once in the stream upto that point. If there are many characters that have appeared only once, you have to tell which one of them was the first one to appear. If there is no such character then append '#' to the answer.

// NOTE:
// 1. You need to find the answer for every i (0 <= i < n)
// 2. In order to find the solution for every i you need to consider the string from starting position till ith position.

// Example 1:

// Input: A = "aabc"
// Output: "a#bb"
// Explanation: For every ith character we will
// consider the string from index 0 till index i first non
// repeating character is as follow-
// "a" - first non-repeating character is 'a'
// "aa" - no non-repeating character so '#'
// "aab" - first non-repeating character is 'b'
// "aabc" - there are two non repeating characters 'b' and 'c',
// first non-repeating character is 'b' because 'b' comes before
// 'c' in the stream.
// Example 2:

// Input: A = "zz"
// Output: "z#"
// Explanation: For every character first non
// repeating character is as follow-
// "z" - first non-repeating character is 'z'
// "zz" - no non-repeating character so '#'

// Your Task:
// You don't need to read or print anything. Your task is to complete the function FirstNonRepeating() which takes A as input parameter and returns a string after processing the input stream.

// Expected Time Complexity: O(n)
// Expected Space Complexity: O(n)

// Constraints:
// 1 <= n <= 105

// we start pushing the characters in the queue
// we increment the count of the character
// if the count of the character is 1
// we return the character
// else we return #
function FirstNonRepeating(A) {
  //code here
  let q = [];
  let char = new Array(26).fill(0);
  let str = "";
  for (let i = 0; i < A.length; i++) {
    // pushing the characters in the queue
    q.push(A[i]);

    // incrementing the count of the character
    char[A.charCodeAt(i) - 97] = char[A.charCodeAt(i) - 97] + 1;

    // if the count of the character is not 1 we pop the characters from the queue
    while (q.length && char[q[0].charCodeAt(0) - 97] != 1) {
      q.shift();
    }

    // if the count of the character is 1 we return the character
    if (q.length) {
      str += q[0];
    } else {
      str += "#";
    }
  }
  return str;
}
