// function binarySearch(arr, i, j, key) {
//   let mid = parseInt((i + j) / 2);
//   //2,7,12,15,27,45
//   //0,1,2,3,  4,5
//   //
//   if (i == j && arr[mid] != key) return -1;
//   if (arr[mid] == key) {
//     return mid;
//   } else if (arr[mid] > key) {
//     return binarySearch(arr, i, mid - 1, key);
//   }
//   return binarySearch(arr, mid + 1, j, key);
// }
function binarySearch(arr, s, e, target) {
  while (s <= e) {
    let mid = parseInt((s + e) / 2);
    if (arr[mid] == target) {
      return true;
    } else if (arr[mid] > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return false;
}
let nums = [2, 7, 12, 15, 27, 45],
  key = 43,
  start = 0,
  end = nums.length - 1;
console.log(binarySearch(nums, start, end, key));
//using recursion
