// function knapsack(arr, weight, W, n) {
//   if (W == 0 || n == 0) return 0;
//   if (weight[n] > W) {
//     return knapsack(arr, weight, W, n - 1);
//   } else {
//     return Math.max(
//       arr[n] + knapsack(arr, weight, W - weight[n], n - 1),
//       knapsack(arr, weight, W, n - 1)
//     );
//   }
// }

// let item = [1, 3, 4, 5],
//   weight = [1, 4, 5, 7],
//   w = 7;
// let length = item.length - 1;
// console.log(knapsack(item, weight, w, length));

// let item = [1, 3, 4, 5],
//   weight = [1, 4, 5, 7],
//   w = 7;
// let length = item.length - 1;
//in creating dp fot this row = n+1 col=w+1
// let dp = new Array(item.length+1).fill(0).map(() => new Array(w + 1).fill(-1));

// function knapsack(arr, weight, W, n) {

//   if (W == 0 || n == 0) return 0;
//   if (dp[n][W] != -1) {
//     return dp[n][W];
//   }
//   if (weight[n] > W) {

//     return (dp[n][W] = knapsack(arr, weight, W, n - 1));
//   } else {

//     return (dp[n][W] = Math.max(
//       arr[n] + knapsack(arr, weight, W - weight[n], n - 1),
//       knapsack(arr, weight, W, n - 1)
//     ));
//   }
// }

// function knapsack(arr, weight, W, n) {
//   if (W == 0 || n == 0) return 0;

//   let dp = new Array(item.length).fill().map(() => new Array(w + 1).fill(-1));
//   for (let i = 0; i < dp.length; i++) {
//     dp[i][0] = 0;
//   }
//   for (let i = 0; i < dp[0].length; i++) {
//     dp[0][i] = 0;
//   }
//   console.log(dp);

  // if (weight[n] > W) {
  //   // console.log(n, W, "cal");
  //   return (dp[n][W] = knapsack(arr, weight, W, n - 1));
  // } else {
  //   // console.log(n, W, "cal");
  //   return (dp[n][W] = Math.max(
  //     arr[n] + knapsack(arr, weight, W - weight[n], n - 1),
  //     knapsack(arr, weight, W, n - 1)
  //   ));
  // }
// }
// console.log(knapsack(item, weight, w, length));
// console.log(dp);


// function knapsack(W,profit,capacity,size,n){
  
//     if(size == n) return 0;
    
    
//     if(capacity - W[n] >= 0){
//       let include = profit[n] + knapsack(W,profit,capacity-W[n],size,n+1)
//       let exclude = knapsack(W,profit,capacity,size,n+1)
      
//       let max = Math.max(include,exclude)
      
//       return max;
//     }
    
//     else
//     {
//       let ans =  knapsack(W,profit,capacity,size,n+1)
      
//       return ans;
//     }
//   }
  
//   let capacity = 7
//   let W = [1,3,4,5]
//   let profit = [1,4,5,7]
//   let size = profit.length;
//   let n = 0
//   console.log(knapsack(W,profit,capacity,size,n))


  // memoization

//   function knapsack(W,profit,capacity,size,n,memo){
  
//     if(size == n) return 0;
  
//     let key = capacity + ',' + n;
//     if (key in memo) return memo[key];
    
//     if(capacity - W[n] >= 0){
  
    
//       let include = profit[n] +  knapsack(W,profit,capacity-W[n],size,n+1,memo)
      
  
//       let exclude = knapsack(W,profit,capacity,size,n+1,memo)
      
//       let max = Math.max(include,exclude)
      
//       return memo[key]= max;
//     }
    
//     else
//     {
//       let ans = knapsack(W,profit,capacity,size,n+1,memo)
      
//       return memo[key]= ans;
//     }
//   }


// 0 - 1 Knapsack Problem
// Difficulty: MediumAccuracy: 31.76%Submissions: 510K+Points: 4
// Given n items, each with a specific weight and value, and a knapsack with a capacity of W, the task is to put the items in the knapsack such that the sum of weights of the items <= W and the sum of values associated with them is maximized. 

// Note: You can either place an item entirely in the bag or leave it out entirely. Also, each item is available in single quantity.

// Examples :

