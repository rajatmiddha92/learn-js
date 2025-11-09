class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(node) {
    this.adjacencyList.set(node, new Set());
  }

  addEdge(node1, node2) {
    this.adjacencyList.get(node1).add(node2);
    //if you want bidirectional
    this.adjacencyList.get(node2).add(node1);
  }
}

let graph = new Graph();
graph.addNode(0);
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addEdge(0, 3);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
console.log(graph);
//OP
// Graph {
//   adjacencyList: Map(5) {
//     0 => Set(1) { 3 },
//     1 => Set(3) { 2, 3, 4 },
//     2 => Set(1) { 1 },
//     3 => Set(2) { 0, 1 },
//     4 => Set(1) { 1 }
//   }
// }
