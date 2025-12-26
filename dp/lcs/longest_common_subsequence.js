// naive
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
function solve(str1,str2,n1,n2){
    if(n1 == 0 || n2 == 0) return 0;

    if(str1[n1-1] == str2[n2-1]){
        return 1 + solve(str1,str2,n1-1,n2-1)
    }
    else{
        return Math.max(solve(str1,str2,n1-1,n2),solve(str1,str2,n1,n2-1))
    }

} 
var longestCommonSubsequence = function(text1, text2) {
    
    let n1 = text1.length
    let n2 = text2.length
    return solve(text1,text2,n1,n2)
};

// memoize

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
function solve(str1,str2,n1,n2,memo){
    if(n1 == 0 || n2 == 0) return 0;

    if(memo[n1][n2] != -1) return memo[n1][n2]

    if(str1[n1-1] == str2[n2-1]){
        return memo[n1][n2] = 1 + solve(str1,str2,n1-1,n2-1,memo)
    }
    else{
        return memo[n1][n2] = Math.max(solve(str1,str2,n1-1,n2,memo),solve(str1,str2,n1,n2-1,memo))
    }

} 
var longestCommonSubsequence = function(text1, text2) {
    
    let n1 = text1.length
    let n2 = text2.length
    let memo = Array.from({length : n1+1 },()=>Array(n2+1).fill(-1))
    return solve(text1,text2,n1,n2,memo)
};

// dp sol
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

var longestCommonSubsequence = function(text1, text2) {
    
    let n1 = text1.length
    let n2 = text2.length
    let dp = []
    for(let  i = 0 ; i < n1 + 1; i++){
        dp[i] = Array(n2+1)
        for(let  j = 0 ; j < n2 + 1; j++){
            if(i==0 || j == 0) dp[i][j]=0
        }
    }
      for(let  i = 1 ; i < n1 + 1; i++){
      
        for(let  j = 1; j < n2 + 1; j++){
             
              if(text1[i-1] == text2[j-1]){
           dp[i][j] = 1 + dp[i-1][j-1]
    }
    else{
        dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
    }

        }
    }
    return dp[n1][n2]
};