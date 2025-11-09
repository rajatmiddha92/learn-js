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
  printList() {
    const visitedNode = new Map();
    for (let vertex of this.adjacencyList.keys()) {
      visitedNode.set(vertex, false);
    }
    for (let vertex of this.adjacencyList.keys()) {
      if (!visitedNode.get(vertex)) {
        this._bfs(vertex, visitedNode);
      }
    }
  }

  _bfs(startNode, visitedNode) {
    const queue = [startNode];
    visitedNode.set(startNode, true);
    while (queue.length) {
      const currentVertex = queue.shift();
      console.log(currentVertex);
      for (let neighbor of this.adjacencyList.get(currentVertex)) {
        if (!visitedNode.get(neighbor)) {
          visitedNode.set(neighbor, true);
          queue.push(neighbor);
        }
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
graph.addEdge(0, 3);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);

graph.printList();

console.log(graph);
