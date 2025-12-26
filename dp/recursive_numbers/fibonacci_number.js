// niave sol
var fib = function(n) {
    if(n===0 || n===1) return n
    
    return fib(n-1) + fib (n-2)
};

// memo
function solve(n,memo){
    if(n===0 || n===1) return n

    if(memo[n] != -1) return memo[n]
    
    return memo[n] = solve(n-1,memo) + solve(n-2,memo)
}

var fib = function(n) {
    
    let memo = Array.from({length : n + 1}).fill(-1)
    return solve(n,memo)
    
};

// dp
var fib = function(n) {
    
    let dp = Array(n+1)
    dp[0] = 0;
    dp[1] = 1;
    for(let i = 2; i < n + 1; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
    
};