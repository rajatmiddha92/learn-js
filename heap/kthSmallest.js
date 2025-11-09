// Kth Smallest
// Difficulty: MediumAccuracy: 35.17%Submissions: 657K+Points: 4
// Given an array arr[] and an integer k where k is smaller than the size of the array, the task is to find the kth smallest element in the given array.

// Follow up: Don't solve it using the inbuilt sort function.

// Examples :

// Input: arr[] = [7, 10, 4, 3, 20, 15], k = 3
// Output:  7
// Explanation: 3rd smallest element in the given array is 7.
// Input: arr[] = [2, 3, 1, 20, 15], k = 4 
// Output: 15
// Explanation: 4th smallest element in the given array is 15.
// Expected Time Complexity: O(n+(max_element) )
// Expected Auxiliary Space: O(max_element)
// Constraints:
// 1 <= arr.size <= 106
// 1<= arr[i] <= 106
// 1 <= k <= n

class Solution {
    
    size(heap){
        return heap.length
    }
    push(heap,value){
        
        heap.push(value)
        let size= heap.length-1
        
        let parent = Math.floor((size-1)/2)
        while(size>0 && heap[size]>heap[parent]){
            [heap[parent],heap[size]]=[heap[size],heap[parent]]
            size = parent
            parent= Math.floor((size-1)/2)
        }
    }
    
    pop(heap){
        let largest = 0
        heap[0]=heap[heap.length-1]
        heap.pop()
        
        
        
        while(largest<heap.length){
            let left = 2*largest+1
            let right = 2*largest+2
            
            if(left < heap.length && heap[left]>heap[largest] && (!heap[right]|| heap[right]<heap[left])){
                [heap[left],heap[largest]]=[heap[largest],heap[left]]
                largest=left
            }
            else if(right<heap.length && heap[right]>heap[largest] && heap[left]<heap[right]){
                [heap[right],heap[largest]]=[heap[largest],heap[right]]
                largest=right
            }
            
           else{
               break
           }
            
        }
        
    }
    
    kthSmallest(arr, k) {
        // code here
        //  4
        let heap= []
        
        for(let i=0;i<arr.length;i++){
            this.push(heap,arr[i])
            // console.log(heap)
            
            if(this.size(heap)>k){
                
                this.pop(heap)
            }
        }
        return heap[0]
        
        
    }
}

//sol 2 

//algo push k element into heap by maintaining max heap property
// push K to n elemnt to heap check if you current element is less than
// heap.top() it means there are smaller elemnts exist in arr
// so delete that top and push your small element in heap
class Solution {
    
    size(heap){
        return heap.length
    }
    
    push(heap,index){
       
        let parent = Math.floor((index-1)/2)
        while(index>0 && heap[index]>heap[parent]){
            [heap[index],heap[parent]]=[heap[parent],heap[index]]
            index=parent
            parent=Math.floor((index-1)/2)
        }
    }
     
    
    top(heap){
        return heap[0]
    }
    pop(heap,size,i){
        let largest = i 
        let left =2*i+1
        let right = 2*i+2
        if(left<size && heap[left]>heap[largest]){
            largest=left
        }
        if(right<size && heap[right]>heap[largest]){
            largest = right
        }
        
        if(largest != i){
            [heap[largest],heap[i]]=[heap[i],heap[largest]]
            this.pop(heap,size,largest)
        }
    }
    
    kthSmallest(arr, k) {
        // code here
        let heap = []
        for(let i=0;i<k;i++){
            heap.push(arr[i])
            this.push(heap,heap.length-1)
        }
        // console.log(heap)
        for(let i=k;i<arr.length;i++){
            if(arr[i]< this.top(heap)){
                
                heap[0]=heap[heap.length-1]
                heap.pop()
                this.pop(heap,heap.length,0)
                
                heap.push(arr[i])
                this.push(heap,heap.length-1)
            }
            
        }
        return heap[0]
    }
}