// Burning Tree
// Difficulty: HardAccuracy: 53.53%Submissions: 93K+Points: 8
// Given a binary tree and a node data called target. Find the minimum time required to burn the complete binary tree if the target is set on fire. It is known that in 1 second all nodes connected to a given node get burned. That is its left child, right child, and parent.
// Note: The tree contains unique values.

// Examples :

// Input:
//           1
//         /   \
//       2      3
//     /  \      \
//    4    5      6
//        / \      \
//       7   8      9
//                    \
//                    10
// Target Node = 8
// Output: 7
// Explanation: If leaf with the value 8 is set on fire.
// After 1 sec: 5 is set on fire.
// After 2 sec: 2, 7 are set to fire.
// After 3 sec: 4, 1 are set to fire.
// After 4 sec: 3 is set to fire.
// After 5 sec: 6 is set to fire.
// After 6 sec: 9 is set to fire.
// After 7 sec: 10 is set to fire.
// It takes 7s to burn the complete tree.
// Input:
//           1
//         /   \
//       2      3
//     /  \      \
//    4    5      7
//   /    /
//  8    10
// Target Node = 10
// Output: 5

// Expected Time Complexity: O(number of nodes)
// Expected Auxiliary Space: O(height of tree)

// Constraints:
// 1 ≤ number of nodes ≤ 105

// 1 ≤ values of nodes ≤ 105

class Solution {
  solve(node, target, map, targetNode) {
    if (node == null) return;
    if (node.key == target) {
      targetNode[0] = node;
    }

    if (node.left) {
      map.set(node.left.key, node);
    }
    if (node.right) {
      map.set(node.right.key, node);
    }

    this.solve(node.left, target, map, targetNode);
    this.solve(node.right, target, map, targetNode);
  }
  minTime(root, target) {
    //code here
    let map = new Map();
    map.set(root, null);
    let targetNode = [];
    this.solve(root, target, map, targetNode);

    let count = 0;

    let visited = new Set();
    visited.add(...targetNode);
    let queue = [...targetNode];
    while (queue.length) {
      let size = queue.length;
      let bool = false;
      for (let i = 0; i < size; i++) {
        let ele = queue.shift();
        //   console.log(ele, ele.left, ele.right, map.get(ele.key));
        if (ele.left || ele.right || map.get(ele.key)) {
          // console.log("came");
          if (ele.left && !visited.has(ele.left)) {
            visited.add(ele.left);
            queue.push(ele.left);
            bool = true;
          }
          if (ele.right && !visited.has(ele.right)) {
            visited.add(ele.right);
            queue.push(ele.right);
            bool = true;
          }
          if (map.get(ele.key) && !visited.has(map.get(ele.key))) {
            visited.add(map.get(ele.key));
            queue.push(map.get(ele.key));
            bool = true;
          }
        }
      }
      if (bool) {
        count++;
      }
    }
    return count;
  }
}
