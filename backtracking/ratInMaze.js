// Consider a rat placed at position (0, 0) in an n x n square matrix mat. The rat's goal is to reach the destination at position (n-1, n-1). The rat can move in four possible directions: 'U'(up), 'D'(down), 'L' (left), 'R' (right).

// The matrix contains only two possible values:

// 0: A blocked cell through which the rat cannot travel.
// 1: A free cell that the rat can pass through.
// Note: In a path, no cell can be visited more than one time. If the source cell is 0, the rat cannot move to any other cell. In case of no path, return an empty list.+

// The task is to find all possible paths the rat can take to reach the destination, starting from (0, 0) and ending at (n-1, n-1), under the condition that the rat cannot revisit any cell along the same path. Furthermore, the rat can only move to adjacent cells that are within the bounds of the matrix and not blocked.

// Examples:

// Input: mat[][] = [[1, 0, 0, 0], [1, 1, 0, 1], [1, 1, 0, 0], [0, 1, 1, 1]]
// Output: ["DDRDRR", "DRDDRR"]
// Explanation: The rat can reach the destination at (3, 3) from (0, 0) by two paths - DRDDRR and DDRDRR, when printed in sorted order we get DDRDRR DRDDRR.
// Input: mat[][] = [[1, 0], [1, 0]]
// Output: []
// Explanation: No path exists and the destination cell is blocked.
// Input: mat = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
// Output: ["DDRR", "RRDD"]
// Explanation: The rat has two possible paths to reach the destination: 1. "DDRR" 2. "RRDD", These are returned in lexicographically sorted order.
// Constraints:
// 2 ≤ mat.size() ≤ 5
// 0 ≤ mat[i][j] ≤ 1

class Solution {
  // Function to find all possible paths
  solve(mat, row, col, res, visited, n, str) {
    if (row == n - 1 && col == n - 1) {
      res.push(str);
      return;
    } else if (
      row < 0 ||
      col < 0 ||
      row >= n ||
      col >= n ||
      mat[row][col] == "0"
    ) {
      return;
    }

    let cel = String(row) + String(col);
    if (!visited.has(cel)) {
      visited.add(cel);

      this.solve(mat, row + 1, col, res, visited, n, str + "D");
      this.solve(mat, row, col - 1, res, visited, n, str + "L");
      this.solve(mat, row, col + 1, res, visited, n, str + "R");
      this.solve(mat, row - 1, col, res, visited, n, str + "U");
      visited.delete(cel);
    }
  }
  findPath(mat) {
    // code here
    let row = 0,
      col = 0;
    let n = mat.length;
    let res = [];
    let visited = new Set();
    this.solve(mat, row, col, res, visited, n, "");
    return res;
  }
}

// ### **Time Complexity (TC)**

// 1. **Recursive Function Calls:**
//    - The function explores four directions (`D`, `L`, `R`, `U`) from every cell.
//    - In the worst case, if the matrix is `n x n` and all cells are valid (no obstacles), the recursion tree has a branching factor of 4.

// 2. **Visited Cells Optimization:**
//    - The `visited` set ensures that no cell is visited more than once in a single path, reducing redundant exploration.

// 3. **Number of Recursive Calls:**
//    - The maximum depth of recursion is proportional to the total number of cells, `n^2` (in the worst case, all cells are visited).

// 4. **Total Complexity:**
//    - Considering the branching factor and depth of recursion, the time complexity is \( O(4^{n^2}) \) in the worst case.
//    - However, due to the `visited` set, the effective complexity is reduced to \( O(n^2) \), as each cell is visited at most once.

// ---

// ### **Space Complexity (SC)**

// 1. **Recursive Stack:**
//    - The maximum depth of recursion corresponds to the number of cells in a single path, which is \( O(n^2) \).

// 2. **Visited Set:**
//    - The `visited` set stores coordinates of visited cells. The maximum size of this set is \( O(n^2) \), as all cells might be visited.

// 3. **Resultant Array:**
//    - The `res` array stores all valid paths. The number of paths depends on the structure of the matrix and can vary.
//    - In the worst case, the result size can be exponential in terms of the number of cells because there may be multiple paths to the destination.

// 4. **Total Space Complexity:**
//    - Combining the stack and `visited` set, the space complexity is \( O(n^2) \).
//    - If we include the `res` array, the effective space complexity could be \( O(n^2 \times k) \), where \( k \) is the average length of the paths stored.

// ---

// ### Final Analysis:

// - **Time Complexity:** \( O(n^2) \) (effective with pruning using the `visited` set).
// - **Space Complexity:** \( O(n^2 \times k) \), where \( k \) is the average length of paths stored in `res`.
