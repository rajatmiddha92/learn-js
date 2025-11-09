let arr = [4, 2, 1, 21, 11, 11, 2, 3, 4, 1, 15, 15, 16];
let left = 0,
  right = arr.length - 1;
target = 5;
arr.sort((a, b) => a - b);

// function targetSum(arr, l, r, target) {
//   while (l < r) {
//     if (arr[l] + arr[r] == target) {
//       console.log(l, r);
//       return;
//     } else if (arr[l] + arr[r] > target) {
//       r--;
//     } else {
//       l++;
//     }
//   }
//   console.log("0");
// }

//using recursion
function targetSum(arr, l, r, target) {
  if (l < r) {
    if (arr[l] + arr[r] == target) {
      return [l, r];
    }

    if (arr[r] + arr[l] > target) {
      return targetSum(arr, l, r - 1, target);
    } else {
      return targetSum(arr, l + 1, r, target);
    }
  }

  return 0;
}

//using memo
let memo = {};
function targetSum(arr, l, r, target) {
  if (String(l + r) in memo) return memo[String(l + r)];
  if (l < r) {
    if (arr[l] + arr[r] == target) {
      return [l, r];
    }

    if (arr[r] + arr[l] > target) {
      memo[String(l + r)] = targetSum(arr, l, r - 1, target);
      return memo[String(l + r)];
    } else {
      memo[String(l + r)] = targetSum(arr, l + 1, r, target);
      return memo[String(l + r)];
    }
  }

  return 0;
}

//using dp
