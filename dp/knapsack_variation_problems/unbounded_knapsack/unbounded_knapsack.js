/**
 * @param {number[]} val
 * @param {number[]} wt
 * @param {number} capacity
 * @return {number}
 */
// naive sol

class Solution {
    solve(val,wt,n,capacity){
        if(capacity === 0 || n===0) return 0
        
        if(capacity >= wt[n-1]){
            return  Math.max(val[n-1] + this.solve(val,wt,n,capacity - wt[n-1]),this.solve(val,wt,n-1,capacity-wt[n-1]),this.solve(val,wt,n-1,capacity))
        }
        else{
            return this.solve(val,wt,n-1,capacity)
        }
    }
    knapSack(val, wt, capacity) {
        // code here
        let n = val.length
        
        return this.solve(val,wt,n,capacity)
    }
}

// memoize sol
/**
 * @param {number[]} val
 * @param {number[]} wt
 * @param {number} capacity
 * @return {number}
 */

class Solution {
    solve(val,wt,n,capacity,memo){
        if(capacity === 0 || n===0) return 0
        
        if(memo[n][capacity] != -1) return memo[n][capacity]
        if(capacity >= wt[n-1]){
            return memo[n][capacity] = Math.max(val[n-1] + this.solve(val,wt,n,capacity - wt[n-1],memo),this.solve(val,wt,n-1,capacity-wt[n-1],memo),this.solve(val,wt,n-1,capacity,memo))
        }
        else{
            return memo[n][capacity] = this.solve(val,wt,n-1,capacity,memo)
        }
    }
    knapSack(val, wt, capacity) {
        // code here
        let n = val.length
        
        let memo = Array.from({ length : n+1 },()=>Array(capacity+1).fill(-1))
        return this.solve(val,wt,n,capacity,memo)
    }
}

// dp solution
/**
 * @param {number[]} val
 * @param {number[]} wt
 * @param {number} capacity
 * @return {number}
 */

class Solution {

    knapSack(val, wt, capacity) {
        // code here
        let n = val.length
        
        let dp = []
        for(let i = 0 ; i < n+1 ; i++){
            dp[i] = new Array(capacity+1)
            for(let j = 0 ; j < capacity+1 ; j++){
                if(i==0 || j==0) dp[i][j] = 0
            }
        }
        for(let i = 1 ; i < n+1 ; i++){
          
            for(let j = 1 ; j < capacity+1 ; j++){

        if(j >= wt[i-1]){
            dp[i][j] = Math.max(val[i-1] + dp[i][j - wt[i-1]],dp[i-1][j-wt[i-1]],dp[i-1][j])
        }
        else{
           dp[i][j] = dp[i-1][j]
        }
            }
        }
        return dp[n][capacity]
    }
}