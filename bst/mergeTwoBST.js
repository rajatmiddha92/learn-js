// Merge two BST 's
// Difficulty: MediumAccuracy: 64.95%Submissions: 89K+Points: 4
// Given two BSTs, return elements of merged BSTs in sorted form.

// Examples :

// Input:
// BST1:
//        5
//      /   \
//     3     6
//    / \
//   2   4
// BST2:
//         2
//       /   \
//      1     3
//             \
//              7
//             /
//            6
// Output: 1 2 2 3 3 4 5 6 6 7
// Explanation: After merging and sorting the two BST we get 1 2 2 3 3 4 5 6 6 7.
// Input:
// BST1:
//        12
//      /
//     9
//    / \
//   6   11
// BST2:
//       8
//     /  \
//    5    10
//   /
//  2
// Output: 2 5 6 8 9 10 11 12
// Explanation: After merging and sorting the two BST we get 2 5 6 8 9 10 11 12.
// Expected Time Complexity: O((m+n)*log(m+n))
// Expected Auxiliary Space: O(Height of BST1 + Height of BST2 + m + n)

// Constraints:
// // 1 ≤ Number of Nodes, value of nodes ≤ 105
// class Solution {
//   /**
//     * @param Node root1
//     * @param Node root2

//     * @returns number[]
//     */

//   solve(node, arr) {
//     if (node == null) return;

//     this.solve(node.left, arr);
//     arr.push(node.data);
//     this.solve(node.right, arr);
//   }
//   merge(root1, root2) {
//     let arr1 = [];
//     let arr2 = [];

//     this.solve(root1, arr1);
//     this.solve(root2, arr2);

//     arr1 = arr1.concat(arr2);
//     return arr1.sort((a, b) => a - b);
//     // code here
//   }
// }
//approach 1
// inorder of 1st tree inorder of 2nd tree
//  save in array
// merge two sorted array
// then construct bst from merged array(normal to balance tree / inorder to bst)
//TC O(m+n)
//SC O(m+n)

//approach 2
// follow up i want SC to be O(h1+h2)
// flat BST to Sorted LL
// merge two Sorted LL
// then construct bst from merge LL

class Solution {
  /**
  * @param Node root1
  * @param Node root2

  * @returns number[]
  */
  constructor() {
    this.root = null;
  }
  convertoDLL(node, head) {
    if (node == null) return null;

    this.convertoDLL(node.right, head);

    node.right = head[0];

    if (head[0]) {
      head[0].left = node;
    }

    head[0] = node;

    this.convertoDLL(node.left, head);
  }
  //. p
  //   7 8 9
  //  1 2 3
  //t. h
  // temp =1
  // head2 =2
  //
  mergeTwoSortedLL(head1, head2) {
    let start = null;
    //2 3 4 5 6
    //1 2 3 6 7
    while (head1 != null && head2 != null) {
      if (head1.data > head2.data) {
        let temp = head2;
        head2 = head2.right;
        temp.right = null;
        if (!start) {
          start = temp;
        } else {
          start.right = temp;
          temp.left = start;
          start = start.right;
        }
      } else {
        let temp = head1;
        head1 = head1.right;
        temp.right = null;
        if (!start) {
          start = temp;
        } else {
          start.right = temp;
          temp.left = start;
          start = start.right;
        }
      }
    }
    // while (start.left != null) {
    //   start = start.left;
    // }
    // while (start.right != null) {
    //   console.log(start.data);
    //   start = start.right;
    // }
    // console.log(start);

    while (head1 != null) {
      let temp = head1;
      head1 = head1.right;
      temp.right = null;
      start.right = temp;
      temp.left = start;
      start = start.right;
    }

    while (head2 != null) {
      let temp = head2;
      head2 = head2.right;
      temp.right = null;
      start.right = temp;
      temp.left = start;
      start = start.right;
    }

    while (start.left != null) {
      start = start.left;
    }

    return start;
  }

  countNodes(node) {
    let temp = node;
    let cnt = 0;
    while (temp != null) {
      cnt++;
      temp = temp.right;
    }
    return cnt;
  }

  buildBalanceTree(node, n) {
    if (n <= 0 || node[0] == null) return null;

    let left = this.buildBalanceTree(node, Math.floor(n / 2));

    let root = new Node(node[0].data);
    root.left = left;

    node[0] = node[0].right;

    root.right = this.buildBalanceTree(node, n - Math.floor(n / 2) - 1);

    return root;
  }

  merge(root1, root2) {
    let head1 = [null];
    let head2 = [null];

    this.convertoDLL(root1, head1);
    this.convertoDLL(root2, head2);
    // code here
    // console.log(head1,head2)
    head1 = head1[0];
    head2 = head2[0];
    // console.log(head1, head2);

    let list = this.mergeTwoSortedLL(head1, head2);

    return this.buildBalanceTree([list], this.countNodes(list));
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let bst1 = new Solution();
let bst2 = new Solution();
bst1.root = new Node(5);
bst1.root.left = new Node(3);
bst1.root.right = new Node(6);
bst1.root.left.left = new Node(2);
bst1.root.left.right = new Node(4);

bst2.root = new Node(2);
bst2.root.left = new Node(1);
bst2.root.right = new Node(3);
bst2.root.right.right = new Node(7);
bst2.root.right.right.left = new Node(6);

console.log(JSON.stringify(bst1.merge(bst1.root, bst2.root)));
