// // Bridge in a graph says that remove a certain edge from a
// // graph such that no of disconnected components increases

// // i.e remove a edge that a graph break into two or more disconnected components

// // An edge in an undirected connected graph is a bridge if removing it disconnects the graph. For a disconnected undirected graph, the definition is similar, a bridge is an edge removal that increases the number of disconnected components.

// // the problem states that print all the bridges in a graph

// // Bridge edge in a graph
// // Difficulty: MediumAccuracy: 34.61%Submissions: 54K+Points: 4
// // Given a Graph of V vertices and E edges and another edge(c - d), the task is to find if the given edge is a Bridge. i.e., removing the edge disconnects the graph.

// // Example 1:

// // Input:

// // c = 1, d = 2
// // Output:
// // 1
// // Explanation:
// // From the graph, we can clearly see that
// // blocking the edge 1-2 will result in
// // disconnection of the graph. So, it is
// // a Bridge and thus the Output 1.

// // Example 2:

// // Input:

// // c = 0, d = 2
// // Output:
// // 0
// // Explanation:

// // blocking the edge between nodes 0 and 2
// // won't affect the connectivity of the graph.
// // So, it's not a Bridge Edge. All the Bridge
// // Edges in the graph are marked with a blue
// // line in the above image.

// // Your Task:
// // You don't need to read input or print anything. Your task is to complete the function isBridge()  which takes number of vertices V, the number of edges E, an adjacency lsit adj and two integers c and d denoting the edge as input parameters and returns 1 if the given edge c-d is a Bridge. Else, it returns 0.

// // Expected Time Complexity: O(V + E).
// // Expected Auxiliary Space: O(V).

// // Constraints:
// // 1 ≤ V,E ≤ 105
// // 0 ≤ c, d ≤ V-1

// // brute force
// // start from start node and remove every node one by one and traverse
// // graph if there are diconneected components or not
// //Follow the below steps to Implement the idea:

// // For every edge (u, v), do the following:
// // Remove (u, v) from the graph
// // See if the graph remains connected (either uses BFS or DFS)
// // Add (u, v) back to the graph.
// // Time Complexity: O(E*(V+E)) for a graph represented by an adjacency list.
// // Auxiliary Space: O(V+E)

// //optimized solution using Tarjan's Algo

// // Find Bridges in a graph using Tarjan’s Algorithm.
// // Before heading towards the approach understand which edge is termed as bridge. Suppose there exists a edge from u -> v, now after removal of this edge if v can’t be reached by any other edges then u -> v edge is bridge. Our approach is based on this intuition, so take time and grasp it.

// // ALGORITHM: –

// // To implement this algorithm, we need the following data structures –

// // visited[ ] = to keep track of the visited vertices to implement DFS
// // disc[ ] = to keep track when for the first time that particular vertex is reached
// // low[ ] = to keep track of the lowest possible time by which we can reach that vertex ‘other than parent’ so that if edge from parent is removed can the particular node can be reached other than parent.
// // We will traverse the graph using DFS traversal but with slight modifications i.e. while traversing we will keep track of the parent node by which the particular node is reached because we will update the low[node] = min(low[all it’s adjacent node except parent]) hence we need to keep track of the parent.

// // While traversing adjacent nodes let ‘v’ of a particular node let ‘u’, then 3 cases arise –

// // 1. v is parent of u then,

// // skip that iteration.
// // 2. v is visited then,

// // update the low of u i.e. low[u] = min( low[u] , disc[v]) this arises when a node can be visited by more than one node, but low is to keep track of the lowest possible time so we will update it.
// // 3. v is not visited then,

// // call the DFS to traverse ahead
// // now update the low[u] = min( low[u], low[v] ) as we know v can’t be parent cause we have handled that case first.
// // now check if ( low[v] > disc[u] ) i.e. the lowest possible to time to reach ‘v’ is greater than ‘u’ this means we can’t reach ‘v’ without ‘u’ so the edge   u -> v is a bridge.

// // Time Complexity: O(V+E),

// // The above approach uses simple DFS along with Tarjan’s Algorithm.
// // So time complexity is the same as DFS which is O(V+E) for adjacency list representation of the graph.
// // Auxiliary Space: O(V) is used for visited, disc and low arrays.

// // just dummy solution
// // class Solution {
// //   //Function to find if the given edge is a bridge in graph.
// //   constructor() {
// //     this.list = new Map();
// //   }

// //   addEdge(u, v) {
// //     if (!this.list.has(u)) this.list.set(u, new Set());

// //     this.list.get(u).add(v);
// //   }

// //   isBridge(V, adj, c, d) {
// //     //code here
// //     // console.log(adj);

