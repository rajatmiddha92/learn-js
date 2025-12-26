// naive sol
var uniquePaths = function(m, n) {
    
    if(m == 1 && n == 1) return 1;
    if(m < 1 || n < 1 ) return 0;

    return uniquePaths(m-1,n) +  uniquePaths(m,n-1)
};

// memoize
function solve(m,n,memo){
    if(m == 1 && n == 1) return 1;
    if(m < 1 || n < 1 ) return 0;

    if(memo[m][n] != -1) return memo[m][n]

    return memo[m][n] = uniquePaths(m-1,n,memo) +  uniquePaths(m,n-1,memo)
} 
var uniquePaths = function(m, n) {
    let memo = Array.from({length: m+1},()=>Array(n+1).fill(-1))
    return solve(m,n,memo)
    
};

// dp sol
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */


var uniquePaths = function(m, n) {
    let dp = []
    for(let i = 0 ; i < m+1 ; i++){
        dp[i] = new Array(n+1)
        for(let j = 0 ; j < n+1 ; j++){
            if(i == 0 || j == 0) dp[i][j] = 0
            if(i == 1 || j == 1) dp[i][j] = 1
        }
    }

        for(let i = 2 ; i < m+1 ; i++){
       
        for(let j = 2 ; j < n+1 ; j++){
            dp[i][j] = dp[i-1][j] +  dp[i][j-1]
        }
    }
    return dp[m][n]
    
};