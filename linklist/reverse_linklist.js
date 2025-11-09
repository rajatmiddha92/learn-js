// 206. Reverse Linked List
// Solved
// Easy
// Topics
// Companies
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:

// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

//1st way
// var reverseList = function (head) {
//   if (head == null) return head;
//   if (head.next == null) return head;

//   let tail = head;
//   while (tail.next != null) {
//     tail = tail.next;
//   }

//   let cur = head;
//   while (tail != head) {
//     cur = head;
//     head = head.next;
//     if (tail.next == null) {
//       tail.next = cur;
//       cur.next = null;
//     } else {
//       let next = tail.next;
//       tail.next = cur;
//       cur.next = next;
//     }
//   }
//   return head;
// };

//2nd way
var reverseList = function (head) {
  if (head == null || head.next == null) return head;

  let cur = null;
  while (head != null) {
    let temp = head;
    head = head.next;
    temp.next = cur;
    cur = temp;
  }

  return cur;
};
