class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}
class CircularLinklist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtStart(data) {
    let node = new Node(data);
    if (this.head == null) {
      this.head = node;
      node.next = this.head;
      this.size++;
      return;
    }
    let temp = this.head;
    while (temp.next != this.head) {
      temp = temp.next;
    }
    temp.next = node;
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  insertAtEnd(data) {
    let node = new Node(data);
    if (this.head == null) {
      this.head = node;
      node.next = this.head;
      this.size++;
      return;
    }
    let temp = this.head;
    while (temp.next != this.head) {
      temp = temp.next;
    }
    temp.next = node;
    node.next = this.head;
    this.size++;
  }

  insertAtPos(data, pos) {
    let node = new Node(data);
    if (this.head == null && pos > 1) {
      console.log("not a valid index");
      return;
    }
    if (pos == 1) {
      this.insertAtStart(data);
      return;
    }
    let temp = this.head;
    let count = 0;
    while (temp.next != this.head) {
      temp = temp.next;
      count++;
    }

    if (this.size < pos - 1) {
      console.log("not a valid index");
      return;
    }
    if (this.size == pos - 1) {
      this.insertAtEnd(data);
      return;
    }
    temp = this.head;
    let cur = this.head;
    count = 0;
    while (count != pos - 1) {
      cur = temp;
      temp = temp.next;
      count++;
    }
    cur.next = node;
    node.next = temp;
    this.size++;
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

  deleteAtStart() {
    if (this.head == null) return;
    if (this.size == 1) {
      this.head = null;
      this.size--;
      return;
    }
    let temp = this.head;
    while (temp.next != this.head) {
      temp = temp.next;
    }
    this.head = this.head.next;
    temp.next = this.head;
    this.size--;
  }

  deleteAtEnd() {
    if (this.head == null) return;
    if (this.size == 1) {
      this.head = null;
      this.size--;
      return;
    }
    let temp = this.head;
    let curr = this.head;
    while (temp.next != this.head) {
      curr = temp;
      temp = temp.next;
    }

    curr.next = this.head;
    this.size--;
  }

  deleteAtPos(pos) {
    if (this.head == null) return;
    if (pos > this.size) {
      console.log("not a valid pos");
      return;
    }
    if (pos == 1) {
      this.deleteAtStart();
      return;
    }
    if (this.size == pos) {
      this.deleteAtEnd();
      return;
    }
    let temp = this.head;
    let cur = this.head;
    let count = 0;
    while (count != pos - 1) {
      count++;
      cur = temp;
      temp = temp.next;
    }
    cur.next = temp.next;
    this.size--;
  }
}

let list = new CircularLinklist();
// list.insertAtStart(10);
// list.insertAtStart(20);
// list.insertAtStart(30);
// list.insertAtEnd(10);
// list.insertAtEnd(20);
// list.insertAtEnd(30);
list.insertAtPos(40, 1);
list.insertAtPos(50, 2);
list.insertAtPos(60, 2);
list.insertAtPos(100, 4);
list.deleteAtPos(4);
list.deleteAtPos(2);
// list.deleteAtEnd();
// list.deleteAtEnd();
// list.deleteAtEnd();
// list.deleteAtEnd();
// list.deleteAtStart();
// list.deleteAtStart();
// list.deleteAtStart();
// list.deleteAtStart();
// list.deleteAtStart();
list.printList();
console.log(list);
