//bst
// binary search tree is a tree in which the left subtree of any node contains only nodes with data less than the node's data and the right subtree of any node contains only nodes with data greater than the node's data

//imp - inorder of BST is sorted
class BST {
  constructor() {
    this.root = null;
  }
  solve(node, insertNode) {
    if (node == null) {
      node = insertNode;
      return node;
    }

    if (insertNode.data < node.data) {
      node.left = this.solve(node.left, insertNode);
    } else {
      node.right = this.solve(node.right, insertNode);
    }
    return node;
  }

  constructBST(root, arr) {
    while (arr.length) {
      let ele = arr.shift();
      let node = new Node(ele);
      root = this.solve(root, node);
    }
    return root;
  }
  //LNR
  //note the inorder ans is sorted if you observe
  //this can be used to solve many questions
  //we can take advantage
  inorderTraversal(node) {
    if (node == null) {
      return;
    }

    this.inorderTraversal(node.left);
    console.log(node.data);
    this.inorderTraversal(node.right);
  }
  //       7
  //     /  \
  //    5    10
  //  /   \  / \
  // 2    6 8   15
  //           /  \
  //          12   20

  //inorder precedessor -  the prev element come from the node is the inorder predecessor
  //ex find the inorder predecessor of 8
  // it is 7

  //inorder sucessor the next element come from the node is the inorder successor
  //ex find the inorder successor of 8
  // it is 10
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// // 7
// /   \
// 5    10
// / \   / \
// 2   6 8  15
//         / \
//        12 20
let tree = new BST();
let element = [7, 5, 10, 2, 6, 8, 15, 12, 20];
tree.root = tree.constructBST(tree.root, element);
// tree.inorderTraversal(tree.root);

console.log(tree.inorderPredecessor(tree.root, 8));
