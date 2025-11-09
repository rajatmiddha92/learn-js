// First negative in every window of size k
// Difficulty: MediumAccuracy: 48.61%Submissions: 159K+Points: 4
// Given an array A[] of size N and a positive integer K, find the first negative integer for each and every window(contiguous subarray) of size K.

// Example 1:

// Input :
// N = 5
// A[] = {-8, 2, 3, -6, 10}
// K = 2
// Output :
// -8 0 -6 -6
// Explanation :
// First negative integer for each window of size k
// {-8, 2} = -8
// {2, 3} = 0 (does not contain a negative integer)
// {3, -6} = -6
// {-6, 10} = -6

// Example 2:
// Input :
// N = 8
// A[] = {12, -1, -7, 8, -15, 30, 16, 28}
// K = 3
// Output :
// -1 -1 -7 -15 -15 0

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function printFirstNegativeInteger() which takes the array A[], its size N and an integer K as inputs and returns the first negative number in every window of size K starting from the first till the end. If a window does not contain a negative integer , then return 0 for that window.

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(K)

// Constraints:
// 1 <= N <= 105
// -105 <= A[i] <= 105
// 1 <= K <= N

// we know that element in window is first
// so we are maintaining index of first negative element in window
// if that index lies in window WHICH IS GREATER THAN i
// it means no need to check further

function printFirstNegativeInteger(n, k, arr) {
  // code here
  let index = -1;
  let result = [];
  for (let i = 0; i < n - k + 1; i++) {
    let j = i + k - 1;
    //
    let start = i;
    if (index == -1 || index < i) {
      let bool = true;
      while (start <= j) {
        if (arr[start] < 0) {
          index = start;
          result.push(arr[start]);
          bool = false;

          break;
        }
        start++;
      }
      if (bool) {
        result.push(0);
        index = -1;
      }
    } else {
      result.push(arr[index]);
    }
  }
  return result;
}

// 2nd approach more efficient
//create one list to store negative number while making window
// then check if list is empty
// if empty add o to result
// else we are storing index of negative number in list
// we push first negative number in list to result
// N = 8
//A[] = {12, -1, -7, 8, -15, 30, 16, 28}
//       0    1   2  3   4    5   6   7
//                            |_______|
//     [ 1  , 2 ]
// -1 -1 -7 -15 -15 0
//
// k =3
//[ 0 1 2]
function printFirstNegativeInteger(n, k, arr) {
  // code here
  let list = [];
  let result = [];
  let j = 0;

  for (let i = 0; i < n - k + 1; i++) {
    while (list.length && list[0] < i) {
      list.shift();
    }

    while (j < i + k) {
      if (arr[j] < 0) {
        list.push(j); //[1 2]
      }
      j++; // 2
    }
    if (j == i + k) {
      if (list.length) {
        result.push(arr[list[0]]); // // -1
      } else {
        result.push(0);
      }
    }
  }
  return result;
}
