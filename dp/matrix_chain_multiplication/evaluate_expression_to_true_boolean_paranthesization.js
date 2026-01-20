

// naive sol
class Solution {
   
    solve(s,i,j){

        if(i==j) {
            return s[i] === "T" ? { T: 1, F : 0 } : { T:0 , F:1}
        }
        
        let ans = { T:0, F: 0}
        for(let k = i+1 ; k < j  ; k+=2){
            
            let left = this.solve(s,i,k-1)
            let right = this.solve(s,k+1,j)
            
            if(s[k]==='^'){
              ans.T = ans.T + left.F * right.T + left.T * right.F
              ans.F = ans.F + left.F * right.F + left.T * right.T
            }
            else if(s[k]==="&"){
               ans.T = ans.T + left.T * right.T;
               ans.F = ans.F + left.F * right.F + left.F * right.T + left.T * right.F
            }
            else{
              ans.T = ans.T + left.T * right.T + left.F * right.T + left.T * right.F
              ans.F = ans.F + left.F * right.F
            }
            
        }
        return ans
    }
    countWays(s) {
       return this.solve(s,0,s.length-1).T
    }
}

// memoize sol

// User function Template for javascript
/**
 * @param {string} s
 * @returns {number}
 */

class Solution {
    solve(s,i,j,memo){

        if(i==j) {
            return s[i] === "T" ? { T: 1, F : 0 } : { T:0 , F:1}
        }
        
        if(memo[i][j] != -1) return memo[i][j]
        
        let ans = { T:0, F: 0}
        for(let k = i+1 ; k < j  ; k+=2){
            
            let left = this.solve(s,i,k-1,memo)
            let right = this.solve(s,k+1,j,memo)
            
            if(s[k]==='^'){
              ans.T = ans.T + left.F * right.T + left.T * right.F
              ans.F = ans.F + left.F * right.F + left.T * right.T
            }
            else if(s[k]==="&"){
               ans.T = ans.T + left.T * right.T;
               ans.F = ans.F + left.F * right.F + left.F * right.T + left.T * right.F
            }
            else{
              ans.T = ans.T + left.T * right.T + left.F * right.T + left.T * right.F
              ans.F = ans.F + left.F * right.F
            }
            
        }
        return memo[i][j]=ans
    }
    countWays(s) {
        
       let memo = Array.from({length: s.length},()=>Array(s.length).fill(-1))
       return this.solve(s,0,s.length-1,memo).T
       
    }
}