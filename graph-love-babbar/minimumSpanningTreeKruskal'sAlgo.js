// Minimum Spanning Tree
// Difficulty: MediumAccuracy: 47.82%Submissions: 153K+Points: 4Average Time: 25m
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

function makeSet(n, parent) {
  for (let i = 0; i < n; i++) {
    parent[i] = i;
  }
}

function findParent(x, parent) {
  if (x == parent[x]) {
    return x;
  }

  return (parent[x] = findParent(parent[x], parent));
}

function makeUnion(u, v, rank, parent) {
  let rank1 = findParent(u, parent);
  let rank2 = findParent(v, parent);

  if (rank[rank1] < rank[rank2]) {
    parent[rank1] = rank2;
  } else if (rank[rank1] > rank[rank2]) {
    parent[rank2] = rank1;
  } else {
    parent[rank1] = rank2;
    rank[rank2]++;
  }
}

class Solution {
  spanningTree(v, adj) {
    // code here
    // console.log(adj)
    let some = [];
    for (let i = 0; i < adj.length; i++) {
      let temp = adj[i];
      while (temp.length) {
        let [v, w] = temp.pop();
        some.push([i, v, w]);
      }
    }
    some.sort((a, b) => a[2] - b[2]);

    let rank = Array(v).fill(0);
    let parent = [];

    makeSet(v, parent);
    let sum = 0;

    for (let i = 0; i < some.length; i++) {
      let [u, v, w] = some[i];

      let findAParent = findParent(u, parent);
      let findBParent = findParent(v, parent);

      if (findAParent != findBParent) {
        sum = sum + w;
        makeUnion(u, v, rank, parent);
      }
    }
    return sum;
  }
}
