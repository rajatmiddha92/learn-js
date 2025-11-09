// Shortest path in Directed Acyclic Graph
// Difficulty: MediumAccuracy: 48.48%Submissions: 150K+Points: 4
// Given a Directed Acyclic Graph of V vertices from 0 to n-1 and a 2D Integer array(or vector) edges[ ][ ] of length E, where there is a directed edge from edge[i][0] to edge[i][1] with a distance of edge[i][2] for all i.

// Find the shortest path from src(0) vertex to all the vertices and if it is impossible to reach any vertex, then return -1 for that vertex.

// Examples :

// Input: V = 4, E = 2, edges = [[0,1,2], [0,2,1]]
// Output: [0, 2, 1, -1]
// Explanation: Shortest path from 0 to 1 is 0->1 with edge weight 2. Shortest path from 0 to 2 is 0->2 with edge weight 1. There is no way we can reach 3, so it's -1 for 3.
// Input: V = 6, E = 7, edges = [[0,1,2], [0,4,1], [4,5,4], [4,2,2], [1,2,3], [2,3,6], [5,3,1]]
// Output: [0, 2, 3, 6, 1, 5]
// Explanation: Shortest path from 0 to 1 is 0->1 with edge weight 2. Shortest path from 0 to 2 is 0->4->2 with edge weight 1+2=3. Shortest path from 0 to 3 is 0->4->5->3 with edge weight 1+4+1=6. Shortest path from 0 to 4 is 0->4 with edge weight 1.Shortest path from 0 to 5 is 0->4->5 with edge weight 1+4=5.
// Constraint:
// 1 <= V <= 100
// 1 <= E <= min((N*(N-1))/2,4000)
// 0 <= edgesi,0, edgesi,1 < n
// 0 <= edgei,2 <=105

// algo

// step 1 find the topological sort (applied only on DAG)
// step 2 with help of linear ordering update distance arr
// (i.e path arr/result arr)

// approach exaplination

// Approach Explanation:
// Input:

// V: Number of vertices (nodes) in the graph.
// E: Number of edges in the graph.
// edges: A list of edges where each edge is represented by [u, v, weight], meaning there is an edge from node u to node v with a weight weight.

// Key Concepts:

// Topological Sorting: Since the graph is a Directed Acyclic Graph (DAG), we can apply topological sorting to order the vertices in such a way that for every edge (u, v), u comes before v. This ordering will allow us to perform a relaxation operation efficiently in a single pass over the graph.
// Relaxation: In each step, we update the shortest path to a node by comparing the current shortest path to the path through a neighboring node.

// Steps to the final approach:

// Step 1: Graph Representation: Use an adjacency list (implemented as a Map) to store the graph. Each node points to a set of neighboring nodes along with their edge weights.

// Step 2: Topological Sort: Perform a DFS traversal on the graph to generate the topological sort. This ensures we process each node only after all its dependencies (predecessors) have been processed. We store the nodes in stack in reverse topological order.

// Step 3: Initialize Distances: Create an array result to store the shortest distance from the source node (node 0) to each node. Initialize the source node with distance 0, and all other nodes with Infinity (since they are initially unreachable).

// Step 4: Relaxation: Process the nodes in topological order (from stack). For each node, relax all outgoing edges, updating the shortest distance to its neighboring nodes if a shorter path is found via the current node.

// Step 5: Edge Case Handling: If a node remains unreachable (its distance is still Infinity), mark it as -1 (indicating no path exists).

// Complexity:

// Time Complexity:
// DFS for topological sorting takes O(V + E) time.
// Relaxing edges takes O(E) time.
// Overall time complexity: O(V + E).
// Space Complexity:
// Storing the graph in the adjacency list takes O(V + E) space.
// The distance array and visited set take O(V) space.
// Overall space complexity: O(V + E).

// using dfs with kahn's algo(indegree used to find topological sort)
class Solution {
  constructor() {
    this.list = new Map();
    this.inDegree = [];
  }

  addEdge(u, v) {
    if (!this.list.has(u)) this.list.set(u, new Set());

    this.list.get(u).add(v);
    this.inDegree[v[0]]++;
  }

