// LCA in Binary Tree
// Difficulty: MediumAccuracy: 52.85%Submissions: 186K+Points: 4
// Given a Binary Tree with all unique values and two nodes value, n1 and n2. The task is to find the lowest common ancestor of the given two nodes. We may assume that either both n1 and n2 are present in the tree or none of them are present.

// LCA: It is the first common ancestor of both the nodes n1 and n2 from bottom of tree.

// Example 1:

// Input:
// n1 = 2 , n2 = 3
//        1
//       / \
//      2   3
// Output: 1
// Explanation:
// LCA of 2 and 3 is 1.
// Example 2:

// Input:
// n1 = 3 , n2 = 4
//            5
//           /
//          2
//         / \
//        3   4
// Output: 2
// Explanation:
// LCA of 3 and 4 is 2.
// Example 3:

// Input:
// n1 = 5 , n2 = 4
//            5
//           /
//          2
//         / \
//        3   4
// Output: 5
// Explanation:
// LCA of 5 and 4 is 5.
// Your Task:
// You don't have to read, input, or print anything. Your task is to complete the function lca() that takes nodes, n1, and n2 as parameters and returns the LCA node as output.

// Expected Time Complexity:O(N).
// Expected Auxiliary Space:O(Height of Tree).

// Constraints:
// 1 ≤ Number of nodes ≤ 105
// 1 ≤ Data of a node ≤ 105

function solve(node, s1, s2, curr, p, q) {
  if (node == null) {
    return;
  }
  curr.push(node);
  if (node.data == p) {
    s1 = [...curr];
  }
  if (node.data == q) {
    s2 = [...curr];
  }

  this.solve(node.left, s1, s2, curr, p, q);
  this.solve(node.right, s1, s2, curr, p, q);
  curr.pop();
}
//Function to return the lowest common ancestor in a Binary Tree.
function lca(root, n1, n2) {
  //your code here
  if (root.data == n1 || root.data == n2) return root;
  let ans1 = [];
  let ans2 = [];
  let some = [];
  let ans;
  this.solve(root, ans1, ans2, some, n1, n2);
  let set = new Set();
  for (let i = 0; i < ans2.length; i++) {
    set.add(ans2[i].data);
  }

  for (let i = ans1.length - 1; i >= 0; i--) {
    if (set.has(ans1[i].data)) {
      return ans1[i];
    }
  }
}

//sol 2
function lca(root, n1, n2) {
  if (root == null) {
    return null;
  }

  if (root.data == n1 || root.data == n2) {
    return root;
  }

  const leftRoot = this.lca(root.left, n1, n2);
  const rightRoot = this.lca(root.right, n1, n2);

  if ((leftRoot != null) & (rightRoot != null)) return root;
  else if ((leftRoot != null) & (rightRoot == null)) return leftRoot;
  else if ((leftRoot == null) & (rightRoot != null)) return rightRoot;
  else return null;
}
