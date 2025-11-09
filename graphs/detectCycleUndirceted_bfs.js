class Graph {
  constructor() {
    this.list = new Map();
  }

  addNode(node) {
    this.list.set(node, new Set());
  }

  addEdge(node1, node2) {
    this.list.get(node1).add(node2);
    this.list.get(node2).add(node1);
  }

  printList() {
    let visited = new Map();
    for (let node of this.list.keys()) {
      visited.set(node, false);
    }

    for (let node of this.list.keys()) {
      if (!visited.get(node)) {
        this.bfs(node, visited);
      }
    }
  }

  bfs(startNode, visited) {
    let queue = [startNode]; //[1]
    visited.set(startNode, true);
    console.log(startNode);
    while (queue.length) {
      let currNode = queue.shift(); //1
      for (let neigbour of this.list.get(currNode)) {
        if (!visited.get(neigbour)) {
          visited.set(neigbour, true);
          console.log(neigbour);
          queue.push(neigbour);
        }
      }
    }
  }

  detectCycle() {
    let visited = new Map();
    for (let node of this.list.keys()) {
      visited.set(node, false);
    }

    for (let node of this.list.keys()) {
      if (!visited.get(node) && this.checkCylce(node, visited)) {
        return true;
      }
    }
    return false;
  }

  checkCylce(startNode, visited) {
    let parent = new Map();
    visited.set(startNode, true); //{1=>true}
    let queue = [startNode]; //[1]
    while (queue.length) {
      let currNode = queue.shift(); //1 2
      for (let neigbour of this.list.get(currNode)) {
        if (!visited.get(neigbour)) {
          visited.set(neigbour, true); //{1=>true,2=>true} //1 3
          parent.set(neigbour, currNode); //{2=>1,}
          queue.push(neigbour); //[2]
        } else if (parent.get(currNode) != neigbour) {
          return true;
        }
      }
    }
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
graph.addNode(9);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(4, 5);
graph.addEdge(5, 6);
graph.addEdge(5, 7);
graph.addEdge(6, 8);
graph.addEdge(7, 8);
graph.addEdge(8, 9);
console.log(graph.detectCycle());
console.log(graph);
