class Solution {
  // Function to detect cycle in an undirected graph.

  constructor() {
    this.list = new Map();
  }

  addEdge(u, v) {
    if (!this.list.has(u)) {
      this.list.set(u, new Set());
    }
    if (!this.list.has(v)) {
      this.list.set(v, new Set());
    }
    this.list.get(u).add(v);
    this.list.get(v).add(u);
  }
  dfs(node, parent, visited) {
    visited.add(node);

    for (let neighbours of this.list.get(node)) {
      if (!visited.has(neighbours)) {
        if (this.dfs(neighbours, node, visited)) {
          return true;
        }
      } else if (neighbours != parent) {
        return true;
      }
    }
    return false;
  }

  isCycle(adj) {
    // code here
    for (let i = 0; i < adj.length; i++) {
      let arr = adj[i];
      while (arr.length) {
        this.addEdge(i, arr.pop());
      }
    }

    let visited = new Set();
    for (let [key, value] of this.list) {
      if (!visited.has(key)) {
        if (this.dfs(key, -1, visited)) {
          return true;
        }
      }
    }
    return false;
  }
}
