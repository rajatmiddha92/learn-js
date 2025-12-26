// naive sol


class Solution {
    
    solve(arr,n) {
        if(n<=0) return 0
        
        
        return Math.max(arr[n-1] + this.solve(arr,n-2),this.solve(arr,n-1))
    }
    findMaxSum(arr) {
       
         
         let n = arr.length;
         
         return this.solve(arr,n)
         
    }
}

// memoize sol
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    
    solve(arr,n,memo) {
        if(n<=0) return 0
        
        if(memo[n] != -1) return memo[n]
        
        
        return memo[n] = Math.max(arr[n-1] + this.solve(arr,n-2,memo),this.solve(arr,n-1,memo))
    }
    findMaxSum(arr) {
        // code here
         // 4 picked not ppicked
         // n-2 not picket n-1
         // 2 
         
         let n = arr.length;
         
         let memo = Array(n+1).fill(-1)
         
         return this.solve(arr,n,memo)
         
    }
}

//dp sol

class Solution {
    

    findMaxSum(arr) {
        // code here
         // 4 picked not ppicked
         // n-2 not picket n-1
         // 2 
         
         let n = arr.length;
         
         let dp = new Array(n+1).fill(0)
        
       
         
         for(let i = 1; i < n+1; i++){
             dp[i] = Math.max(arr[i-1] + (dp[i-2] ?? 0),dp[i-1])
         }
         
         return dp[n]
         
    }
}
