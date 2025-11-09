// 130. Surrounded Regions
// Solved
// Medium
// Topics
// Companies
// You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

// Connect: A cell is connected to adjacent cells horizontally or vertically.
// Region: To form a region connect every 'O' cell.
// Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.
// To capture a surrounded region, replace all 'O's with 'X's in-place within the original board. You do not need to return anything.

// Example 1:

// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

// Explanation:

// In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.

// Example 2:

// Input: board = [["X"]]

// Output: [["X"]]

// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 200
// board[i][j] is 'X' or 'O'.

function isSafe(board, i, j, visited, key) {
  if (
    i > -1 &&
    j > -1 &&
    i < board.length &&
    j < board[i].length &&
    !visited.has(key)
  ) {
    return true;
  }

  return false;
}

function dfs(board, row, col, key, visited) {
  visited.add(key);
  board[row][col] = -1;

  let validRow = [-1, 0, 0, 1];
  let validCol = [0, -1, 1, 0];

  for (let i = 0; i < 4; i++) {
    let newRow = row + validRow[i];
    let newCol = col + validCol[i];

    let newKey = String(newRow) + "," + String(newCol);

    if (
      isSafe(board, newRow, newCol, visited, newKey) &&
      board[newRow][newCol] == "O"
    ) {
      dfs(board, newRow, newCol, newKey, visited);
    }
  }
}

var solve = function (board) {
  // algo
  // to find a region get all 0 of edges
  // check all the connecting zeros with the zeroes which are on edges
  // if there are connectiong zero mark them visited and update its value to -1
  // when on borad all connection zero are processed -1
  // then remaining left zeroes can be sorrounded by X
  // so merk remaining zeros as x
  // then update -1 as zero

  let zeroArr = [];
  let visited = new Set();
  for (let i = 0; i < board[0].length; i++) {
    if (board[0][i] == "O") {
      zeroArr.push({ row: 0, col: i });
    }
    if (board[board.length - 1][i] == "O") {
      zeroArr.push({ row: board.length - 1, col: i });
    }
  }
  for (let i = 1; i < board.length - 1; i++) {
    if (board[i][0] == "O") {
      zeroArr.push({ row: i, col: 0 });
    }
    if (board[i][board[0].length - 1] == "O") {
      zeroArr.push({ row: i, col: board[0].length - 1 });
    }
  }

  for (let i = 0; i < zeroArr.length; i++) {
    let { row, col } = zeroArr[i];
    let key = String(row) + "," + String(col);
    if (!visited.has(key)) {
      dfs(board, row, col, key, visited);
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == "O") {
        board[i][j] = "X";
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == -1) {
        board[i][j] = "O";
      }
    }
  }
};
