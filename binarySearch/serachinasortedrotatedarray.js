// 33. Search in Rotated Sorted Array
// Solved
// Medium
// Topics
// Companies
// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//first we find the pivot
//the drw graph for both lines
//then we apply binary search
//by checking the condition in which line our target lies
function pivot(arr) {
  let s = 0,
    e = arr.length - 1;
  while (s < e) {
    let mid = parseInt((s + e) / 2);
    if (arr[mid] > arr[e]) {
      s = mid + 1;
    } else {
      e = mid;
    }
  }
  return s;
}
var search = function (nums, target) {
  let getPivot = pivot(nums);
  let start = 0,
    end = getPivot - 1;
  if (end < 0) {
    end = nums.length - 1;
  }
  if (nums[getPivot] <= target && target <= nums[nums.length - 1]) {
    start = getPivot;
    end = nums.length - 1;
  }
  let res = -1;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return res;
};
