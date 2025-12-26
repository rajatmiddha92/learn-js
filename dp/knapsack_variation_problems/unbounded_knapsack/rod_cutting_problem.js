

// naive sol
class Solution {
    solve(price,n,totalRassi){
        if(totalRassi ===0 || n === 0 ) return 0
        
        if(totalRassi >= n){
            return Math.max(price[n-1] + this.solve(price,n,totalRassi - n),this.solve(price,n-1,totalRassi))
        }
        else{
             return this.solve(price,n-1,totalRassi)
        }
    }
    cutRod(price) {
        // code here
        let totalRassi = price.length;
        let n = price.length;
        
        return this.solve(price,n,totalRassi)
        
    }
}

// memoize sol
class Solution {
    solve(price,n,totalRassi,memo){
        if(totalRassi ===0 || n === 0 ) return 0
        
        if(memo[n][totalRassi] != -1) return memo[n][totalRassi]
        
        if(totalRassi >= n){
            return memo[n][totalRassi] = Math.max(price[n-1] + this.solve(price,n,totalRassi - n,memo),this.solve(price,n-1,totalRassi,memo))
        }
        else{
             return memo[n][totalRassi] = this.solve(price,n-1,totalRassi,memo)
        }
    }
    cutRod(price) {
        // code here
        let totalRassi = price.length;
        let n = price.length;
        let memo = Array.from({length : n+1},()=>Array(totalRassi+1).fill(-1))
        
        return this.solve(price,n,totalRassi,memo)
        
    }
}

// dp sol

// User function Template for javascript
/**
 * @param {number[]} price
 * @returns {number}
 */

class Solution {

    cutRod(price) {
        // code here
        let totalRassi = price.length;
        let n = price.length;
        let dp = []
        for( let  i = 0 ; i < n+1 ; i++){
            dp[i] = new Array(totalRassi+1)
            for(let j = 0 ; j < totalRassi+1 ; j++){
                if(i==0 || j == 0) dp[i][j] = 0
                }
        }
        
           for( let  i = 1 ; i < n+1 ; i++){
           
            for(let j = 1 ; j < totalRassi+1 ; j++){
                  if(j >= i){
               dp[i][j] = Math.max(price[i-1] + dp[i][j - i],dp[i-1][j])
        }
        else{
             dp[i][j] = dp[i-1][j]
        }
                }
        }
        return dp[n][totalRassi]
        
    }
}