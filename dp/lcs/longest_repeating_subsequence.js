
class Solution {
    solve(str1,str2,n1,n2){
    if(n1 == 0 || n2 == 0) return 0;

    if(str1[n1-1] == str2[n2-1] && n1!=n2){
        return 1 + this.solve(str1,str2,n1-1,n2-1)
    }
    else{
        return Math.max(this.solve(str1,str2,n1-1,n2),this.solve(str1,str2,n1,n2-1))
    }

} 
    LongestRepeatingSubsequence(s) {
        // code here
        
    let n1 = s.length
    let n2 = s.length
    return this.solve(s,s,n1,n2)
    }
}


// memoize 

class Solution {
    solve(str1,str2,n1,n2,memo){
    if(n1 == 0 || n2 == 0) return 0;
    if(memo[n1][n2] != -1) return memo[n1][n2]

    if(str1[n1-1] == str2[n2-1] && n1!=n2){
        return memo[n1][n2] =  1 + this.solve(str1,str2,n1-1,n2-1,memo)
    }
    else{
        return memo[n1][n2] = Math.max(this.solve(str1,str2,n1-1,n2,memo),this.solve(str1,str2,n1,n2-1,memo))
    }

} 
    LongestRepeatingSubsequence(s) {
        // code here
        
    let n1 = s.length
    let n2 = s.length
    let memo = Array.from({length : n1+1},()=>Array(n1+1).fill(-1))
    return this.solve(s,s,n1,n2,memo)
    }
}


// dp solution

// User function Template for javascript

/**
 * @param {string} str
 * @returns {number}
 */

class Solution {
    solve(str1,str2,n1,n2,memo){
    if(n1 == 0 || n2 == 0) return 0;
    if(memo[n1][n2] != -1) return memo[n1][n2]

    if(str1[n1-1] == str2[n2-1] && n1!=n2){
        return memo[n1][n2] =  1 + this.solve(str1,str2,n1-1,n2-1,memo)
    }
    else{
        return memo[n1][n2] = Math.max(this.solve(str1,str2,n1-1,n2,memo),this.solve(str1,str2,n1,n2-1,memo))
    }

} 
    LongestRepeatingSubsequence(s) {
        // code here
        
    let n1 = s.length
    let n2 = s.length
    let dp = []
    for(let i = 0 ; i < n1+1 ; i++){
        dp[i] = Array(n1+1)
        for(let j = 0 ; j < n2+1 ; j++){
            if(i == 0 || j == 0){
                dp[i][j]=0;
            }
        }
    }
    
        for(let i = 1 ; i < n1+1 ; i++){
       
        for(let j = 1 ; j < n2+1 ; j++){
           if(s[i-1] == s[j-1] && i!=j){
         dp[i][j] =  1 + dp[i-1][j-1]
    }
    else{
        dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
    }
        }
    }
    
    return dp[n1][n2]
    }
}
