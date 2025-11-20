// console.log("Hello World");

// first
// function curry(a){
//     return function(b){
//       return a+b
//     }
//   }
  
//   let ans = curry(10)
//   console.log(ans)
//   let anstwo = ans(1)
//   console.log(anstwo)
  

// second
// function currying (a){
//     return function(b){
//       return function(c){
//         return a*b*c
//       }
//     }
//   }
  
//   let anthree = currying(10)
//   console.log(anthree,"one")
//   let anfour = anthree(20)
//   console.log(anfour,"two")
//   let amfive = anfour(30)

// let amfive = currying(10)(20)(30)
//   console.log(amfive,"three")

// third

// let curring = a => b => c => a*b*c
// let anthree = curring(10)
// console.log(anthree,"one")
// // b => c =>a*b*c
// let anfour = anthree(20)
// console.log(anfour,"two")
// //c =>a*b*c
// let amfive = anfour(30)
// console.log(amfive,"three")
// let ans = curring(10)(20)(30)
// console.log(ans,"four")

// fourth

// function infiniteCurrying(a){
//     return function some(b){
//       if(b){
//         return infiniteCurrying(a+b)
//       }
//       else return a
      
//     }
//   }
  
//   let ans = infiniteCurrying(10)

//   console.log(ans,"ans")

//   let ans2  =  ans(9)
//   console.log(ans2,"ans2")

//   let ans3 = ans2(8)
//   console.log(ans3,"ans3")
//   let ans4 = ans3()
//   console.log(ans4,"ans4")

// fifth

// function curry(fn) {
//     console.log(fn,"muy")
//     return function curried(...args) {
      
//       // length is 1 
//       console.log(fn,"len",fn.length)
//       // finction.length return no of args function is having
//       if (args.length >= fn.length) {
//         return fn(...args);
//       } else {
//         return (...next) => 
//         {
//           console.log(next,"next")
//           return curried(...args, ...next);
//         }
//       }
//     };
//   }
  
//   function multiply(a, b, c,d) {
//     return a * b * c *d;
//   }
  
  
//   const curriedMultiply = curry(multiply);
//   console.log(curriedMultiply,"test")
//   curriedMultiply(2)(3,4)(4)
  
  
  
  // console.log(curriedMultiply(2)(3)(4)); 
  // console.log(curriedMultiply(2, 3)(4));


  // bfe question
//   function curry(fn) {
//     return function some(...args){
//         if(args.length >= fn.length){
//            return fn(...args)
//         }
//         else{
//             return (...next)=> some(...args,...next)
//         }
//     }
//  }
 
 
//  const join = (a, b, c) => {
//     return `${a}_${b}_${c}`
//  }
//  const curriedJoin = curry(join)
//  let a = curriedJoin(1, 2, 3) // '1_2_3'
//  let b = curriedJoin(1)(2, 3) // '1_2_3'
//  let c = curriedJoin(1, 2)(3) 

//  console.log(a,b,c)