// 234. Palindrome Linked List
// Solved
// Easy
// Topics
// Companies
// Given the head of a singly linked list, return true if it is a
// palindrome
//  or false otherwise.

// Example 1:

// Input: head = [1,2,2,1]
// Output: true
// Example 2:

// Input: head = [1,2]
// Output: false

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

// Follow up: Could you do it in O(n) time and O(1) space?

var isPalindrome = function (head) {
  if (head == null || head.next == null) {
    return true;
  }
  let temp = head;
  let ct = 1;
  //1 --0 -- 1
  //ct-->1
  while (temp.next != null) {
    temp = temp.next;
    ct++;
  } //   2.  3.  4
  //ct --> 3
  //1->2-->2-->1
  if (ct % 2 == 0) {
    ct = ct / 2;
    ct--;
  } else {
    ct = parseInt(ct / 2);
  }

  // 3/2
  //1

  //0
  temp = head;
  //1
  //1--2--2--1
  //.  2
  while (ct) {
    temp = temp.next;
    ct--;
  }
  let mid = temp.next;
  // 2--1
  let prev = null;
  let cur;
  //
  while (mid != null) {
    //2 -1
    cur = mid;
    mid = mid.next;
    //
    cur.next = null;
    if (prev == null) {
      prev = cur;
    } else {
      cur.next = prev;
      prev = cur;
    }
  }
  temp.next = prev;
  mid = prev;
  temp = head;
  while (mid != null) {
    if (mid.val != temp.val) {
      return false;
    }
    mid = mid.next;
    temp = temp.next;
  }
  return true;
};
