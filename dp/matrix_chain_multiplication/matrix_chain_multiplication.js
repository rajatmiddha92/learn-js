class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
     
    solve(arr,i,j){
        if(i >= j) return 0;
        
        
        let min = Infinity
        for(let k = i ; k < j ; k++){
            let tempMin = arr[i-1]*arr[j]*arr[k] + 
            this.solve(arr,i,k) +
            this.solve(arr,k+1,j)
            
            min = Math.min(min,tempMin)
        }
        
        return min
    } 
    matrixMultiplication(arr) {
        // code here
        let j = arr.length - 1;
        let i = 1
        
        return this.solve(arr,i,j)
    }
}

let sol = new Solution()
let ans = sol.matrixMultiplication([40,20,30,10])
console.log(ans)


// memoize sol

class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
     
    solve(arr,i,j,memo){
        if(i >= j) return 0;
        
        
        if(memo[i][j] != -1) return memo[i][j]
        let min = Infinity
        for(let k = i ; k < j ; k++){
            let tempAns = arr[i-1]*arr[j]*arr[k] + 
            this.solve(arr,i,k,memo) +
            this.solve(arr,k+1,j,memo)
            
            min = Math.min(min, tempAns)
        }
        
        return memo[i][j] = min
    } 
    matrixMultiplication(arr) {
        // code here
        let j = arr.length - 1;
        let i = 1
        let memo = Array.from({length : j+1},()=>Array(j+1).fill(-1))
        
        return this.solve(arr,i,j,memo)
    }
}