// we already have studied to find shortest path in Directed weighted Graph using dijstra'a Algo

// but we can handle only edges with positive weights with Dijstra's

// with bellman Ford Algo, we can handle negative weights as well

// we can find out negative cycle also using bellman ford

// neagtive cycle means
// if you process some cycle then its answer path is negative then
// you roate again then path will be more negative

//    A
//
//  C    B

// A-B distance -12
// B-C distance -8
// C-A distance 6
// start node let say c and dest node is B

// so distacne from C to A is 6
//  then A to B 6-12 = -6 so right now distance is -6
// now let say we again go one more cycle
// then B-C -6 + -8 = -6-8 = -14
// then C-A -14 + 6 = -8
// then A-B  -8 + -12 = -8-12 = -20 now we got more shotest path which was -6 now it is -20 so it will be a never ending loop
// so bellman ford can detect negtive cycle
// 2nd thing if no negative cycle is there then you can also find shortest path

// bellman ford can apply on Directed Graphs with negative weights
// but not negative cycle

// how to apply it on undirected graph
// just make it to directed graph

// let say an edge from A to B -- > A-----B
// A-------->B
// A<--------B
// coverted undriected graph to directed graph
// to apply bellman ford

//Bellman-Ford
// Difficulty: MediumAccuracy: 48.11%Submissions: 171K+Points: 4Average Time: 25m
// Given a weighted and directed graph of v vertices and edges, Find the shortest distance of all the vertex's from the source vertex, src and return a list of integers where the ith integer denotes the distance of the ith node from the source node. If a vertices can't be reach from the s then mark the distance as 10^8.
// Note: If there exist a path to a negative weighted cycle from the source node then return {-1}.

// Examples:

// Input: edges = [[0,1,9]], src = 0

// Output: [0, 9]
// Explanation: Shortest distance of all nodes from source is printed.
// Input: edges = [[0,1,5], [1,0,3], [1,2,-1], [2,0,1]], src = 2

// Output: [1, 6, 0]
// Explanation: For nodes 2 to 0, we can follow the path: 2-0. This has a distance of 1. For nodes 2 to 1, we cam follow the path: 2-0-1, which has a distance of 1+5 = 6,
// Constraints:
// 1 ≤ V ≤ 500
// 1 ≤ E ≤ V*(V-1)
// -1000 ≤ data of nodes, weight ≤ 1000
// 0 ≤ S < V

class Solution {
  constructor() {
    this.list = new Map();
  }

  addEdge(u, v, w) {
    this.list.get(u).push([v, w]);
  }
  bellmanFord(V, edges, src) {
    for (let i = 0; i < edges.length; i++) {
      let [u, v, w] = edges[i];
      if (!this.list.has(u)) this.list.set(u, []);
      this.addEdge(u, v, w);
    }

    let distance = Array(V).fill(1e8);
    distance[src] = 0;

    for (let i = 0; i < V - 1; i++) {
      for (let [u, edges] of this.list) {
        for (let [v, w] of this.list.get(u) || []) {
          if (distance[u] != 1e8 && distance[u] + w < distance[v]) {
            distance[v] = distance[u] + w;
          }
        }
      }
    }
    //   console.log(distance)

    for (let [u, edges] of this.list) {
      for (let [v, w] of this.list.get(u) || []) {
        if (distance[u] != 1e8 && distance[u] + w < distance[v]) {
          return [-1];
        }
      }
    }
    return distance;
  }
}
