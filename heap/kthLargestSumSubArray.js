// K-th Largest Sum Contiguous Subarray
// Difficulty: MediumAccuracy: 54.33%Submissions: 20K+Points: 4
// You are given an array arr. You have to find the K-th largest sum of contiguous subarray within the array elements. In other words, overall subarrays, find the subarray with kth largest sum and return its sum of elements.

// Examples:

// Input: arr[] = [3, 2, 1], k = 2
// Output: 5
// Explanation: The different subarray sums we can get from the array are = [6, 5, 3, 2, 1]. Where 5 is the 2nd largest.
// Input: arr[] = [2, 6, 4, 1], k = 3
// Output: 11
// Explanation: The different subarray sums we can get from the arrayare = [13, 12, 11, 10, 8, 6, 5, 4, 2, 1]. Where 11 is the 3rd largest.
// Expected Time Complexity: O(n2 * log k)
// Expected Auxiliary Space: O(k)

// Constraints:
// 1 <= arr.size() <= 100
// 1 <= k <= (n*(n+1))/2
// -105 <= arr[i] <= 105

class Solution {
  //brute force
  // Function to find the kth largest element in the given array.

  kthLargest(arr, k) {
    let set = [];
    for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        set.push(sum);
      }
    }
    set.sort((a, b) => b - a);
    //N2* log N
    //SC - n2
    return set[k - 1];
  }
}

//using heap
class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  top() {
    if (!this.heap.length) return null;

    return this.heap[0];
  }

  heapifyUp() {
    let index = this.size() - 1;

    let parent = Math.floor((index - 1) / 2);
    while (index > 0 && this.heap[parent] > this.heap[index]) {
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  push(element) {
    this.heap.push(element);
    this.heapifyUp();
  }

  heapifyDown(n, i) {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < n && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < n && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest != i) {
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      this.heapifyDown(n, smallest);
    }
  }

  pop() {
    if (this.size() == 0) return;

    if (this.size() == 1) {
      this.heap.pop();
      return;
    }

    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.heapifyDown(this.size(), 0);
  }
}

// User function Template for javascript
class Solution {
  // Function to find the kth largest element in the given array.

  kthLargest(arr, k) {
    let heap = new MinHeap();
    for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        if (heap.size() < k) {
          heap.push(sum);
        } else {
          if (heap.top() < sum) {
            heap.pop();
            heap.push(sum);
          }
        }
      }
    }

    return heap.top();
  }
}

//tC n2*log K
//SC O(K)
