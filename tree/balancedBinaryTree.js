//a balanced binary tree is a tree in which at ervry node the height difference of its right & left subtree should not be more than one

// 110. Balanced Binary Tree
// Solved
// Easy
// Topics
// Companies
// Given a binary tree, determine if it is
// height-balanced
// .

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:

// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104

function check(node, res) {
  if (node == null) {
    return 0;
  }
  let left = check(node.left, res);
  let right = check(node.right, res);

  if (node.left) {
    left++;
  }
  if (node.right) {
    right++;
  }
  if (Math.abs(left - right) > 1) {
    if (res[0]) {
      res[0] = false;
    }
  }

  return Math.max(left, right);
}
var isBalanced = function (root) {
  let res = [true];
  check(root, res);
  return res[0];
};
