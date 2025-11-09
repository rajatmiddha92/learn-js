// Given a pointer/reference to the head of the linked list, the task is to sort the given linked list using Merge Sort.
// Note: If the length of the linked list is odd, then the extra node should go into the first list while splitting.

// Examples:

// Input: LinkedList: 3->5->2->4->1
// Output: 1->2->3->4->5
// Explanation: After sorting the given linked list, the resultant matrix will be 1->2->3->4->5.

// Input: LinkedList: 9->15->0
// Output: 0->9->15
// Explanation: After sorting the given linked list , resultant will be 0->9->15.

// Expected Time Complexity: O(n*log(n))
// Expected Auxiliary Space: O(n)

// Constraints:
// 1 <= number of nodes <= 105
// 0 <= node->data <= 106

class Solution {
  // Function to sort the given linked list using Merge Sort.
  solve(first, second) {
    let head = null;
    let tail = null;
    while (first != null && second != null) {
      if (first.data > second.data) {
        let node = second;
        second = second.next;
        node.next = null;
        if (tail == null) {
          tail = node;
          head = node;
        } else {
          tail.next = node;
          tail = node;
        }
      } else {
        let node = first;
        first = first.next;
        node.next = null;
        if (tail == null) {
          tail = node;
          head = node;
        } else {
          tail.next = node;
          tail = node;
        }
      }
    }

    while (first != null) {
      let node = first;
      first = first.next;
      node.next = null;
      if (tail == null) {
        head = node;
        tail = node;
      } else {
        tail.next = node;
        tail = node;
      }
    }

    while (second != null) {
      let node = second;
      second = second.next;
      node.next = null;
      if (tail == null) {
        head = node;
        tail = node;
      } else {
        tail.next = node;
        tail = node;
      }
    }

    return head;
  }

  mergeSort(head) {
    // your code here
    //
    if (head.next != null) {
      let slow = head;
      let fast = head;
      let prev = null;

      while (fast && fast.next != null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
      }
      let mid = slow;
      prev.next = null;

      let leftList = this.mergeSort(head);
      let rightList = this.mergeSort(mid);
      let mergetwoList = this.solve(leftList, rightList);

      return mergetwoList;
    } else {
      return head;
    }
  }
}
