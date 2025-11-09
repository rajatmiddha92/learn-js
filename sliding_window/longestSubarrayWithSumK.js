// // only positive numbers
// lenOfLongSubarr(arr,n, k){
//     //code here
//     let maxLength = 0;
//     let sum = 0;
//     let start = 0;

//     for (let end = 0; end < arr.length; end++) {
//         sum += arr[end];  // Add the current element to the sum

//         // Shrink the window from the left if the sum exceeds k
//         while (sum > k && start <= end) {
//             sum -= arr[start];
//             start++;
//         }

//         // Check if the current window's sum equals k
//         if (sum == k) {
//             maxLength = Math.max(maxLength, end - start + 1);
//         }
//     }

//     return maxLength;
// }

// Longest Sub-Array with Sum K
// Difficulty: MediumAccuracy: 24.64%Submissions: 399K+Points: 4
// Given an array arr containing n integers and an integer k. Your task is to find the length of the longest Sub-Array with the sum of the elements equal to the given value k.

// Examples:

// Input :
// arr[] = {10, 5, 2, 7, 1, 9}, k = 15
// Output : 4
// Explanation:
// The sub-array is {5, 2, 7, 1}.
// Input :
// arr[] = {-1, 2, 3}, k = 6
// Output : 0
// Explanation:
// There is no such sub-array with sum 6.
// Expected Time Complexity: O(n).
// Expected Auxiliary Space: O(n).

// Constraints:
// 1<=n<=105
// -105<=arr[i], K<=105

//using a hashmap for negative and 0 numbers

// we create a hashmap for storeing key as current sum
//&  value as index
// if sum-k is present previously then the subarray exist
// and then we update the maxlength
// and then map to current sum
function lenOfLongSubarr(arr, n, k) {
  //code here
  let maxLength = 0;
  let sum = 0;
  let map = new Map();

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end]; // Add the current element to the sum

    if (sum == k) {
      //possible max length
      maxLength = Math.max(maxLength, end + 1);
    }

    if (map.has(sum - k)) {
      maxLength = Math.max(maxLength, end - map.get(sum - k));
    }

    if (!map.has(sum)) {
      map.set(sum, end);
    }
  }

  return maxLength;
}
