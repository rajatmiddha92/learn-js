class Solution {
  solve(node, arr) {
    if (node == null) {
      return;
    }

    this.solve(node.left, arr);
    arr.push(node.data);
    this.solve(node.right, arr);
  }

  check(s, e, arr) {
    if (s > e) {
      return null;
    }

    let mid = Math.round((s + e) / 2);
    let node = new Node(arr[mid]);

    node.left = this.check(s, mid - 1, arr);
    node.right = this.check(mid + 1, e, arr);

    return node;
  }
  buildBalancedTree(root) {
    //code here
    let arr = [];
    this.solve(root, arr);

    let start = 0,
      end = arr.length - 1;
    let tree = this.check(start, end, arr);
    return tree;
  }
}
