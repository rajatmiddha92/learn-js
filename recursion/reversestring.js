let str = ["a", "b", "c", "d", "e"];

let start = 0,
  end = str.length - 1,
  length = str.length;
function reverseString(str, l, r, n) {
  if (l <= r) {
    let temp = str[l];
    str[l] = str[r];
    str[r] = temp;
    reverseString(str, l + 1, r - 1, n);
  }
  return str;
}

console.log(reverseString(str, start, end, length));
