// 547. Number of Provinces
// Solved
// Medium
// Topics
// Companies
// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces.

// Example 1:

// Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
// Output: 2
// Example 2:

// Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
// Output: 3

// Constraints:

// 1 <= n <= 200
// n == isConnected.length
// n == isConnected[i].length
// isConnected[i][j] is 1 or 0.
// isConnected[i][i] == 1
// isConnected[i][j] == isConnected[j][i]

class Graph {
  constructor() {
    this.list = new Map();
  }

  addEdge(u, v) {
    this.list.get(u).add(v);
  }

  dfs(visited, node) {
    visited[node] = true;

    for (let child of this.list.get(node)) {
      if (visited[child] == false) {
        this.dfs(visited, child);
      }
    }
  }
  makeGraph(adjMatrix) {
    for (let i = 0; i < adjMatrix.length; i++) {
      this.list.set(i, new Set());
      let arr = adjMatrix[i];
      for (let j = 0; j < arr.length; j++) {
        if (j != i && arr[j] != 0) {
          this.addEdge(i, j);
        }
      }
    }
    let visited = Array(adjMatrix.length + 1).fill(false);
    let count = 0;

    for (let [node, child] of this.list) {
      if (!visited[node]) {
        count++;
        this.dfs(visited, node);
      }
    }
    return count;
  }
}

var findCircleNum = function (isConnected) {
  let g1 = new Graph();

  return g1.makeGraph(isConnected);
};



// using disjoint set

// function findParent(node,parent){
//     if(parent[node] == node){
//         return node
//     }
//     return findParent(parent[node],parent)
// }

// function unionByRank(i,j,rank,parent){
     
//        let findParentOfI  = findParent(i,parent)
//        let findParentoFJ  = findParent(j,parent)

//        if(findParentOfI == findParentoFJ) return

//        if(rank[findParentOfI]>rank[findParentoFJ]){
//            parent[findParentoFJ] = findParentOfI
//        }
//        else if(rank[findParentOfI]<rank[findParentoFJ]){
//            parent[findParentOfI] = findParentoFJ
//        }
//        else{
//             parent[findParentoFJ] = findParentOfI
//             rank[findParentOfI]++
//        }
//  }

 
// var findCircleNum = function(isConnected) {
//     let length = isConnected.length
//     let rank = Array(length).fill(0)
//     let parent = []
//     for(let i=0;i<length;i++){
//           parent[i]=i
//     }
//     let count = 0
//     for(let i=0;i<length;i++){
//         for(let j=0;j<length;j++){
//               if(j!=i && isConnected[i][j]==1){
//                  unionByRank(i,j,rank,parent)

//               }

//         }
//     }

//     for(i=0;i<parent.length;i++){
//         if(i==parent[i]){
//             count++
//         }
//     }
//     return count
    
// };