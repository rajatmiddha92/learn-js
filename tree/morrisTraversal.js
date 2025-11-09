//inorder using morris traversal

class Tree {
  constructor() {
    this.root = null;
  }
  //precderor is go one left & go to the most right
  // take care of edge case ic case you have join precedor with curr
  // u will land in loop which will take you to the last element of tree
  //make sure node.right is not equal to noderiught

  findPrecedor(node) {
    let curr = node;
    node = node.left;

    while (node.right != null && node.right != curr) {
      node = node.right;
    }

    return node;
  }

  //algo
  // check if left exists or not
  // if left exists, find prcederor
  // join precedor with curr node
  // and move curr to left
  // if left not exists print data
  // and move curr to right
  morrisInorder(node) {
    let res = [];
    let curr = node;
    while (curr != null) {
      if (curr.left == null) {
        res.push(curr.data);
        curr = curr.right;
      } else {
        let precedor = this.findPrecedor(curr);
        if (precedor.right == null) {
          precedor.right = curr;
          curr = curr.left;
        } else {
          res.push(curr.data);
          precedor.right = null;
          curr = curr.right;
        }
      }
    }
    return res;
  }

  morrisPreOrder(node) {
    let res = [];
    let curr = node;
    while (curr != null) {
      if (curr.left == null) {
        res.push(curr.data);
        curr = curr.right;
      } else {
        let precedor = this.findPrecedor(curr);
        if (precedor.right == null) {
          res.push(curr.data);
          precedor.right = curr;
          curr = curr.left;
        } else {
          precedor.right = null;
          curr = curr.right;
        }
      }
    }
    return res;
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

tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.right.left = new Node(7);
tree.root.right.right = new Node(8);
tree.root.right.right.right = new Node(9);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.left.right.left = new Node(6);
console.log(tree.morrisPreOrder(tree.root));
