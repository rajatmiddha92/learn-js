function threeMaxSubArray(nums) {
  let max = Number.NEGATIVE_INFINITY;
  let left = 0,
    right = left + 2,
    length = nums.length - 2,
    sum = 0;
  while (length) {
    if (left > 0) {
      sum = sum - nums[left - 1] + nums[right];
      console.log(sum, "every");
    } else {
      sum = nums[left] + nums[left + 1] + nums[right]; //1+22+12 //35
      console.log(sum, "one");
    }
    max = Math.max(max, sum);
    left++; //1
    right++;
    length--;
  }
  return max;
}

console.log(threeMaxSubArray([1, 22, 12, 0, 3, 12, 3, 12]));
