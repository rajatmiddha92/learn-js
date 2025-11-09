class Solution {
  // Function to detect cycle in a directed graph.
  constructor() {
    this.list = new Map();
    this.inDegree = [];
  }

  addEdge(u, v) {
    this.list.get(u).add(v);
    this.inDegree[v]++;
  }
  isCyclic(V, adj) {
    this.inDegree = Array(V).fill(0);

    // code here
    for (let i = 0; i < V; i++) {
      this.list.set(i, new Set());
      let arr = adj[i];
      while (arr.length) {
        this.addEdge(i, +arr.pop());
      }
    }

    let temp = this.inDegree;
    let q1 = [];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] == 0) {
        q1.push(i);
      }
    }

    while (q1.length) {
      let node = q1.shift();

      for (let neighbours of this.list.get(node)) {
        this.list.get(node).delete(neighbours);
        this.inDegree[neighbours]--;
        if (this.inDegree[neighbours] == 0) {
          q1.push(neighbours);
        }
      }
    }

    for (let [key, value] of this.list) {
      if (value.size) {
        return true;
      }
    }
    return false;
  }
}
