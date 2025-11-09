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

  isCycle(adj) {
    // code here
    for (let i = 0; i < adj.length; i++) {
      let arr = adj[i];
      while (arr.length) {
        this.addEdge(i, arr.pop());
      }
    }

    //using bfs
    let visited = new Set();

    for (let [key, value] of this.list) {
      if (!visited.has(key)) {
        let parent = new Map();
        let queue = [key];
        parent.set(key, -1);
        while (queue.length) {
          let node = queue.shift();
          visited.add(node);

          for (let neighbours of this.list.get(node)) {
            if (!visited.has(neighbours)) {
              queue.push(neighbours);
              parent.set(neighbours, node);
            } else if (parent.get(node) != neighbours) {
              return true;
            }
          }
        }
      }
    }

    return false;
  }
}
