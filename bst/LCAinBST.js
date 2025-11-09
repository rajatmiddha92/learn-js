// LCA in BST
// Difficulty: EasyAccuracy: 65.2%Submissions: 154K+Points: 2
// Given a Binary Search Tree (with all values unique) and two node values n1 and n2 (n1!=n2). Find the Lowest Common Ancestors of the two nodes in the BST.

// Examples:

// Input:
//               5
//             /   \
//           4      6
//          /        \
//         3          7
//                     \
//                      8
// n1 = 7, n2 = 8
// Output: 7
// Input:
//      2
//    /   \
//   1     3
// n1 = 1, n2 = 3
// Output: 2

// Input:
//      2
//    /   \
//   1     3
// n1 = 1, n2 = 2
// Output: 2
class Solution {
  // Function to find the lowest common ancestor in a BST.
  LCA(root, n1, n2) {
    // your code here
    if (root.data < n1 && root.data < n2) {
      return this.LCA(root.right, n1, n2);
    } else if (root.data > n1 && root.data > n2) {
      return this.LCA(root.left, n1, n2);
    } else {
      return root;
    }
  }
}
