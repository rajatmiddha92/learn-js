// k-th Smallest in BST
// Difficulty: MediumAccuracy: 43.53%Submissions: 118K+Points: 4
// Given a BST and an integer k. Find the kth smallest element in the BST using O(1) extra space.

// Examples:

// Input:
//       2
//     /   \
//    1     3
// k = 2
// Output: 2
// Explanation: 2 is the 2nd smallest element in the BST
// Input:
//         2
//       /  \
//      1    3
// k = 5
// Output: -1
// Explanation: There is no 5th smallest element in the BST as the size of BST is 3
// Constraints:
// 1 <= number of nodes <= 105
// 1 <= node->data <= 105

class Solution {
  solve(node, arr) {
    if (node == null) return;

    this.solve(node.left, arr);
    arr.push(node.data);
    this.solve(node.right, arr);
  }
  KthSmallestElement(root, K) {
    // code here

    let arr = [];
    this.solve(root, arr);

    return arr[K - 1] ?? -1;
  }
}

//sol 2 using morris traversal with constant space
class some {
  findPredecessor(cur) {
    let node = cur;
    cur = cur.left;
    while (cur.right != null && cur.right != node) {
      cur = cur.right;
    }
    return cur;
  }
  KthSmallestElement(root, K) {
    // code here

    let val = K;

    let cur = root;
    while (cur != null) {
      if (cur.left == null) {
        val--;
        if (val == 0) return cur.data;
        cur = cur.right;
      } else {
        let pre = this.findPredecessor(cur);
        if (pre.right == null) {
          pre.right = cur;
          cur = cur.left;
        } else {
          val--;
          if (val == 0) return cur.data;
          pre.right = null;
          cur = cur.right;
        }
      }
    }
    return -1;
  }
}
//sol 3
console.log(tree.kthSmallest(tree.root, [0], 3));
function kthSmallest(node, i, k) {
  if (node == null) {
    return -1;
  }

  let left = this.kthSmallest(node.left, i, k);
  if (left != -1) {
    return left;
  }

  i[0]++;

  if (i[0] == k) {
    return node.data;
  }

  return this.kthSmallest(node.right, i, k);
}
