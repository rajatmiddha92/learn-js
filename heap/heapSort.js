// Heap Sort
// Difficulty: MediumAccuracy: 53.06%Submissions: 119K+Points: 4
// Given an array arr. The task is to sort the array elements by Heap Sort.

// Examples:

// Input: arr[] = [4, 1, 3, 9, 7]
// Output: [1, 3, 4, 7, 9]
// Explanation: After sorting elements using heap sort, elements will be in order as 1,3,4,7,9.
// Input: arr[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Explanation: After sorting elements using heap sort, elements will be in order as 1, 2,3,4,5,6,7,8,9,10.
// Input: arr[] = [2, 1, 5]
// Output: [1, 2, 5]
// Explanation: After sorting elements using heap sort, elements will be in order as 1,2,5,
// Constraints:
// 1 ≤ arr.size() ≤ 106
// 1 ≤ arr[i] ≤ 106

//algo for heapsort
// build max from the array first
// while doing this your max element will be at top

// swap you root max value with last elemnt value and make the size
// one less
// then move the root positon to its correct position (use heapify algo)
// for heapify algo refer to index.js of heap folder
class Solution {
  // Function to sort an array using Heap Sort.

  heapifyDown(arr, size, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left <= size && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right <= size && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest != i) {
      [arr[largest], arr[i]] = [arr[i], arr[largest]];
      this.heapifyDown(arr, size, largest);
      //O(logn)
    }
  }

  heapSort(arr) {
    // code here
    let size = arr.length - 1;
    for (let i = Math.floor(size / 2); i >= 0; i--) {
      this.heapifyDown(arr, size, i);
      //O(logn)
    }
    while (size > 0) {
      //n iteartions
      [arr[0], arr[size]] = [arr[size], arr[0]];
      size--;
      this.heapifyDown(arr, size, 0);
      //log n

      //TC O(NlogN)
    }

    return arr;
  }
}
