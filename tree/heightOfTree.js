// 104. Maximum Depth of Binary Tree
// Solved
// Easy
// Topics
// Companies
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100

//using level Order Traversal (BFS)
var maxDepth = function (root) {
  if (root == null) return 0;
  let count = 0;
  let q = [root];
  q.push(null);
  while (q.length) {
    let node = q.shift();

    if (node == null) {
      count++;
      if (q.length) {
        q.push(null);
      }
    } else {
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
  }
  return count;
};

//using search in depth (DFS)
// function check(root, c) {
//   if (root == null) {
//     return c;
//   }

//   c++;
//   c = Math.max(check(root.left, c), check(root.right, c));

//   return c;
// }
//simplified version
function solve(node, c) {
  if (node == null) {
    return c;
  }

  let left = this.solve(node.left, c + 1);
  let right = this.solve(node.right, c + 1);

  c = Math.max(left, right);

  return c;
}
var maxDepth = function (root) {
  if (root == null) return 0;

  let count = check(root, 0);
  return count;
};
