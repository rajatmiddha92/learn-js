// Minimum element in BST
// Difficulty: BasicAccuracy: 70.95%Submissions: 195K+Points: 1
// Given the root of a Binary Search Tree. The task is to find the minimum valued element in this given BST.

// Examples

// Input:
//            5
//          /    \
//         4      6
//        /        \
//       3          7
//      /
//     1
// Output: 1
// Input:
//              9
//               \
//                10
//                 \
//                  11
// Output: 9
// Input:
//              10
//               \
//                10
//                 \
//                  11
// Output: 10
// Constraints:
// 0 <= number of nodes <= 105
// 0 <= node->data <= 105

//if you observe carefully BST the element at the bottom left is
// the smallest elemet in bst

class Solution {
  // Function to find the minimum element in the given BST.
  minValue(root) {
    // your code here
    let cur = root;
    while (cur.left != null) {
      cur = cur.left;
    }
    return cur.data;
  }
}
