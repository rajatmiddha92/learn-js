// naive

function solve(cost,n){
    if(n<=1) return 0 


    return Math.min(cost[n-1] + solve(cost,n-1),cost[n-2] + solve(cost,n-2))
 }
var minCostClimbingStairs = function(cost) {

    
    let n = cost.length;

     return solve(cost,n) 
};

// memoize
/**
 * @param {number[]} cost
 * @return {number}
 */
function solve(cost,n,memo){
    if(n<=1) return 0 
    if(memo[n]!= -1) return memo[n]


    return memo[n] = Math.min(cost[n-1] + solve(cost,n-1,memo),cost[n-2] + solve(cost,n-2,memo))
 }
var minCostClimbingStairs = function(cost) {

    
    let n = cost.length;
     let memo = Array(n+1).fill(-1)

     return solve(cost,n,memo) 
};

// dp

var minCostClimbingStairs = function(cost) {

    
    let n = cost.length;
     let dp = Array(n+1).fill(0)
  
     for(let i = 2; i < n+1;i++){
        dp[i] = Math.min(cost[i-1] + dp[i-1],cost[i-2] + dp[i-2])
     }
     return dp[n]
};