/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */

// naive solution
class Solution {
    
    cntZero(arr,n){
        let ct = 0
        for(let i = 0; i < n; i++){
            if(arr[i] === 0) ct ++
        }
        
        return ct;
    }
    
    solve(arr,target,n){
        if(target === 0 ){
            let countZero = this.cntZero(arr,n)
            return 2 ** countZero
        }
        if(n==0 || target < 0) return 0
        
        return this.solve(arr,target-arr[n-1],n-1) + this.solve(arr,target,n-1)
    }
    perfectSum(arr, target) {
        // code here
        let n = arr.length
        return this.solve(arr,target,n)
    }
}

// memoization
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */

class Solution {
    
    cntZero(arr,n){
        let ct = 0
        for(let i = 0; i < n; i++){
            if(arr[i] === 0) ct ++
        }
        
        return ct;
    }
    
    solve(arr,target,n,memo){
        if(target === 0 ){
            let countZero = this.cntZero(arr,n)
            return 2 ** countZero
        }
        if(n==0 || target < 0) return 0
        
        if(memo[n][target] != -1) return memo[n][target]
        
        return memo[n][target] = this.solve(arr,target-arr[n-1],n-1,memo) + this.solve(arr,target,n-1,memo)
    }
    perfectSum(arr, target) {
        // code here
        let n = arr.length
        let memo = []
        for(let i = 0 ; i < n+1 ; i++){
            memo[i] = []
            for(let j = 0 ; j < target + 1 ; j++){
                memo[i].push(-1)
            }
        }
        return this.solve(arr,target,n,memo)
    }
}

// dp solution
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */

class Solution {
    
    cntZero(arr,n){
        let ct = 0
        for(let i = 0; i < n; i++){
            if(arr[i] === 0) ct ++
        }
        
        return ct;
    }
    
    perfectSum(arr, target) {
        // code here
        let n = arr.length
        let dp = []
        for(let i = 0 ; i < n+1 ; i++){
            dp[i] = new Array(target + 1)
            for(let j = 0 ; j < target + 1 ; j++){
                if(i==0 ) {
                    dp[i][j] = 0
                }
                if(j == 0){
                    dp[i][j] = 2 ** this.cntZero(arr,i)
                }
            }
        }
        for(let  i = 1 ; i < n+1 ; i++){
            for(let j = 1 ; j < target + 1 ; j++){
                 if(j >= arr[i-1]){
                 dp[i][j] = dp[i-1][j-arr[i-1]] + dp[i-1][j]
              }
              else{
                dp[i][j] = dp[i-1][j]
              }
            }
        }
    
        return dp[n][target]
    }
}