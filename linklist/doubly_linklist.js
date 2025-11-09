class Node {
  constructor(value) {
    this.data = value;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtStart(data) {
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

  insertAtEnd(data) {
    let node = new Node(data);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = this.tail.next;
  }

  insertAtPos(data, pos) {
    let node = new Node(data);
    let size = 0;
    let temp = this.head;
    if (this.head != null) {
      while (temp != null) {
        size++;
        temp = temp.next;
      }
    }
    // console.log(size);
    //pos 1
    //0 > 0
    //5 >3
    if (pos - 1 > size) {
      console.log("not a valid index");
      return;
    }
    if (pos == 1 && size == 0) {
      this.head = node;
      this.tail = node;
      return;
    }
    if (pos - 1 == size) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      return;
    }
    temp = this.head;
    let count = 0;
    let cur = this.head;
    while (count < pos - 1 && temp.next != null) {
      count++;
      cur = temp;
      temp = temp.next;
    }

    let fwd = cur.next;
    cur.next = node;
    node.prev = cur;
    node.next = fwd;
    fwd.prev = node;
  }

  deleteAtStart() {
    if (this.head == null) return;
    if (this.head.next == null) {
      this.head = null;
      this.tail = null;
      return;
    }
    this.head = this.head.next;
    this.head.prev = null;
  }

  deleteAtEnd() {
    if (this.tail == null) return;
    if (this.head.next == null) {
      this.head = null;
      this.tail = null;
      return;
    }
    let temp = this.head;
    let cur = this.head;
    while (temp.next != null) {
      cur = temp;
      temp = temp.next;
    }
    cur.next = null;
    this.tail = cur;
  }

  deleteAtPos(pos) {
    let size = 0;
    let temp = this.head;
    if (this.head != null) {
      while (temp != null) {
        size++;
        temp = temp.next;
      }
    }
    if (size == 1 && pos == 1) {
      this.head = null;
      this.tail = null;
      return;
    }
    if (pos > size) {
      console.log("not a valid index");
      return;
    }
    if (pos == size) {
      let prev = this.tail.prev;
      prev.next = null;
      this.tail = prev;
      return;
    }
    if (pos == 1) {
      this.head = this.head.next;
      this.head.prev = null;
      return;
    }
    temp = this.head;
    let curr = this.head;
    let count = 0;
    while (count < pos - 1 && temp.next != null) {
      count++;
      curr = temp;
      temp = temp.next;
    }
    temp = temp.next;
    curr.next = temp;
    temp.prev = curr;
  }

  printList() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

const list = new DoubleLinkList();
// list.insertAtStart(10);
// list.insertAtStart(20);
// list.insertAtEnd(10);
// list.insertAtEnd(20);
// list.insertAtEnd(30);
// list.insertAtPos(33, 1);
list.insertAtPos(344, 1);
list.insertAtPos(44, 2);
list.insertAtPos(55, 2);
list.insertAtPos(5115, 4);
// list.deleteAtStart();
// list.deleteAtStart();
// list.deleteAtStart();
// list.deleteAtStart();
// list.deleteAtEnd();
// list.deleteAtEnd();
// list.deleteAtEnd();
// list.deleteAtEnd();
list.deleteAtPos(1);
list.deleteAtPos(2);
list.printList();

// console.log(list);
