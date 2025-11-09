// Diagonal Tree Traversal
// Difficulty: MediumAccuracy: 60.63%Submissions: 87K+Points: 4
// Given a Binary Tree, print the diagonal traversal of the binary tree.

// Consider lines of slope -1 passing between nodes. Given a Binary Tree, print all diagonal elements in a binary tree belonging to same line.
// If the diagonal element are present in two different subtress then left subtree diagonal element should be taken first and then right subtree.

// Example 1:

// Input :
//             8
//          /     \
//         3      10
//       /   \      \
//      1     6     14
//          /   \   /
//         4     7 13
// Output : 8 10 14 3 6 7 13 1 4
// Explanation:
// unnamed
// Diagonal Traversal of binary tree :
//  8 10 14 3 6 7 13 1 4
// Your Task:
// You don't need to read input or print anything. The task is to complete the function diagonal() that takes the root node as input argumets and returns the diagonal traversal of the given tree.

// Expected Time Complexity: O(N).
// Expected Auxiliary Space: O(N).
// Here N is number of nodes.

function solve(node, res, lvl) {
  if (node == null) return;

  if (!res.has(lvl)) {
    res.set(lvl, []);
  }

  let d = res.get(lvl);
  d.push(node.key);

  this.solve(node.left, res, lvl + 1);
  this.solve(node.right, res, lvl);
}
function diagonal(root) {
  //code here
  if (root == null) return [];
  let map = new Map();
  this.solve(root, map, 0);

  // console.log(map)

  let ans = [];
  for (let data of map) {
    ans.push(...data[1]);
  }
  return ans;
}
