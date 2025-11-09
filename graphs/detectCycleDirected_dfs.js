class Graph {
  constructor() {
    this.list = new Map();
  }

  addNode(node) {
    this.list.set(node, new Set());
  }

  addEdge(node1, node2) {
    this.list.get(node1).add(node2);
  }

  detectCycle() {
    let visited = new Map();
    let dfscall = new Map();
    for (let node of this.list.keys()) {
      visited.set(node, false);
      dfscall.set(node, false);
    }

    for (let node of this.list.keys()) {
      if (!visited.get(node) && this.hasCycle(node, visited, dfscall)) {
        return true;
      }
    }
    return false;
  }

  hasCycle(startNode, visited, dfscall) {
    visited.set(startNode, true); //{1=>true,2=>true,3=>true,7=>true}
    dfscall.set(startNode, true); //{1=>true,2=>true,3=>true,7=>true}

    for (let neigbour of this.list.get(startNode)) {
      console.log(neigbour);
      if (!visited.get(neigbour) && this.hasCycle(neigbour, visited, dfscall)) {
        return true;
      } else if (dfscall.get(neigbour)) {
        return true;
      }
    }
    dfscall.set(startNode, false);
    return false;
  }
}

let graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);
graph.addNode(6);
graph.addNode(7);
graph.addNode(8);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 7);
graph.addEdge(3, 8);
graph.addEdge(4, 5);
graph.addEdge(5, 6);
graph.addEdge(6, 4);
graph.addEdge(8, 7);
console.log(graph);
console.log(graph.detectCycle());
