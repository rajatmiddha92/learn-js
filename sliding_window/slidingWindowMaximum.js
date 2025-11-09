// 239. Sliding Window Maximum
// Solved
// Hard
// Topics
// Companies
// Hint
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length
// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 1.1M
// Submissions
// 2.4M
// Acceptance Rate
// 46.8%

// var maxSlidingWindow = function (nums, k) {
//   let res = [];
//   let map = new Map();
//   let max = Number.NEGATIVE_INFINITY,
//     j = 0;
//   for (let i = 0; i < nums.length - k + 1; i++) {
//     if (i > 0 && max == nums[i - 1]) {
//       max = nums[i];
//       map.set(nums[j], j);
//       j++;
//       for (let key of map.keys()) {
//         if (key > max) {
//           max = key;
//         }
//       }
//     }
//     while (j < i + k) {
//       map.set(nums[j], j);
//       if (nums[j] > max) {
//         max = nums[j];
//       }
//       j++;
//     }
//     if (map.get(nums[i]) == i) {
//       map.delete(nums[i]);
//     }
//     res.push(max);
//   }
//   return res;
// };

//
// var maxSlidingWindow = function (nums, k) {
//   let res = [];
//   let dq = [];
//   dq.push(nums[0]);
//   let j = 1;
//   for (let i = 1; i < nums.length - k + 2; i++) {
//     while (j < i + k - 1) {
//       while (dq.length && dq[dq.length - 1] < nums[j]) {
//         dq.pop();
//       }
//       dq.push(nums[j]);
//       j++;
//     }
//     if (j == i + k - 1) {
//       res.push(dq[0]);
//     }
//     if (dq.length && dq[0] == nums[i - 1]) {
//       dq.shift();
//     }
//   }
//   return res;
// };
