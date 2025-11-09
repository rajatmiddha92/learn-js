// Code
// Testcase
// Test Result
// Test Result
// 84. Largest Rectangle in Histogram
// Solved
// Hard
// Topics
// Companies
// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

// Example 1:

// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.
// Example 2:

// Input: heights = [2,4]
// Output: 4

// Constraints:

// 1 <= heights.length <= 105
// 0 <= heights[i] <= 104

/**
 * @param {number[]} heights
 * @return {number}
 */
function nextSmallestElement(arr) {
  let stack = [-1],
    result = [];
  for (let i = arr.length - 1; i > -1; i--) {
    while (stack.length) {
      if (stack[stack.length - 1] == -1) {
        result.push(-1);
        stack.push(i);
        break;
      } else if (arr[stack[stack.length - 1]] < arr[i]) {
        result.push(stack[stack.length - 1]);
        stack.push(i);
        break;
      } else {
        stack.pop();
      }
    }
  }
  return result.reverse();
}

function prevSmallestElement(arr) {
  let stack = [-1],
    result = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length) {
      if (stack[stack.length - 1] == -1) {
        result.push(-1);
        stack.push(i);
        break;
      } else if (arr[stack[stack.length - 1]] < arr[i]) {
        result.push(stack[stack.length - 1]);
        stack.push(i);
        break;
      } else {
        stack.pop();
      }
    }
  }
  return result;
}

var largestRectangleArea = function (arr) {
  let next = nextSmallestElement(arr);
  let prev = prevSmallestElement(arr);
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (next[i] == -1) {
      next[i] = arr.length;
    }
    let area = arr[i] * (next[i] - prev[i] - 1);
    max = Math.max(max, area);
  }
  return max;
};
