// naive sol
/**
 * @param {number[]} coins
 * @param {number} sum
 * @returns {number}
 */

class Solution {
    
    solve(coins,n,sum){
        
            if(sum == 0) return 0;
            if(sum < 0 || n === 0) return Infinity;
        
        
            if(sum >= coins[n-1]){
                return Math.min(1 + this.solve(coins,n,sum-coins[n-1]),
                this.solve(coins,n-1,sum))
            }
            else{
                return this.solve(coins,n-1,sum)
            }
    }

    minCoins(coins, sum) {
        // your code here
        let n = coins.length;
        
        let ans = this.solve(coins,n,sum)
        
        return ans === Infinity ? -1 : ans
    }
}

// memoize 

/**
 * @param {number[]} coins
 * @param {number} sum
 * @returns {number}
 */

class Solution {
    
    solve(coins,n,sum,memo){
        
            if(sum == 0) return 0;
            if(sum < 0 || n === 0) return Infinity;
            
            if(memo[n][sum] != -1) return memo[n][sum]
        
        
            if(sum >= coins[n-1]){
                return memo[n][sum] = Math.min(1 + this.solve(coins,n,sum-coins[n-1],memo),
                this.solve(coins,n-1,sum,memo))
            }
            else{
                return memo[n][sum] = this.solve(coins,n-1,sum,memo)
            }
    }

    minCoins(coins, sum) {
        // your code here
        let n = coins.length;
        
        let memo = Array.from({length: n+1 },()=>Array(sum+1).fill(-1))
        let ans = this.solve(coins,n,sum,memo)
        
        return ans === Infinity ? -1 : ans
    }
}

// dp solution
/**
 * @param {number[]} coins
 * @param {number} sum
 * @returns {number}
 */

class Solution {


    minCoins(coins, sum) {
        // your code here
        let n = coins.length;
        
        let dp = []
        for(let i = 0 ; i < n + 1; i++){
            dp[i] = new Array(sum+1)
            for(let j = 0; j < sum + 1;j++){
                if(i===0) dp[i][j] = Infinity;
                if(j === 0) dp[i][j] = 0
            }
        }
        
        for(let i = 1 ; i < n + 1; i++){
         
            for(let j = 1; j < sum + 1;j++){
                
                 if(j >= coins[i-1]){
               dp[i][j] = Math.min(1 + dp[i][j-coins[i-1]],
                dp[i-1][j])
            }
            else{
                 dp[i][j] = dp[i-1][j]
            }
                
            }
        }
     
        
        return dp[n][sum] === Infinity ? -1 : dp[n][sum]
    }
}