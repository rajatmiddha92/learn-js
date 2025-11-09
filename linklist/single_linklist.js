class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class singleLinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtStart(data) {
    let node = new Node(data);

    this.size++;
    if (this.head == null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  insertAtEnd(data) {
    this.size++;
    let node = new Node(data);
    if (this.head == null) {
      this.head = node;
    } else {
      let temp = this.head;
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = node;
    }
  }

  insertAtPos(data, pos) {
    let node = new Node(data);

    let count = 1;
    let temp = this.head;
    if (this.size < pos - 1) {
      //0 < 1
      console.log("not a valid pos");
      return;
    }
    if (this.size == 0 && pos == 1) {
      this.head = node;
      this.size++;
      return;
    }

    while (count < pos - 1 && temp.next != null) {
      count++;
      temp = temp.next;
    }

    let next = temp.next;
    temp.next = node;
    node.next = next;
    this.size++;
  }

  deleteAtStart() {
    if (this.size == 0) {
      console.log("node not available to delete");
      return;
    }
    this.head = this.head.next;
    this.size--;
  }

  deleteAtEnd() {
    if (this.size == 0) {
      console.log("node not available to delete");
      return;
    }
    if (this.size == 1) {
      this.head = null;
      this.size--;
      return;
    }
    let temp = this.head;
    while (temp.next.next != null) {
      temp = temp.next;
    }
    temp.next = null;
    this.size--;
  }

  deleteAtPos(pos) {
    if (pos > this.size) {
      console.log("not a valid pos");
      return;
    }
    let curr = this.head;
    let prev = this.head;
    let count = 0;
    while (count != pos - 1) {
      prev = curr;
      curr = curr.next;
      count++;
    }
    if (count == 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    curr = curr.next;
    prev.next = curr;
    this.size--;
  }
  printList() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}
let list = new singleLinkList();

// list.insertAtStart(11);
// list.insertAtStart(3);
// list.insertAtStart(10);
// list.insertAtStart(5);
// list.insertAtPos(55, 1);
// list.insertAtPos(44, 2);
// list.insertAtPos(106, 3);
// list.insertAtEnd(5);
// list.insertAtEnd(20);
// list.deleteAtStart();
// list.deleteAtStart();
// list.deleteAtStart();
// list.deleteAtStart();
// list.deleteAtStart();
// list.deleteAtStart();
// list.deleteAtEnd();
// list.deleteAtEnd();
// list.deleteAtEnd();
// list.deleteAtEnd();
// list.deleteAtEnd();
// list.deleteAtPos(3);
// list.deleteAtPos(1);
// list.deleteAtPos(4);
// list.printList();
list.insertAtStart(6);
list.insertAtStart(5);
list.insertAtStart(4);
list.insertAtStart(3);
list.insertAtStart(2);
list.insertAtStart(1);

// console.log(list);
// console.log(JSON.stringify(list));
