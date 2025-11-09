// Minimum Cost of ropes
// Difficulty: EasyAccuracy: 42.73%Submissions: 228K+Points: 2
// Given an array, arr[] of rope lengths, connect all ropes into a single rope with the minimum total cost. The cost to connect two ropes is the sum of their lengths.

// Examples:

// Input: arr[] = [4, 3, 2, 6]
// Output: 29
// Explanation: We can connect the ropes in following ways.
// 1) First connect ropes of lengths 2 and 3. Which makes the array [4, 5, 6]. Cost of this operation 2 + 3 = 5.
// 2) Now connect ropes of lengths 4 and 5. Which makes the array [9, 6]. Cost of this operation 4 + 5 = 9.
// 3) Finally connect the two ropes and all ropes have connected. Cost of this operation 9 + 6 =15. Total cost is 5 + 9 + 15 = 29. This is the optimized cost for connecting ropes.
// Other ways of connecting ropes would always have same or more cost. For example, if we connect 4 and 6 first (we get three rope of 3, 2 and 10), then connect 10 and 3 (we gettwo rope of 13 and 2). Finally we connect 13 and 2. Total cost in this way is 10 + 13 + 15 = 38.
// Input: arr[] = [4, 2, 7, 6, 9]
// Output: 62
// Explanation: First, connect ropes 4 and 2, which makes the array [6, 7, 6, 9]. Cost of this operation 4 + 2 = 6.
// Next, add ropes 6 and 6, which results in [12, 7, 9]. Cost of this operation 6 + 6 = 12.
// Then, add 7 and 9, which makes the array [12,16]. Cost of this operation 7 + 9 = 16. And
// finally, add these two which gives [28]. Hence, the total cost is 6 + 12 + 16 + 28 = 62.
// Input: arr[] = [10]
// Output: 0
// Explanation: Since there is only one rope, no connections are needed, so the cost is 0.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 106

// Min-Heap implementation (Priority Queue)
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
    while (index > 0 && this.heap[parent] > this.heap[index]) {
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

class Solution {
  // Function to return the minimum cost of connecting the ropes.
  minCost(arr) {
    // code here

    // Using a min-heap (priority queue) to get the two smallest
    // elements efficiently
    let heap = new MinHeap();

    // Insert all ropes into the min-heap
    for (let i = 0; i < arr.length; i++) {
      heap.push(arr[i]);
    }

    let cost = 0;

    // While more than one rope is left
    while (heap.size() > 1) {
      // Pop the two smallest elements (the ropes to be combined)
      let a = heap.pop();
      let b = heap.pop();

      // Calculate the cost of connecting the two ropes
      let sum = a + b;
      cost += sum;

      // Push the combined rope back into the heap
      heap.push(sum);
    }

    return cost;
  }
}

//TC - O(n*logn) bcoz insering n element in heap and its correct
//position take log N time
//SC - O(n) using priority queue
