// 852. Peak Index in a Mountain Array
// Solved
// Medium
// Topics
// Companies
// You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.

// Return the index of the peak element.

// Your task is to solve it in O(log(n)) time complexity.

// Example 1:

// Input: arr = [0,1,0]

// Output: 1

// Example 2:

// Input: arr = [0,2,1,0]

// Output: 1

// Example 3:

// Input: arr = [0,10,5,2]

// Output: 1

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let l = 0,
    r = arr.length - 1;
  while (l < r) {
    let mid = parseInt((l + r) / 2);
    if (arr[mid] < arr[mid + 1]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
};
