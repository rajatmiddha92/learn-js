class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
    this.prev = null;
  }
}

class CircularDoublyLinklist {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertAtStart(data) {
    let node = new Node(data);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
      node.next = this.head;
      node.prev = this.head;
      return;
    }
    this.tail.next = node;
    node.prev = this.tail;
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  insertAtEnd(data) {
    let node = new Node(data);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
      node.next = this.head;
      node.prev = this.head;
      return;
    }
    this.tail.next = node;
    node.prev = this.tail;
    node.next = this.head;
    this.head.prev = node;
    this.tail = this.tail.next;
  }

  insertAtPos(data, pos) {
    if (pos > 1 && this.head == null) {
      console.log("not a valid pos");
      return;
    }
    if (pos == 1) {
      this.insertAtStart(data);
      return;
    }
    let temp = this.head;
    let count = 1;
    while (temp.next != this.head) {
      temp = temp.next;
      count++;
    }
    if (count == pos - 1) {
      this.insertAtEnd(data);
      return;
    }
    if (pos - 1 > count) {
      console.log("not a valid pos");
      return;
    }
    count = 0;
    temp = this.head;
    let cur = this.head;
    let node = new Node(data);
    while (count != pos - 1) {
      cur = temp;
      temp = temp.next;
      count++;
    }
    cur.next = node;
    node.prev = cur;
    node.next = temp;
    temp.prev = node;
  }

  deleteAtStart() {
    if (this.head == null) {
      console.log("nothing to delete");
      return;
    }
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    this.head = this.head.next;
    this.head.prev = this.tail;
    this.tail.next = this.head;
  }

  deleteAtEnd() {
    if (this.head == null) {
      console.log("nothing to delete");
      return;
    }
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    let curr = this.tail.prev;
    curr.next = this.head;
    this.head.prev = curr;
    this.tail = curr;
  }
  deleteAtPos(pos) {
    if (this.head == null) {
      console.log("nothing to delete");
      return;
    }
    if (pos == 1) {
      this.deleteAtStart();
      return;
    }
    let count = 0;
    let temp = this.head;
    while (temp.next != this.head) {
      count++;
      temp = temp.next;
    }
    if (pos - 1 > count) {
      console.log("not a valid pos to delete");
      return;
    }
    if (pos - 1 == count) {
      this.deleteAtEnd();
      return;
    }
    count = 0;
    let curr = this.head;
    temp = this.head;
    while (count != pos - 1) {
      curr = temp;
      count++;
      temp = temp.next;
    }
    curr.next = temp.next;
    temp = temp.next;
    temp.prev = curr;
  }

  printList() {
    if (this.head == null) return;
    let temp = this.head;
    while (temp.next != this.head) {
      console.log(temp.data);
      temp = temp.next;
    }
    console.log(temp.data);
  }
}

let list = new CircularDoublyLinklist();
list.insertAtStart(10);
list.insertAtStart(20);
list.insertAtStart(30);
// list.insertAtEnd(10);
// list.insertAtEnd(20);
// list.insertAtEnd(30);
// list.insertAtPos(44, 3);
// list.insertAtPos(44, 1);
// list.deleteAtStart();
// list.deleteAtStart();
// list.deleteAtStart();
// list.deleteAtStart();
// list.deleteAtEnd();
// list.deleteAtEnd();
// list.deleteAtEnd();
// list.deleteAtEnd();
// list.deleteAtPos(1);
// list.deleteAtPos(2);
// list.deleteAtPos(1);
// list.deleteAtPos(2);
list.printList();
// console.log(list);
