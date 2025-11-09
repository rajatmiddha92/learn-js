class Stack {
  constructor() {
    this.stack = [];
  }

  pushIntoStack(data) {
    this.stack.push(data);
  }

  popfromStack() {
    this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return !this.stack.length ? true : false;
  }

  printStack() {
    this.stack.forEach((data) => {
      console.log(data);
    });
  }
}

let a = new Stack();
// let b = new Stack();
// a.pushIntoStack(10);
// a.pushIntoStack(20);
// // console.log(a.stack);
// // a.popfromStack();
// console.log(a.peek());
// console.log(a.isEmpty());
// a.printStack();
a.popfromStack();
