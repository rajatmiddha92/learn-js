// Depth First Search

// dfs is graph traversal algorithm where you visit  to its connected from start
// nodes until depth

// In Depth First Search (or DFS) for a graph, we traverse all adjacent(nearest) vertices one by one. When we traverse an adjacent vertex, we completely finish the traversal of all vertices reachable through that adjacent vertex. This is similar to a tree, where we first completely traverse the left subtree and then move to the right subtree. The key difference is that, unlike trees, graphs may contain cycles (a node may be visited more than once). To avoid processing a node multiple times, we use a boolean visited array.

class Graph {
  constructor() {
    this.adjacency_list = new Map();
  }

  addEdge(start, end, direction = 0) {
    // 0 direction means undirected
    // 1 mean direcetd
    if (this.adjacency_list.has(start)) {
      this.adjacency_list.get(start).add(end);
    } else {
      this.adjacency_list.set(start, new Set());
      this.adjacency_list.get(start).add(end);
    }
    if (direction == 0) {
      if (this.adjacency_list.has(end)) {
        this.adjacency_list.get(end).add(start);
      } else {
        this.adjacency_list.set(end, new Set());
        this.adjacency_list.get(end).add(start);
      }
    }
  }
  // bfs(list) {
  //   let stack = [0];
  //   let visited = new Set();
  //   // we need visited track
  //   // we will push element at top of stack
  //   while (stack.length) {
  //     let node = stack.shift();
  //     if (!visited.has(node)) {
  //       console.log(node);
  //       visited.add(node);
  //       stack.unshift(...Array.from(list.get(node)));
  //     }
  //   }
  // }

  solve(visited, list, start) {
    if (!visited.has(start)) {
      visited.add(start);
      console.log(start);

      for (let neigbour of list.get(start)) {
        this.solve(visited, list, neigbour);
      }
    }
    return;
  }
  dfs(list) {
    //using recursion
    let visited = new Set();
    this.solve(visited, list, 0);
  }
}

let graph = new Graph();
graph.addEdge(0, 4);
graph.addEdge(4, 2);
graph.addEdge(4, 1);
graph.addEdge(2, 3);
graph.addEdge(1, 5);
graph.addEdge(3, 5);
console.log(graph);
graph.dfs(graph.adjacency_list);

// 1. Time Complexity (TC)
// The time complexity of DFS is determined by the number of nodes and edges in the graph because, in the worst case, we may have to visit every node and traverse every edge.

// Steps involved in DFS:
// Visit each node: Each node is visited at most once.
// Traverse each edge: Each edge is traversed at most once.
// Given that graph is an adjacency list, the number of neighbors of each node is stored in a Set. If the graph has:

// V vertices (nodes),
// E edges (connections between nodes),
// In DFS, you will:

// Visit each node exactly once, and
// Visit each edge exactly once (since it's undirected, each edge will be visited twice — once from each of its two ends).
// Therefore, the time complexity is:

// Time Complexity:
// O(V+E)

// V represents the number of vertices (nodes).
// E represents the number of edges (connections between nodes).
// This is because we perform a constant amount of work (checking the node and iterating over its neighbors) for each node and edge in the graph.

// 2. Space Complexity (SC)
// The space complexity is determined by the amount of extra memory used by the algorithm, which includes:

// The visited set (to track visited nodes),
// The recursion stack used for DFS.
// Components of space usage:
// Visited Set (visited):

// This set stores up to V elements, one for each node in the graph.
// The space complexity for the visited set is O(V).
// Recursion Stack:

// In the worst case, the recursion stack can grow to a depth equal to the number of nodes in the graph if the graph is very deep (i.e., if the graph is essentially a single chain of nodes).
// The space complexity due to recursion is O(V), because the deepest possible recursive call chain is proportional to the number of nodes.
// Thus, the total space complexity is the sum of the space used by the visited set and the recursion stack.

// Space Complexity:
// O(V)

// This accounts for the storage of the visited nodes and the maximum depth of the recursion stack in the worst case.

// Conclusion
// Time Complexity:
// O(V+E)
// Space Complexity: O(V)
// This is the typical time and space complexity for a DFS algorithm using an adjacency list representation of a graph.