// //     for (let i = 0; i < adj.length; i++) {
// //       let temp = adj[i];

// //       while (temp.length) {
// //         let w = temp.pop();
// //         if (i == c && w == d) {
// //           continue;
// //         }
// //         if (i == d && w == c) {
// //           continue;
// //         }
// //         this.addEdge(i, w);
// //       }
// //     }
// //     // console.log(this.list);
// //     let queue = [c];
// //     let visited = new Set();
// //     visited.add(c);
// //     while (queue.length) {
// //       let ele = queue.pop();

// //       for (let child of this.list.get(ele) || new Set()) {
// //         if (child == d) {
// //           return false;
// //         }
// //         if (!visited.has(child)) {
// //           queue.push(child);
// //           visited.add(child);
// //         }
// //       }
// //     }

// //     return true;
// //   }
// // }
// //4 3

// // 0 1
// // 1 2
// // 2 3
// // 1 2

// // class Solution 
// // {
// //     //Function to find if the given edge is a bridge in graph.
    
// //     constructor(){
// //         this.list = new Map()
// //     }
    
// //     addEdge(u,v){
// //     if(!this.list.has(u)) this.list.set(u,new Set())
// //     if(!this.list.has(v)) this.list.set(v,new Set())
    
// //     this.list.get(u).add(v)
// //     this.list.get(v).add(u)
    
// //     }
    
    
// //     dfs(discovery,low,visited,parent,timer,node,c,d){
// //         timer[0]++
// //         low[node]=discovery[node]=timer[0]
// //         visited[node]=true;
        
// //         for(let child of this.list.get(node)||new Set()){
// //             if(child==parent) continue;
            
// //             if(child!=parent){
// //                 if(visited[child]==false){
// //                 if(this.dfs(discovery,low,visited,node,timer,child,c,d)){
// //                     return true
// //                 }
// //                 else{
// //                    // backtrack
// //                     low[node]=Math.min(low[node],low[child])
// //                     // check bridge
// //                     if(low[child]>discovery[node] && (c==child && d==node || d==child && c==node)){
// //                         return true
// //                     }
                    
// //                 }
// //                 }
// //                 else{
// //                     // back edge
// //                     low[node]=Math.min(low[node],discovery[child])
// //                 }       
// //             }
// //         }
// //         return false
// //     }
// //     isBridge(V,adj,c,d)
// //     {
// //         //code here
// //        // console.log(V,adj)
// //        for(let i=0;i<adj.length;i++){
// //            let temp = adj[i]
// //            while(temp.length){
// //                let ele = temp.pop()
// //                this.addEdge(i,ele)
// //            }
// //        }
       
// //        let discovery = Array(V).fill(-1)
// //        let low = Array(V).fill(-1)
// //        let visited = Array(V).fill(false)
// //        let parent = -1
// //        let timer=[0]
// //     //    visited[0]=true
// //        for(let i=0;i<adj.length;i++)
// //        {
// //         if(!visited[i]){
// //             if(this.dfs(discovery,low,visited,parent,timer,i,c,d)){
// //                 return 1
// //             }
// //         }

// //        }
       



// //        return 0
       
       
       
       
// //     }
// // }
// // let sol = new Solution();
// //console.log(sol.isBridge(4, [[1], [0, 2], [1, 3], [2]], 1, 2));
// // console.log(sol.isBridge(3, [[1], [2], [3],], 1, 2));


// //console.log(sol.isBridge(2 ,[[ 1 ]], 0, 1));
// // console.log(arr[17],arr.length)


class Graph{
    // Constructor
    constructor(v)
    {
        this.V = v;
        this.adj = new Array(v);
        
        this.NIL = -1;
        this.time = 0;
        for (let i=0; i<v; ++i)
            this.adj[i] = [];
    }
    
    //Function to add an edge into the graph
    addEdge(v,w)
    {
        this.adj[v].push(w);  //Note that the graph is undirected.
        this.adj[w].push(v);
    }
    
    // A recursive function that finds and prints bridges
    // using DFS traversal
    // u --> The vertex to be visited next
    // visited[] --> keeps track of visited vertices
    // disc[] --> Stores discovery times of visited vertices
    // parent[] --> Stores parent vertices in DFS tree
    bridgeUtil(u,visited,disc,low,parent)
    {
        // Mark the current node as visited
        visited[u] = true;
  
        // Initialize discovery time and low value
        disc[u] = low[u] = this.time++;
  
        // Go through all vertices adjacent to this
        
        for(let i of this.adj[u])
        {
            let v = i;  // v is current adjacent of u
  
            // If v is not visited yet, then make it a child
            // of u in DFS tree and recur for it.
            // If v is not visited yet, then recur for it
            if (!visited[v])
            {
                parent[v] = u;
                this.bridgeUtil(v, visited, disc, low, parent);
  
                // Check if the subtree rooted with v has a
                // connection to one of the ancestors of u
                low[u]  = Math.min(low[u], low[v]);
  
                // If the lowest vertex reachable from subtree
                // under v is below u in DFS tree, then u-v is
                // a bridge
                if (low[v] > disc[u])
                 console.log(u,v)
            }
  
            // Update low value of u for parent function calls.
            else if (v != parent[u])
                low[u]  = Math.min(low[u], disc[v]);
        }
    }
    
