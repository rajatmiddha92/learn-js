// naive sol

// User function Template for javascript

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */

class Solution {
    
    solve(str1,str2,n1,n2,c){
    if(n1 == 0 || n2 == 0) return c;

    if(str1[n1-1] == str2[n2-1]){
        return this.solve(str1,str2,n1-1,n2-1,c+1)
    }
    else{
        return Math.max(c,this.solve(str1,str2,n1-1,n2,0),this.solve(str1,str2,n1,n2-1,0))
    }

} 

    longestCommonSubstr(text1, text2) {
        // code here
        let n1 = text1.length
    let n2 = text2.length
    return this.solve(text1,text2,n1,n2,0)
    }
}

//// User function Template for javascript

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */

class Solution {
    

    longestCommonSubstr(text1, text2) {
        // code here
        let n1 = text1.length
    let n2 = text2.length
    let dp = []
    for(let i = 0 ; i < n1 + 1; i++){
        dp[i] = Array(n2+1)
        for(let j = 0 ; j < n2 + 1; j++){
            if(i==0 || j == 0 ) dp[i][j] = 0
        }
    }
    
    let max = 0
    
        for(let i = 1 ; i < n1 + 1; i++){
       
        for(let j = 1 ; j < n2 + 1; j++){
            if(text1[i-1] == text2[j-1]){
                dp[i][j] =dp[i-1][j-1]+1
                max= Math.max(max,dp[i][j])
            }
            else{
                dp[i][j] = 0
            }
        }
    }
    return max
    }
}