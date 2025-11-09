class Solution {
    // Function to check whether a Binary Tree is BST or not.
    
    checkLeft(node,data)
    {
        if(node==null) return true
        
        if(node.data>data) return false
        
        
        let left = this.checkLeft(node.left,data)
        let right= this.checkLeft(node.right,data)
        
        return left && right
        
    }
    
    checkRight(node,data)
    {
        
        if(node==null) return true
        
        if(node.data<data) return false
        
        
        let left = this.checkRight(node.left,data)
        let right= this.checkRight(node.right,data)
        
        return left && right
        
        
    }
    
    solve(node){
        
        if(node==null) return true
        
         let min  = node.left ? this.checkLeft(node.left,node.data): true
         let  max = node.right ? this.checkRight(node.right,node.data):true
        
        let left = this.solve(node.left)
        let right = this.solve(node.right)
        
        // some logic
        return left && right && min && max
        
        
    }
    
    isBST(root) {
        // your code here
        
        return this.solve(root)
    }
}


//sol 2 using inorder traversal
class Solution {
    // Function to check whether a Binary Tree is BST or not.
    solve(node,cur,prev){
        
        if(node==null) return true
        
        
        let left = this.solve(node.left,cur,prev)
        prev[0]=cur[0]
        cur[0]=node.data
        if(prev[0]>cur[0]){
            return false
        }
        let right = this.solve(node.right,cur,prev)
        
        return left && right
    }
    isBST(root) {
        // your code here
        let prev  = [-Infinity]
        let cur = [...prev]
        return this.solve(root,cur,prev)
    }
}

//sol 3 using range
class Solution {
 
    solve(root,srange,erange){
        
        if(root==null) return true
        

        if(root.data<srange || root.data>erange){
            return false
        }
        
        let left = this.solve(root.left,srange,root.data)
        let right = this.solve(root.right,root.data,erange)
        
        
        return left && right
    }
    
    isBST(root) {
   
        let srange = -Infinity
        let erange = Infinity
        
        return this.solve(root,srange,erange)
    }
}