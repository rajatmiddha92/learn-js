function sum(arr, start) {
  if (start == arr.length) return 0;

  let ans = arr[start] + sum(arr, start + 1);

  return ans;
}

let arr = [];
console.log(sum(arr, 0));
