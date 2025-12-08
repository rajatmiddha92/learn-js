function printSubset(arr,n,sum,target,count){
    if(sum===target) {
      count[0]++
      return count[0];
    }
    if(n==0 || sum > target){
       return 0;
    }
    
    let inc = printSubset(arr,n-1,sum+arr[n-1],target,count) 
    let exc = printSubset(arr,n-1,sum,target,count)
    let ans = inc + exc;
    return ans;
    
  }
  
  let arr= [1,2,3]
  let n = arr.length
  let target = 3
  let count = [0]
  let sum = 0 
  
  let ans = printSubset(arr,n,sum,target,count)
  console.log(ans)