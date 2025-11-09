//Breadth first Search

// bfs is graph traversal algorithm where you visit all its neigbour node then
// you visit move to next node/vertices

class Graph {
  constructor() {
    this.adjacency_List = new Map();
  }

  addEdge(start, end, direction) {
    // graph is directed - then direction is 1
    // graph is undirected - then direction is 0

    if (this.adjacency_List.get(start)) {
      this.adjacency_List.get(start).add(end);
    } else {
      this.adjacency_List.set(start, new Set());
      this.adjacency_List.get(start).add(end);
    }

    if (direction == 0) {
      if (this.adjacency_List.get(end)) {
        this.adjacency_List.get(end).add(start);
      } else {
        this.adjacency_List.set(end, new Set());
        this.adjacency_List.get(end).add(start);
      }
    }
  }

  bfs(map, s) {
    let visited = new Set();
    let queue = [s];

    while (queue.length) {
      let ele = queue.shift();
      if (!visited.has(ele)) {
        visited.add(ele);
        console.log(ele);
        queue.push(...Array.from(map.get(ele)));
      }
    }
  }
}
//Time Complexity (TC): O(V + E), where V is the number of vertices (nodes) and E is the number of edges in the graph.
// Space Complexity (SC): O(V + E), where V is the number of vertices and E is the number of edges in the graph.

let graph = new Graph();
// graph.addEdge(0, 1, 0);
// graph.addEdge(1, 0, 0);
// graph.addEdge(1, 2, 0);
// graph.addEdge(1, 3, 0);
// graph.addEdge(2, 1, 0);
// graph.addEdge(2, 3, 0);
// graph.addEdge(3, 1, 0);
// graph.addEdge(3, 4, 0);
// graph.addEdge(4, 3, 0);
// graph.addEdge(4, 0, 0);
// graph.addEdge(0, 4, 0);
graph.addEdge(0, 3, 0);
graph.addEdge(3, 1, 0);
graph.addEdge(1, 2, 0);
graph.addEdge(4, 1, 0);
//graph.bfs(graph.adjacency_List, 0);
console.log(graph);

// Time Complexity (TC):
// Outer While Loop: The while loop will run once for every node and every edge. Specifically:

// Every node is processed once: We dequeue it and mark it as visited.
// For each node, we examine its neighbors, and each neighbor is added to the queue at most once (since once visited, it won't be re-added).
// Neighbor Processing: For each node ele, we are processing all its neighbors, which takes time proportional to the number of neighbors. If deg(v) is the degree of vertex v (i.e., the number of neighbors of v), then for all nodes across the entire graph, this is equivalent to processing all edges.

// Overall Time Complexity:

// For every node, the visit and queue operations are O(1).
// For every edge, the neighbor processing (queue.push(...Array.from(map.get(ele)))) is O(1) per neighbor, and for a node with deg(v) neighbors, the processing of the neighbors takes O(deg(v)).
// Thus, the total time complexity is proportional to the number of nodes V plus the number of edges E. In summary, the time complexity is O(V + E).

// Space Complexity (SC):
// Queue: The maximum size of the queue is equal to the maximum number of nodes that might be in the queue at any point in time, which is O(V) (if all nodes are in the queue before any are processed).
// Visited Set: The visited set stores all the nodes that have been visited, which also requires O(V) space.
// Neighbors in the Map: The map stores all the nodes and their neighbors. This requires O(V + E) space, as each node has a set of neighbors, and the set's total size across all nodes is O(E).
// Thus, the space complexity is dominated by the storage for the graph (the map) and the visited set and queue, so the space complexity is O(V + E).
