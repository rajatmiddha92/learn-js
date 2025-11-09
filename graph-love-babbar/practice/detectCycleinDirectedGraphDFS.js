class Solution {
  // Function to detect cycle in a directed graph.
  constructor() {
    this.list = new Map();
  }

  addEdge(u, v) {
    this.list.get(u).add(v);
  }

  dfs(visited, dfsCall, node) {
    visited.add(node);
    dfsCall.add(node);

    for (let neighbour of this.list.get(node)) {
      if (!visited.has(neighbour)) {
        if (this.dfs(visited, dfsCall, neighbour)) {
          return true;
        }
      } else if (dfsCall.has(neighbour)) {
        return true;
      }
    }
    dfsCall.delete(node);
    return false;
  }
  isCyclic(V, adj) {
    for (let i = 0; i <= V; i++) {
         let arr = adj[i];
     if(!this.list.has(arr[0])) this.list.set(arr[0], new Set());
     
      
        this.addEdge(arr[0], arr[1]);
      
    }

    let visited = new Set();
    let dfsCall = new Set();

    for (let [key, value] of this.list) {
      if (!visited.has(key)) {
        if (this.dfs(visited, dfsCall, key)) {
          return true;
        }
      }
    }
    return false;

    // code here
  }
}


let sol = new Solution();
console.log(sol.isCyclic(4,[[0, 1], [0, 2], [1, 2], [2, 0], [2, 3]]))