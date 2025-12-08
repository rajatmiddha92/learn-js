

// naive sol
class Solution {
    /**

    * @param number d
    * @param number[] arr

    * @returns number
    */
    countZero(arr,n){
        let ct = 0 
        for(let i =0 ; i < n ; i++){
            if(arr[i]===0) ct++
        }
        return ct
    }
    
    solve(arr,n,sum){
        if(sum === 0){
            return 2**this.countZero(arr,n)
        }
        if(n==0) return 0;
        
        if(sum >= arr[n-1]){
            return this.solve(arr,n-1,sum-arr[n-1]) + this.solve(arr,n-1,sum)
        }
        else{
            return this.solve(arr,n-1,sum)
        }
    }
    countPartitions(arr, d) {
        // code here
        let n = arr.length;
        
        let total = 0;
        
        for(let i = 0 ; i < n ; i++ ){
            total += arr[i]
        }
        
        let half = Math.floor(total/2)
        
        let req;
        for(let i = 0; i <= half ; i++){
            if(total - (2*i) === d){
                req = i
            }
        }
        if(req===undefined) return 0
        
        return this.solve(arr,n,req)
    }
}

// memoize

class Solution {
    /**

    * @param number d
    * @param number[] arr

    * @returns number
    */
    countZero(arr,n){
        let ct = 0 
        for(let i =0 ; i < n ; i++){
            if(arr[i]===0) ct++
        }
        return ct
    }
    
    solve(arr,n,sum,memo){
        if(sum === 0){
            return 2**this.countZero(arr,n)
        }
        if(n==0) return 0;
        
        if(memo[n][sum] != -1) return memo[n][sum]
        
        if(sum >= arr[n-1]){
            return memo[n][sum] = this.solve(arr,n-1,sum-arr[n-1],memo) + this.solve(arr,n-1,sum,memo)
        }
        else{
            return memo[n][sum] = this.solve(arr,n-1,sum,memo)
        }
    }
    countPartitions(arr, d) {
        // code here
        let n = arr.length;
        
        let total = 0;
        
        for(let i = 0 ; i < n ; i++ ){
            total += arr[i]
        }
        
        let half = Math.floor(total/2)
        
        let req;
        for(let i = 0; i <= half ; i++){
            if(total - (2*i) === d){
                req = i
            }
        }
        if(req==undefined) return 0
        let memo = Array.from({ length : n+1 },()=>Array(req+1).fill(-1))
        
        return this.solve(arr,n,req,memo)
    }
}


// dp solution

class Solution {
    /**

    * @param number d
    * @param number[] arr

    * @returns number
    */
    countZero(arr,n){
        let ct = 0 
        for(let i =0 ; i < n ; i++){
            if(arr[i]===0) ct++
        }
        return ct
    }
    
   
    countPartitions(arr, d) {
        // code here
        let n = arr.length;
        
        let total = 0;
        
        for(let i = 0 ; i < n ; i++ ){
            total += arr[i]
        }
        
        let half = Math.floor(total/2)
        
        let req;
        for(let i = 0; i <= half ; i++){
            if(total - (2*i) === d){
                req = i
            }
        }
        if(req==undefined) return 0
        let dp = []
        
        for(let  i= 0 ; i < n+1; i++ ){
            dp[i] = new Array(req+1)
            for(let j = 0 ; j < req +1 ; j++){
                if(i==0){
                    dp[i][j] = 0
                }
                if(j==0){
                    dp[i][j] = 2**this.countZero(arr,i)
                }
                
            }
        }
         for(let  i= 1 ; i < n+1; i++ ){
           
            for(let j = 1 ; j < req +1 ; j++){
                
                 if(j >= arr[i-1]){
               dp[i][j] = dp[i-1][j-arr[i-1]] + dp[i-1][j]
        }
        else{
            dp[i][j]  = dp[i-1][j]
        }
            }
        }
        return dp[n][req]
    }
}
