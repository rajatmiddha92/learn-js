// BST to max heap
// Difficulty: MediumAccuracy: 67.16%Submissions: 22K+Points: 4
// Given a Binary Search Tree. Convert a given BST into a Special Max Heap with the condition that all the values in the left subtree of a node should be less than all the values in the right subtree of the node. This condition is applied on all the nodes in the so converted Max Heap.

// Example 1:

// Input :
//                  4
//                /   \
//               2     6
//             /  \   /  \
//            1   3  5    7

// Output : 1 2 3 4 5 6 7
// Exaplanation :
//                7
//              /   \
//             3     6
//           /   \  /   \
//          1    2 4     5
// The given BST has been transformed into a
// Max Heap and it's postorder traversal is
// 1 2 3 4 5 6 7.

// Your task :
// You don't need to read input or print anything. Your task is to complete the function convertToMaxHeapUtil() which takes the root of the tree as input and converts the BST to max heap.
// Note : The driver code prints the postorder traversal of the converted BST.

// Expected Time Complexity : O(n)
// Expected Auxiliary Space : O(n)

// Constraints :
// 1 ≤ n ≤ 105

//approach

// we store inorder of bst which is always sorted
// we do postorder traversal and store the front element of array root
// which result in follow max heap property

class Solution {
  inOrder(root, heap) {
    if (!root) return;

    this.inOrder(root.left, heap);
    heap.push(root.data);
    this.inOrder(root.right, heap);
  }

  postOrder(root, heap, index) {
    if (!root) return index;

    index = this.postOrder(root.left, heap, index);
    index = this.postOrder(root.right, heap, index);

    root.data = heap[index];
    index++;

    return index;
  }
  convertToMaxHeapUtil(root) {
    //code here
    let heap = [];

    this.inOrder(root, heap);
    this.postOrder(root, heap, 0);

    return root;
  }
}
