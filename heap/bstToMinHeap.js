//approach

// we store inorder of bst which is always sorted
// we do pretorder traversal and store the front element of array root
// which result in follow min heap property

//PS imp note
// but shift() operation take O(n) TC so we sorted array and store in
// non-increasing order so we using pop here in solution
class Solution {
  constructor() {
    this.root = null;
  }
  inOrder(root, heap) {
    if (!root) return;

    this.inOrder(root.left, heap);
    heap.push(root.data);
    this.inOrder(root.right, heap);
  }

  preOrder(root, heap, index) {
    if (!root) return index;

    root.data = heap[index];
    index++;
    index = this.preOrder(root.left, heap, index);
    index = this.preOrder(root.right, heap, index);

    return index;
  }

  convertToMinHeapUtil(root) {
    //code here
    let heap = [];

    this.inOrder(root, heap);
    this.preOrder(root, heap, 0);

    return root;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
let ans = new Solution();
ans.root = new Node(4);
ans.root.left = new Node(2);
ans.root.right = new Node(6);
ans.root.left.left = new Node(1);
ans.root.left.right = new Node(3);
ans.root.right.left = new Node(5);
ans.root.right.right = new Node(7);

console.log(ans.convertToMinHeapUtil(ans.root));
