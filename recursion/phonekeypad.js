let obj = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};
function solve(arr, res, str, index) {
  if (index == arr.length) {
    res.push(str);
    return;
  }

  for (let val of arr[index]) {
    str += val;
    solve(arr, res, str, index + 1);
    str = str.slice(0, str.length - 1);
  }

  return res;
}

var letterCombinations = function (digits) {
  let arr = [];

  if (!digits) return [];

  for (let val of digits) {
    arr.push(obj[val]);
  }

  let result = [];

  let ans = solve(arr, result, "", 0);

  // console.log(ans,"and")
  return ans;
};

console.log(letterCombinations("5678"));
