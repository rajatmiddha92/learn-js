// Code
// Testcase
// Test Result
// Test Result
// 85. Maximal Rectangle
// Solved
// Hard
// Topics
// Companies
// Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

// Example 1:

// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 6
// Explanation: The maximal rectangle is shown in the above picture.
// Example 2:

// Input: matrix = [["0"]]
// Output: 0
// Example 3:

// Input: matrix = [["1"]]
// Output: 1

// Constraints:

// rows == matrix.length
// cols == matrix[i].length
// 1 <= row, cols <= 200
// matrix[i][j] is '0' or '1'.

/**
 * @param {character[][]} matrix
 * @return {number}
 */
function nextsmallestElement(arr) {
  let stack = [-1],
    ans = [];
  for (let i = arr.length - 1; i > -1; i--) {
    while (stack.length) {
      if (stack[stack.length - 1] == -1) {
        ans.push(-1);
        stack.push(i);
        break;
      }
      if (
        stack[stack.length - 1] != -1 &&
        arr[stack[stack.length - 1]] < arr[i]
      ) {
        ans.push(stack[stack.length - 1]);
        stack.push(i);
        break;
      } else {
        stack.pop();
      }
    }
  }
  return ans.reverse();
}

function prevsmallestElement(arr) {
  let stack = [-1],
    ans = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length) {
      if (stack[stack.length - 1] == -1) {
        ans.push(-1);
        stack.push(i);
        break;
      }
      if (
        stack[stack.length - 1] != -1 &&
        arr[stack[stack.length - 1]] < arr[i]
      ) {
        ans.push(stack[stack.length - 1]);
        stack.push(i);
        break;
      } else {
        stack.pop();
      }
    }
  }
  // console.log(ans,"ans")
  return ans;
}

function largestReactangle(arr) {
  let next = nextsmallestElement(arr);
  // console.log(next,"mext")
  let prev = prevsmallestElement(arr);
  // console.log(prev)
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (next[i] == -1) {
      next[i] = arr.length;
    }
    let breadth = +next[i] - +prev[i] - 1;
    let area = +breadth * +arr[i];
    // console.log(area,"breadth",breadth,arr[i])
    max = Math.max(max, area);
  }
  return max;
}

var maximalRectangle = function (matrix) {
  let sum = [],
    max = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i == 0) {
        sum.push(+matrix[i][j]);
      } else {
        if (matrix[i][j] == 0) {
          sum[j] = 0;
        } else {
          sum[j] += +matrix[i][j];
        }
      }
    }
    // console.log(sum,"sum")
    let getmaxArea = largestReactangle(sum);
    // console.log(getmaxArea)
    max = Math.max(max, getmaxArea);
  }
  return max;
};
