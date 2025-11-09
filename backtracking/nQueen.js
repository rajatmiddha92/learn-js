// 51. N-Queens
// Solved
// Hard
// Topics
// Companies
// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

// Example 1:

// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
// Example 2:

// Input: n = 1
// Output: [["Q"]]

// Constraints:

// 1 <= n <= 9

/**
 * @param {number} n
 * @return {string[][]}
 */
function safePlace(row, col, arr, n) {
  let x = row;
  let y = col;
  while (x > -1) {
    if (arr[x][y] == "Q") {
      return false;
    }
    x--;
  }

  x = row;
  //col++
  //row--
  while (y < n && x > -1) {
    if (arr[x][y] == "Q") {
      return false;
    }
    y++;
    x--;
  }
  x = row;
  y = col;
  //row-- col--
  while (x > -1 && y > -1) {
    if (arr[x][y] == "Q") {
      return false;
    }
    y--;
    x--;
  }
  return true;
}

function solve(row, arr, res, n) {
  if (row == n) {
    res.push(arr.map((data) => data.join("")));
    return;
  }

  for (let col = 0; col < n; col++) {
    if (safePlace(row, col, arr, n)) {
      arr[row][col] = "Q";
      solve(row + 1, arr, res, n);
      arr[row][col] = ".";
    }
  }
}

var solveNQueens = function (n) {
  let res = [];
  let arr = Array(n)
    .fill()
    .map(() => Array(n).fill("."));
  let row = 0;
  solve(row, arr, res, n);
  return res;
};
