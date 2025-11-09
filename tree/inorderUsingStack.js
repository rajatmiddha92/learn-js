class Tree {
  constructor() {
    this.root = null;
  }

  inorder(node) {
    let stack = [];
    let curr = node;
    while (curr || stack.length) {
      while (curr) {
        stack.push(curr);
        curr = curr.left;
      }

      curr = stack.pop();
      console.log(curr.data);
      curr = curr.right;
    }
  }
}

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

let tree = new Tree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.inorder(tree.root);
