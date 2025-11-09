// Largest BST
// Difficulty: MediumAccuracy: 29.73%Submissions: 156K+Points: 4
// You're given a binary tree. Your task is to find the size of the largest subtree within this binary tree that also satisfies the properties of a Binary Search Tree (BST). The size of a subtree is defined as the number of nodes it contains.

// Note: A subtree of the binary tree is considered a BST if for every node in that subtree, the left child is less than the node, and the right child is greater than the node, without any duplicate values in the subtree.

// Examples :

// Input: root = [5, 2, 4, 1, 3]
// Root-to-leaf-path-sum-equal-to-a-given-number-copy
// Output: 3
// Explanation:The following sub-tree is a BST of size 3
// Balance-a-Binary-Search-Tree-3-copy
// Input: root = [6, 7, 3, N, 2, 2, 4]

// Output: 3
// Explanation: The following sub-tree is a BST of size 3:

// Constraints:
// 1 ≤ number of nodes ≤ 105
// 1 ≤ node->data ≤ 105

class Solution {
  solve(root, srange, erange, count) {
    if (root == null) return true;

    if (root.key <= srange || root.key >= erange) {
      return false;
    }
    count[0] = count[0] + 1;

    let left = this.solve(root.left, srange, root.key, count);
    let right = this.solve(root.right, root.key, erange, count);

    return left && right;
  }

  check(node, max) {
    if (node == null) return;

    let count = [0];
    let ans = this.solve(node, -Infinity, Infinity, count);
    if (ans) {
      max[0] = Math.max(max[0], count[0]);
    }

    this.check(node.left, max);
    this.check(node.right, max);
  }

  largestBst(root) {
    // code here
    let max = [0];

    this.check(root, max);

    return max[0];
  }
}

//sol2

class Solution {
  solve(node, maxSize) {
    if (node == null) {
      return { min: Infinity, max: -Infinity, isBST: true, size: 0 };
    }

    let left = this.solve(node.left, maxSize);
    let right = this.solve(node.right, maxSize);
    //  console.log(left,right)

    let max = Math.max(node.key, right.max);
    let min = Math.min(node.key, left.min);
    let isBST = false;
    let size = left.size + right.size + 1;
    if (
      left.isBST &&
      right.isBST &&
      node.key > left.max &&
      node.key < right.min
    ) {
      isBST = true;
    }

    if (isBST) {
      maxSize[0] = Math.max(maxSize[0], size);
    }

    return { max, min, isBST, size };
  }

  largestBst(root) {
    // code here
    // console.log(this.solve(root))
    let maxSize = [0];

    this.solve(root, maxSize);

    return maxSize[0];
  }
}
//TC - O(n)
