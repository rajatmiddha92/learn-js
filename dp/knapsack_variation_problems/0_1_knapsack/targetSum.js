/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// naive solution
function solve(arr,n,sum){

    if(n === 0 ){
        if(sum === 0) return 1
        return 0
    }

        return solve(arr,n-1,sum-arr[n-1]) + solve(arr,n-1,sum+arr[n-1])
    
}

var findTargetSumWays = function(nums, target) {
    
    let n = nums.length

    return solve(nums,n,target)
};

// naive solution
// using 2 subset approach

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function countZero(arr,n){
    let c = 0
    for(let i = 0 ; i < n ; i++){
        if(arr[i]==0) c++
    }
    return c
}
function solve(arr,n,sum){
    if(sum == 0) {
        return 2**countZero(arr,n)
    }
    if(n==0) return 0

    if(sum >= arr[n-1]){
        return solve(arr,n-1,sum-arr[n-1]) + solve(arr,n-1,sum)
    }
    else{
        return solve(arr,n-1,sum)
    }
}
var findTargetSumWays = function(nums, target) {
   let n = nums.length;

   let total = 0

   for(let i = 0 ; i < n ; i++){
     total += nums[i]
   }   

   let sum = (target + total)/2

   return solve(nums,n,sum)
};

// memo sol
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function countZero(arr,n){
    let c = 0
    for(let i = 0 ; i < n ; i++){
        if(arr[i]==0) c++
    }
    return c
}
function solve(arr,n,sum,memo){
    if(sum == 0) {
        return 2**countZero(arr,n)
    }
    if(n==0) return 0

    if(memo[n][sum] != -1) return memo[n][sum]

    if(sum >= arr[n-1]){
        return memo[n][sum] = solve(arr,n-1,sum-arr[n-1],memo) + solve(arr,n-1,sum,memo)
    }
    else{
        return memo[n][sum] = solve(arr,n-1,sum,memo)
    }
}
var findTargetSumWays = function(nums, target) {
   let n = nums.length;

   let total = 0

   for(let i = 0 ; i < n ; i++){
     total += nums[i]
   }   
   
   if((target+total) % 2 != 0) return 0
   let sum = (target + total)/2
   if(sum < 0) return 0
   let memo = Array.from({length :n+1},()=> Array(Math.ceil(sum)+1).fill(-1))

   return solve(nums,n,sum,memo)
};


// dp solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function countZero(arr,n){
    let c = 0
    for(let i = 0 ; i < n ; i++){
        if(arr[i]==0) c++
    }
    return c
}

var findTargetSumWays = function(nums, target) {
   let n = nums.length;

   let total = 0

   for(let i = 0 ; i < n ; i++){
     total += nums[i]
   }   
   
   if((target+total) % 2 != 0) return 0
   let sum = (target + total)/2
   if(sum < 0) return 0
   let dp = []
   for (let i = 0 ; i < n+1; i++){
    dp[i] = new Array(sum+1)
    
        for(let j = 0 ; j < sum+1 ; j++ ){
            if(i==0){
                dp[i][j] = 0;
            }
            if(j == 0){
                dp[i][j] = 2**countZero(nums,i)
            }
        }
    
   }
   

    for (let i = 1 ; i < n+1; i++){
    
        for(let j = 1 ; j < sum+1 ; j++ ){
             if(j >= nums[i-1]){
           dp[i][j] = dp[i-1][j-nums[i-1]] + dp[i-1][j]
             }
           else{
             dp[i][j] = dp[i-1][j]
            }
        }
    
   }
   
   return dp[n][sum]
};