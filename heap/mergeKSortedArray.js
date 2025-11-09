// Difficulty: MediumAccuracy: 67.25%Submissions: 104K+Points: 4
// Given k sorted arrays arranged in the form of a matrix of size k * k. The task is to merge them into one sorted array. Return the merged sorted array ( as a pointer to the merged sorted arrays in cpp, as an ArrayList in java, and list in python).

// Examples :

// Input: k = 3, arr[][] = {{1,2,3},{4,5,6},{7,8,9}}
// Output: 1 2 3 4 5 6 7 8 9
// Explanation: Above test case has 3 sorted arrays of size 3, 3, 3 arr[][] = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]. The merged list will be [1, 2, 3, 4, 5, 6, 7, 8, 9].
// Input: k = 4, arr[][]={{1,2,3,4},{2,2,3,4},{5,5,6,6},{7,8,9,9}}
// Output: 1 2 2 2 3 3 4 4 5 5 6 6 7 8 9 9
// Explanation: Above test case has 4 sorted arrays of size 4, 4, 4, 4 arr[][] = [[1, 2, 2, 2], [3, 3, 4, 4], [5, 5, 6, 6], [7, 8, 9, 9 ]]. The merged list will be [1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 9, 9].
// Expected Time Complexity: O(k2*Log(k))
// Expected Auxiliary Space: O(k2)

// Constraints:
// 1 <= k <= 100

//brute force
// class Solution {
//   merge(arr1, arr2) {
//     let i = 0;
//     let j = 0;
//     let res = [];
//     while (i < arr1.length && j < arr2.length) {
//       if (arr1[i] < arr2[j]) {
//         res.push(arr1[i]);
//         i++;
//       } else {
//         res.push(arr2[j]);
//         j++;
//       }
//     }
//     while (i < arr1.length) {
//       res.push(arr1[i]);
//       i++;
//     }
//     while (j < arr2.length) {
//       res.push(arr2[j]);
//       j++;
//     }
//     return res;
//   }

//   mergeKArrays(arr, K) {
//     //code here
//     let ans = arr[0];
//     for (let i = 1; i < K; i++) {
//       ans = this.merge(ans, arr[i]);
//     }

//     return ans;
//   }
// }
//k2*n TC (k is no of arrays & N is the size of each array)
//k*n  SC

//using heap
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Return the size of the heap
  size() {
    return this.heap.length;
  }

  top() {
    if (!this.heap.length) return null;

    return this.heap[0];
  }

  // Private helper method to maintain heap property after insertion
  heapifyUp() {
    let index = this.size() - 1;

    let parent = Math.floor((index - 1) / 2);
    while (index > 0 && this.heap[parent] < this.heap[index]) {
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  // Insert a new element into the heap
  push(element) {
    this.heap.push(element);
    this.heapifyUp();
  }

  // Private helper method to maintain heap property after extraction
  heapifyDown(n, i) {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left <= n && this.heap[left] > this.heap[smallest]) {
      smallest = left;
    }
    if (right <= n && this.heap[right] > this.heap[smallest]) {
      smallest = right;
    }

    if (smallest != i) {
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      this.heapifyDown(n, smallest);
    }
  }

  // Remove and return the smallest element (the root)
  pop() {
    if (this.size() == 0) return;

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

// class Solution {
//   mergeKArrays(arr, K) {
//     //code here

//     let heap = new MaxHeap();
//     for (let i = 0; i < K; i++) {
//       for (let j = 0; j < K; j++) {
//         //building heapifyUp
//         heap.push(arr[i][j]);
//       }
//     }
//     //n2*logK Inserting Elements
//     //n2*logK Heapifying Down
//     //O(n*2)

//     let size = heap.size() - 1;
//     //heap sort

//     // heap sort TC nlogn - single array
//     // hear array size is n*2 as k size aaray
//     // n2*log k TC
//     // n2 array size
//     while (size > 0) {
//       //put max element to last
//       [heap.heap[size], heap.heap[0]] = [heap.heap[0], heap.heap[size]];
//       //ignore last swap
//       size--;
//       //put top to coorect position
//       heap.heapifyDown(size, 0);
//     }

//     return heap.heap;
//   }
// }

//sol 3 - algo
// insert first element of every sorted array into heap (minheap)
// create an empty ans array
// take the top element ans insert it into ans array and
// remove from the heap(pop out)
// check whether the next element is present in that particular arr
// insert the next element of that array into heap
// for track of which array that pop element belong to
// we craete one node structure from which contain data and row & col
// from row & col we know from which array it belongs to
// repeat the process until heap becomes empty
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Return the size of the heap
  size() {
    return this.heap.length;
  }

  top() {
    if (!this.heap.length) return null;

    return this.heap[0];
  }

  // Private helper method to maintain heap property after insertion
  heapifyUp() {
    let index = this.size() - 1;

    let parent = Math.floor((index - 1) / 2);
    while (index > 0 && this.heap[parent].data > this.heap[index].data) {
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  // Insert a new element into the heap
  push(element) {
    this.heap.push(element);
    this.heapifyUp();
  }

  // Private helper method to maintain heap property after extraction
  heapifyDown(n, i) {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < n && this.heap[left].data < this.heap[smallest].data) {
      smallest = left;
    }
    if (right < n && this.heap[right].data < this.heap[smallest].data) {
      smallest = right;
    }

    if (smallest != i) {
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      this.heapifyDown(n, smallest);
    }
  }

  // Remove and return the smallest element (the root)
  pop() {
    if (this.size() == 0) return;

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
  constructor(data, i, j) {
    this.data = data;
    this.row = i;
    this.col = j;
  }
}
// 2d aray
//  0 1 1
//0 1 2 3
//1 4 5 6
//2 7 8 9

class Solution {
  mergeKArrays(arr, K) {
    let heap = new MinHeap();
    let ans = [];

    for (let i = 0; i < K; i++) {
      let ele = new Node(arr[i][0], i, 0);
      heap.push(ele); //log K
    }
    //K *log K

    while (heap.size() > 0) {
      // console.log(heap);
      let val = heap.pop();

      ans.push(val.data);
      let col = val.col;
      let row = val.row;
      if (col + 1 < arr[row].length) {
        let node = new Node(arr[row][col + 1], row, col + 1);
        heap.push(node);
      }

      // k2 array size
      // TC K2logK pushing K2 element in heap
      // SC O(K)+ O(k2) -max element in heap at time + array store K2
    }
    return ans;
  }
}

let sol = new Solution();
console.log(
  sol.mergeKArrays(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    3
  )
);
