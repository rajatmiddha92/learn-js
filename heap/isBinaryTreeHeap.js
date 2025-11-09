// Is Binary Tree Heap
// Difficulty: MediumAccuracy: 34.41%Submissions: 109K+Points: 4
// Given a binary tree. The task is to check whether the given tree follows the max heap property or not.
// Note: Properties of a tree to be a max heap - Completeness and Value of node greater than or equal to its child.

// Example 1:

// Input:
//       5
//     /  \
//    2    3
// Output: 1
// Explanation: The given tree follows max-heap property since 5,
// is root and it is greater than both its children.

// Example 2:

// Input:
//        10
//      /   \
//     20   30 
//   /   \
//  40   60
// Output: 0

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function isHeap() which takes the root of Binary Tree as parameter returns True if the given binary tree is a heap else returns False.

// Expected Time Complexity: O(N)
// Expected Space Complexity: O(N)

// Constraints:
// 1 ≤ Number of nodes ≤ 100
// 1 ≤ Data of a node ≤ 1000

//algo approach /intution
// is binary tree heap
// for a tree to be heap 
// 1st property the parent node value should always be greater than
// childeren value
// 2nd property it should be a complete binary tree
// a cbt (complete binary tree is a tree all node levels are 
// completely filled) except last level and it should lean towards
// left to right

// the problem can break into two subproblems

// first we check if given tree is cbt
// seconde me check it follow max heap property


// algo/approach for 1st
// whenever find any 1st node child is null we ecounter that it is end
// of tree bcoz it leans toward the left
// a cbt is cbt when there is left child at last level but right child
// is not present or both are not present
// it cant be right is present left is not present
// if you encounter first null node after that no node should be there
// we mark endofTree to true


//alog/approach for 2nd
//  we can check all no leaf node follow max heap propert
// n/2 to 0
// we check its child are smaller


class Solution {
    
    solve(heap,node){
       let q=[node]
       let endofTree = false
       while(q.length){
           let ele = q.shift()
           heap.push(ele.data)
           if(ele.left){
               q.push(ele.left)
               if(endofTree){
                   return false
               }
           }
           else{
               endofTree = true
           }
           if(ele.right){
               q.push(ele.right)
               if(endofTree){
                   return false
               }
           }
           else{
               endofTree = true
           }
       }
       return true
    }
    
    heapify(arr,size,i,ans){
    let largest = i;
    let left = 2*i+1;
    let right = 2*i+2;
    // console.log(arr[left],arr[largest],arr[right],largest,left,right,arr)

    if(left<size && arr[largest]<arr[left]){
      largest = left
    }
    if(right<size && arr[largest]<arr[right] ){
      largest=right
    }
   
    if(largest!=i){
       
      [arr[largest],arr[i]]=[arr[i],arr[largest]];
       ans[0]=0
     this.heapify(arr,size,largest,ans)
    }

  }
    

    isHeap(root) {
        // your code here
    
    let heap = []
       let res= this.solve(heap,root)
       if(!res) return 0
    //   console.log(res,heap)

      
        let ans = [1]
     
        let mid = Math.floor((heap.length-2)/2)
        
        for(let i=mid;i>=0;i--){
            
            this.heapify(heap,heap.length,i,ans)
        
            
        }
        // console.log(heap)
        return ans[0]
        
    }
}


//

//2nd recursive approcah for isCBT
// 

//       8
//     /   \
//    4     6
//   / \   /
//  1   3 2
// if we count nodes there are 6 nodes but index are 7 as left child 
// is not present so it means nodeCount is 6 but index is 7
// when index is greater than node count it menans it is not cbt
// 2*i+2 
//2

//using recursion
class Solution {
    countNode(node){
        if(node==null) return 0
        
        let ans = this.countNode(node.left) + 1 + this.countNode(node.right)
        return ans
    }
    
    isCBT(node,i,count){
        if(!node) return true
        
        
        if(i>=count){
            return false
        }
        
        let left = this.isCBT(node.left,2*i+1,count)
        let right = this.isCBT(node.right,2*i+2,count)
        
        
        return left && right
    }
    
    isMaxOrder(root){
        
        if(root.left ==null && root.right==null) return true
        
        
        //only left childe exist
        
        if(root.left!=null && root.right==null){
            return root.data>root.left.data
        }
        
        else{
            
            // both childe present
            return root.data>root.left.data && root.data>root.right.data && this.isMaxOrder(root.left) && this.isMaxOrder(root.right)
        }
    }

    isHeap(root) {
        // your code here
        
       let count = this.countNode(root)
        
       //follow cbt and maxheap order property
        if(this.isCBT(root,0,count) && this.isMaxOrder(root)){
            return 1
        }
        return 0
    }
}