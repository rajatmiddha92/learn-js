// User function Template for javascript

/**
 * @param {string} s
 * @returns {number}
 */

class Solution {
    isPalindrome(str,i,j){
        while(i<=j){
            if(str[i]!=str[j]) return false
            i++
            j--
        }
        
        return true
    }
    
   solve(s,i,j,memo){
       if(i>=j) return 0
       
       if(memo[i][j] != -1) return memo[i][j]
       
       if(this.isPalindrome(s,i,j)) return 0
       
       
       let min = Infinity
       
       for(let k = i ; k <= j-1 ; k++){
           
           let temp = 1 + this.solve(s,i,k,memo) + this.solve(s,k+1,j,memo)
           
           min = Math.min(min,temp)
           
       }
       
       return memo[i][j] = min
   }

    palPartition(s) {
        // your code here
        let i = 0
        let j = s.length-1
        let memo = Array.from({length:j+1},()=>Array(j+1).fill(-1))
        
        return this.solve(s,i,j,memo)
    }
}
// intutive sol

// User function Template for javascript

/**
 * @param {string} s
 * @returns {number}
 */

class Solution {
    isPalindrome(str,i,j){
        while(i<=j){
            if(str[i]!=str[j]) return false
            i++
            j--
        }
        
        return true
    }
    
   solve(s,start,memo){
       if(s.length === start) return -1
       
      if(memo[start] != -1) return memo[start]
       
       //if(this.isPalindrome(s,i,j)) return 0
       
       
       let min = Infinity
       
       for(let end = start ; end < s.length ; end++){
           
           if(this.isPalindrome(s,start,end)){
              let temp = 1 + this.solve(s,end+1,memo) 
               min = Math.min(min,temp)
           }
   
       }
       
       return memo[start] = min
   }

    palPartition(s) {
        // your code here
        let i = 0
    
      
        let memo = Array(s.length).fill(-1)
        return this.solve(s,i,memo)
    }
}