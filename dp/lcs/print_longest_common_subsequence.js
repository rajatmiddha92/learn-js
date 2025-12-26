function solve(s1,s2,m,n){
    if(m==0 || n == 0) return ""
    
    if(s1[m-1] === s2[n-1]){
      return s1[m-1] + solve(s1,s2,m-1,n-1)
    }
    else{
   
      let l1 = solve(s1,s2,m,n-1)
      let l2 = solve(s1,s2,m-1,n)
      if(l1.length > l2.length) return l1
      else return l2
    }
  }
  
  function printLongestCommonSub(s1,s2){
    let m = s1.length;
    let n = s2.length;
    return solve(s1,s2,m,n).split('').reverse().join("")
  }
  
  console.log(printLongestCommonSub("acbcf","abcdaf"))

  // dp sol
  function printLongestCommonSub(s1,s2){
    let m = s1.length;
    let n = s2.length;
    let dp = []
    for(let  i = 0 ; i < m+1;i++){
      dp[i] = Array(n+1)
      for(let j = 0 ; j < n+1;j++){
        if(i==0 || j == 0) dp[i][j] = ''
      }
    }
    
    for(let  i = 1 ; i < m+1;i++){
     
      for(let j = 1 ; j < n+1;j++){
        
        if(s1[i-1] === s2[j-1]){
         dp[i][j] =  s1[i-1] + dp[i-1][j-1]
    }
    else{
    
      let l1 = dp[i][j-1]
      let l2 = dp[i-1][j]
      if(l1.length > l2.length) {
        dp[i][j] = l1
      }
      else{
        dp[i][j] = l2
      }
    }
        
      }
    }
    return dp[m][n].split('').reverse().join("")
  }