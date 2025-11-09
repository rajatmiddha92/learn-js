// 543. Diameter of Binary Tree
// Solved
// Easy
// Topics
// Companies
// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

// Example 1:

// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
// Example 2:

// Input: root = [1,2]
// Output: 1

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -100 <= Node.val <= 100

function check(node, max, left, right, res) {
  if (node == null) {
    return 0;
  }

  left = check(node.left, max, left, right, res);

  right = check(node.right, max, left, right, res);

  if (node.left) {
    left++;
  }
  if (node.right) {
    right++;
  }

  res[0] = Math.max(res[0], left + right);
  max = Math.max(max, left, right);

  return max;
}

var diameterOfBinaryTree = function (root) {
  let max = Number.NEGATIVE_INFINITY;
  let left = 0;
  let right = 0;
  let res = [0];
  check(root, max, left, right, res);
  return res[0];
};
