// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */


// naive solution
class Solution {
    
    solve(arr,n,target){
        if(target === 0) return 0;
        
        if(n==0) return target;
        
        
        if(arr[n-1] <= target){
            let inc = this.solve(arr,n-1,target - arr[n-1])
            let exc = this.solve(arr,n-1,target)
            return Math.min(inc,exc)
        }
        return this.solve(arr,n-1,target)
        
    }
    // Function to find minimum difference between any pair of elements in an array.
    minDifference(arr) {
        // your code here
        let n = arr.length;
        
        let totalSum = 0;
        
        for(let i = 0 ; i < n ; i++){
            totalSum += arr[i]
        }
        
        let halfSum = Math.floor(totalSum/2)
        
        let ans = this.solve(arr,n,halfSum)
        
        let rem = halfSum - ans 
        
        let second = totalSum - rem
        
        return Math.abs(second-rem)
    }
}

// memoize solution
// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    
    solve(arr,n,target,memo){
        if(target === 0) return 0;
        
        if(n==0) return target;
        
        if(memo[n][target]!==-1) return memo[n][target]
        
        
        if(arr[n-1] <= target){
            let inc = this.solve(arr,n-1,target - arr[n-1],memo)
            let exc = this.solve(arr,n-1,target,memo)
            return  memo[n][target] = Math.min(inc,exc)
        }
        return memo[n][target]= this.solve(arr,n-1,target,memo)
        
    }
    // Function to find minimum difference between any pair of elements in an array.
    minDifference(arr) {
        // your code here
        let n = arr.length;
        
        let totalSum = 0;
        
        for(let i = 0 ; i < n ; i++){
            totalSum += arr[i]
        }
         let halfSum = Math.floor(totalSum/2)
        
        let memo = Array.from({length : n+1},()=>{
            return Array(halfSum+1).fill(-1)
        })
        
       
        
        let ans = this.solve(arr,n,halfSum,memo)
        
        let rem = halfSum - ans 
        
        let second = totalSum - rem
        
        return Math.abs(second-rem)
    }
}

// dp

// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    

    // Function to find minimum difference between any pair of elements in an array.
    minDifference(arr) {
        // your code here
        let n = arr.length;
        
        let totalSum = 0;
        
        for(let i = 0 ; i < n ; i++){
            totalSum += arr[i]
        }
         let halfSum = Math.floor(totalSum/2)
        
        let dp = []
        for(let  i = 0 ; i < n+1 ; i++){
            dp[i] = new Array(halfSum+1)
            {
                for(let j = 0 ; j < halfSum + 1; j++){
                    if(i==0){
                        dp[i][j] = j
                    }
                    if(j==0){
                        dp[i][j]=0
                    }
                    
                }
            }
        }
        
        for(let i = 1 ; i < n+1 ; i++) {
            for(let j = 1 ; j < halfSum+1 ; j++){
                
                
        if(arr[i-1] <= j){
              dp[i][j] = Math.min(dp[i-1][j - arr[i-1]],dp[i-1][j]);
        }
        else{
          dp[i][j]= dp[i-1][j]
        }
            }
        }
        
     
        let rem = halfSum - dp[n][halfSum]
        
        let second = totalSum - rem
        
        return Math.abs(second-rem)
    }
}