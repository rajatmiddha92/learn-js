let arr = [100, 8, 4, 3, 1, 2, 9, 7, 6, 11, 21, 16];

function partition(arr, l, r) {
  let pivot = arr[l];
  let count = 0;
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < pivot) {
      count++;
    }
  }
  let pivotIndex = l + count;
  [arr[l], arr[pivotIndex]] = [arr[pivotIndex], arr[l]];
  let i = l,
    j = r;
  while (i < pivotIndex && j > pivotIndex) {
    while (arr[i] < arr[pivotIndex]) {
      i++;
    }
    while (arr[j] > arr[pivotIndex]) {
      j--;
    }
    if (i < pivotIndex && j > pivotIndex) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  return pivotIndex;
}

function quicksort(arr, l, r) {
  if (l < r) {
    let ans = partition(arr, l, r);

    quicksort(arr, l, ans - 1);
    quicksort(arr, ans + 1, r);

    return arr;
  } else {
    return [arr[l]];
  }
}

console.log(quicksort(arr, 0, arr.length - 1));
