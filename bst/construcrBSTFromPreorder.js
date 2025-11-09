class TreeNode {
  constructor(data) {
    this.val = data;
    this.left = null;
    this.right = null;
  }
}

function buildTree(arr, min, max) {
  let ele = arr?.[0];
  if (!ele) {
    return null;
  }

  if (ele < min || ele > max) {
    return null;
  }
  ele = arr.shift();
  let node = new TreeNode(ele);
  node.left = buildTree(arr, min, node.val);
  node.right = buildTree(arr, node.val, max);

  return node;
}
var bstFromPreorder = function (preorder) {
  let min = -Infinity;
  let max = Infinity;

  return buildTree(preorder, min, max);
};

let arr = [8, 5, 1, 7, 10, 12];

console.log(JSON.stringify(bstFromPreorder(arr)));
