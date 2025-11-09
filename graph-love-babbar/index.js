//What is graph

// A graph is a data structure used to represent a collection of entities (called vertices or nodes) and the relationships (called edges or arcs) between them.

//Graphs can be used to model various real-world systems, such as social networks, web pages, transportation systems, etc.

// Components of a Graph:
// Vertices (Nodes): These are the fundamental units of a graph, which represent entities or objects in the system.
// Edges (Arcs): These represent the relationships or connections between the nodes. An edge can be directed or undirected, depending on whether the relationship is one-way or bidirectional.

// //Types of Graphs:
// Undirected Graph: In this type of graph, the edges have no direction. If there is an edge between node A and node B, it means A is connected to B, and B is also connected to A.

// Example: Social networks (friends are connected to each other).
// Directed Graph (Digraph): In this type, the edges have a direction. If there is an edge from node A to node B, it means A is connected to B, but not necessarily the other way around.

// Example: Web pages, where a link from one page to another represents a directed connection.
// Weighted Graph: Each edge has a weight or cost associated with it. These weights can represent distances, time, costs, or other quantities.

// Example: Maps, where the weight of an edge could represent the distance or time between two locations.
// Unweighted Graph: No weights are assigned to the edges.

// Example: A simple representation of a network where just the connectivity matters.
// Cyclic and Acyclic Graphs:

// Cyclic Graph: A graph that contains at least one cycle (a path where you can return to the starting node).
// Acyclic Graph: A graph with no cycles, meaning it’s impossible to start at a node and return to the same node by following the edges.
// Connected and Disconnected Graphs:

// Connected Graph: There is a path between every pair of nodes.
// Disconnected Graph: Some nodes might not have any path to other nodes.

//Graph

//      Edge
//        |
//       \|/
//   A --------- B \
//   |           |   \
//   |           |    E
//   |           |   /
//   C --------- D /
// Node - A,B,C,D,E are nodes
// Edges - A to B is connected then the it is known as edges

//what is Graph
// Graph is a type of non linear data structure which is a combination of nodes/vertices & edges

//Types of Graph

//undirected Graph -  above diagram is an example of undirected graph
// we can go from A to B and B to A also
//Directed Graph -
//      Edge
//        |
//       \|/
//   A ---------> B \
//   |            |   \
//   |            |    E
//  \|/           |   /
//   C ---------> D /
// this is an example of directed graph, you can go from A to B or A to C
// but you cannot go B to A or C to A.

//      Edge
//        |
//       \|/
//   A --------- B \
//   |           |   \
//   |           |    E
//   |           |   /
//   C --------- D /
//Degere of D, what is Degree of any node
// the number of nodes connected to the node is the degree

// E,B,C are connected with D so degree of D is 3
// this is in case of indirected graph

// in case of directed graph
// 1 there is indegree - no of nodes coming to that node
// 2 there is outdegree -  no of nodes going from that node
//      Edge
//        |
//       \|/
//   A ---------> B \
//   |            |   \
//   |            |    E
//  \|/          \|/   /
//   C ---------> D  /
// in degree of C is 1 (A->C)
// out degree of C is 1 (C->D)

// weighted Graph
//every edges will contain some weight on that

//      Edge
//        |
//       \|/
//       1
//   A --------- B \ 1
//   |           |   \
//   | 1         |    E
//   |           |   / 1
//   C --------- D /
//       1
// weight of A->C is 1
// weight of C->D is 11
// if no weight is given in case of undirected graph and you have to apply some
// algorithm based on weight
// you can assume weight to be 1
// this is known as weighted undirected graph

// in directed Graph
// same goes if no weight assume one 1
// if weight is given then it is known as weighted directed graph
//      Edge
//        |
//       \|/
//       5
//   A ---------> B \ 2
//   |            |   \
//   | 6          |    E
//  \|/            |   / 9
//   C ---------> D /
//       11
// weight of A->C is 6
// weight of C->D is 11

// Path - A path is way to reach from one node to another
// but nodes cannot be repeated
// A->B->E->D is a path to reach from A to D
//  A->B->D->C->A is not a path

//https://www.geeksforgeeks.org/graph-and-its-representations/

//Breadth First Search or BFS for a Graph
// Breadth First Search (BFS) is a fundamental graph traversal algorithm. It begins with a node, then first traverses all its adjacent. Once all adjacent are visited, then their adjacent are traversed.

// BFS is different from DFS in a way that closest vertices are visited before others. We mainly traverse vertices level by level.
// Popular graph algorithms like Dijkstra’s shortest path, Kahn’s Algorithm, and Prim’s algorithm are based on BFS.
// BFS itself can be used to detect cycle in a directed and undirected graph, find shortest path in an unweighted graph and many more problems.

//
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
}

let graph = new Graph();
graph.addEdge(2, 4, 0);
graph.addEdge(2, 10, 0);
console.log(graph);
