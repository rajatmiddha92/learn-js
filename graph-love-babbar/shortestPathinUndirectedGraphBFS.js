// Shortest Path in Undirected
// Difficulty: MediumAccuracy: 49.98%Submissions: 123K+Points: 4
// You are given an adjacency list, adj of Undirected Graph having unit weight of the edges, find the shortest path from src to all the vertex and if it is unreachable to reach any vertex, then return -1 for that vertex.

// Examples :

// Input: adj[][] = [[1, 3], [0, 2], [1, 6], [0, 4], [3, 5], [4, 6], [2, 5, 7, 8], [6, 8], [7, 6]], src=0
// Output: [0, 1, 2, 1, 2, 3, 3, 4, 4]

// Input: adj[][]= [[3], [3], [], [0, 1]], src=3
// Output: [1, 1, -1, 0]

// Input: adj[][]= [[], [], [], [4], [3], [], []], src=1
// Output: [-1, 0, -1, -1, -1, -1, -1]
// Constraint:
// 1<=adj.size()<=104
// 0<=edges<=adj.size()-1

// using bfs
class Solution {
  constructor() {
    this.list = new Map();
  }

  addEdge(u, v) {
    this.list.get(u).add(v);
  }

  bfs(result, visited, src) {
    let queue = [src, null];
    let count = 1;
    visited.add(src);
    while (queue.length) {
      let ele = queue.shift();

      if (ele == null) {
        // while traversing bfs

        // if queue.length is still there
        // means there are still some element in queue
        // if not means we reach end and traversed full
        // graph so rather than pushing null in queue just
        // exit the loop by break;
        if (queue.length) {
          // increasing count when one whole traversal
          // competed of all child for one node/vertex
          count++;

          // pushing null to queue to take track
          // the one traversal completed for whole node
          queue.push(null);
          continue;
        }
        break;
      }

      for (let child of this.list.get(ele)) {
        if (!visited.has(child)) {
          queue.push(child);
          visited.add(child);

          //inserting min path count value
          result[child] = count;
        }
      }
    }
  }
  shortestPath(adj, src) {
    // code here
    for (let i = 0; i < adj.length; i++) {
      let arr = adj[i];
      this.list.set(i, new Set());
      let j = 0;
      while (j < arr.length) {
        this.addEdge(i, +arr[j]);
        j++;
      }
    }

    let visited = new Set();
    let result = Array(adj.length).fill(Infinity);
    result[src] = 0;

    this.bfs(result, visited, src);

    for (let i = 0; i < result.length; i++) {
      if (result[i] == Infinity) {
        result[i] = -1;
      }
    }

    return result;
  }
}

let sol = new Solution();
console.log(
  sol.shortestPath(
    [
      [1, 3],
      [0, 2],
      [1, 6],
      [0, 4],
      [3, 5],
      [4, 6],
      [2, 5, 7, 8],
      [6, 8],
      [7, 6],
    ],
    0
  )
);

// 2nd sol using same approach but level track previous sol was
// using null before here is different way of writing same come

class Solution {
  constructor() {
    this.list = new Map();
  }

  addEdge(u, v) {
    if (!this.list.has(u)) this.list.set(u, new Set());
    this.list.get(u).add(v);
  }

  bfs(result, visited, src) {
    let queue = [src];
    let count = 0; // This will track the distance (level)
    visited.add(src);
    result[src] = count;

    while (queue.length) {
      let levelSize = queue.length;

      for (let i = 0; i < levelSize; i++) {
        let node = queue.shift();

        for (let neighbor of this.list.get(node)) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
            result[neighbor] = count + 1; // Set the distance to the neighbor
          }
        }
      }

      count++; // Increase distance after completing a level
    }
  }

  shortestPath(adj, src) {
    // Build the graph from the adjacency list
    for (let i = 0; i < adj.length; i++) {
      let arr = adj[i];
      this.list.set(i, new Set(arr)); // Directly add neighbors
    }

    let visited = new Set();
    let result = Array(adj.length).fill(-1); // Default to -1 (unreachable)

    // Start BFS to find the shortest path
    this.bfs(result, visited, src);

    return result;
  }
}

// same approach sol with few lines of code
class Solution {
  shortestPath(adj, src) {
    // code here
    const n = adj.length;
    const dist = new Array(n).fill(-1); // Distance array, initialized to -1 (unreachable)
    dist[src] = 0; // Distance from source to itself is 0

    // BFS initialization
    const queue = [src];

    while (queue.length > 0) {
      const node = queue.shift(); // Dequeue the first element

      // Explore neighbors
      for (const neighbor of adj[node]) {
        if (dist[neighbor] === -1) {
          // If neighbor is not visited
          // by this logic we dint visit or fallback in loop of
          // visiting parent in undirected graph
          dist[neighbor] = dist[node] + 1;
          queue.push(neighbor);
        }
      }
    }

    return dist;
  }
}


class Solution {
    shortestPath(adj, src) {
        // code here
        
        let dist = Array(adj.length).fill(Infinity)
        
        let queue = [{node:src,distance:0}]
        dist[src]=0
        
        
        while(queue.length){
            let {node,distance} = queue.shift()
            
            
            if(dist[node]!=Infinity){
                
                 for(let child of adj[node]){
                     
                     let newDist = distance+1
                     if(newDist<dist[child]){
                         dist[child]=newDist
                         queue.push({node:child,distance:newDist})
                     }
                
                }
                
            }
           
        }
        
        return dist.map((data)=>data==Infinity ? -1 : data)
        
    
    }
}