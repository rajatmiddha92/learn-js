// function isSorted(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

function isSorted(arr, l, r) {
  if (l == r) return true;
  if (l < r) {
    if (arr[l] < arr[l + 1]) {
      return isSorted(arr, l + 1, r);
    } else {
      return false;
    }
  }
  return true;
}

let arr = [];
console.log(isSorted(arr, 0, arr.length - 1));
