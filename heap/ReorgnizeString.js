// 767. Reorganize String
// Solved
// Medium
// Topics
// Companies
// Hint
// Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

// Return any possible rearrangement of s or return "" if not possible.

// Example 1:

// Input: s = "aab"
// Output: "aba"
// Example 2:

// Input: s = "aaab"
// Output: ""

// Constraints:

// 1 <= s.length <= 500
// s consists of lowercase English letters.
// Seen this question in a real interview before?
// 1/5

// Intuition
// the element which have more count or frequency
// needs to handle more in priority as adjacnet character cannot be same
// you can use stack which i thought first or quueu
// but due to frequency i thought of using map
// but sorted map will work
// but sorting will be changed as count will be increased or decreased
// while craeting string
// so heap can be better for priority queue when increase or decrease count

// Approach
// get count of every char from string store in map
// craete max heap push pair of count and char in heap based on the highest
// count

// while iterating over string
// check curent string should not be equal to heap top
// if its equal so put top out temporarily and 2nd max frequency will be on top store it in string and reduce count also make sure count hits zero
// remove it from the heap then push heap temp back again
// if not simply push top to string and check count if zero remove from heap
// //edge case at any point of time if heap size is one and it is same as your
// ans string latest character the answer is not possible
class MaxHeap {
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
    while (index > 0 && this.heap[index].count > this.heap[parent].count) {
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  push(val) {
    this.heap.push(val);
    this.heapifyUp();
  }
  heapifyDown(n, i) {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < n && this.heap[smallest].count < this.heap[left].count) {
      smallest = left;
    }
    if (right < n && this.heap[smallest].count < this.heap[right].count) {
      smallest = right;
    }
    if (smallest != i) {
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      this.heapifyDown(this.size(), smallest);
    }
  }

  pop() {
    if (this.size() == 1) {
      return this.heap.pop();
    }

    let ele = this.heap[0];

    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.heapifyDown(this.size(), 0);

    return ele;
  }
}
class Node {
  constructor(char, count) {
    this.char = char;
    this.count = count === undefined ? 0 : count;
  }
}

var reorganizeString = function (s) {
  if (!s.length) return "";

  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  let heap = new MaxHeap();
  for (let [key, value] of map.entries()) {
    let node = new Node(key, value);
    heap.push(node);
  }

  let ans = "";
  while (heap.size()) {
    if (heap.top().char == ans[ans.length - 1] && heap.size() == 1) {
      return "";
    } else if (heap.top().char == ans[ans.length - 1]) {
      let temp = heap.pop();
      let val = heap.top();
      ans += val.char;
      val.count--;
      if (!val.count) {
        heap.pop();
      }
      heap.push(temp);
    } else {
      let val = heap.top();
      ans += val.char;
      val.count--;
      if (!val.count) {
        heap.pop();
      }
    }
  }
  return ans;
};
//TC O(n log K)
//SC O(n)
