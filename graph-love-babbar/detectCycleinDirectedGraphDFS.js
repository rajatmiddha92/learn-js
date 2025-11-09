// Cycle in a Directed Graph
// Difficulty: MediumAccuracy: 27.88%Submissions: 437K+Points: 4
// Given a Directed Graph with V vertices (Numbered from 0 to V-1) and E edges, check whether it contains any cycle or not.
// The graph is represented as an adjacency list, where adj[i] contains a list of vertices that are directly reachable from vertex i. Specifically, adj[i][j] represents an edge from vertex i to vertex j.

// Example 1:

// Input:

// Output: 1
// Explanation: 3 -> 3 is a cycle
// Example 2:
// Input:

// Output: 0
// Explanation: no cycle in the graph
// Constraints:
// 1 ≤ V, E ≤ 105

// class Graph {
//   constructor() {
//     this.list = new Map();
//   }

//   addEdge(start, end) {
//     this.list.get(start).add(end);
//   }

//   dfs(start, visited, node) {
//     if (visited.has(node) && node == start) {
//       return true;
//     } else if (visited.has(node)) {
//       return false;
//     }

//     visited.add(node);

//     for (let neighbours of this.list.get(node)) {
//       if (this.dfs(start, visited, neighbours)) {
//         return true;
//       }
//     }
//     return false;
//   }
// }

// class Solution {
//   // Function to detect cycle in a directed graph.
//   isCyclic(V, adj) {
//     // code here

//     let graph = new Graph();

//     for (let i = 0; i < V; i++) {
//       let arr = adj[i];
//       graph.list.set(i, new Set());
//       while (arr.length) {
//         let ele = arr.pop();
//         graph.addEdge(i, +ele);
//       }
//     }
//     //console.log(graph);

//     for (let [idx, data] of graph.list) {
//       let visited = new Set();
//       if (graph.dfs(idx, visited, idx)) {
//         return true;
//       }
//     }
//     return false;
//   }
// }

// 2 nd approcah using dfs call track

// we will track calls also
// if node is visited and call is also done
// it means cycle is present
// if node is already visited we wont call it again

class Graph {
  constructor() {
    this.list = new Map();
  }

  addEdge(start, end) {
    this.list.get(start).add(end);
  }

  // dfs(node, visited, dfsCall) {
  //   if (visited.has(node) && dfsCall.has(node)) {
  //     return true;
  //   } else if (visited.has(node)) {
  //     return false;
  //   }
  //   visited.add(node);
  //   dfsCall.add(node);

  //   for (let neigbour of this.list.get(node)) {
  //     if (this.dfs(neigbour, visited, dfsCall)) {
  //       return true;
  //     }
  //   }
  //   dfsCall.delete(node);
  //   return false;
  // }

  // another way of writing same dfs function
  dfs(node, visited, dfsCall) {
    visited.add(node);
    dfsCall.add(node);

    for (let neigbour of this.list.get(node)) {
      if (!visited.has(neigbour)) {
        if (this.dfs(neigbour, visited, dfsCall)) {
          return true;
        }
      } else if (dfsCall.has(neigbour)) {
        return true;
      }
    }
    dfsCall.delete(node);
    return false;
  }
}

class Solution {
  // Function to detect cycle in a directed graph.
  isCyclic(V, adj) {
    // code here

    let graph = new Graph();

    for (let i = 0; i < V; i++) {
      let arr = adj[i];
      graph.list.set(i, new Set());
      while (arr.length) {
        let ele = arr.shift();
        graph.addEdge(i, +ele);
      }
    }
    //console.log(graph);
    let visited = new Set();
    let dfsCallTrack = new Set();

    for (let [idx, data] of graph.list) {
      if (!visited.has(idx)) {
        if (graph.dfs(idx, visited, dfsCallTrack)) {
          return true;
        }
      }
    }
    return false;
  }
}
let sol = new Solution();
// console.log(sol.isCyclic(4, [[1, 2], [2, 3], [3], [2]]));
console.log(sol.isCyclic(9, [[], [2], [3, 4], [7, 8], [5], [6], [4], [], [7]]));
