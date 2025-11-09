// creation/build of Binary tree
// binary tree is a tree which has less than or equal to two children
const prompt = require("prompt-sync")({ sigint: true });

class BinaryTree {
  constructor() {
    this.root = null;
  }
  //    1 3 5 7 11 17

  buildTree(root) {
    let a = prompt("Enter the data");
    root = new Node(a);
    if (root.data == -1) {
      return null;
    }

    console.log(`Enter the data to be inserted in left of ${root.data}`);
    root.left = this.buildTree(root.left);
    console.log(`Enter the data to be inserted in right of ${root.data}`);
    root.right = this.buildTree(root.right);

    return root;
  }

  //               1             ==>   level - 1
  //            /     \
  //           3       5         ==>   level - 2
  //          / \     /  \
  //         7   11  17   null   ==>   level - 3
  //        / \  /\  /\
  //    null  null  null null null null
  // we have to print tree nodes by level

  //op -  1 3 5 7 11 17

  // explaination
  // we will use a queue data structure to main the level
  // when we are at any node we check if left node is present we will push from rear side of queue
  // and same for right
  // we will take node from front of the queue & pop it anf print it data and check there left & right node
  // present if present then push into rear of the queue
  // this traversal is also known as breadth first search (BFS)
  levelOrderTraversal() {
    let queue = [this.root];

    while (queue.length) {
      let node = queue.shift();
      console.log(node.data);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  levelOrderTraversalPrintByLevel() {
    let queue = [];
    queue.push(this.root);
    queue.push(null);

    while (queue.length) {
      let node = queue.shift();

      if (node == null) {
        console.log("");
        if (queue.length) {
          queue.push(null);
        }
      } else {
        console.log(node.data);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }
  }

  // in this we print the order by lower level
  // we use stack to store the level also we visit right node first
  // as we pop out it should maintain the correct order
  reverseOrderTraversal() {
    let stack = [];
    let queue = [];
    stack.push(this.root);
    queue.push(this.root);

    while (queue.length) {
      let node = queue.shift();

      if (node.right) {
        queue.push(node.right);
        stack.push(node.right);
      }
      if (node.left) {
        queue.push(node.left);
        stack.push(node.left);
      }
    }

    while (stack.length) {
      let a = stack.pop();
      console.log(a.data);
    }
  }

  // InOrder Traversal
  // LNR
  //               1
  //            /     \
  //           3       5
  //          / \     /  \
  //         7   11  17   null
  //        / \  /\  /\
  //    null  null  null null null null

  //O/P -  7 3 11 1 17 5
  inOrder(node) {
    if (node == null) {
      return;
    }

    this.inOrder(node.left); //L
    console.log(node.data); //N
    this.inOrder(node.right); //R
  }
  // PreOrder Traversal
  // NLR
  //               1
  //            /     \
  //           3       5
  //          / \     /  \
  //         7   11  17   null
  //        / \  /\  /\
  //    null  null  null null null null

  // op -  1 3 7 11 5 17
  preOrder(node) {
    if (node == null) {
      return;
    }

    console.log(node.data); //N
    this.preOrder(node.left); //L
    this.preOrder(node.right); //R
  }

  // PostOrder Traversal
  // LRN

  //               1
  //            /     \
  //           3       5
  //          / \     /  \
  //         7   11  17   null
  //        / \  /\  /\
  //    null  null  null null null null

  // op - 7 11 3 17 5 1
  postOrder(node) {
    if (node == null) {
      return;
    }

    this.postOrder(node.left); //L
    this.postOrder(node.right); //R
    console.log(node.data); //N
  }

  //buildTreeLevelOrderTraversal
  buildTreeLevelOrder(root) {
    let rootNode = prompt("Enter root node");
    root = new Node(rootNode);
    let q = [root];

    while (q.length) {
      let node = q.shift();

      let a = prompt(`enter node in left of ${node.data}`);
      if (a == -1) {
        node.left = null;
      } else {
        node.left = new Node(a);
        q.push(node.left);
      }
      let b = prompt(`enter node in right of ${node.data}`);
      if (b == -1) {
        node.right = null;
      } else {
        node.right = new Node(b);
        q.push(node.right);
      }
    }

    return root;
  }
  //          1
  //        /   \
  //      2       3
  //    /   \   /   \
  //  4      5 6      7
  //             \      \
  //              8      9

  solve(node, head) {
    if (node == null) return null;

    console.log("come1");

    this.solve(node.right, head);

    console.log("come2");

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

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

let tree = new BinaryTree();

// tree.root = tree.buildTreeLevelOrder(tree.root);
// console.log(JSON.stringify(tree));
// tree.levelOrderTraversalPrintByLevel();
// tree.reverseOrderTraversal();
// tree.inOrder(tree.root);
// tree.preOrder(tree.root);
// tree.postOrder(tree.root);
// console.log(JSON.stringify(tree));
//          1
//        /   \
//      2       3
//    /   \   /   \
//  4      5 6      7
//             \      \
//              8      9

// tree.root = new Node(4);
// tree.root.left = new Node(2);
// tree.root.right = new Node(5);
// tree.root.left.left = new Node(77);
// tree.root.left.right = new Node(1);
// tree.root.right.left = new Node(2);
// tree.root.right.right = new Node(3);
// tree.root.left.right.left = new Node(6);
// tree.root.right.left = new Node(2);
// tree.root.right.right = new Node(3);
// tree.root.left.right.left = new Node(4);
// tree.root.left.right.right = new Node(7);
// tree.root.right = new Node(10);
// tree.root.right.right = new Node(14);
// tree.root.right.right.left = new Node(13);

// tree.root.right.left = new Node(3);
// tree.root.right.left.right = new Node(4);
// tree.root.right.left.right.right = new Node(7);
// tree.root.right.right = new Node(2);
// tree.root.right.right.left = new Node(5);
// tree.root.right.right.left.left = new Node(6);
// tree.root.right.left.right = new Node(8);
// tree.root.right.right.right = new Node(9);

// tree.inOrder(tree.root);
tree.root = new Node(10);
tree.root.left = new Node(12);
tree.root.left.left = new Node(25);
tree.root.left.right = new Node(30);
tree.root.right = new Node(15);
tree.root.right.left = new Node(36);
// tree.root.right.right = new Node(2);
// tree.root.left.left.left = new Node(3);
// tree.root.left.right.left = new Node(-2);
// tree.root.left.right.right = new Node(1);
// console.log(tree.verticalOrder(tree.root));

console.log(tree.bToDLL(tree.root));
