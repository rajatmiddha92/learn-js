// disjoint set

// let take an example

//  we have 1st component
// 1-->2-->3--->4

//  now we have 2nd component
// 11--21-->22--->43

// components are part of same graph

// there is one graph with two different components
// now someone will come and ask is 2 and 43 are from same compoent

// we do a dfs traversal  1-->2-->3--->4
// we will find that they are not from same component

// so to check this we use BFS/DFS which takes O(V+E) time
// so this is where something like disjoint set comes into picture
// disjoint set says I am going to do this in constant time

// disjoint set provide two functionalities
// 1 find parent
// 2 union - it can be done by two ways (union by rank/size)
// path compression (optimization) 

// union by rank
// edges = [1,2],[2,3],[4,5],[6,7],[5,6],[3,7]

// algo
// find the ultimate parent of u,v , ultimate parent means until we get top parent of u and v
// to get that until i!=parent[i]
// i.e. until i is not parent of i itself
// check there rank whose rank higher than others
// connect the lower rank to higher rank

// inital configuration
// let parent = [1,2,3,4,5,6,7]
// every one is parent of itself
// let rank = [0,0,0,0,0,0,0]
// rank of every node is 0 initally
// we start iterating over edges
// ex first edge 1,2
// we find the parent of 1 and 2
// parent of 1 is 1
// parent of 2 is 2
// rank of 1 is 0
// rank of 2 is 0
// rank of 1, rank of 2 in equal we can connect to anyone to anyone
// so lets connect 2 to 1 (means 1 is parent of 2)
// so parent[2] = 1
// so parent = [1,1,3,4,5,6,7]
//              1 2 3 4 5 6 7  index resprsent node
// rank is [1,0,0,0,0,0,0] // those who become parent their rank will increase by 1

// at any stage while doing this is 6 & 7 ar from same comonent
// you go and check their ultimate parent
// if they are same then they are from same component
// this take LogN time

// but disjoint set is more efficient that takes O(1) time
// we will apply something as path compression
// ex 1-- >4-- >7

// so if you want to find the parent of 7
// you will find the parent of 7 is 1
// but you need to go for ulitmate parent
// can i change this to 1--->4 
//                      |
//                      |
//                      7
// now 7 points to its ultimate parent in constant time
// 

// sol using union by rank only and takes logN time
// let V=8
// let rank = Array(V).fill(0)
// let parent = []
// for(let i=0;i<V;i++){
//   parent[i]=i
// }
// let union = [[1,2],[2,3],[4,5],[6,7],[5,6],[3,7]]

// function findParent(node,parent){
//   if(parent[node]==node){
//     return node
//   }
//   return findParent(parent[node],parent)
// }

// for(let i=0;i<union.length;i++){
//   let [u,v]=union[i]
  
//   let ultimateParentoFU = findParent(u,parent)
//   let ultimateParentoFV = findParent(v,parent)

//   if(ultimateParentoFU==ultimateParentoFV)continue 
  
//   let rankOfU = rank[ultimateParentoFU] 
//   let rankOfY = rank[ultimateParentoFV]
  
//   if(rankOfU>rankOfY){
    
//     parent[ultimateParentoFV]=ultimateParentoFU;
  
    
//   }
//   else if(rankOfU<rankOfY){
//      parent[ultimateParentoFU]=ultimateParentoFV;
    
//   }
//   else{
//     parent[ultimateParentoFV]=ultimateParentoFU;
//       rank[ultimateParentoFU]++
//   }
//   console.log(rank,"rank")
//   console.log(parent,"parent")
// }
// TC -  logN

//disjoint set is a combination of union by rank and path compression
// using path compression & union by rank take constant time
// let V=8
// let rank = Array(V).fill(0)
// let parent = []
// for(let i=0;i<V;i++){
//   parent[i]=i
// }
// let union = [[1,2],[2,3],[4,5],[6,7],[5,6],[3,7]]


// function findParent(node,parent){
//   if(parent[node]==node){
//     return node
//   }
//   parent[node] =  findParent(parent[node],parent)

//   return parent[node]
// }

// for(let i=0;i<union.length;i++){
//   let [u,v]=union[i]
  
//   let ultimateParentoFU = findParent(u,parent)
//   let ultimateParentoFV = findParent(v,parent)
  
