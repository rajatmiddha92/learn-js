// first find the target node & while traversing update the possible successor & predecessor
// when target is found
// go to left subtree anf find max data
// then go to right subtree and find min data

function findPredecessorandSuccessor(node, target) {
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
