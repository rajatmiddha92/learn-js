// circular queue is a queue when your rear get full
// so it will not go fron n-1 to n
//instaed it will go to 0

//ex let say you have a queue of size 6
//[1 2 3 4 5 6]
// no you dequeue 2 elemnts
// [<empty item>,<empty item>,3, 4, 5, 6]
// front is at 3 rear it at 6 when you push 6 into queue
// rear will move to zero

class circularQueue {
  constructor(size) {
    this.queue = new Array(size);
    this.front = 0;
    this.rear = 0;
  }

  //push in queue
  enqueue(data) {
    if (this.queue[this.rear] != undefined) {
      console.log("queue doesnt have space");
      return;
    }
    this.queue[this.rear] = data;
    if (this.rear == this.size() - 1) {
      this.rear = 0;
      return;
    }
    this.rear++;
  }
  isEmpty() {
    if (this.front == this.rear && this.queue[this.rear] == undefined) {
      return true;
    }
    return false;
  }

  //remove from queue
  dequeue() {
    if (this.isEmpty()) {
      console.log("queue is empty nothing to delete");
      this.front = 0;
      this.rear = 0;
      return;
    }
    delete this.queue[this.front];
    if (this.front == this.size() - 1) {
      this.front = 0;
      return;
    }
    this.front++;
  }

  size() {
    return this.queue.length;
  }
}

let queue = new circularQueue(6);
queue.enqueue(10);
queue.enqueue(20);

queue.enqueue(30);
queue.enqueue(30);
queue.enqueue(30);
queue.enqueue(30);
queue.dequeue();
queue.dequeue();
queue.enqueue(20);

queue.enqueue(30);
// queue.enqueue(1000);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.enqueue(1);
console.log(queue);
