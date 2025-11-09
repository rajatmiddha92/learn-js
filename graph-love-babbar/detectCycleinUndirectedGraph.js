// Undirected Graph Cycle
// Difficulty: MediumAccuracy: 30.13%Submissions: 504K+Points: 4
// Given an undirected graph with V vertices labelled from 0 to V-1 and E edges, check whether the graph contains any cycle or not. The Graph is represented as an adjacency list, where adj[i] contains all the vertices that are directly connected to vertex i.

// NOTE: The adjacency list represents undirected edges, meaning that if there is an edge between vertex i and vertex j, both j will be adj[i] and i will be in adj[j].

// Examples:

// Input: adj = [[1], [0,2,4], [1,3], [2,4], [1,3]]
// Output: 1
// Explanation:

// 1->2->3->4->1 is a cycle.
// Input: adj = [[], [2], [1,3], [2]]
// Output: 0
// Explanation:

// No cycle in the graph.
// Constraints:
// 1 ≤ adj.size() ≤ 105

//using dfs
// class Graph {
//   constructor() {
//     this.list = new Map();
//   }

//   addEdge(start, end, direction = 0) {
//     if (this.list.has(start)) {
//       this.list.get(start).add(end);
//     } else {
//       this.list.set(start, new Set());
//       this.list.get(start).add(end);
//     }
//     if (direction == 0) {
//       if (this.list.has(end)) {
//         this.list.get(end).add(start);
//       } else {
//         this.list.set(end, new Set());
//         this.list.get(end).add(start);
//       }
//     }
//   }

//   //approach

//   // in undirected graph
//   // we can go from a to b and b to a
//   // so while we have traverse a to b
//   // to make sure we didnt traverse b to a
//   // which is parent node
//   // we keep track of parent
//   // so we dont fall in loop
//   // after that we still encounter visited node it means cycle exist
//   // note we are only entering neigbours which are not parent
//   // i.e directly connected
//   dfs(node, list, visited, parent) {
//     if (visited.has(node)) {
//       return true;
//     }
//     visited.add(node);

//     for (let neighbour of list.get(node)) {
//       if (parent != neighbour) {
//         if (this.dfs(neighbour, list, visited, node)) {
//           return true;
//         }
//       }
//     }
//     return false;
//   }
// }
// class Solution {
//   // Function to detect cycle in an undirected graph.
//   isCycle(adj) {
//     // code here
//     let graph = new Graph();
//     for (let i = 0; i < adj.length; i++) {
//       let ele = adj[i];
//       while (ele.length) {
//         let node = ele.pop();
//         graph.addEdge(i, node);
//       }
//     }
//     let visited = new Set();

//     for (let [idx, data] of graph.list) {
//       if (!visited.has(idx)) {
//         if (graph.dfs(idx, graph.list, visited, null)) {
//           return true;
//         }
//       }
//     }
//     return false;
//   }
// }

//using bfs
// detect cycle

// approach we start from source
// we move from source to next nodes
// and mark visited true
// for traversing from node to its neightbour
// we only move unvisted node is queue bcoz we dont want to fall
// back from node to its parent as it is undirected graph
// so every node in queue come one
// if any node come in queue which is already visited at some level
// so means two node  to next nmeigbour is same for both
// it means cycle exist
// class Graph {
//   constructor() {
//     this.list = new Map();
//   }

//   addEdge(start, end, direction = 0) {
//     if (this.list.has(start)) {
//       this.list.get(start).add(end);
//     } else {
//       this.list.set(start, new Set());
//       this.list.get(start).add(end);
//     }
//     if (direction == 0) {
//       if (this.list.has(end)) {
//         this.list.get(end).add(start);
//       } else {
//         this.list.set(end, new Set());
//         this.list.get(end).add(start);
//       }
//     }
//   }

//   bfs(list, visited, queue) {
//     while (queue.length) {
//       let node = queue.shift();

//       if (visited.has(node)) {
//         return true;
//       }

//       visited.add(node);

//       for (let neigbour of list.get(node)) {
//         if (!visited.has(neigbour)) {
//           queue.push(neigbour);
//         }
//       }
//     }

