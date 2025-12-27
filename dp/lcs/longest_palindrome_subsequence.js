// naive sol

class Solution {
    lcs(s1,s2,m,n){
        if(m == 0 || n == 0) return 0;
        
        if(s1[m-1] == s2[n-1]){
            return 1 + this.lcs(s1,s2,m-1,n-1)
        }
        else{
            return Math.max(this.lcs(s1,s2,m-1,n),this.lcs(s1,s2,m,n-1))
        }
    }
    longestPalinSubseq(s) {
        // code here
        let s1 = s
        let s2 = s.split("").reverse().join('')
        let m = s1.length, n = s1.length;
        return this.lcs(s1,s2,m,n)
        
    }
}

// memoize sol

class Solution {
    lcs(s1,s2,m,n,cache){
        if(m == 0 || n == 0) return 0;
        
        if(cache[m][n] != -1) return cache[m][n]
        
        if(s1[m-1] == s2[n-1]){
            return  cache[m][n] = 1 + this.lcs(s1,s2,m-1,n-1,cache)
        }
        else{
            return cache[m][n] =  Math.max(this.lcs(s1,s2,m-1,n,cache),this.lcs(s1,s2,m,n-1,cache))
        }
    }
    longestPalinSubseq(s) {
        // code here
        let s1 = s
        let s2 = s.split("").reverse().join('')
        let m = s1.length, n = s1.length;
        let cache = Array.from({length : m+1},()=>Array(m+1).fill(-1))
        return this.lcs(s1,s2,m,n,cache)
        
    }
}


// dp sol

/**
 * @param {string} s
 * @return {number}
 */
class Solution {
    lcs(s1,s2,m,n,cache){
        if(m == 0 || n == 0) return 0;
        
        if(cache[m][n] != -1) return cache[m][n]
        
        if(s1[m-1] == s2[n-1]){
            return  cache[m][n] = 1 + this.lcs(s1,s2,m-1,n-1,cache)
        }
        else{
            return cache[m][n] =  Math.max(this.lcs(s1,s2,m-1,n,cache),this.lcs(s1,s2,m,n-1,cache))
        }
    }
    longestPalinSubseq(s) {
        // code here
        let s1 = s
        let s2 = s.split("").reverse().join('')
        let m = s1.length, n = s1.length;
        let dp = []
        for(let i = 0 ; i < m+1 ; i++ ){
            dp[i] = Array(m+1)
            for(let j = 0 ; j < n+1 ; j++){
                if(i == 0 || j == 0) dp[i][j] = 0 
            }
        }
        for(let i = 1 ; i < m+1 ; i++ ){
           
            for(let j = 1 ; j < n+1 ; j++){
                if(s1[i-1] == s2[j-1]){
           dp[i][j] =  1 + dp[i-1][j-1]
        }
        else{
             dp[i][j] =  Math.max(dp[i-1][j],dp[i][j-1])
        }
            }
        }
        return dp[m][m]
        
    }
}