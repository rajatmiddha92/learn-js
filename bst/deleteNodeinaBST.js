// 450. Delete Node in a BST
// Solved
// Medium
// Topics
// Companies
// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

// Basically, the deletion can be divided into two stages:

// Search for a node to remove.
// If the node is found, delete the node.

// Example 1:

// Input: root = [5,3,6,2,4,null,7], key = 3
// Output: [5,4,6,2,null,null,7]
// Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
// One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
// Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

// Example 2:

// Input: root = [5,3,6,2,4,null,7], key = 0
// Output: [5,3,6,2,4,null,7]
// Explanation: The tree does not contain a node with value = 0.
// Example 3:

// Input: root = [], key = 0
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -105 <= Node.val <= 105
// Each node has a unique value.
// root is a valid binary search tree.
// -105 <= key <= 105

// Follow up: Could you solve it with time complexity O(height of tree)?

// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 593.6K
// Submissions
// 1.1M
// Acceptance Rate
// 52.2%

var deleteNode = function (root, key) {
  if (root == null) return null;

  if (root.val == key) {
    // if deleteing node has zero child
    if (!root.left && !root.right) {
      return null;
    }

    //if deleteing node hasone child
    if (root.left && !root.right) {
      return (root = root.left);
    }

    if (!root.left && root.right) {
      return (root = root.right);
    }

    //if deleting node has both child
    // we go to right subtree anf find min data
    //paste the data to root and delete the node from right subtree
    if (root.left && root.right) {
      let cur = root.right;
      while (cur.left != null) {
        cur = cur.left;
      }
      root.val = cur.val;
      root.right = deleteNode(root.right, cur.val);
      return root;
    }
  }

  if (root.val > key) {
    root.left = deleteNode(root.left, key);
    return root;
  } else {
    root.right = deleteNode(root.right, key);
    return root;
  }
};
