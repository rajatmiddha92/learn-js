/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
 // helper function to start iteration on both string
 // when common char found we take it once and generate a string
 function solve(s1,s2,dp){
 
    let ans = ''
    let  i = s1.length, j = s2.length
    while(i > 0 && j > 0){
      if(s1[i-1] == s2[j-1]){
          ans += s1[i-1]
          i--
          j--
      }
      else if(dp[i][j-1].length > dp[i-1][j].length){
          ans += s2[j-1]
          j--
      }
      else{
          ans += s1[i-1]
          i--
      }
    }
  
    while(i>0){
      ans += s1[i-1]
      i--
    }
  
    while(j>0){
      ans += s2[j-1]
      j--
    }
   
     return ans.split("").reverse().join('')
  }
  
  var shortestCommonSupersequence = function(str1, str2) {
      let m =  str1.length;
      let n = str2.length;
      let dp = []
  
      // lcs find function
      for(let i = 0 ; i < m + 1 ; i++){
          dp[i] = Array(n+1)
          for(let j = 0 ; j < n+1 ; j++){
              if( i == 0 || j == 0) dp[i][j] = ""
          }
      }
  
        for(let i = 1 ; i < m + 1 ; i++){
          
          for(let j = 1 ; j < n+1 ; j++){
              
              if(str1[i-1] == str2[j-1]){
                  dp[i][j] = str1[i-1] + dp[i-1][j-1]
              }
              else{
                  let l1 = dp[i-1][j]
                  let l2 = dp[i][j-1]
                  if(l1.length > l2.length) {dp[i][j] = l1}
                  else {dp[i][j] = l2}
              }
          }
      }
      
      return solve(str1,str2,dp)
  };