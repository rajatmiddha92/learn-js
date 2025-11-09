function subset(arr, l, r) {
  if (l > r) {
    console.log(arr);
    return;
  }
  let newArr = [...arr];
  arr.splice(l, 1);
  subset(arr, l, r - 1);
  subset(newArr, l + 1, r);
}
let x = [1, 2, 3],
  start = 0,
  end = x.length - 1;
subset(x, start, end);
