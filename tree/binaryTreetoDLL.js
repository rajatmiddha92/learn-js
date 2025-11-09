// Binary Tree to DLL
// Difficulty: HardAccuracy: 53.36%Submissions: 157K+Points: 8
// Given a Binary Tree (BT), convert it to a Doubly Linked List (DLL) in place. The left and right pointers in nodes will be used as previous and next pointers respectively in converted DLL. The order of nodes in DLL must be the same as the order of the given Binary Tree. The first node of Inorder traversal (leftmost node in BT) must be the head node of the DLL.

// Note: h is the tree's height, and this space is used implicitly for the recursion stack.

// TreeToList

// Examples:

// Input:
//       1
//     /  \
//    3    2
// Output:
// 3 1 2
// 2 1 3

// Explanation: DLL would be 3<=>1<=>2
// Input:
//        10
//       /   \
//      20   30
//    /   \
//   40   60
// Output:
// 40 20 60 10 30
// 30 10 60 20 40

// Explanation:  DLL would be 40<=>20<=>60<=>10<=>30.
// Expected Time Complexity: O(no. of nodes)
// Expected Space Complexity: O(height of the tree)

// Constraints:
// 1 ≤ Number of nodes ≤ 105
// 0 ≤ Data of a node ≤ 105

class Solution {
  solve(node, head) {
    if (node == null) return null;

    this.solve(node.right, head);

    node.right = head[0];

    if (head[0]) {
      head[0].left = node;
    }

    head[0] = node;

    this.solve(node.left, head);
  }
  //Function to convert a binary tree to doubly linked list and return it.
  bToDLL(root) {
    //your code here
    let head = [null];

    this.solve(root, head);
    //   while(head[0].left!=null){
    //       head[0]=head[0].left
    //   }
    return head[0];
  }
}
