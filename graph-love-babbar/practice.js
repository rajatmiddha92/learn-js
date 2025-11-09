class Graph {
  constructor() {
    this.list = new Map();
  }

  addEdge(u, v) {
    this.list.get(u).add(v);
  }

  dfs(visited, node) {
    visited[node] = true;
    console.log(node);

    for (let child of this.list.get(node)) {
      if (visited[child] == false) {
        this.dfs(visited, child);
      }
    }
  }
  graphTraversalDFS(adj) {
    for (let i = 0; i < adj.length; i++) {
      let arr = adj[i];
      this.list.set(i, new Set());
      while (arr.length) {
        let edge = arr.pop();
        this.addEdge(i, edge);
      }
    }

    let visited = Array(adj.length + 1).fill(false);

    // just need visited array in dfs

    for (let [node, child] of this.list) {
      if (!visited[node]) {
        this.dfs(visited, node);
      }
    }
  }

  bfs(visited, queue) {
    while (queue.length) {
      let node = queue.shift();
      console.log(node);

      for (let child of this.list.get(node)) {
        if (visited[child] == false) {
          visited[child] = true;
          queue.push(child);
        }
      }
    }
  }

  graphTraversalBFS(adj) {
    for (let i = 0; i < adj.length; i++) {
      let arr = adj[i];
      this.list.set(i, new Set());
      while (arr.length) {
        let edge = arr.pop();
        this.addEdge(i, edge);
      }
    }

    let visited = new Array(adj.length + 1).fill(false);
    let queue = [];
    // bfs need one queue & visited in undirected graph

    for (let [node, child] of this.list) {
      if (!visited[node]) {
        queue.push(node);
        visited[node] = true;
        this.bfs(visited, queue);
      }
    }
  }
}

let g1 = new Graph();
// g1.graphTraversalBFS([
//   [2, 3, 1],
//   [2, 3, 5, 6, 0],
//   [0, 1],
//   [0, 1, 5],
//   [7],
//   [1, 3],
//   [1],
//   [4],
// ]);
// g1.graphTraversalBFS([
//   [2, 3, 1],
//   [2, 3, 5, 6, 0],
//   [0, 1],
//   [0, 1, 5],
//   [7],
//   [1, 3],
//   [1],
//   [4],
// ]);
g1.graphTraversalBFS([[2], [5], [1], [0, 1, 5], [], [], [1], [4]]);
// console.log(g1);
