// 34. Find First and Last Position of Element in Sorted Array
// Solved
// Medium
// Topics
// Companies
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//aproach first calculate first occurence and last occurence
function firstOccu(arr, target) {
  let f = -1;
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] == target) {
      f = mid;
      end = mid - 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return f;
}

function lastOccu(arr, target) {
  let l = -1;
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] == target) {
      l = mid;
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return l;
}

var searchRange = function (nums, target) {
  //
  let startOcc = firstOccu(nums, target);
  let last = lastOccu(nums, target);
  return [startOcc, last];
};
