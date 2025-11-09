// 25. Reverse Nodes in k-Group
// Solved
// Hard
// Topics
// Companies
// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]
// Example 2:

// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000

function isValid(head, k) {
  let ans = true;
  let temp = head;
  while (k) {
    if (temp != null) {
      temp = temp.next;
      k--;
    } else {
      ans = false;
      break;
    }
  }

  return ans;
}

var reverseKGroup = function (head, k) {
  if (head == null || head.next == null || k == 1) return head;

  let temp = head;
  let result = null;
  let prev = null;

  while (temp != null) {
    let c = k;
    // console.log(this.isValid(temp, c), temp);
    if (isValid(temp, c)) {
      while (c) {
        let node = temp;
        temp = temp.next;
        node.next = prev;
        prev = node;
        c--;
      }
      if (result == null) {
        result = prev;
        prev = null;
        // console.log("came", result);
      } else {
        // console.log("came1");
        let cur = result;
        // console.log(cur, "he");
        while (cur.next != null) {
          cur = cur.next;
        }
        // console.log(cur, "ci", prev);
        cur.next = prev;
        prev = null;
      }
      // console.log("result", result, "tmep", temp, "lo");
    } else {
      // console.log("came", result);
      let cur = result;
      while (cur.next != null) {
        cur = cur.next;
      }
      cur.next = temp;
      // console.log("resut",cur);
      break;
    }
  }

  // console.log("es", JSON.stringify(result));
  return result;
};
