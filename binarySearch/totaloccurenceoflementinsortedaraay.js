//total occuerce of element in sorted array
//// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: 2

function firstOccu(arr, target) {
  let f = -1;
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] == target) {
      f = mid;
      end = mid - 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return f;
}

function lastOccu(arr, target) {
  let l = -1;
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] == target) {
      l = mid;
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return l;
}

var totalOccurence = function (nums, target) {
  //
  let startOcc = firstOccu(nums, target);
  let last = lastOccu(nums, target);
  return last - startOcc + 1;
};

console.log(totalOccurence([5, 7, 7, 8, 8, , 8, 8, 8, 10], 8));
