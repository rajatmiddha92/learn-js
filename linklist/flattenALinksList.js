// Flattening a Linked List
// Difficulty: MediumAccuracy: 51.53%Submissions: 155K+Points: 4
// Given a Linked List, where every node represents a sub-linked-list and contains two pointers:
// (i) a next pointer to the next node,
// (ii) a bottom pointer to a linked list where this node is head.
// Each of the sub-linked lists is in sorted order.
// Flatten the Link List so all the nodes appear in a single level while maintaining the sorted order.

// Note: The flattened list will be printed using the bottom pointer instead of the next pointer. Look at the printList() function in the driver code for more clarity.

// Examples:

// Input:

// Output:  5-> 7-> 8- > 10 -> 19-> 20-> 22-> 28-> 30-> 35-> 40-> 45-> 50.
// Explanation: The resultant linked lists has every node in a single level.(Note: | represents the bottom pointer.)
// Input:

// Output: 5-> 7-> 8-> 10-> 19-> 22-> 28-> 30-> 50
// Explanation: The resultant linked lists has every node in a single level.(Note: | represents the bottom pointer.)
// Note: In the output section of the above examples, the -> represents the bottom pointer.

// Expected Time Complexity: O(n * n * m)
// Expected Auxiliary Space: O(n)

// Constraints:
// 0 <= number of nodes <= 50
// 1 <= no. of nodes in sub-LinkesList(mi) <= 20
// 1 <= node->data <= 103

class Solution {
  solve(first, second) {
    let head = null;
    let tail = null;
    while (first != null && second != null) {
      if (first.data > second.data) {
        let node = second;
        second = second.bottom;
        node.bottom = null;
        if (tail == null) {
          tail = node;
          head = node;
        } else {
          tail.bottom = node;
          tail = node;
        }
      } else {
        let node = first;
        first = first.bottom;
        node.bottom = null;
        if (tail == null) {
          tail = node;
          head = node;
        } else {
          tail.bottom = node;
          tail = node;
        }
      }
    }

    while (first != null) {
      let node = first;
      first = first.bottom;
      node.bottom = null;
      if (tail == null) {
        head = node;
        tail = node;
      } else {
        tail.bottom = node;
        tail = node;
      }
    }

    while (second != null) {
      let node = second;
      second = second.bottom;
      node.bottom = null;
      if (tail == null) {
        head = node;
        tail = node;
      } else {
        tail.bottom = node;
        tail = node;
      }
    }

    return head;
  }

  mergeSort(head) {
    // your code here
    //
    if (head.bottom != null) {
      let slow = head;
      let fast = head;
      let prev = null;

      while (fast && fast.bottom != null) {
        prev = slow;
        slow = slow.bottom;
        fast = fast.bottom.bottom;
      }
      let mid = slow;
      prev.bottom = null;

      let leftList = this.mergeSort(head);
      let rightList = this.mergeSort(mid);
      let mergetwoList = this.solve(leftList, rightList);

      return mergetwoList;
    } else {
      return head;
    }
  }

  flatten(head) {
    // your code here
    let temp = head;
    while (temp != null) {
      let cur = temp;
      temp = temp.next;
      while (cur.bottom != null) {
        cur = cur.bottom;
      }
      cur.bottom = temp;
    }

    return this.mergeSort(head);
  }
}
