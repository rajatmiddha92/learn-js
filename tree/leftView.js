// Left View of Binary Tree
// Difficulty: EasyAccuracy: 33.74%Submissions: 525K+Points: 2
// You are given the root of a binary tree. Your task is to return the left view of the binary tree. The left view is defined as the set of nodes visible when the tree is viewed from the left side.

// If the tree is empty or there is no left view, return an empty list.

// Examples :

// Input: root[] = [1, 2, 3, 4, 5, 6, 7, N, 8, N, N, N, N, N, N]

//           1
//        /     \
//      2        3
//    /     \    /    \
//   4     5   6    7
//    \
//      8
// Output: [1, 2, 4, 8]
// Explanation: When we view the tree from the left side, we can only see the nodes 1, 2, 4, and 8.
// Input: root[] = [1, N, 3, N, N, N, 4]
// Output: [1, 3, 4]
// Input: root[] = [N]
// Output: []
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(n)

// Constraints:
// 0 <= number of nodes <= 106
// 0 <= node -> data <= 105

function solve(node, res) {
  let lvl = 0;

  let q = [{ node, lvl }];
  while (q.length) {
    let ele = q.shift();

    if (!res.has(ele.lvl)) {
      res.set(ele.lvl, ele.node.data);
    }

    if (ele.node.left) {
      q.push({ node: ele.node.left, lvl: ele.lvl + 1 });
    }
    if (ele.node.right) {
      q.push({ node: ele.node.right, lvl: ele.lvl + 1 });
    }
  }
}
function leftView(root) {
  //your code here
  let map = new Map();
  let ans = [];
  this.solve(root, map);
  for (let data of map) {
    ans.push(data[1]);
  }
  return ans;
}
