// minimum spanning tree

// for finding the minimum spanning tree we use Prim's Algorithm

// What is minimum spanning tree ?

// to understand minimum spanning tree, first understand
// what is spanning Tree ?

// you will be given undirected weighted graph
// if you are able to convert a graph into tree such that
// there a n nodes and n-1 edges
// and every node is reachable by any other node
// that is known as spanning tree

// jab ek graph ko, isko convert kr paye ek tree mein
// is prakar ki usme n nodes ho or n-1 edges ho
// or ki har ek node ek doosri node se reachable honi chahiye
//  to mai use ek spanning tree keh deta hu

// point to be note/observation (when you convert graph into tree there will be no cycle) As, tree do not have any cycle
// refer to the image in folder (name - spanningTree.png)

// what is minimum spanning tree?

// the tree cost is minimum
// which means the sum of all the weights should be minimum
// if there is more than one solution to build spanning tree
// so the tree which cost is minimum (sum of weights)
// should be minimum
// refer to image minimumSpanningTree.png in folder

// how we can find minimum spanning tree
// 1st sol get all the possible trees possible and find the minimum
// this sol is highly ineffecienct to get all spanning tree

// so is there any greedy method?
// yes 1st is Prim's algo
// 2nd is Kruskal's algo

// minimum spanning tree can be solve by prim's Algo or kruskal Algo

//Minimum Spanning Tree
// Difficulty: MediumAccuracy: 47.82%Submissions: 152K+Points: 4Average Time: 25m
// Given a weighted, undirected, and connected graph with V vertices and E edges, your task is to find the sum of the weights of the edges in the Minimum Spanning Tree (MST) of the graph. The graph is represented by an adjacency list, where each element adj[i] is a vector containing vector of integers. Each vector represents an edge, with the first integer denoting the endpoint of the edge and the second integer denoting the weight of the edge.

// Input:
// 3 3
// 0 1 5
// 1 2 3
// 0 2 1

// Output: 4
// Explanation:

// The Spanning Tree resulting in a weight
// of 4 is shown above.
// Input:
// 2 1
// 0 1 5

// Output: 5

// Explanation: Only one Spanning Tree is possible which has a weight of 5.
// Constraints:
// 2 ≤ V ≤ 1000
// V-1 ≤ E ≤ (V*(V-1))/2
// 1 ≤ w ≤ 1000
// The graph is connected and doesn't contain self-loops & multiple edges.

// algo to solve
// we get minimum weight/distance
// mark node visited
// also,update distance if found lower value while processing
// all connected node to find correct min distance

// approach
// prim's algo
// start with source node
// get minimum distance node which is not taken earlier
// mark it visited to true (node included in mst)
// get neighbour node
// if the distance of neigbour node is less than current existing
// distance then update the distance and update its parent
// repeat this steps untill all are visited

// note we will take only connected node only while creating mst
// that why we are taking child step by step

class Solution {
  constructor() {
    this.list = new Map();
  }

  addEdge(u, v, w) {
    if (!this.list.has(u)) this.list.set(u, []);

    this.list.get(u).push([v, w]);
  }

  getMin(distance, visited) {
    let min = Infinity;
    let index = Infinity;
    for (let i = 0; i < distance.length; i++) {
      if (distance[i] < min && visited[i] == false) {
        min = distance[i];
        index = i;
      }
    }
    return index;
  }

  spanningTree(v, adj) {
    // code here

    for (let i = 0; i < adj.length; i++) {
      let arr = adj[i];
      while (arr.length) {
        let [k, w] = arr.pop();
        this.addEdge(i, k, w);
      }
    }
    //         3 [
    //   [ [ 1, 5 ], [ 2, 1 ] ],
    //   [ [ 0, 5 ], [ 2, 3 ] ],
    //   [ [ 1, 3 ], [ 0, 1 ] ]
    // ]
    let distance = Array(v).fill(Infinity);
    distance[0] = 0;
    let visited = Array(v).fill(false);
    let parent = Array(v).fill(-1);

    while (visited.includes(false)) {
      let getMinNode = this.getMin(distance, visited);
      // console.log(getMinNode,distance,visited)

      visited[getMinNode] = true;

      for (let [child, weight] of this.list.get(getMinNode)) {
        if (distance[child] > weight && visited[child] == false) {
          distance[child] = weight;
          parent[child] = getMinNode;
        }
      }
    }

    // console.log(parent)
    let sum = 0;
    for (let i = 1; i < parent.length; i++) {
      let getNode = this.list.get(i);
      for (let data of getNode) {
        if (parent[i] == data[0]) {
          sum += data[1];
        }
      }
    }
    return sum;
  }
}


// proper algo

// select the edge with minimum cost
// then select the edge with minimum cost but make sure its connected to previously selected edge
// repeat this process until all the edges are selected



function getMinDistNode(minDist, includedInMST) {
    let min = Infinity;
    let index = -1;

    for (let i = 0; i < minDist.length; i++) {
        if (!includedInMST.has(i) && min > minDist[i]) {
            min = minDist[i];
            index = i;
        }
    }

    return index;
}

class Solution {
    constructor() {
        this.list = new Map();
    }

    addEdge(u, v, w) {
        if (!this.list.has(u)) this.list.set(u, []);
       
        this.list.get(u).push([v, w]);
    
    }

    spanningTree(V, adj) {
        let includedInMST = new Set();
        let minDist = Array(V).fill(Infinity);

        // Convert edge list to adjacency list
        for (let i = 0; i < adj.length; i++) {
            let arr = adj[i];
            while(arr.length){
                 let [v,w]=arr.pop()
                 this.addEdge(i, v, w);
            }
           
        }

        minDist[0] = 0;

        while (includedInMST.size < V) {
            let node = getMinDistNode(minDist, includedInMST);
            if (node === -1) break; // No more reachable nodes
            includedInMST.add(node);

            for (let [v, w] of this.list.get(node) ?? []) {
                if (!includedInMST.has(v) && minDist[v] > w) {
                    minDist[v] = w;
                }
            }
        }

        // Calculate total weight of the MST
        let sum = 0;
        for (let i = 1; i < V; i++) {
            if (minDist[i] !== Infinity) {
                sum += minDist[i];
            }
        }
     
        return sum;
    }
}