//   if(ultimateParentoFU==ultimateParentoFV){
    // return // already belong to same component
//  }
//   let rankOfU = rank[ultimateParentoFU] 
//   let rankOfY = rank[ultimateParentoFV]
  
//   if(rankOfU>rankOfY){
    
//     parent[ultimateParentoFV]=ultimateParentoFU;
  
    
//   }
//   else if(rankOfU<rankOfY){
//       parent[ultimateParentoFU]=ultimateParentoFV;
    
//   }
//   else{
//     parent[ultimateParentoFV]=ultimateParentoFU;
//       rank[ultimateParentoFU]++
//   }
//   console.log(rank,"rank")
//   console.log(parent,"parent")
// }

// kruskal's algo

// help us to find minimum spanning tree

// 1 sort all edges according to their weight
// 2 pick the edge with minimum weight
// 3 check if the edges are from same component or not
// 4 if they are from same component then ignore it
// 5 if they are from different component then add it to our MST
// 6 repeat this process until all edges are added


// prims algo

// get the minimum weight edge or start from src node
// include it in mst
// get all the connected nodes from mst & then select the min edge from all the edges that are not included in mst
// repeat the process until all the edges are included

// kruskal algo

// take the minimum weighted edge
// then take the next minimum weighted edge
// only consider taking the node which does not form cycle (union - if their parent are
// same means they belong to same component and will for a cycle /i.e adding extra edge
// which has no point)
// repeat the process until all the edges are included

// krukal's algo
class Solution {
    
    findParent(node,parent){
        if(parent[node]==node){
            return node
        }
        
        return this.findParent(parent[node],parent)
    }
    spanningTree(v, adj) {
        // code here
      //  console.log(adj)
        let edges = []
        for(let  i=0;i<adj.length;i++){
            let arr = adj[i]
            while(arr.length){
                let [v,w] = arr.pop()
                edges.push([i,v,w])
            }
        }
        edges.sort((a,b)=>a[2]-b[2])
      
        let rank = Array(v).fill(0)
        let parent  = []
        let count = 0
        for(let  i = 0 ;i < v ; i++){
            parent[i] = i
        }
        for(let i=0;i<edges.length;i++){
            let [u,v,w] = edges[i]
            
            
            let findParentU = this.findParent(u,parent)
            let findParentV = this.findParent(v,parent)
            
            if(findParentU == findParentV) continue;
            
            count += w
            
            if(rank[findParentU]>rank[findParentV]){
                parent[findParentV] = findParentU
            }
            else if(rank[findParentU]<rank[findParentV]){
                parent[findParentU] = findParentV
            }
            else{
                parent[findParentV] = findParentU
                rank[findParentU]++
            }
        }
        
        return count
      
    }
}


// class DisjointSet{
//   constructor(n){
//     this.parent = Array.from({length:n},(_,i)=>i) 
//     this.size = Array(n).fill(1)
//     this.rank = Array(n).fill(0)
//   }
  
//   findUPar(node)
//   {
//     if(this.parent[node]==node){
//       return node
//     }
//     return this.findUPar(this.parent[node])
//   }
  
//   unionByRank(i,j){
//     let x = this.findUPar(i)
//     let y = this.findUPar(j)
    
//     if(x==y) return false
    
//     if(this.rank[x]>this.rank[y]){
//       this.parent[y] = x
//     }
//     else if(this.rank[x]<this.rank[y]){
//       this.parent[x] = y
//     }
//     else{
//       this.parent[y] = x
//       this.rank[x]++
//     }
//     return true
//   }
  
//   unionBySize(i,j){
    
//     let x = this.findUPar(j)
//     let y = this.findUPar(i)
    
//     if(x==y) return false
     
//     if(this.size[x]>this.size[y]){
//         this.parent[y]= x;
//         this.size[x]+= this.size[y]
//     }
//     else{
//       this.parent[x]= y;
//       this.size[y]+= this.size[x]
//     }
     
//     return true
    
//   }
  
// }


// let ds = new DisjointSet(8)
// ds.unionBySize(1,3)
// ds.unionBySize(5,7)
// ds.unionBySize(4,7)
// ds.unionBySize(1,7)
// console.log(ds)