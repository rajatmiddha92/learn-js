// 199. Binary Tree Right Side View
// Solved
// Medium
// Topics
// Companies
// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example 1:

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]
// Example 3:

// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

function solve(node, res) {
  let lvl = 0;

  let q = [{ node, lvl }];
  while (q.length) {
    let ele = q.shift();

    if (!res.has(ele.lvl)) {
      res.set(ele.lvl, ele.node.val);
    }

    if (ele.node.right) {
      q.push({ node: ele.node.right, lvl: ele.lvl + 1 });
    }
    if (ele.node.left) {
      q.push({ node: ele.node.left, lvl: ele.lvl + 1 });
    }
  }
}

var rightSideView = function (root) {
  let map = new Map();
  let ans = [];
  if (root == null) return ans;
  solve(root, map);
  for (let data of map) {
    ans.push(data[1]);
  }
  return ans;
};
