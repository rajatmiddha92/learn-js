// Sum of nodes on the longest path from root to leaf node
// Difficulty: MediumAccuracy: 52.39%Submissions: 108K+Points: 4
// Given a binary tree having n nodes. Find the sum of all nodes on the longest path from root to any leaf node. If two or more paths compete for the longest path, then the path having maximum sum of nodes will be considered.

// Example 1:

// Input:
//          4
//        /   \
//       2     5
//      / \   / \
//     7   1 2   3
//        /
//       6
// Output:
// 13
// Explanation:
//          4
//        /   \
//       2     5
//      / \   / \
//     7   1 2   3
//        /
//       6
// The highlighted nodes (4, 2, 1, 6) above are part of the longest root to leaf path having sum = (4 + 2 + 1 + 6) = 13
// Example 2:

// Input:
//           1
//         /   \
//        2     3
//       / \   / \
//      4   5 6   7
// Output:
// 11
// Explanation:
// Use path 1->3->7, with sum 11.
// Your Task:
// You don't need to read input or print anything. Your task is to complete the function sumOfLongRootToLeafPath() which takes root node of the tree as input parameter and returns an integer denoting the sum of the longest root to leaf path of the tree.

// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(n)

// Constraints:
// 1 <= n <= 105
// 0 <= data of each node <= 104

// function solve(node, depth, sum, ans) {
//   if (node == null) {
//     return { depth, sum };
//   }

//   const left = this.solve(node.left, depth + 1, sum + node.data, ans);
//   const right = this.solve(node.right, depth + 1, sum + node.data, ans);

//   const currentDepth = left.depth > right.depth ? left : right;

//   if (currentDepth.depth > ans[1]) {
//     ans[1] = currentDepth.depth;
//     ans[0] = currentDepth.sum;
//   } else if (currentDepth.depth === ans[1]) {
//     ans[0] = Math.max(ans[0], currentDepth.sum);
//   }

//   return { depth: currentDepth.depth, sum: currentDepth.sum };
// }
// function sumOfLongRootToLeafPath(root) {
//   //code here

//   if (root == null) return 0;
//   let res = [0, Number.NEGATIVE_INFINITY];

//   this.solve(root, 0, 0, res);
//   return res[0];
// }

function solve(node, depth, sum, ans) {
  if (node == null) {
    if (depth > ans[1]) {
      ans[1] = depth;
      ans[0] = sum;
    } else {
      ans[0] = Math.max(ans[0], sum);
    }
    return;
  }

  this.solve(node.left, depth + 1, sum + node.data, ans);
  this.solve(node.right, depth + 1, sum + node.data, ans);
}

function sumOfLongRootToLeafPath(root) {
  //code here

  if (root == null) return 0;
  let res = [0, Number.NEGATIVE_INFINITY];

  this.solve(root, 0, 0, res);
  return res[0];
}
