class Stack {
  constructor(size) {
    this.stack = new Array(size);
    this.top = -1;
  }

  pushIntoStack(element) {
    if (this.top < this.stack.length - 1) {
      this.top++;
      this.stack[this.top] = element;
    } else {
      console.log("stack overflow");
    }
  }

  popFromStack() {
    if (this.top > -1) {
      this.stack.splice(this.top, 1);
      this.top--;
    } else {
      console.log("stack underflow");
    }
  }

  peek() {
    return this.stack[this.top];
  }

  isEmpty() {
    return this.top < -1 ? true : false;
  }

  printStack() {
    this.stack.forEach((data) => {
      console.log(data);
    });
  }
}

let a = new Stack(5);
a.pushIntoStack(1);
a.pushIntoStack(2);
a.pushIntoStack(3);
a.pushIntoStack(44);
a.pushIntoStack(15);

a.popFromStack();
a.popFromStack();

console.log(a.stack);
