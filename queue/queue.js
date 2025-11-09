class Queue {
  constructor() {
    this.queue = [];
  }

  pushIntoQueue(data) {
    this.queue.push(data);
  }

  isEmpty() {
    return this.queue.length == 0;
  }

  popFromQueue() {
    if (this.isEmpty()) {
      console.log("nothing to deleted from queue");
      return;
    }
    this.queue.shift();
  }

  getFront() {
    if (this.isEmpty()) {
      console.log("queue is Empty");
      return;
    }
    console.log(this.queue[0]);
  }

  size() {
    return this.queue.length;
  }

  getRear() {
    if (this.isEmpty()) {
      console.log("queue is Empty");
      return;
    }
    console.log(this.queue[this.size() - 1]);
  }
}

// let queue = new Queue();
// queue.pushIntoQueue(15);
// // queue.getRear();
// queue.pushIntoQueue(20);
// queue.popFromQueue();
// console.log(queue);
