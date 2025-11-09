// 23. Merge k Sorted Lists
// Solved
// Hard
// Topics
// Companies
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []

// Constraints:

// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -104 <= lists[i][j] <= 104
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 104.
// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 2.2M
// Submissions
// 4.1M
// Acceptance Rate
// 54.9%

class MinHeap {
  constructor() {
    this.heap = [];
  }

  top() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
  heapifyUp() {
    let index = this.size() - 1;
    let parent = Math.floor((index - 1) / 2);
    while (index > 0 && this.heap[parent].val > this.heap[index].val) {
      [this.heap[index], this.heap[parent]] = [
        this.heap[parent],
        this.heap[index],
      ];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }
  push(ele) {
    this.heap.push(ele);
    this.heapifyUp();
  }

  heapifyDown(size, i) {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < size && this.heap[smallest].val > this.heap[left].val) {
      smallest = left;
    }
    if (right < size && this.heap[smallest].val > this.heap[right].val) {
      smallest = right;
    }

    if (smallest != i) {
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      this.heapifyDown(size, smallest);
    }
  }
  pop() {
    if (this.size() == 0) return null;

    if (this.size() == 1) {
      return this.heap.pop();
    }
    let ele = this.top();

    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.heapifyDown(this.size(), 0);
    return ele;
  }
}

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
var mergeKLists = function (lists) {
  let heap = new MinHeap();
  //n is the no of nodes
  // k is size of linked list

  for (let i = 0; i < lists.length; i++) {
    //making sure list is not null
    if (lists[i]) heap.push(lists[i]);
    //k*log k
  }
  let head = null;
  let tail = null;
  while (heap.size() > 0) {
    let ele = heap.pop();

    // n*log k  - there are n nodes to process of one linklist
    // let there are k linklist
    // n*k node in total
    // insertion in heap takes O(log k)
    //Therefore, processing all the nodes takes O(n*k log k) time.
    //making sure list is not null
    if (ele) {
      let val = ele.val;
      let next = ele.next;

      if (tail == null) {
        head = new ListNode(val);
        tail = head;
      } else {
        let node = new ListNode(val);
        tail.next = node;
        tail = tail.next;
      }

      if (next) {
        heap.push(next);
      }
    }
  }

  return head;
};
//TC O(klogk)+ O(n*klogk)  => O(n*klogk) => O(nlogk)
// n is no of nodes in list
//SC O(k) for heap storage and O(1) for creating head
// pointer
