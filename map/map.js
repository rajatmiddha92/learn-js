let count = new Map();

let arr = [10, 12, 10, 22, 1, 3, 22, 10, 4, 4];
//calculate count/occurenece of evry element
for (let data of arr) {
  if (count.has(data)) {
    count.set(data, count.get(data) + 1);
  } else {
    count.set(data, 1);
  }
}
console.log(count);
