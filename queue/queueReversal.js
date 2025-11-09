function revQueue(q) {
  let stack = [];
  for (let i = 0; i < q.length; i++) {
    stack.push(q[i]);
  }
  let i = 0;
  while (stack.length) {
    q[i] = stack.pop();
    i++;
  }
  return q;
}

console.log(rev([4, 3, 1, 10, 2, 6]));
