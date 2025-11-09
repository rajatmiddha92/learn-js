// Code
// Testcase
// Testcase
// Test Result
// 74. Search a 2D Matrix
// Solved
// Medium
// Topics
// Companies
// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

var searchMatrix = function (matrix, target) {
  let row = matrix.length;
  let col = matrix[0].length;

  let start = 0;
  let end = row * col - 1;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    let element = matrix[parseInt(mid / col)][mid % col];
    if (element == target) {
      return true;
    } else if (element > target) {
      end = mid - 1;
      //11>15
    } else {
      start = mid + 1;
    }
  }
  return false;
};