  dfs(node, q2) {
    q2.push(+node);

    for (let child of this.list.get(node) || new Set()) {
      let idx = child[0];
      this.inDegree[idx]--;
      if (!this.inDegree) {
        this.dfs(idx, q2);
      }
    }
  }
  shortestPath(V, E, edges) {
    // code here.
    this.inDegree = Array(V).fill(0);
    for (let i = 0; i < edges.length; i++) {
      this.addEdge(+edges[i][0], [+edges[i][1], +edges[i][2]]);
    }

    let q1 = [];
    for (let data in this.inDegree) {
      if (!data[this.inDegree]) {
        q1.push(data);
      }
    }

    let q2 = [];
    for (let i = 0; i < q1.length; i++) {
      this.dfs(q1[i], q2);
    }

    let result = Array(V).fill(Infinity);
    result[0] = 0;
    // ////

    while (q2.length) {
      let node = q2.shift();
      // console.log(node)
      if (result[node] == Infinity) {
        result[node] = -1;
      } else {
        for (let child of this.list.get(node) || new Set()) {
          let idx = child[0];
          result[idx] = Math.min(result[idx], result[node] + child[1]);
        }
        // console.log()
      }
    }
    return result;
  }
}

// using dfs with stack (stack used to find toplogical sort)

class Solution {
  constructor() {
    this.list = new Map();
  }

  addEdge(u, v) {
    if (!this.list.has(u)) this.list.set(u, new Set());

    this.list.get(u).add(v);
  }

  dfs(visited, stack, node) {
    visited.add(node);

    for (let child of this.list.get(node) || new Set()) {
      let idx = child[0];
      if (!visited.has(idx)) {
        this.dfs(visited, stack, idx);
      }
    }
    stack.unshift(node);
  }
  shortestPath(V, E, edges) {
    // code here.
    this.inDegree = Array(V).fill(0);
    for (let i = 0; i < edges.length; i++) {
      this.addEdge(edges[i][0], [edges[i][1], edges[i][2]]);
    }

    let stack = [];
    let visited = new Set();
    for (let [key, value] of this.list) {
      if (!visited.has(key)) {
        this.dfs(visited, stack, key);
      }
    }

    let result = Array(V).fill(Infinity);
    result[0] = 0;

    while (stack.length) {
      let node = stack.shift();
      // console.log(node)
      if (result[node] == Infinity) {
        result[node] = -1;
      } else {
        for (let child of this.list.get(node) || new Set()) {
          let idx = child[0];
          result[idx] = Math.min(result[idx], result[node] + child[1]);
        }
        // console.log()
      }
    }
    return result;
  }
}


// using Dijkstra's algo

class Solution {
    shortestPath(V, E, edges) {
        // code here.
        
       let dist = Array(V).fill(Infinity);
let edge = Array(V).fill(null).map(() => []);

for (let i = 0; i < edges.length; i++) {
    let [u, v, w] = edges[i];
    edge[u].push([v, w]);
}

let queue = [{ node: 0, distance: 0 }];
dist[0] = 0;

while (queue.length) {
    queue.sort((a, b) => a.distance - b.distance);
    let { node, distance } = queue.shift();

    for (let [child, weight] of edge[node]) {
        let newDist = distance + weight;
        if (dist[child] > newDist) {
            dist[child] = newDist;
            queue.push({ node: child, distance: newDist });
        }
    }
}

return dist.map((data)=>data==Infinity ? -1 : data);
    }
}


function  dfs(visited,edge,stack,node){
    visited[node]=true
    
    for(let child of edge[node]){
        let [v,w]=child
        if(!visited[v]){
            dfs(visited,edge,stack,v)
        }
    }
    stack.push(node)
}

// using top sort 
class Solution {
    shortestPath(V, E, edges) {
        // code here.
        let visited = Array(V).fill(false)
        let edge = Array(V).fill(null).map(()=>[])
        
        let stack = []
        for(let  i = 0; i< edges.length;i++){
            let [u,v,w]=edges[i]
            edge[u].push([v,w])
        }
        
        
        for(let i=0;i<V;i++){
            if(!visited[i]){
                dfs(visited,edge,stack,i)
            }
        }
        
        
        let dist = Array(V).fill(-1)
        dist[0]=0
        
        while (stack.length){
            let node = stack.pop()
            
            
            if(dist[node]!=-1){
            for(let child of edge[node]){
                let [v,w]=child
                if(dist[v]==-1){
                    dist[v] = dist[node] + w
                }
                else{
                    dist[v] = Math.min(dist[v],dist[node]+w)
                }
            }
            }
        }
        
        return dist
        
        
    }
}