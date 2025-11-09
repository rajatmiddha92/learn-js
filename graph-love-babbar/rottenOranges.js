// 994. Rotting Oranges
// Solved
// Medium
// Topics
// Companies
// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Example 1:

// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 10
// grid[i][j] is 0, 1, or 2.

function getPossibleStartingPoints(matrix, q) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 2) {
        q.push({ index: [i, j], level: 0 });
      }
    }
  }
}

function isSafe(grid, row, col) {
  if (
    row > -1 &&
    col > -1 &&
    row < grid.length &&
    col < grid[row].length &&
    grid[row][col] == 1
  ) {
    return true;
  }
  return false;
}

function checkOneExist(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        return true;
      }
    }
  }

  return false;
}
var orangesRotting = function (grid) {
  let queue = [];

  // we will enter cordinates/idices of 2d matrix if it is a starting point
  // and we track level as well
  getPossibleStartingPoints(grid, queue);

  let ans = 0;
  while (queue.length) {
    let ele = queue.shift();
    let lvl = ele.level;
    let row = ele.index[0];
    let col = ele.index[1];

    let validRow = [-1, 0, 0, 1];
    let validCol = [0, -1, 1, 0];

    for (let i = 0; i < 4; i++) {
      let newRow = row + validRow[i];
      let newCol = col + validCol[i];
      if (isSafe(grid, newRow, newCol)) {
        // if value is and reachable we push cordinates in queue
        // and mark level to plus 1 as its a next level
        queue.push({ index: [newRow, newCol], level: lvl + 1 });
        // update grid to 2 so that we mark it visited like this
        grid[newRow][newCol] = 2;
        ans = lvl + 1;
      }
    }
  }

  // if we found one is grid it means it was not possible to reach that index from starting
  // points
  if (checkOneExist(grid)) return -1;

  return ans;
};

// The time complexity (TC) and space complexity (SC) for the orangesRotting function can be analyzed as follows:

// Time Complexity (TC):
// getPossibleStartingPoints: This function iterates through the entire grid of size m×n, where m is the number of rows and

// n is the number of columns. Thus, the time complexity of this function is
// O(m×n).

// isSafe: This function is called for each neighboring cell in the grid. Since it only checks simple conditions (bounds checking and value comparison), its time complexity is O(1).

// Main BFS Loop:

// The while loop runs for every element in the grid that gets added to the queue. The total number of elements processed will be at most m×n.

// Each time we process a node (rotton orange), we look at its 4 neighboring cells (up, down, left, right). This is done in constant time, i.e. O(1) per node.
// Therefore, the time complexity of the BFS loop is O(m×n).

// checkOneExist: This function checks the entire grid once to see if there are any remaining 1's (fresh oranges). Its time complexity is O(m×n).

// Thus, the overall time complexity (TC) of the orangesRotting function is:
// O(m×n)

// Space Complexity (SC):
// Queue: The queue holds all the rotten oranges (starting points) as well as the reachable fresh oranges during the BFS traversal. In the worst case, it may hold all the elements of the grid if they all become rotten. Thus, the space required for the queue is

// O(m×n).

// Grid: The grid is modified in place, so no additional space is required for storing a copy of the grid. We don't need extra space for the grid.

// Thus, the overall space complexity (SC) is:

// O(m×n)
// Summary:
// Time Complexity (TC):
// O(m×n)
// Space Complexity (SC):
// O(m×n)
// Where m is the number of rows and n is the number of columns in the grid.
