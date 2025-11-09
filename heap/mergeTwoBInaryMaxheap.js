// ing. Your task is to complete the function mergeHeaps() which takes the array a[], b[], its size n and m, as inputs and return the merged max heap. Since there can be multiple solutions, therefore, to check for the correctness of your solution, your answer will be checked by the driver code and will return 1 if it is correct, else it returns 0.

 

// Expected Time Complexity: O(n.Logn)
// Expected Auxiliary Space: O(n + m)

 

// Constralets:
// 1 <= n, m <= 105
// 1 <= a[i], b[i] <= 2*105

  //aproach 1 merge 2nd elemnt of array into 1st arrray 
  //and heapify up while inserting

  //approach 2
  // create new array while merge two array no matter in which order
  // then heapify down bcoz the lower elemnts can be greater

class Solution{

  
    mergeHeaps(a, b,n,  m) {
        // your code here
        
        for(let i=0;i<b.length;i++){
            let ele = b[i];
            a.push(b[i]);
            let index=a.length-1;
            let parent =  Math.floor((index-1)/2);
            
            while(index > 0 && a[parent]<a[index]){
                let temp = a[parent];
                a[parent]=a[index];
                a[index]= temp;
                index= parent;
                parent= Math.floor((index-1)/2);
            }
        }
        return a;
    }
};
// TC m*log N
// SC O(n+m)