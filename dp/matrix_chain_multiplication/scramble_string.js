// leetcode sol still gives tle in memoize sol lmao

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// function solve(s1, s2, memo) {
//   let key = `${s1}-${s2}`;
//   if (key in memo) return memo[key];
//   if (s1 === s2) return (memo[key] = true);
//   // if (s1.length !== s2.length) return memo[key] = false
//   if (s1.length <= 1) return (memo[key] = false);

//   let n = s2.length;
//   for (let i = 1; i < n; i++) {
//     // case 1 swap
//     let conditionOne = solve(s1.substr(0, i), s2.substr(n - i, i), memo);
//     let conditionTwo = solve(s1.substr(i), s2.substr(0, n - i), memo);
//     if (conditionOne && conditionTwo) return (memo[key] = true);

//     // case 2 no swap
//     conditionOne = solve(s1.substr(0, i), s2.substr(0, i), memo);
//     conditionTwo = solve(s1.substr(i), s2.substr(i), memo);

//     if (conditionOne && conditionTwo) return (memo[key] = true);
//   }

//   return (memo[key] = false);
// }
// var isScramble = function (S1, S2) {
//   if (S1 === S2) return true;
//   let memo = {};
//   return solve(S1, S2, memo);
// };

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function solve(s1, s2, memo) {
  let key = `${s1}-${s2}`;
  if (key in memo) return memo[key];
  if (s1 === s2) return (memo[key] = true);
  // if (s1.length !== s2.length) return memo[key] = false
  if (s1.length <= 1) return (memo[key] = false);

  let n = s1.length;
  for (let i = 1; i < n; i++) {
    // case 1 swap

    let conditionOne = solve(s1.substr(0, i), s2.substr(n - i, i), memo);
    console.log(s1.substr(0, i), s2.substr(n - i, i), 'first', conditionOne);

    let conditionTwo = solve(s1.substr(n - i, i), s2.substr(0, n - i), memo);
    console.log(s1.substr(i), s2.substr(0, n - i), 'second', conditionTwo);
    if (conditionOne && conditionTwo) return (memo[key] = true);

    // case 2 no swap
    conditionOne = solve(s1.substr(0, i), s2.substr(0, i), memo);
    conditionTwo = solve(s1.substr(i, n - i), s2.substr(i, n - i), memo);

    if (conditionOne && conditionTwo) return (memo[key] = true);
  }

  return (memo[key] = false);
}
var isScramble = function (S1, S2) {
  if (S1 === S2) return true;
  let memo = {};
  return solve(S1, S2, memo);
};

// var isScramble = function(s1, s2) {

//   let i = 0
//   let j = 0
//   return solve(s1,s2,i,j)

// };

let s1 = 'great',
  s2 = 'rgeat';
console.log(isScramble(s1, s2));

// optimize leet code working solution
function solve(s1, s2, memo) {
  let key = `${s1}-${s2}`;
  if (key in memo) return memo[key];
  if (s1 === s2) return (memo[key] = true);
  if (s1.length <= 1) return (memo[key] = false);

  // optimization to only call if char count is same on both strings
  let arr = Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    arr[s1[i].charCodeAt() - 97]++;
    arr[s2[i].charCodeAt() - 97]--;
  }
  let checkNotAllZero = arr.some((item) => item != 0);
  // it means count of char is not equal so not making sense to check further
  if (checkNotAllZero) return (memo[key] = false);

  let n = s2.length;
  for (let i = 1; i < n; i++) {
    // case 1 swap
    let conditionOne = solve(s1.substr(0, i), s2.substr(n - i), memo);
    let conditionTwo = solve(s1.substr(i), s2.substr(0, n - i), memo);
    if (conditionOne && conditionTwo) return (memo[key] = true);

    // case 2 no swap
    conditionOne = solve(s1.substr(0, i), s2.substr(0, i), memo);
    conditionTwo = solve(s1.substr(i), s2.substr(i), memo);

    if (conditionOne && conditionTwo) return (memo[key] = true);
  }

  return (memo[key] = false);
}
var isScramble = function (S1, S2) {
  if (S1 === S2) return true;
  let memo = {};
  return solve(S1, S2, memo);
};
