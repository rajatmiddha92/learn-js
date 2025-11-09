class Solution {
  left(node, res) {
    if (node == null || (node.left == null && node.right == null)) {
      return;
    }

    res.push(node.data);
    if (node.left) {
      this.left(node.left, res);
    } else {
      this.left(node.right, res);
    }
  }

  leaf(node, res) {
    if (node == null) return;
    if (node.left == null && node.right == null) {
      res.push(node.data);
      return;
    }
    this.leaf(node.left, res);
    this.leaf(node.right, res);
  }

  right(node, res) {
    if (node == null || (node.right == null && node.left == null)) {
      return;
    }

    if (node.right) {
      this.right(node.right, res);
    } else {
      this.right(node.left, res);
    }
    res.push(node.data);
  }
  boundary(node) {
    let res = [];
    if (node == null) return res;
    res.push(node.data);
    this.left(node.left, res);
    this.leaf(node.left, res);
    this.leaf(node.right, res);
    this.right(node.right, res);
    return res;
  }
}
