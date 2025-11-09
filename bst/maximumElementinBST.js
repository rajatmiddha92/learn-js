//if you carefully Observe the bottom right element is bST is maximum

class Solution {
  // Function to find the minimum element in the given BST.
  minValue(root) {
    // your code here
    let cur = root;
    while (cur.right != null) {
      cur = cur.right;
    }
    return cur.data;
  }
}
