// 200. Number of Islands
// Solved
// Medium
// Topics
// Companies
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.


//approach

// Using DFS and Additional Matrix – O(n*m) time and O(n*m) space
// The idea is to keep an additional matrix to keep track of the visited nodes in the given matrix, and perform DFS to find the total number of islands


// Follow the steps below to solve the problem:

// Initialize count = 0 and boolean matrix, visited[][] to false.
// For each cell of the input matrix check if the value of the current cell is 1 and is not visited , call for the DFS for all its 4 neighboring cells.
// If the neighbor is safe to visit and is not visited already Call DFS recursively and Increment count by 1
// Return count as the final answer.

function isSafe(newRow,newCol,visited,matrix){
  if(newRow>-1 && newCol> -1 && newRow < visited.length && newCol < visited[0].length && visited[newRow][newCol]==false && matrix[newRow][newCol]=='1'){
      return true
  }
  return false
} 

function dfs(matrix,visited,row,col){
  visited[row][col]=true

  let validRow = [-1,0,0,1]
  let validCol = [0,-1,1,0]
  for(let i = 0;i<4;i++){
          //0,0. + -
          let newRow = row + validRow[i]
          let newCol = col + validCol[i]
          if(isSafe(newRow,newCol,visited,matrix)){
               dfs(matrix,visited,newRow,newCol)
          }
  }
}

var numIslands = function(grid) {
  let rowLength = grid.length;
  let colLength = grid?.[0]?.length ?? 0;
  let visited = Array(rowLength).fill().map(()=>{
      return Array(colLength).fill(false)
  })

  let count = 0
  
  for(let i=0;i<grid.length;i++){
      for(let j=0;j<grid?.[0]?.length?? 0;j++){
          if(visited[i][j]==false && grid[i][j]=='1'){
              count++
              // i = row j = col
              dfs(grid,visited,i,j)
          }
      }
  }

  return count
};


console.log(numIslands(grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]))
// O(n*m) time and O(n*m) space

//using bfs
// /**
//  * @param {character[][]} grid
//  * @return {number}
//  */

// function isSafe(newRow,newCol,visited,matrix){
//   if(newRow>-1 && newCol> -1 && newRow < visited.length && newCol < visited[0].length && visited[newRow][newCol]==false && matrix[newRow][newCol]=='1'){
//       return true
//   }
//   return false
// } 

// function bfs(matrix,visited,row,col){
  
//   let queue = []
//   queue.push([row,col])
//   visited[row][col]= true
  

 
//   while(queue.length){
//    let ele = queue.shift()

//    row = ele[0]
//    col = ele[1]
   


//   let validRow = [-1,0,0,1]
//   let validCol = [0,-1,1,0]
//   for(let i = 0;i<4;i++){
//           //0,0. + -
//           let newRow = row + validRow[i]
//           let newCol = col + validCol[i]
//           if(isSafe(newRow,newCol,visited,matrix)){
//                queue.push([newRow,newCol])
//                visited[newRow][newCol]=true
//           }
//   }
//   }
// }

// var numIslands = function(grid) {
//   let rowLength = grid.length;
//   let colLength = grid?.[0]?.length ?? 0;
//   let visited = Array(rowLength).fill().map(()=>{
//       return Array(colLength).fill(false)
//   })

//   let count = 0
  
//   for(let i=0;i<grid.length;i++){
//       for(let j=0;j<grid?.[0]?.length?? 0;j++){
//           if(visited[i][j]==false && grid[i][j]=='1'){
//               count++
              
//               // i = row j = col
//               bfs(grid,visited,i,j)
//           }
//       }
//   }

//   return count
// };