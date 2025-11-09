// A double ended queue is a queue where we can insert and delete element
// at both end
// The insert & delete operation at front & rear both takes O(1) time
// complexity
// but in js inserting or deleting at start from queue takes O(n) time
// complexity, because unshfit & shift operation take O(n) time complexity
// as every element has to shift to one position to left in case of
// deleting from front and one position right in case of inserting at
// front

//but you implement in js in O(1) time using doubly linklist

// implementation with shift & unshift - O(n) time complexity
// Enqueue Front: Add an element to the front of the deque.
// Enqueue Rear: Add an element to the rear of the deque.
// Dequeue Front: Remove an element from the front of the deque.
// Dequeue Rear: Remove an element from the rear of the deque.
// Front: Get the element at the front of the deque without removing it.
// Rear: Get the element at the rear of the deque without removing it.
// Is Empty: Check if the deque is empty.
// Size: Get the number of elements in the deque.

// class Dequeue {
//   constructor() {
//     this.dequeue = [];
//   }
//   enqueueFront(data) {
//     this.dequeue.unshift(data);
//
//   enqueueRear(data) {
//     this.dequeue.push(data);
//   }
//   dequeueFront() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     this.dequeue.shift();
//   }
//   dequeueRear() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     this.dequeue.pop();
//   }
//   isEmpty() {
//     return this.dequeue.length == 0;
//   }

//   getFront() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     return this.dequeue[0];
//   }
//   getRear() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     return this.dequeue[this.getSize() - 1];
//   }

//   getSize() {
//     return this.dequeue.length;
//   }
// }

// const queue = new Dequeue();
// queue.enqueueFront(88);
// queue.enqueueRear(40);
// queue.enqueueRear(555);
// // // queue.dequeueFront();
// // console.log(queue.getFront());
// console.log(queue);

/// let see using doubly linklist

// implementation with doubly linklist - O(1) time complexity
// Enqueue Front: Add an element to the front of the deque.
// Enqueue Rear: Add an element to the rear of the deque.
// Dequeue Front: Remove an element from the front of the deque.
// Dequeue Rear: Remove an element from the rear of the deque.
// Front: Get the element at the front of the deque without removing it.
// Rear: Get the element at the rear of the deque without removing it.
// Is Empty: Check if the deque is empty.
// Size: Get the number of elements in the deque.

class Dequeue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueueFront(data) {
    let node = new Node(data);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
      return;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  enqueueRear(data) {
    let node = new Node(data);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  isEmpty() {
    return this.head == null;
  }
  dequeueFront() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.next == null) {
      this.head = null;
      this.tail = null;
      return;
    }
    this.head = this.head.next;
    this.head.prev = null;
  }
  dequeueRear() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.next == null) {
      this.head = null;
      this.tail = null;
      return;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
  getFront() {
    if (this.isEmpty()) {
      return null;
    }
    return this.head.data;
  }

  getRear() {
    if (this.isEmpty()) {
      return null;
    }
    return this.tail.data;
  }

  getSize() {
    let ct = 0;
    if (this.head == null) return ct;
    let temp = this.head;
    while (temp != null) {
      ct++;
      temp = temp.next;
    }
    return ct;
  }
}
class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
    this.prev = null;
  }
}

let queue = new Dequeue();
queue.enqueueFront(10);
queue.enqueueRear(20);
queue.dequeueRear();
// queue.dequeueRear();
// queue.dequeueRear();
// console.log(queue.getFront());
// console.log(queue);
// console.log(queue.getRear());
console.log(queue.getSize());
