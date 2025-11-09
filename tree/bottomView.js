// Bottom View of Binary Tree
// Difficulty: MediumAccuracy: 54.18%Submissions: 271K+Points: 4
// Given a binary tree, return an array where elements represent the bottom view of the binary tree from left to right.

// Note: If there are multiple bottom-most nodes for a horizontal distance from the root, then the latter one in the level traversal is considered. For example, in the below diagram, 3 and 4 are both the bottommost nodes at a horizontal distance of 0, here 4 will be considered.

//                       20
//                     /    \
//                   8       22
//                 /   \     /   \
//               5      3 4     25
//                      /    \
//                  10       14

// For the above tree, the output should be 5 10 4 14 25.

// Examples :

// Input:
//        1
//      /   \
//     3     2
// Output: 3 1 2
// Explanation: First case represents a tree with 3 nodes and 2 edges where root is 1, left child of 1 is 3 and right child of 1 is 2.

// Thus bottom view of the binary tree will be 3 1 2.
// Input:
//          10
//        /    \
//       20    30
//      /  \
//     40   60
// Output: 40 20 60 30
// Constraints:
// 1 <= Number of nodes <= 105
// 1 <= Data of a node <= 10

function solve(node, res) {
  let lvl = 0;
  let q = [{ node, lvl }];
  while (q.length) {
    let ele = q.shift();
    // console.log(ele)

    res.set(ele.lvl, ele.node.data);

    if (ele.node.left) {
      q.push({ node: ele.node.left, lvl: ele.lvl - 1 });
    }
    if (ele.node.right) {
      q.push({ node: ele.node.right, lvl: ele.lvl + 1 });
    }
  }
}
//Function to return a list containing the bottom view of the given tree.
function bottomView(root) {
  //your code here
  let map = new Map();
  this.solve(root, map);

  map = Array.from(map).sort((a, b) => a[0] - b[0]);

  let ans = [];
  for (let data of map) {
    ans.push(data[1]);
  }
  return ans;
}
