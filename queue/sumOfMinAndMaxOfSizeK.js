function maximum(nums, k) {
  let sum = 0;
  let j = 0;
  let q = [];
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i <= nums.length - k; i++) {
    while (j - i < k) {
      //[2, 5, -1, 7, -3, -1, -2]
      // i = 0 j = 0

      while (q.length && q[q.length - 1] < nums[j]) {
        q.pop();
      }
      q.push(nums[j]);
      j++;
    }

    if (j - i == k) {
      max = Math.max(max, q[0]);
      sum += max;
    }

    if (q.length && q[0] == nums[i]) {
      q.shift();
    }
  }
  return sum;
}

function minimum(nums, k) {
  let sum = 0;
  let j = 0;
  let q = [];
  let min = Number.POSITIVE_INFINITY;
  for (let i = 0; i <= nums.length - k; i++) {
    while (j - i < k) {
      //[2, 5, -1, 7, -3, -1, -2]
      // i = 0 j = 0

      while (q.length && q[q.length - 1] > nums[j]) {
        q.pop();
      }
      q.push(nums[j]);
      j++;
    }

    if (j - i == k) {
      min = Math.min(min, q[0]);
      sum += min;
    }

    if (q.length && q[0] == nums[i]) {
      q.shift();
    }
  }
  return sum;
}

function check(arr, k) {
  let a = maximum(arr, k);

  let b = minimum(arr, k);

  return a + b;
}

console.log(check([2, 5, -1, 7, -3, -1, -2], 4));
