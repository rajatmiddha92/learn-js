class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(node) {
    this.adjacencyList.set(node, new Set());
  }

  addEdge(node1, node2) {
    this.adjacencyList.get(node1).add(node2);
    this.adjacencyList.get(node2).add(node1);
  }

  hasEdge(node1, node2) {
    return this.adjacencyList.get(node1).has(node2);
  }

  getNeigbours(node) {
    return this.adjacencyList.get(node);
  }

  printList() {
    let visitedNode = new Map();
    for (let data of this.adjacencyList.keys()) {
      visitedNode.set(data, false);
    }
    for (let [key, value] of this.adjacencyList.entries()) {
      if (!visitedNode.get(key)) {
        this.dfs(key, visitedNode);
      }
    }
  }

  dfs(data, visitedNode) {
    console.log(data);
    visitedNode.set(data, true);
    for (let num of this.adjacencyList.get(data).keys()) {
      if (!visitedNode.get(num)) {
        this.dfs(num, visitedNode);
      }
    }
  }
}

let graph = new Graph();
graph.addNode(0);
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);
// console.log(graph.hasEdge(2, 3));
// console.log(graph.getNeigbours(2));
// console.log(graph);

graph.printList();
