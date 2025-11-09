// 1020. Number of Enclaves
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.

// A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid.

// Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.

 

// Example 1:


// Input: grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
// Output: 3
// Explanation: There are three 1s that are enclosed by 0s, and one 1 that is not enclosed because its on the boundary.
// Example 2:


// Input: grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
// Output: 0
// Explanation: All 1s are either on the boundary or can reach the boundary.
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 500
// grid[i][j] is either 0 or 1.

function isSafe(i,j,board,visited,key){
if(i>-1 && j>-1 && i<board.length && j<board[i].length && !visited.has(key)){
    return true
}
return false
}

function dfs(grid,row,col,visited,key){
    visited.add(key)
    grid[row][col]=0

    let validRow = [-1,0,0,1]
    let validCol = [0,-1,1,0]

    for(let i=0;i<4;i++){
        let newRow = row + validRow[i]
        let newCol = col + validCol[i]
        let newKey = String(newRow)+","+String(newCol)
        if(isSafe(newRow,newCol,grid,visited,newKey) && grid[newRow][newCol]==1){
            dfs(grid,newRow,newCol,visited,newKey)
        }
    }
}

var numEnclaves = function(grid) {
    let oneBoundaryArr = []
    for(let i=0;i<grid[0].length;i++){
        if(grid[0][i]==1){
            oneBoundaryArr.push({row:0,col:i})
        }
        if(grid[grid.length-1][i]==1){
            oneBoundaryArr.push({row:grid.length-1,col:i})
        }
    }

    for(let i=1;i<grid.length-1;i++){
        if(grid[i][0]==1){
             oneBoundaryArr.push({row:i,col:0})
        }
          if(grid[i][grid[0].length-1]==1){
             oneBoundaryArr.push({row:i,col:grid[0].length-1})
        }
    }

    let visited = new Set()
    for(let i=0;i<oneBoundaryArr.length;i++){
        let {row,col}=oneBoundaryArr[i]
        let key = String(row)+","+String(col)
        if(!visited.has(key)){
            dfs(grid,row,col,visited,key)
        }
    }

    let count = 0
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++)
        if(grid[i][j]==1){
            count++
        }
    }
    return count;
};