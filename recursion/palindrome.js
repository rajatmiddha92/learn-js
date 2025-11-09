let str = ["a", "b", "c", "d", "b", "a"];

let start = 0,
  end = str.length - 1,
  length = str.length;

function palindrome(str, l, r, n) {
  if (n == 0 || n == 1) return true;
  if (l < r) {
    if (str[l] == str[r]) {
      return palindrome(str, l + 1, r - 1, n - 2);
    } else {
      return false;
    }
  }
}

console.log(palindrome(str, start, end, length));
