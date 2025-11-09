// 2. Add Two Numbers
// Solved
// Medium
// Topics
// Companies
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

//
var addTwoNumbers = function (l1, l2) {
  let newlist = null;
  let tail = newlist;
  let carry = 0;
  while (l1 != null && l2 != null) {
    let sum = l1.val + l2.val + carry;
    if (sum > 9) {
      s = String(sum);
      carry = +s[0];
      sum = +s[1];
    } else {
      carry = 0;
    }
    let node = new ListNode(sum, null);
    if (newlist == null) {
      newlist = node;
      tail = newlist;
    } else {
      tail.next = node;
      tail = tail.next;
    }
    l2 = l2.next;
    l1 = l1.next;
  }
  while (l1 != null) {
    let sum = l1.val + carry;
    if (sum > 9) {
      s = String(sum);
      carry = +s[0];
      sum = +s[1];
    } else {
      carry = 0;
    }
    let node = new ListNode(sum, null);
    if (newlist == null) {
      newlist = node;
      tail = newlist;
    } else {
      tail.next = node;
      tail = tail.next;
    }
    l1 = l1.next;
  }
  while (l2 != null) {
    let sum = l2.val + carry;
    if (sum > 9) {
      s = String(sum);
      carry = +s[0];
      sum = +s[1];
    } else {
      carry = 0;
    }
    let node = new ListNode(sum, null);
    if (newlist == null) {
      newlist = node;
      tail = newlist;
    } else {
      tail.next = node;
      tail = tail.next;
    }
    l2 = l2.next;
  }
  if (carry) {
    let node = new ListNode(carry, null);
    tail.next = node;
    tail = tail.next;
  }
  return newlist;
};
