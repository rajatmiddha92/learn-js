function revFirstElement(queue, k) {
  let stack = [];
  let length = queue.length - k;
  while (k) {
    stack.push(queue.shift());
    k--;
  }
  while (stack.length) {
    queue.push(stack.pop());
  }
  let rem = length;
  while (rem) {
    queue.push(queue.shift());
    rem--;
  }
  return queue;
}

console.log(revFirstElement([4, 3, 1, 10, 2, 6], 3));
