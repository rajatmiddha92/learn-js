// leetcode sol still gives tle in memoize sol lmao


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function solve(s1,s2,memo){
    let key = `${s1}-${s2}` 
   if(key in memo) return memo[key]
   if(s1 === s2) return memo[key] = true
   if (s1.length !== s2.length) return memo[key] = false
   if(s1.length <= 1) return memo[key] = false
  

    let n = s2.length
   for(let i = 1 ; i < n ; i++){

       // case 1 swap
       let conditionOne = solve(s1.substr(0,i),s2.substr(n-i,i),memo)
       let conditionTwo = solve(s1.substr(i),s2.substr(0,n-i),memo)
       if(conditionOne && conditionTwo) return memo[key] = true

       // case 2 no swap 
       conditionOne = solve(s1.substr(0,i),s2.substr(0,i),memo)
       conditionTwo = solve(s1.substr(i),s2.substr(i),memo)

       if(conditionOne && conditionTwo) return memo[key]= true
   }

   return memo[key]= false
} 
var isScramble = function(S1, S2) {
   if(S1 === S2) return true
   let memo = {}
   return solve(S1,S2,memo)

};