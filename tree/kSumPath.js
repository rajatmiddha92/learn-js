// Tutorials
// Jobs
// Practice
// Contests
// R
// 23

// K Sum Paths
// Difficulty: MediumAccuracy: 44.73%Submissions: 103K+Points: 4
// Given a binary tree and an integer k, the task is to count the number of paths in the tree such that the sum of the nodes in each path equals k. A path can start from any node and end at any node and must be downward only.

// Examples:

// Input: Tree =  1  k = 3
//              /   \
//            2     3
// Output: 2
// Explanation:
// Path 1 : 1 + 2 = 3
// Path 2 : only leaf node 3
// Input: Tree = 8  k = 7
//             /   \
//           4      5
//          /   \       \
//        3     2       2
//       /   \     \
//     3    -2    1
// Output: 3
// Explanation: The following paths sum to k

// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(height of Tree)

// Constraints:
// 1 ≤ number of nodes ≤ 2*104
// -105 ≤ node value ≤ 105
// -109 ≤ k ≤ 109

function getAllpaths(node, k, res, sum) {
  if (node == null) {
    return;
  }
  sum += +node.data;
  if (sum == k) {
    res[0] = res[0] + 1;
  }

  this.getAllpaths(node.left, k, res, sum);
  this.getAllpaths(node.right, k, res, sum);
}
function solve(node, k, res, sum) {
  if (node == null) return;

  this.getAllpaths(node, k, res, sum);

  this.solve(node.left, k, res, sum);
  this.solve(node.right, k, res, sum);
}

function sumK(root, K) {
  let count = [0];
  let sum = 0;
  this.solve(root, K, count, sum);
  return count[0];
  // code here
}

//sol 2
class Solution {
  solve(node, k, res, map, sum) {
    if (node == null) return;

    sum += +node.data;
    if (sum == k) {
      res[0] += 1;
    }

    if (map.has(sum - k)) {
      res[0] += +map.get(sum - k);
    }

    map.set(sum, (map.get(sum) || 0) + 1);

    this.solve(node.left, k, res, map, sum);
    this.solve(node.right, k, res, map, sum);

    let some = map.get(sum);
    if (some == 1) {
      map.delete(sum);
    } else {
      map.set(sum, map.get(sum) - 1);
    }
  }

  sumK(root, K) {
    let ct = [0];
    let map = new Map();
    let sum = 0;
    this.solve(root, K, ct, map, sum);

    return ct[0];
    // code here
  }
}

//sol 3
class Solution {
  solve(node, k, count, res) {
    if (node == null) return;

    res.push(node.data);

    this.solve(node.left, k, count, res);
    this.solve(node.right, k, count, res);

    let size = res.length;
    let sum = 0;
    for (let i = size - 1; i >= 0; i--) {
      sum += res[i];
      if (sum == k) {
        count[0] += 1;
      }
    }
    res.pop();
  }

  sumK(root, K) {
    // code here
    let count = [0];

    let arr = [];
    this.solve(root, K, count, arr);
    return count[0];
  }
}
