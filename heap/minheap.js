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