// Input: W = 4, val[] = [1, 2, 3], wt[] = [4, 5, 1] 
// Output: 3
// Explanation: Choose the last item, which weighs 1 unit and has a value of 3.
// Input: W = 3, val[] = [1, 2, 3], wt[] = [4, 5, 6] 
// Output: 0
// Explanation: Every item has a weight exceeding the knapsack's capacity (3).
// Input: W = 5, val[] = [10, 40, 30, 50], wt[] = [5, 4, 2, 3] 
// Output: 80
// Explanation: Choose the third item (value 30, weight 2) and the last item (value 50, weight 3) for a total value of 80.
// Constraints:
// 2 ≤ val.size() = wt.size() ≤ 103
// 1 ≤ W ≤ 103
// 1 ≤ val[i] ≤ 103
// 1 ≤ wt[i] ≤ 103

// class Solution {
//     zeroOneknapsack(W, profit, capacity, n) {
//       let dp = new Array(n + 1)
//         .fill()
//         .map((_data, index) => Array(capacity + 1).fill(0));
  
//       for (let i = 0; i < n; i++) {
//         for (let j = 0; j <= capacity; j++) {
//           if (j - W[i] >= 0) {
//             let inc = profit[i] + dp[i][j - W[i]];
//             let exc = dp[i][j];
  
//             dp[i + 1][j] = Math.max(inc, exc);
//           } else {
//             dp[i + 1][j] = dp[i][j];
//           }
//         }
//       }
//       return dp[n][capacity];
//     }
  
//     knapsack(W, val, wt) {
//       // code here
//       let capacity = W;
//       let item = wt;
//       let profit = val;
//       let size = profit.length;
  
//       return this.zeroOneknapsack(item, profit, capacity, size);
//     }
//   }
  

// function knapsack(W, profit, capacity, n) {
//     if (n < 0) return 0;
  
//     if (capacity - W[n] >= 0) {
//       let inc = profit[n] + knapsack(W, profit, capacity - W[n], n - 1);
//       let exc = knapsack(W, profit, capacity, n - 1);
  
//       let max = Math.max(inc, exc);
  
//       return max;
//     } else {
//       let ans = knapsack(W, profit, capacity, n - 1);
  
//       return ans;
//     }
//   }
// function knapsack(W, profit, capacity, n) {
//     let dp = new Array(n + 1)
//       .fill()
//       .map((_data, index) => Array(capacity + 1).fill(0));
  
//     for (let i = 1; i < n + 1; i++) {
//       for (let j = 1; j < capacity + 1; j++) {
//         if (j - W[i - 1] >= 0) {
//           let inc = profit[i - 1] + dp[i - 1][j - W[i - 1]];
//           let exc = dp[i - 1][j];
  
//           dp[i][j] = Math.max(inc, exc);
//         } else {
//           dp[i][j] = dp[i - 1][j];
//         }
//       }
//     }
//     console.log(dp);
//     return dp[n][capacity];
//   }


// function knapsack(wt,val,capacity,n){
//   if(n==0 || capacity == 0){
//     return 0;
//   }
  
//    if(wt[n-1] <= capacity){
//      return Math.max(val[n-1]+knapsack(wt,val,capacity-wt[n-1],n-1),knapsack(wt,val,capacity,n-1))
//    }
//    return knapsack(wt,val,capacity,n-1)
// }

// let wt = [1,3,4,5]
// let val = [1,4,5,7]
// let capacity = 7
// let n = wt.length
// let ans = knapsack(wt,val,capacity,n)
// console.log(ans)

function knapsack(wt,val,capacity,n,cache){
  if(n==0 || capacity == 0){
    return 0;
  }
  // console.log(capacity,n-1)
  if(cache[n][capacity] != -1){
    return cache[n][capacity]
  }

   if(wt[n-1] <= capacity){
     return cache[n][capacity] = Math.max(val[n-1]+knapsack(wt,val,capacity-wt[n-1],n-1,cache),knapsack(wt,val,capacity,n-1,cache))
   }
   return cache[n][capacity] = knapsack(wt,val,capacity,n-1,cache)
}

let wt = [1,3,4,5]
let val = [1,4,5,7]
let capacity = 7
let n = wt.length
let cache = []
for(let i = 0; i <= n ; i ++ ){
  cache[i] = []
  for(let j= 0 ; j <= capacity ; j++ ){
    cache[i].push(-1)
  }
}

let ans = knapsack(wt,val,capacity,n,cache)
console.log(ans)