//     return false;
//   }
// }
// class Solution {
//   // Function to detect cycle in an undirected graph.
//   isCycle(adj) {
//     // code here
//     let graph = new Graph();
//     for (let i = 0; i < adj.length; i++) {
//       let ele = adj[i];
//       while (ele.length) {
//         let node = ele.pop();
//         graph.addEdge(i, node);
//       }
//     }
//     let visited = new Set();

//     for (let [idx, data] of graph.list) {
//       if (!visited.has(idx)) {
//         if (graph.bfs(graph.list, visited, [idx])) {
//           return true;
//         }
//       }
//     }
//     return false;
//   }
// }

//using bfs 2nd approach using parent relation

// class Graph {
//   constructor() {
//     this.list = new Map();
//   }

//   addEdge(start, end, direction = 0) {
//     if (this.list.has(start)) {
//       this.list.get(start).add(end);
//     } else {
//       this.list.set(start, new Set());
//       this.list.get(start).add(end);
//     }
//     if (direction == 0) {
//       if (this.list.has(end)) {
//         this.list.get(end).add(start);
//       } else {
//         this.list.set(end, new Set());
//         this.list.get(end).add(start);
//       }
//     }
//   }

//   bfs(list, visited, queue) {
//     let parent = new Map();
//     parent.set(queue[0], -1);
//     visited.add(queue[0]);

//     while (queue.length) {
//       let node = queue.shift();

//       for (let neigbour of list.get(node)) {
//         if (visited.has(neigbour) && parent.get(node) != neigbour) {
//           return true;
//         } else if (!visited.has(neigbour)) {
//           visited.add(neigbour);
//           parent.set(neigbour, node);
//           queue.push(neigbour);
//         }
//       }
//     }

//     return false;
//   }
// }
// class Solution {
//   // Function to detect cycle in an undirected graph.
//   isCycle(adj) {
//     // code here
//     let graph = new Graph();
//     for (let i = 0; i < adj.length; i++) {
//       let ele = adj[i];
//       while (ele.length) {
//         let node = ele.pop();
//         graph.addEdge(i, node);
//       }
//     }
//     let visited = new Set();

//     for (let [idx, data] of graph.list) {
//       if (!visited.has(idx)) {
//         if (graph.bfs(graph.list, visited, [idx])) {
//           return true;
//         }
//       }
//     }
//     return false;
//   }
// }

// let graph = new Graph();
// graph.addEdge(1, 2);
// graph.addEdge(2, 3);
// graph.addEdge(4, 5);
// graph.addEdge(5, 6);
// graph.addEdge(6, 8);
// graph.addEdge(8, 7);
// graph.addEdge(7, 5);
// graph.addEdge(8, 9);
// // console.log(graph);
// graph.dfs()
let solution = new Solution();
console.log(solution.isCycle([[1], [0, 2, 4], [1, 3, 2], [2, 4], [1, 3]]));

// class Solution {
//   // Function to detect cycle in an undirected graph.

//   bfs(visited, node, parent, adj) {
//     visited[node] = true;
//     let queue = [node];
//     parent[node] = -1;

//     while (queue.length) {
//       let node = queue.shift();

//       for (let child of adj[node]) {
//         if (!visited[child]) {
//           queue.push(child);
//           visited[child] = true;
//           parent[child] = node;
//         } else if (child != parent[node]) {
//           return true;
//         }
//       }
//     }
//     return false;
//   }

//   isCycle(adj) {
//     // code here

//     let visited = Array(adj.length).fill(false);
//     let parent = Array(adj.length).fill(-1);
//     for (let i = 0; i < adj.length; i++) {
//       if (visited[i] == false) {
//         if (this.bfs(visited, i, parent, adj)) {
//           return true;
//         }
//       }
//     }

//     return false;
//   }
// }

// class Solution {
//   // Function to detect cycle in an undirected graph.

//   dfs(adj, visited, node, parent) {
//     visited[node] = true;

//     for (let child of adj[node]) {
//       if (visited[child] == false) {
//         if (this.dfs(adj, visited, child, node)) {
//           return true;
//         }
//       } else if (parent != child) {
//         return true;
//       }
//     }
//     return false;
//   }
//   isCycle(adj) {
//     // code here
//     let visited = Array(adj.length).fill(false);

//     for (let i = 0; i < adj.length; i++) {
//       if (visited[i] == false) {
//         let parent = -1;
//         if (this.dfs(adj, visited, i, parent)) {
//           return true;
//         }
//       }
//     }

//     return false;
//   }
// }
