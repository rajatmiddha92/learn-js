// what is strongly connected components

// strongly connected components are only valid for directed graphs
// All vertices in the graph are reachable from one another, and every vertex
//  can be reached from any other vertex, forming a strongly connected component.
// means subgraph is connected
// there can be multiple strongly connected components in a graph

// approach
// sort all node based on their finsihing time
// i.e. topological sort
// transpose the graph
// as it is directed graph let say there is an edge from u to v
// make it v to u
// count the sCC while applying dfs

// https://www.geeksforgeeks.org/dsa/strongly-connected-components/

class Solution {
  constructor() {
    this.list = new Map();
    this.transpose = new Map();
  }

  addEdge(u, v) {
    this.list.get(u).add(v);
    this.transpose.get(v).add(u);
  }

  dfs(visited, node, stack) {
    visited.add(node);

    for (let child of this.list.get(node)) {
      if (!visited.has(child)) {
        this.dfs(visited, child, stack);
      }
    }
    stack.push(node);
  }

  dfsTwo(visited, node) {
    visited.add(node);

    for (let child of this.transpose.get(node) || new Set()) {
      if (!visited.has(child)) {
        this.dfsTwo(visited, child);
      }
    }
  }

  kosaraju(adj) {
    // code here
    for (let i = 0; i < adj.length; i++) {
      let temp = adj[i];

      this.list.set(i, new Set());

      while (temp.length) {
        let v = temp.pop();

        if (!this.transpose.has(v)) this.transpose.set(v, new Set());

        this.addEdge(i, v);
      }
    }

    let stack = [];
    let visited = new Set();

    for (let i = 0; i < adj.length; i++) {
      if (!visited.has(i)) {
        this.dfs(visited, i, stack);
      }
    }

    let count = 0;
    visited = new Set();

    while (stack.length) {
      let node = stack.pop();

      if (!visited.has(node)) {
        count++;
        this.dfsTwo(visited, node);
      }
    }

    return count;
  }
}

let sol = new Solution();
console.log(sol.kosaraju([[2, 3], [0], [1], [4], []]));




// do a dfs and store the nodes in a stack (topological sort / finishing time of the node)
// transpose the graph (reverse all the edges)
// do a dfs on the transpose graph (dfs on the transpose graph will give the strongly connected components)
// count the number of times dfs is called (count of scc)
// that is the number of strongly connected components in the graph

// 1. Kosaraju's Algorithm:
// Kosaraju's Algorithm involves two main phases:

// Performing Depth-First Search (DFS) on the Original Graph:
// We first do a DFS on the original graph and record the finish times of nodes (i.e., the time at which the DFS finishes exploring a node completely).
// Performing DFS on the Transposed Graph:
// We then reverse the direction of all edges in the graph to create the transposed graph.
// Next, we perform a DFS on the transposed graph, considering nodes in decreasing order of their finish times recorded in the first phase.
// Each DFS traversal in this phase will give us one SCC.
// Here’s a simplified version of Kosaraju’s Algorithm:

// DFS on Original Graph: Record finish times.
// Transpose the Graph: Reverse all edges.
// DFS on Transposed Graph: Process nodes in order of decreasing finish times to find SCCs.

class Solution {
    
    dfs(node,adj,visited,stack)
    {
        visited[node]=true
        
        for(let child of adj[node]){
            if(!visited[child]){
                this.dfs(child,adj,visited,stack)
            }
        }
        stack.push(node)
    }
    
    
    kosaraju(adj) {
        // code here
        let count = 0 
        let stack = []
        let visited = Array(adj.length).fill(false)
        
        for(let i=0;i<adj.length;i++){
            if(!visited[i]){
                this.dfs(i,adj,visited,stack)
            }
        }
        
        
        let revEdge=Array(adj.length).fill().map(()=>[])
        //console.log(adj)
        
        for(let i=0;i<adj.length;i++){
            let arr = adj[i]
            while(arr.length){
                let node = arr.pop()
                revEdge[node].push(i)
            }

        }
        
        let cnt = 0;
        
        visited = Array(adj.length).fill(false)
        //console.log(stack,revEdge)
        while(stack.length){
            let node  = stack.pop()
            if(!visited[node]){
                cnt++
                this.dfs(node,revEdge,visited,[])
   
            }
        }
        return cnt
    }
}