// Tutorials
// Jobs
// Practice
// Contests
// R
// 50

// Topological sort
// Difficulty: MediumAccuracy: 56.52%Submissions: 258K+Points: 4
// Given an adjacency list for a Directed Acyclic Graph (DAG) where adj[u] contains a list of all vertices v such that there exists a directed edge u -> v. Return topological sort for the given graph.

// Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge u -> v, vertex u comes before v in the ordering.
// Note: As there are multiple Topological orders possible, you may return any of them. If your returned Topological sort is correct then the output will be 1 else 0.

// Examples:

// Input: adj = [[], [0], [0], [0]]

// Output: 1
// Explanation: The output 1 denotes that the order is valid. Few valid Topological orders for the given graph are:
// [3, 2, 1, 0]
// [1, 2, 3, 0]
// [2, 3, 1, 0]
// Input: adj = [[], [3], [3], [], [0,1], [0,2]]

// Output: 1
// Explanation: The output 1 denotes that the order is valid. Few valid Topological orders for the graph are:
// [4, 5, 0, 1, 2, 3]
// [5, 2, 4, 0, 1, 3]
// Constraints:
// 2  ≤  V  ≤  103
// 1  ≤  E  ≤  (V * (V - 1)) / 2

// topological sort always work on DAG only Directed Acyclic Graph
// because cyclic graph do not have a valid topolical sort

// topological sort is a linear ordering of vertices such that for every edge
//  u to v, u always appears befor v in that ordering (refer image in
// folder Topological Sort example.png)

//using bfs

// class Solution {
//   constructor() {
//     this.list = new Map();
//     this.inDegree = [];
//   }

//   addEdge(u, v) {
//     this.list.get(u).add(v);
//     this.inDegree[v]++;
//   }
//   // Function to return list containing vertices in Topological order.
//   topologicalSort(adj) {
//     // code here
//     this.inDegree = Array(adj.length).fill(0);

//     for (let i = 0; i < adj.length; i++) {
//       this.list.set(i, new Set());
//       let arr = adj[i];
//       while (arr.length) {
//         this.addEdge(i, +arr.pop());
//       }
//     }
//     let q1 = [];
//     let temp = this.inDegree;
//     for (let i = 0; i < temp.length; i++) {
//       if (!temp[i]) {
//         q1.push(i);
//       }
//     }

//     let q2 = [];
//     while (q1.length) {
//       let node = q1.shift();
//       q2.push(node);
//       for (let child of this.list.get(node)) {
//         this.list.get(node).delete(child);
//         this.inDegree[child]--;
//         if (!this.inDegree[child]) {
//           q1.push(child);
//         }
//       }
//     }
//     return q2;
//   }
// }

// using DFS with Kahn's Algo
// class Solution {
//   constructor() {
//     this.list = new Map();
//     this.inDegree = [];
//   }

//   addEdge(u, v) {
//     this.list.get(u).add(v);
//     this.inDegree[v]++;
//   }

//   dfs(node, result) {
//     result.push(node);

//     for (let child of this.list.get(node)) {
//       this.list.get(node).delete(child);
//       this.inDegree[child]--;
//       if (!this.inDegree[child]) {
//         this.dfs(child, result);
//       }
//     }
//   }
//   // Function to return list containing vertices in Topological order.
//   topologicalSort(adj) {
//     // code here
//     this.inDegree = Array(adj.length).fill(0);

//     for (let i = 0; i < adj.length; i++) {
//       this.list.set(i, new Set());
//       let arr = adj[i];
//       while (arr.length) {
//         this.addEdge(i, +arr.pop());
//       }
//     }
//     let q1 = [];
//     let temp = this.inDegree;
//     for (let i = 0; i < temp.length; i++) {
//       if (!temp[i]) {
//         q1.push(i);
//       }
//     }

//     let result = [];

//     // running for every element in q1 just in case if
//     // we can't move forward from that node to evry possible node
//     for (let i = 0; i < q1.length; i++) {
//       this.dfs(q1[i], result);
//     }

//     return result;
//   }
// }

// using DFS with stack

// approach which we move out of the call if already visited
// during the back track time we insert that node in stack
// while doing this we get our valid Topological Sort

class Solution {
  constructor() {
    this.list = new Map();
  }

  addEdge(u, v) {
    this.list.get(u).add(v);
  }

  dfs(node, visited, result) {
    visited.add(node);

    for (let child of this.list.get(node)) {
      if (!visited.has(child)) {
        this.dfs(child, visited, result);
      }
    }
    result.unshift(node);
  }
  // Function to return list containing vertices in Topological order.
  topologicalSort(adj) {
    // code here

    for (let i = 1; i < adj.length; i++) {
      this.list.set(i, new Set());
      let arr = adj[i];
      while (arr.length) {
        this.addEdge(i, +arr.pop());
      }
    }

    let visited = new Set();
    let stack = [];

    for (let [key, value] of this.list) {
      if (!visited.has(key)) {
        this.dfs(key, visited, stack);
      }
    }

    return stack;
  }
}

let sol = new Solution();
console.log(sol.topologicalSort([[], [2, 3], [4], [4], [5, 6], [6], []]));
