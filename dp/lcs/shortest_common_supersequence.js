
class Solution {
    solve(s1,s2,m,n){
        if(n == 0 || m == 0) return 0;
        
        if(s1[m-1] == s2[n-1]){
            return 1 + this.solve(s1,s2,m-1,n-1)
        }
        else{
            return Math.max(this.solve(s1,s2,m-1,n),this.solve(s1,s2,m,n-1))
        }
    }
    minSuperSeq(s1, s2) {
        // code here
        let m = s1.length;
        let n = s2.length;
        let max = this.solve(s1,s2,m,n)
        return max + (m-max) + (n-max)
    }
}

// memoize

class Solution {
    solve(s1,s2,m,n,memo){
        if(n == 0 || m == 0) return 0;
        
        if(memo[m][n] != -1) return memo[m][n]
        
        if(s1[m-1] == s2[n-1]){
            return memo[m][n] =  1 + this.solve(s1,s2,m-1,n-1,memo)
        }
        else{
            return memo[m][n] = Math.max(this.solve(s1,s2,m-1,n,memo),this.solve(s1,s2,m,n-1,memo))
        }
    }
    minSuperSeq(s1, s2) {
        // code here
        let m = s1.length;
        let n = s2.length;
        let memo = Array.from({length : m+1},()=>Array(n+1).fill(-1))
        let max = this.solve(s1,s2,m,n,memo)
        
        return max + (m-max) + (n-max)
    }
}

// dp sol

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {number}
 */

class Solution {
    solve(s1,s2,m,n,memo){
        if(n == 0 || m == 0) return 0;
        
        if(memo[m][n] != -1) return memo[m][n]
        
        if(s1[m-1] == s2[n-1]){
            return memo[m][n] =  1 + this.solve(s1,s2,m-1,n-1,memo)
        }
        else{
            return memo[m][n] = Math.max(this.solve(s1,s2,m-1,n,memo),this.solve(s1,s2,m,n-1,memo))
        }
    }
    minSuperSeq(s1, s2) {
        // code here
        let m = s1.length;
        let n = s2.length;
        let dp = []
        for(let i = 0 ; i < m+1; i++){
            dp[i] = Array(n+1)
            for(let j = 0 ; j < n+1; j++){
                if(i == 0 || j == 0) dp[i][j] = 0
            }
        }
        
        for(let i = 1 ; i < m+1; i++){
         
            for(let j = 1 ; j < n+1; j++){
   if(s1[i-1] == s2[j-1]){
           dp[i][j] =  1 + dp[i-1][j-1]
        }
        else{
            dp[i][j] =  Math.max(dp[i-1][j],dp[i][j-1])
        }
                
            }
        }
        let max = dp[m][n]
        
        return max + (m-max) + (n-max)
    }
}