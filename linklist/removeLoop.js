// Remove loop in Linked List
// Difficulty: MediumAccuracy: 27.66%Submissions: 460K+Points: 4
// Given the head of a linked list that may contain a loop.  A loop means that the last node of the linked list is connected back to a node in the same list.  So if the next of the previous node is null. then there is no loop.  Remove the loop from the linked list, if it is present (we mainly need to make the next of the last node null). Otherwise, keep the linked list as it is.

// Note: Given an integer, pos (1 based index)  Position of the node to which the last node links back if there is a loop. If the linked list does not have any loop, then pos = 0.

// The generated output will be true if your submitted code is correct, otherwise, false.

// Examples:

// Input: Linked list: 1->3->4, pos = 2
// Output: true
// Explanation: The linked list looks like

// A loop is present. If you remove it successfully, the answer will be true.
// Input: Linked list: 1->8->3->4, pos = 0
// Output: true
// Explanation:

// The Linked list does not contains any loop.
// Input: Linked list: 1->2->3->4, pos = 1
// Output: true
// Explanation: The linked list looks like

// A loop is present. If you remove it successfully, the answer will be true.
// Expected Time Complexity: O(n)
// Expected Space Complexity: O(1)

// Constraints:
// 1 ≤ size of linked list ≤ 105

class Solution {
  // Function to remove a loop in the linked list.
  removeLoop(head) {
    // your code here

    let slow = head;
    let fast = head;
    let bool = false;
    while (slow != null && fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) {
        bool = true;
        break;
      }
    }

    if (!bool) {
      return;
    }

    slow = head;
    while (slow != fast) {
      slow = slow.next;
      fast = fast.next;
    }

    let start = slow;

    while (start.next != slow) {
      start = start.next;
    }
    start.next = null;
  }
}
