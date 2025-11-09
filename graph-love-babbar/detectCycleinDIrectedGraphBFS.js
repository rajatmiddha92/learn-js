//see kahn's algo for topological sort to understand this

class Graph {
  constructor(V) {
    this.list = new Map();
    this.inDegree = Array(V).fill(0);
  }

  addEdge(u, v) {
    this.list.get(u).add(v);
    this.inDegree[v]++;
  }
}

class Solution {
  // Function to detect cycle in a directed graph.
  isCyclic(V, adj) {
    let graph = new Graph(V);
    // code here
    for (let i = 0; i < V; i++) {
      let arr = adj[i];
      graph.list.set(i, new Set());
      while (arr.length) {
        let ele = arr.pop();
        graph.addEdge(i, +ele);
      }
    }

    let q1 = [];
    let degreeArr = graph.inDegree;
    for (let i = 0; i < degreeArr.length; i++) {
      if (degreeArr[i] == 0) {
        q1.push(i);
      }
    }

    while (q1.length) {
      let ele = q1.shift();

      for (let neigbours of graph.list.get(ele)) {
        graph.list.get(ele).delete(neigbours);
        graph.inDegree[neigbours]--;
        if (graph.inDegree[neigbours] == 0) {
          q1.push(neigbours);
        }
      }
    }

    degreeArr = graph.inDegree;
    for (let i = 0; i < degreeArr.length; i++) {
      if (degreeArr[i] != 0) {
        return true;
      }
    }
    return false;
  }
}
