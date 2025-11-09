// function permute(inp, op) {
//   if (inp.length == 0) {
//     console.log(op);
//     return;
//   }
//   for (let i = 0; i < inp.length; i++) {
//     console.log(inp, i, inp.length - 1);
//     let newStr = inp.slice(0, i) + inp.slice(i + 1, inp.length);
//     let newOp = op + inp[i];
//     console.log(newStr, newOp);
//     permute(newStr, newOp);
//   }
// }

function swap(str, l, r) {
  str = str.split("");

  [str[l], str[r]] = [str[r], str[l]];

  return str.join("");
}

function permute(str, l, r) {
  if (l > r) {
    console.log(str);
    return;
  }
  for (let i = l; i <= r; i++) {
    str = swap(str, i, l);

    permute(str, l + 1, r);

    str = swap(str, i, l);
  }
}

let str = "ABC";
let n = str.length;
permute(str, 0, n - 1);
