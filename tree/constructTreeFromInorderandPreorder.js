// Construct Tree from Inorder & Preorder
// Difficulty: MediumAccuracy: 34.59%Submissions: 175K+Points: 4
// Given two arrays of inorder and preorder traversal of size n. Construct a tree using the inorder and preorder arrays and return the root node of the constructed tree.

// Example 1:

// Input:
// n = 4
// inorder[] = {1 6 8 7}
// preorder[] = {1 6 7 8}
// Output: 8 7 6 1
// Example 2:

// Input:
// n = 6
// inorder[] = {3 1 4 0 5 2}
// preorder[] = {0 1 3 4 2 5}
// Output: 3 4 1 5 2 0
// Explanation: The tree will look like
//        0
//     /     \
//    1       2
//  /   \    /
// 3    4   5
// Your Task:
// Your task is to complete the function buildTree() which takes 3 arguments(inorder traversal array, preorder traversal array, and size of tree n) and returns the root node to the tree constructed. You are not required to print anything and a new line is added automatically (The post order of the returned tree is printed by the driver's code.)

// Expected Time Complexity: O(n*n).
// Expected Auxiliary Space: O(n).

// Constraints:
// 1<= n <=1000
// inorder and preorder arrays contain unique values

// class Solution {
//   solve(inorder, preorder) {
//     if (!inorder.length) return null;
//     let ele = preorder?.[0] ?? null;
//     if (ele == null) return null;
//     let idx = inorder.findIndex((data) => data == ele);
//     let leftPre = preorder.slice(1, idx + 1);
//     let rightPre = preorder.slice(idx + 1);
//     let leftIn = inorder.slice(0, idx);
//     let rightIn = inorder.slice(idx + 1);
//     let node = new Node(ele);

//     // console.log(inorder,preorder)

//     let left = this.solve(leftIn, leftPre);
//     let right = this.solve(rightIn, rightPre);
//     node.left = left;
//     node.right = right;
//     return node;
//   }
//   buildTree(inorder, preorder, n) {
//     //code here
//     let a = this.solve(inorder, preorder);
//     return a;
//   }
// }

// let arr=[3,1,4,0,5,2]
// let  a = arr.findIndex(data=>data==0)
// console.log(a)
// let c= arr.slice(0,a)
// let b = arr.slice(a+1)
// console.log(b,arr,c)

//inorder[] = {3 1 4 0 5 2}
//preorder[] = {0 1 3 4 2 5}
let inorder = [3, 1, 4, 0, 5, 2];
let preorder = [0, 1, 3, 4, 2, 5];

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor() {
    this.root = null;
  }

  solve(inorder, preorder) {
    if (!inorder.length) return null;
    let ele = preorder?.[0] ?? null;
    if (ele == null) return null;
    let idx = inorder?.findIndex((data) => data == ele);
    let leftPre = preorder.slice(1, idx + 1);
    let rightPre = preorder.slice(idx + 1);
    let leftIn = inorder.slice(0, idx);
    let rightIn = inorder.slice(idx + 1);
    let node = new Node(ele);

    //console.log(inorder, preorder);

    let left = this.solve(leftIn, leftPre);
    let right = this.solve(rightIn, rightPre);
    node.left = left;
    node.right = right;
    return node;
  }
  something(inorder, preorder) {
    let a = this.solve(inorder, preorder);
    return a;
  }
}

let tree = new Tree();
tree.root = tree.something(inorder, preorder);
console.log(JSON.stringify(tree));
