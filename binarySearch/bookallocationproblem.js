// 410. Split Array Largest Sum
// Solved
// Hard
// Topics
// Companies
// Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized.

// Return the minimized largest sum of the split.

// A subarray is a contiguous part of the array.

// Example 1:

// Input: nums = [7,2,5,10,8], k = 2
// Output: 18
// Explanation: There are four ways to split nums into two subarrays.
// The best way is to split it into [7,2,5] and [10,8], where the largest sum among the two subarrays is only 18.
// Example 2:

// Input: nums = [1,2,3,4,5], k = 2
// Output: 9
// Explanation: There are four ways to split nums into two subarrays.
// The best way is to split it into [1,2,3] and [4,5], where the largest sum among the two subarrays is only 9.

// 410. Split Array Largest Sum
// Solved
// Hard
// Topics
// Companies
// Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized.

// Return the minimized largest sum of the split.

// A subarray is a contiguous part of the array.

// Example 1:

// Input: nums = [7,2,5,10,8], k = 2
// Output: 18
// Explanation: There are four ways to split nums into two subarrays.
// The best way is to split it into [7,2,5] and [10,8], where the largest sum among the two subarrays is only 18.
// Example 2:

// Input: nums = [1,2,3,4,5], k = 2
// Output: 9
// Explanation: There are four ways to split nums into two subarrays.
// The best way is to split it into [1,2,3] and [4,5], where the largest sum among the two subarrays is only 9.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function Solution(nums, k, max, mid) {
  let student = 1,
    sum = 0,
    i;
  for (i = 0; i < nums.length; i++) {
    if (sum + nums[i] <= mid) {
      sum += nums[i];
    } else {
      sum = nums[i];
      student++;
    }
  }
  console.log(student, i, "i");
  if (student <= k) return true;
  return false;
}

function binary(nums, start, end, k) {
  let max = start,
    ans = -1;
  let s = 0;
  while (start <= end) {
    let mid = start + parseInt((end - start) / 2);
    // console.log(start,end,mid)
    let getSolution = Solution(nums, k, max, mid);
    // console.log(getSolution,"g")
    if (getSolution) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return ans;
}

var splitArray = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  let max = Math.max(...nums);
  if (k > nums.length) return -1;
  if (k == nums.length) return max;
  return binary(nums, max, sum, k);
};
