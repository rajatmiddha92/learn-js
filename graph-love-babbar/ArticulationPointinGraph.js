// // Articluation Point is a node by removing it my graph is disconnected
// // into two or more components

// // removing a node such that the graph is disconnected into two or more components
// // is known as articulation point

// // Articulation Point - I
// // Difficulty: HardAccuracy: 39.26%Submissions: 70K+Points: 8Average Time: 20m
// // Given an undirected connected graph with V vertices and adjacency list adj. You are required to find all the vertices removing which (and edges through it) disconnects the graph into 2 or more components and return it in sorted manner.
// // Note: Indexing is zero-based i.e nodes numbering from (0 to V-1). There might be loops present in the graph.

// // Example 1:

// // Input:

// // Output:{1,4}
// // Explanation: Removing the vertex 1 will
// // discconect the graph as-

// // Removing the vertex 4 will disconnect the
// // graph as-

// // Your Task:
// // You don't need to read or print anything. Your task is to complete the function articulationPoints() which takes V and adj as input parameters and returns a list containing all the vertices removing which turn the graph into two or more disconnected components in sorted order. If there are no such vertices then returns a list containing -1.

// // Expected Time Complexity: O(V + E)
// // Expected Auxiliary Space: O(V)

// class Solution {
//   constructor() {
//     this.list = new Map();
//   }

//   addEdge(u, v) {
//     if (!this.list.has(u)) this.list.set(u, new Set());
//     if (!this.list.has(v)) this.list.set(v, new Set());

//     this.list.get(u).add(v);
//     this.list.get(v).add(u);
//   }
//   // Function to find articulation points in an undirected graph.

//   dfs(visited, low, disc, parent, node, timer, result, childCount) {
//     visited[node] = true;
//     disc[node] = low[node] = timer[0]++;

//     for (let child of this.list.get(node) || new Set()) {
//       if (child == parent) continue;

//       if (visited[child] == false) {
//         childCount++;

//         this.dfs(visited, low, disc, node, child, timer, result, childCount);

//         low[node] = Math.min(low[node], low[child]);
//         if (low[child] >= disc[node] && parent != -1) {
//           result.add(node);
//         }
//       } else {
//         //backedge
//         low[node] = Math.min(low[node], disc[child]);
//       }
//     }
//     if (parent == -1 && childCount > 1) {
//       result.add(node); // Root with more than one child
//     }
//   }
//   articulationPoints(V, adj) {
//     // Code here
//     //console.log(V,adj)

//     for (let i = 0; i < adj.length; i++) {
//       let temp = adj[i];
//       while (temp.length) {
//         let v = temp.pop();
//         this.addEdge(i, v);
//       }
//     }
//     let disc = Array(V).fill(-1);
//     let low = Array(V).fill(-1);
//     let timer = [0];
//     let visited = Array(V).fill(false);
//     let parent = -1;

//     let result = new Set();
//     for (let i = 0; i < V; i++) {
//       if (!visited[i]) {
//         this.dfs(visited, low, disc, parent, i, timer, result, 0);
//       }
//     }
//     return result.size ? Array.from(result).sort((a, b) => a - b) : [-1];
//   }
// }

// let sol = new Solution();
// console.log(
//   sol.articulationPoints(5, [[1, 3, 4], [0, 2], [1], [0, 4], [0, 3]])
// );


// User function Template for javascript
/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
 */

class Solution {
    // Function to find articulation points in an undirected graph.
    
    dfs(parent,disc,low,visited,result,adj,childCount,node,time){
        
        disc[node] = time[0]
        low[node] = time[0]
        time[0]++
        visited[node] = true
        
        for(let child of adj[node]){
            let v = child
          
            
            if(visited[child]===false){
                
                childCount++
                parent[child]= node
                this.dfs(parent,disc,low,visited,result,adj,childCount,child,time)
                
                
                if(low[child]>=disc[node] && parent[node]!=-1){
                    result.add(node)
                }
                
                low[node]= Math.min(low[node],low[child])
            }
            else if(child!=parent[node]){
                low[node]=Math.min(low[node],disc[child])
            }
        }
        
        if(parent[node]==-1 && childCount>1){
            result.add(node)
        }
        
        
    }
    articulationPoints(V, adj) {
        // Code here
        let result = new Set()
        
        // console.log(V,adj)
      
        let parent = Array(V).fill(-1)
        let disc = Array(V).fill(-1)
        let low = Array(V).fill(-1)
        let visited = Array(V).fill(false)
        
        let childCount = 0
        let time = [0]
        
        for(let i=0;i<V;i++){
            if(visited[i]===false){
                this.dfs(parent,disc,low,visited,result,adj,childCount,i,time)
            }
        }
       // console.log(adj,result)
        
        let ans = Array.from(result)
        
        return ans.length ? ans.sort((a,b)=>a-b) : [-1]
    }
}

let sol = new Solution()
console.log(sol.articulationPoints(8,[  [ 1,2 ],
    [ 0, 3 ],
    [ ],
    [ 1,6,4,5],
    [ 5, 3 ],
    [3,4],
    [3,7],[6]]))