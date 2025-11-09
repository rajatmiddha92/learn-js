// 542. 01 Matrix
// Solved
// Medium
// Topics
// Companies
// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two cells sharing a common edge is 1.

// Example 1:

// Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
// Output: [[0,0,0],[0,1,0],[0,0,0]]
// Example 2:

// Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
// Output: [[0,0,0],[0,1,0],[1,2,1]]

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 104
// 1 <= m * n <= 104
// mat[i][j] is either 0 or 1.
// There is at least one 0 in mat.

function isSafe(mat, newRow, newCol) {
  if (
    newRow > -1 &&
    newCol > -1 &&
    newRow < mat.length &&
    newCol < mat[newRow].length
  ) {
    return true;
  }

  return false;
}

var updateMatrix = function (mat) {
  let visited = Array(mat.length)
    .fill()
    .map((data, index) => Array(mat[index].length).fill(false));
  let result = Array(mat.length)
    .fill()
    .map((data, index) => Array(mat[index].length).fill(-1));

  let queue = [];

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] == 0) {
        queue.push({ row: i, col: j, distance: 0 });
        visited[i][j] = true;
      }
    }
  }

  queue.push(null);
  let level = 1;
  while (queue.length) {
    let node = queue.shift();

    if (node == null) {
      if (!queue.length) break;
      level++;
      queue.push(null);
      continue;
    }
    let { row, col, distance } = node;

    result[row][col] = distance;

    let validRow = [-1, 0, 0, 1];
    let validCol = [0, -1, 1, 0];

    for (let k = 0; k < 4; k++) {
      let newRow = row + validRow[k];
      let newCol = col + validCol[k];

      if (isSafe(mat, newRow, newCol) && !visited[newRow][newCol]) {
        visited[newRow][newCol] = true;
        queue.push({ row: newRow, col: newCol, distance: level });
      }
    }
  }

  return result;
};
