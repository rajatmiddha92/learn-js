// 700. Search in a Binary Search Tree
// Solved
// Easy
// Topics
// Companies
// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

// Example 1:

// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]
// Example 2:

// Input: root = [4,2,7,1,3], val = 5
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [1, 5000].
// 1 <= Node.val <= 107
// root is a binary search tree.
// 1 <= val <= 107
// Seen this question in a real interview before?
// 1/5
// Yes
// // 7
// /   \
// 5    10
// / \   / \
// 2   6 8  15
//         / \
//        12 20

//sol 1 using recursion
function searchBST(root, val) {
  if (!root) {
    return null;
  }
  if (root.data == val) {
    return root;
  }

  if (root.data > val) {
    return this.searchBST(root.left, val);
  } else {
    return this.searchBST(root.right, val);
  }
}

//sol2 using interation
var searchBST = function (root, val) {
  let cur = root;
  while (cur != null) {
    if (cur.val == val) {
      return cur;
    }

    if (cur.val < val) {
      cur = cur.right;
    } else {
      cur = cur.left;
    }
  }
  return cur;
};
