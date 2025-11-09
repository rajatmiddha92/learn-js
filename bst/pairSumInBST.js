// Pair Sum in BST
// Difficulty: MediumAccuracy: 44.02%Submissions: 58K+Points: 4
// Given a Binary Search Tree and a target sum. Check whether there's a pair of Nodes in the BST with value summing up to the target sum.

// Example 1:

// Input:
//         2
//       /   \
//      1     3
// sum = 5
// Output: 1
// Explanation:
// Nodes with value 2 and 3 sum up to 5.
// Example 2:

// Input:
//            6
//           /
//          5
//         /
//        3
//      /  \
//     1    4
// sum = 2
// Output: 0
// Explanation:
// There's no pair that sums up to 2.
// Your Task:
// You don't need to read input or print anything. Your task is to complete the function isPairPresent() that takes a root node and a target value as a parameter and returns 1 if there's a pair of Nodes in the BST with values summing up to the target sum, else returns 0.

// Expected Time Complexity: O(N).
// Expected Auxiliary Space: O(Height of the BST).

// Constraints:
// 1 ≤ Number of Nodes ≤ 105
// 1 ≤ Sum ≤ 106

class Solution {
  solve(node, arr) {
    if (node == null) return;

    this.solve(node.left, arr);
    arr.push(node.data);
    this.solve(node.right, arr);
  }
  isPairPresent(root, k) {
    //code here
    let arr = [];

    this.solve(root, arr);

    let s = 0,
      e = arr.length - 1;
    let sum = 0;
    while (s < e) {
      sum = arr[s] + arr[e];
      if (sum > k) {
        e--;
      } else if (sum < k) {
        s++;
      } else {
        return 1;
      }
    }

    return 0;
  }
}
