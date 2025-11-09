class Tree {
  constructor() {
    this.root = null;
  }

  findPre(node) {
    node = node.left;
    while (node.right != null) {
      node = node.right;
    }
    return node;
  }
  flatBst(node) {
    let start = node;
    while (start.left != null) {
      start = start.left;
    }
    let prev = null;
    while (node != null) {
      if (node.left == null) {
        prev = node;
        node = node.right;
      } else {
        let pre = this.findPre(node);
        // console.log(pre.data, node.data, node.left.data);
        pre.right = node;
        let temp = node.left;
        node.left = null;
        if (prev) {
          prev.right = temp;
        }
        node = temp;
      }
    }
    return start;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
let tree = new Tree();
tree.root = new Node(10);
tree.root.left = new Node(6);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(8);
tree.root.right = new Node(12);

tree.root.right.left = new Node(11);
tree.root.right.right = new Node(15);
// console.log(JSON.stringify(tree), "treew");
let ans = tree.flatBst(tree.root);

console.log(JSON.stringify(ans));
