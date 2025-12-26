// naive 
/**
 * @param {number[]} nums
 * @return {number}
 */
function solve(nums,pos,n){
    if(pos>=n-1) return 0

    let min = Infinity

    for(let i = pos + 1; i <= pos + nums[pos] ; i++){
        min = Math.min(min,solve(nums,i,n))
    }
    return 1 + min
} 
var jump = function(nums) {
    
    let n = nums.length
    if(n==1) return 0
    let pos = 0
    let ans = solve(nums,pos,n)
    console.log(ans)
    return  ans == Infinity ? 0  : ans
};

// memoize
function solve(nums,pos,jumps,memo){
    if(pos>=nums.length-1) return jumps

    if(memo[pos][jumps] != -1) return memo[pos][jumps]

    let min = Infinity

    for(let i = pos + 1; i <= pos + nums[pos] ; i++){
        min = Math.min(min,solve(nums,i,jumps+1))
    }
    return memo[pos][jumps] =  min
} 
var jump = function(nums) {
    
    let n = nums.length
    let memo = Array.from({length:n+1},()=>Array(n+1).fill(-1))

    return solve(nums,0,0,memo)
};