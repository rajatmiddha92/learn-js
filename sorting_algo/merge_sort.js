function mergeTwoArray(nums1, nums2) {
  
  let temp = [],
    i = 0,
    j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] >= nums2[j]) {
      temp.push(nums2[j]);
      j++;
    } else {
      temp.push(nums1[i]);
      i++;
    }
  }
  while (i < nums1.length) {
    temp.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    temp.push(nums2[j]);
    j++;
  }

  return temp;
}

function mergeSort(arr, left, right) {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);
    let leftArray = mergeSort(arr, left, mid);
    let rightArray = mergeSort(arr, mid + 1, right);
    return mergeTwoArray(leftArray, rightArray);
  } else {
    return [arr[left]];
  }
}

let arr = [4,5,7,8,1,2,9,3];
console.log(mergeSort(arr, 0, arr.length - 1));