    // DFS based function to find all bridges. It uses recursive
    // function bridgeUtil()
    bridge()
    {
        // Mark all the vertices as not visited
        let visited = new Array(this.V);
        let disc = new Array(this.V);
        let low = new Array(this.V);
        let parent = new Array(this.V);
  
  
        // Initialize parent and visited, and ap(articulation point)
        // arrays
        for (let i = 0; i < this.V; i++)
        {
            parent[i] = this.NIL;
            visited[i] = false;
        }
  
        // Call the recursive helper function to find Bridges
        // in DFS tree rooted with vertex 'i'
        for (let i = 0; i < this.V; i++)
            if (visited[i] == false)
                this.bridgeUtil(i, visited, disc, low, parent);
    }
}
let sol = new Graph(7);
sol.addEdge(0,2)
sol.addEdge(2,4)
sol.addEdge(4,6)
sol.addEdge(6,5)
sol.addEdge(5,2)
sol.addEdge(0,3)
sol.addEdge(0,1)
sol.addEdge(2,3)
sol.bridge()

// let g1 = new Graph(8);
// // g1.addEdge(1, 0);
// // g1.addEdge(0, 4);
// // g1.addEdge(0, 2);
// // g1.addEdge(2, 1);

// // g1.addEdge(5, 4);
// // g1.addEdge(4, 3)
// // g1.addEdge(5, 3)


// // g1.addEdge(1,2)
// // g1.addEdge(1,4)
// // g1.addEdge(2,3)
// // g1.addEdge(3,4)
// // g1.addEdge(4,5)
// // g1.addEdge(5,6)
// // g1.addEdge(6,7)
// // g1.addEdge(6,9)
// // g1.addEdge(7,8)
// // g1.addEdge(8,9)
// // g1.addEdge(8,10)
// // g1.addEdge(10,11)
// // g1.addEdge(10,12)
// g1.addEdge(0,1)
// g1.addEdge(0,2)
// g1.addEdge(1,3)
// g1.addEdge(1,2)
// g1.addEdge(3,4)
// g1.addEdge(3,5)

// g1.addEdge(2,4)
// g1.addEdge(5,6)
// g1.addEdge(5,7)
// g1.addEdge(6,7)

// g1.bridge();
// console.log(g1.adj)
// class Solution {
//     constructor() {
//   this.n;
//   this.graph;

//   this.time = 0;
//   this.low;
//   this.disc;
//   this.stack = [];
//   this.inStack;
//   this.sccCount = 0;
// }



// dfs(u) {
//   this.disc[u] = this.low[u] = this.time++;
//   this.stack.push(u);
//   this.inStack[u] = true;

//   for (let v of this.graph[u]) {
//     if (this.disc[v] === -1) {
//       this.dfs(v);
//       this.low[u] = Math.min(this.low[u], this.low[v]);
//     } else if (this.inStack[v]) {
//       this.low[u] = Math.min(this.low[u], this.disc[v]);
//     }
//   }

//   if (this.low[u] === this.disc[u]) {
//     // Found an SCC
//     while (true) {
//       let v = this.stack.pop();
//       this.inStack[v] = false;
//       if (v === u) break;
//     }
//     this.sccCount++;
//   }
// }
//   kosaraju(adj) {
//       this.n = adj.length
//      this.graph =  Array.from({ length: this.n }, () => []);
 
//   for (let [index,data] of adj.entries()) {
//       let arr = data
//       while(arr.length){
//           let v  = arr.pop()
//            this.graph[index].push(v);
//       }
   
//   }
//   this.low = Array(this.n).fill(-1);
//   this.disc = Array(this.n).fill(-1);
//   this.inStack  = Array(this.n).fill(-1);
//       // code here
//        for (let i = 0; i < this.n; i++) {
//     if (this.disc[i] === -1) {
//       this.dfs(i);
//     }
//   }
//   return this.sccCount;
//   }
// }

// let sol = new Solution();
// console.log(sol.kosaraju([[3, 2], [0], [1], [4], []]))