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
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < n && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (right < n && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest != i) {
      [this.heap[largest], this.heap[i]] = [this.heap[i], this.heap[largest]];
      this.heapifyDown(n, largest);
    }
  }

  // Remove and return the largest element (the root)
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
