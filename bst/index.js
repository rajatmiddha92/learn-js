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

  findPredecessorandSuccessor(node, target) {
    let cur = node;
    let pre = -1;
    let suc = -1;
    while (cur.data != target) {
      if (cur.data > target) {
        suc = cur.data;
        cur = cur.left;
      } else {
        pre = cur.data;
        cur = cur.right;
      }
    }

    let leftTree = cur.left;
    while (leftTree != null) {
      pre = leftTree.data;
      leftTree = leftTree.right;
    }

    let rightTree = cur.right;
    while (rightTree != null) {
      suc = rightTree.data;
      rightTree = rightTree.left;
    }

    return [pre, suc];
  }
  solve(node, maxSize) {
    if (node == null) {
      return { min: Infinity, max: -Infinity, isBST: true, size: 0 };
    }

    let left = this.solve(node.left, maxSize);
    let right = this.solve(node.right, maxSize);
    //  console.log(left,right)
    // console.log(left, right);

    let max = Math.max(node.data, right.max);
    let min = Math.min(node.data, left.min);
    let isBST = false;
    let size = left.size + right.size + 1;
    if (
      left.isBST &&
      right.isBST &&
      node.data > left.max &&
      node.data < right.min
    ) {
      isBST = true;
    }

    if (isBST) {
      maxSize[0] = Math.max(maxSize[0], size);
    }

    return { max, min, isBST, size };
  }

  largestBst(root) {
    // code here
    // console.log(this.solve(root))
    let maxSize = [0];

    console.log(this.solve(root, maxSize));
    this.solve(root, maxSize);

    return maxSize[0];
  }
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
// let element = [7, 5, 10, 2, 6, 8, 15, 12, 20];
// tree.root = tree.constructBST(tree.root, element);
// console.log(tree.inorderSuccessor(tree.root, 15));
// console.log(tree.inorderPredecessor(tree.root, 5));
tree.root = new Node(6);
tree.root.left = new Node(7);
tree.root.right = new Node(3);
tree.root.left.right = new Node(2);
// tree.root.left.right.left = new Node(3);
tree.root.right.left = new Node(2);
tree.root.right.right = new Node(4);
// console.log(tree.kthSmallest(tree.root, [0], 3));
// tree.root = tree.doSomething(tree.root);
console.log(tree.largestBst(tree.root));
