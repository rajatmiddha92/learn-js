// 54. Spiral Matrix
// Solved
// Medium
// Topics
// Companies
// Hint
// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

var spiralOrder = function (matrix) {
  let res = [];
  let row = matrix.length;
  let col = matrix[0].length;

  let total = row * col;

  let startRow = 0;
  let startCol = 0;
  let endRow = matrix.length - 1;
  let endCol = matrix[0].length - 1;

  while (res.length != total) {
    for (let i = startCol; res.length != total && i <= endCol; i++) {
      res.push(matrix[startRow][i]);
    }
    startRow++;
    for (let i = startRow; res.length != total && i <= endRow; i++) {
      res.push(matrix[i][endCol]);
    }
    endCol--;
    for (let i = endCol; res.length != total && i >= startCol; i--) {
      res.push(matrix[endRow][i]);
    }
    endRow--;
    for (let i = endRow; res.length != total && i >= startRow; i--) {
      res.push(matrix[i][startCol]);
    }
    startCol++;
  }
  return res;
};
