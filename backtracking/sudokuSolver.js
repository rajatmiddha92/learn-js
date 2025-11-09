// 37. Sudoku Solver
// Hard
// Topics
// Companies
// Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.

// Example 1:

// Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
// Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
// Explanation: The input board is shown above and the only valid solution is shown below:

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit or '.'.
// It is guaranteed that the input board has only one solution.

function getPossibleNumberPlace(rowMap, colMap, gridMap, row, col) {
  let temp = new Set();
  let startRow = row - (row % 3);
  let startCol = col - (col % 3);
  let value = String(startRow) + String(startCol);

  for (let i = 1; i < 10; i++) {
    i = String(i);
    // console.log(rowMap.get(row),row,col,gridMap,startRow,startCol)
    if (
      !rowMap.get(row).has(i) &&
      !colMap.get(col).has(i) &&
      !gridMap.get(value).has(i)
    ) {
      temp.add(i);
    }
  }
  // console.log(Array.from(temp))
  return Array.from(temp);
}

function solve(rowMap, colMap, gridMap, board, row, col) {
  if (row === 9) return true; // We've reached the end of the board

  if (col === 9) {
    // Move to the next row
    return solve(rowMap, colMap, gridMap, board, row + 1, 0);
  }

  if (board[row][col] == ".") {
    let arr = getPossibleNumberPlace(rowMap, colMap, gridMap, row, col);
    for (let i = 0; i < arr.length; i++) {
      let number = arr[i];
      board[row][col] = number;
      rowMap.get(row).add(number);
      colMap.get(col).add(number);
      let startRow = row - (row % 3);
      let startCol = col - (col % 3);
      let value = String(startRow) + String(startCol);
      gridMap.get(value).add(number);
      if (solve(rowMap, colMap, gridMap, board, row, col + 1)) {
        return true;
      } else {
        rowMap.get(row).delete(number);
        colMap.get(col).delete(number);
        gridMap.get(value).delete(number);
        board[row][col] = ".";
      }
    }
    return false;
  } else {
    return solve(rowMap, colMap, gridMap, board, row, col + 1);
  }
}

var solveSudoku = function (board) {
  let rowMap = new Map();
  let colMap = new Map();
  let gridMap = new Map();
  for (let i = 0; i < 9; i++) {
    rowMap.set(i, new Set());
    colMap.set(i, new Set());
    for (let j = 0; j < 9; j++) {
      if (board[i][j] != ".") {
        rowMap.get(i).add(board[i][j]);
      }
      if (board[j][i] != ".") {
        colMap.get(i).add(board[j][i]);
      }

      if (j % 3 == 0 && i % 3 == 0) {
        let row = i;
        let col = j;
        let endRol = i + 3;
        let endCol = j + 3;
        let startRow = row;
        let startCol = col;
        let key = String(startRow) + String(startCol);
        gridMap.set(key, new Set());
        for (let k = row; k < endRol; k++) {
          for (let l = col; l < endCol; l++) {
            if (board[k][l] != ".") {
              gridMap.get(key).add(board[k][l]);
            }
          }
        }
      }
    }
  }
  solve(rowMap, colMap, gridMap, board, 0, 0);
  // console.log(rowMap)
  // console.log(colMap)
  // console.log(gridMap)
  return board;
};
let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(solveSudoku(board));
//TC 9^m m is no of empty cell
