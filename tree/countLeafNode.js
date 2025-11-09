// Count Leaves in Binary Tree
// Difficulty: BasicAccuracy: 76.44%Submissions: 112K+Points: 1
// Given a Binary Tree of size n, You have to count leaves in it. For example, there are two leaves in the following tree

//         1
//      /      \
//    10      39
//   /
// 5

// Examples:

// Input:
// Given Tree is
//                4
//              /   \
//             8     10
//            /     /   \
//           7     5     1
//          /
//         3
// Output:
// 3
// Explanation:
// Three leaves are 3 , 5 and 1.
// Expected Time Complexity: O(n).
// Expected Auxiliary Space: O(n).

//  Constraints:
// 1<= n <= 105

class Solution {
  count(c, node) {
    if (node == null) {
      return c;
    }

    if (node.left == null && node.right == null) {
      return c + 1;
    }

    c = this.count(c, node.left);
    c = this.count(c, node.right);

    return c;
  }

  countLeaves(root) {
    //code here

    let count = 0;
    return (count = this.count(count, root));
  }
}
