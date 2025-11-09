// 103. Binary Tree Zigzag Level Order Traversal
// Solved
// Medium
// Topics
// Companies
// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -100 <= Node.val <= 100

var zigzagLevelOrder = function (root) {
  if (root == null) return [];

  let q = [root];
  let result = [];
  let leftToRight = true;
  while (q.length) {
    let size = q.length;
    let ans = new Array(size);

    for (let i = 0; i < size; i++) {
      let front = q.shift();
      let index = leftToRight ? i : size - i - 1;

      ans[index] = front.val;

      if (front.left) {
        q.push(front.left);
      }
      if (front.right) {
        q.push(front.right);
      }
    }

    result.push(ans);
    leftToRight = !leftToRight;
  }
  return result;
};
