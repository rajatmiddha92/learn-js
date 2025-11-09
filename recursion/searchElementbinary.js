//
// [] return false key=10
// [1]
//-1-0
//0-0

function findKey(arr, low, high, key) {
  if (high - low < 0) return false;

  let mid = parseInt((low + high) / 2);
  //0+7/2 3
  //   console.log(low, high);
  if (arr[mid] == target) {
    return true;
  } else if (arr[mid] > target) {
    let ans = findKey(arr, low, mid - 1, key);
    return ans;
  } else {
    let ans = findKey(arr, mid + 1, high, key);
    return ans;
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let start = 0,
  end = arr.length - 1;
target = 3;
console.log(findKey(arr, start, end, target));
