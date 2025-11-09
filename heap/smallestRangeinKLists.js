// Smallest range in K lists
// Difficulty: HardAccuracy: 43.21%Submissions: 29K+Points: 8
// Given K sorted lists of integers, KSortedArray[] of size N each. The task is to find the smallest range that includes at least one element from each of the K lists. If more than one such range's are found, return the first such range found.

// Example 1:

// Input:
// N = 5, K = 3
// KSortedArray[][] = {{1 3 5 7 9},
//                     {0 2 4 6 8},
//                     {2 3 5 7 11}}
// Output: 1 2
// Explanation: K = 3
// A:[1 3 5 7 9]
// B:[0 2 4 6 8]
// C:[2 3 5 7 11]
// Smallest range is formed by number 1
// present in first list and 2 is present
// in both 2nd and 3rd list.
// Example 2:

// Input:
// N = 4, K = 3
// KSortedArray[][] = {{1 2 3 4},
//                     {5 6 7 8},
//                     {9 10 11 12}}
// Output: 4 9
// Your Task :

// Complete the function findSmallestRange() that receives array , array size n and k as parameters and returns the output range (as a pair in cpp and array of size 2 in java and python)

// Expected Time Complexity : O(n * k *log k)
// Expected Auxilliary Space  : O(k)

// Constraints:
// 1 <= K,N <= 500
// 0 <= a[ i ] <= 105

//intitution

//we know all list are sorted
//we have to find smallest range

//we need to start from lowest no from one array
//and highest no from other array so that from all array atleast
//one element is that in range can be covered

// if we look at first element of every array
// we can see some range if we take first element of every array
// like smallest element in first element of evrery array
// and highest element in first element of every array
// so we get some range

//min heaps can be used to start from lowest no
//max heaps can be used to start from highest no

//approach
//take min heap of first element of every array
//take max heap of first element of every array

//at top of min heap we smallest no
//at top of max heap we largest no
// pop the elemnt from min heap
// get  the top eleemnt from max heap
// we check the range between them
// and update our range if current range is lower than prev range
// remove only from min heap bczo we need minimum
// do not remove from max heap as we need the maximum
// if we romved max so we lost track of highest elemnt
// bcoz the next elemnt you going to push might me smaller
// becoz it from other array
//if at some point of time any array of size k is completely itreated
// that update min max at that point of time can only me the min
// range possible solution

//note instead of using max heap
// while pushing we can use min heap we can create one max variable
//to keep track and update maximum

// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   top() {
//     return this.heap[0];
//   }

//   size() {
//     return this.heap.length;
//   }

//   heapifyUp() {
//     let index = this.size() - 1;

//     let parent = Math.floor((index - 1) / 2);
//     while (index > 0 && this.heap[parent].data > this.heap[index].data) {
//       [this.heap[parent], this.heap[index]] = [
//         this.heap[index],
//         this.heap[parent],
//       ];
//       index = parent;
//       parent = Math.floor((index - 1) / 2);
//     }
//   }

//   push(val) {
//     this.heap.push(val);
//     this.heapifyUp();
//   }

//   heapifyDown(n, i) {
//     let smallest = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;

//     if (left < n && this.heap[smallest].data > this.heap[left].data) {
//       smallest = left;
//     }
//     if (right < n && this.heap[smallest].data > this.heap[right].data) {
//       smallest = right;
//     }

//     if (smallest != i) {
//       [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
//       this.heapifyDown(n, smallest);
//     }
//   }
//   pop() {
//     if (this.size() == 1) {
//       return this.heap.pop();
//     }

//     let ele = this.top();

//     this.heap[0] = this.heap[this.size() - 1];
//     this.heap.pop();
//     this.heapifyDown(this.size(), 0);

//     return ele;
//   }
// }

// class MaxHeap {
//   constructor() {
//     this.heap = [];
//   }

//   top() {
//     return this.heap[0];
//   }

//   size() {
//     return this.heap.length;
//   }

//   heapifyUp() {
//     let index = this.size() - 1;

//     let parent = Math.floor((index - 1) / 2);
//     while (index > 0 && this.heap[parent].data < this.heap[index].data) {
//       [this.heap[parent], this.heap[index]] = [
//         this.heap[index],
//         this.heap[parent],
//       ];
//       index = parent;
//       parent = Math.floor((index - 1) / 2);
//     }
//   }

//   push(val) {
//     this.heap.push(val);
//     this.heapifyUp();
//   }

//   heapifyDown(n, i) {
//     let smallest = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;

//     if (left < n && this.heap[smallest].data < this.heap[left].data) {
//       smallest = left;
//     }
//     if (right < n && this.heap[smallest].data < this.heap[right].data) {
//       smallest = right;
//     }

//     if (smallest != i) {
//       [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
//       this.heapifyDown(n, smallest);
//     }
//   }
//   pop() {
//     if (this.size() == 1) {
//       return this.heap.pop();
//     }

//     let ele = this.top();

//     this.heap[0] = this.heap[this.size() - 1];
//     this.heap.pop();
//     this.heapifyDown(this.size(), 0);

//     return ele;
//   }
// }

// class Node {
//   constructor(data, row, col) {
//     this.data = data;
//     this.row = row;
//     this.col = col;
//   }
// }
// class Solution {
//   findSmallestRange(arr, n, k) {
//     //code here
//     let ans = Infinity;
//     let min = Infinity;
//     let max = -Infinity;

//     let minheap = new MinHeap();
//     let maxheap = new MaxHeap();

//     for (let i = 0; i < k; i++) {
//       let node = new Node(arr[i][0], i, 0);
//       minheap.push(node);
//       maxheap.push(node);
//       // O(k log k) for the initial insertions
//     }

//     while (true) {
//       let s = minheap.pop();
//       //klogk
//       let e = maxheap.top();

//       if (ans > e.data - s.data) {
//         ans = e.data - s.data;
//         min = s.data;
//         max = e.data;
//       }
//       //  console.log(s,e)

//       let row = s.row;
//       let col = s.col;

//       //O(n * k log k) for the main loop
//       //in worth case
//       if (col + 1 < arr[row].length) {
//         let node = new Node(arr[row][col + 1], row, col + 1);
//         minheap.push(node);
//         maxheap.push(node);
//       } else {
//         return [min, max];
//       }
//     }
//   }
// }
//TC - O(k log k) + O(n * k log k) ==> O(n * k log k)
//SC-O(K)
