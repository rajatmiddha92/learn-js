//1
// function testone(a, b, c, ...test) {
//   console.log(test.length);
// }
// testone(1, 2);
// testone(1, 2, 3, 4, 5);

//2
// function testtwo(a, b, c) {
//   console.log(arguments[0], arguments[1]);
// }

// testtwo(1,2,3);

// 3
// function testThree(a,b,...[,d , e]) {
//   return d + e;
// }

// console.log(testThree(1, 2, 3, 4, 5));

//4
// let a = Array(5).fill(5);
// a.length = 10;
// console.log(a);

//5
// let count = 0

// let testfive = (function(){
//   if(count==0){
//     count+=1
//   }
//   return function (){
//     count+=1
//     console.log(count)
//   }
// })()

// testfive()
// testfive()
// testfive()

//6
// let obj = {
//   value:10,
//   increment(){
//     return this.value++
//   }
// }

// console.log(obj.increment())
// console.log(obj.increment())
// console.log(obj.value)

//7
// const parent = {role:"Admin"};
// const user = Object.create(parent);
// // it will create new object with sepcified protoytpe
// user.age =28;
// user.name= "Ajay"
// console.log(Object.keys(user));

//8
// let count = 0
// console.log(count++,++count,count,count++)

//9
// const set = new Set()
// let obj = {key:"value"}
// set.add(obj)
// set.add({key:"value"})
// set.add(obj)
// console.log(set.size)

//10
// let arr = [3, 4, 8, 2, 5, 1, 9, 6];
// function guessOp(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     setTimeout(() => {
//       console.log(arr[i]);
//     }, arr[i]);
//   }
// }

// guessOp(arr);

//11
// console.log(1)
// Promise.resolve(5).then(val => console.log("some"))
// Promise.resolve(5).then(val => console.log("some1"))
// Promise.resolve(5).then(val => console.log("some2"))
// Promise.resolve(5).then(val => {
//   setTimeout(function() {
//   console.log('some 7')
// }, 0);
// })
// setTimeout(function() {
//   console.log('some 6')
// }, 0);
// console.log(7)

// 12
// const obj1 = {a:0, b:{c:0}};
// const obj2 = Object.assign({}, obj1);
// obj2.b.c = 1;
// console.log({obj1, obj2});
// // {a:0, b:{c:1}} {a:0, b:{c:1}}
// obj2.a = 1;
// console.log({obj1, obj2});
// // {a:0, b:{c:1}} {a:1, b:{c:1}}

// let obj = {
//   name:"Rajat"
// }

// let obj3 = obj;

// obj3.name = "Akshay"


// 13

// var arr1 = "john".split(''); 
// var arr2 = arr1.reverse(); 
// var arr3 = "jones".split(''); 
// arr2.push(arr3); 
// console.log(arr1)
// console.log("array 1: length=" + arr1.length + " Result1=" + arr1.slice(-1));  
// console.log("array 2: length=" + arr2.length + " Result2=" + arr2.slice(-1)); 


// 14

// console.log(function some(n){return n>1 ? n*some(n-1):1}(5)) })


// // 15
// function something(arr, d) {
//  if(d==0) return arr
//     for (let i = 0; i < d; i++) {
//         let last = arr.pop();      
//         arr.unshift(last);        
//     }
// }
// what this function will do if arr is [4,11,222,9] and d is 5 ?


