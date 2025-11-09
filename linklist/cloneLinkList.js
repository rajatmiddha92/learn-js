// 138. Copy List with Random Pointer
// Solved
// Medium
// Topics
// Companies
// Hint
// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

// Return the head of the copied linked list.

// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.

// Example 1:

// Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Example 2:

// Input: head = [[1,1],[2,1]]
// Output: [[1,1],[2,1]]
// Example 3:

// Input: head = [[3,null],[3,0],[3,null]]
// Output: [[3,null],[3,0],[3,null]]

// Constraints:

// 0 <= n <= 1000
// -104 <= Node.val <= 104
// Node.random is null or is pointing to some node in the linked list.

//sol 1
// var copyRandomList = function (head) {
//   let newList = null;
//   let tail = newList;
//   let temp = head;
//   while (temp != null) {
//     let cur = temp;
//     temp = temp.next;

//     let node = new _Node(cur.val, null, null);
//     if (newList == null) {
//       newList = node;
//       tail = newList;
//     } else {
//       tail.next = node;
//       tail = tail.next;
//     }
//   }
//   temp = head;
//   let start = newList;

//   while (start != null) {
//     let orignal = head;
//     let clone = newList;
//     ct = 1;
//     let node = temp.random;
//     if (temp.random != null) {
//       while (orignal != null && orignal != node) {
//         ct++;
//         orignal = orignal.next;
//       }
//       while (ct != 1) {
//         clone = clone.next;
//         ct--;
//       }
//       start.random = clone;
//     }

//     start = start.next;
//     temp = temp.next;
//   }
//   return newList;
// };

//sol2
// O(n)
// first we make a map of orginal node as key and its clone
//orignal node 1 mapped to clone node
//then we get the random node of orignal node and get the clone node
//with map
//then we iterate through clone node and set the random node

// class _Node {
//   constructor(val, next, random) {
//     this.val = val;
//     this.next = next;
//     this.random = random;
//   }
// }

// var copyRandomList = function (head) {
//   let newList = null;
//   let tail = newList;
//   let temp = head;
//   let map = new Map();
//   while (temp != null) {
//     let cur = temp;
//     temp = temp.next;

//     let node = new _Node(cur.val, null, null);
//     map.set(cur, node);
//     if (newList == null) {
//       newList = node;
//       tail = newList;
//     } else {
//       tail.next = node;
//       tail = tail.next;
//     }
//   }
//   temp = head;
//   let start = newList;
//   while (start != null) {
//     let node = temp;
//     let randomNode = map.get(node.random);
//     start.random = randomNode;
//     start = start.next;
//     temp = temp.next;
//   }

//   return newList;
// };

//sol 3
var copyRandomList = function (head) {
  let newList = null;
  let tail = newList;
  let temp = head;
  while (temp != null) {
    let node = new _Node(temp.val, null, null);
    if (tail == null) {
      tail = node;
      newList = node;
    } else {
      tail.next = node;
      tail = tail.next;
    }
    temp = temp.next;
  }
  let origanal = head;
  let clone = newList;
  // console.log(clone)
  // console.log(origanal)
  while (origanal != null) {
    let curr = origanal;
    let currclone = clone;
    origanal = origanal.next;
    clone = clone.next;
    curr.next = currclone;
    currclone.next = origanal;
  }
  clone = newList;
  origanal = head;
  while (clone != null) {
    clone.random = origanal?.random?.next || null;
    clone = clone?.next?.next || null;
    origanal = origanal?.next?.next || null;
  }
  origanal = head;
  clone = newList;
  // console.log(clone)
  while (origanal != null) {
    let cur = origanal;
    let curClone = clone;
    cur.next = origanal?.next?.next || null;

    curClone.next = clone?.next?.next || null;
    clone = clone.next;
    origanal = origanal.next;
  }
  // console.log(newList)
  return newList;
};
