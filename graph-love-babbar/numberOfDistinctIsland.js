// Given a boolean 2D matrix grid of size n * m. You have to find the number of distinct islands where a group of connected 1s (horizontally or vertically) forms an island. Two islands are considered to be distinct if and only if one island is not equal to another (not rotated or reflected).

// Example 1:

// Input:
// grid[][] = {{1, 1, 0, 0, 0},
//             {1, 1, 0, 0, 0},
//             {0, 0, 0, 1, 1},
//             {0, 0, 0, 1, 1}}
// Output:
// 1
// Explanation:
// grid[][] = {{1, 1, 0, 0, 0}, 
//             {1, 1, 0, 0, 0}, 
//             {0, 0, 0, 1, 1}, 
//             {0, 0, 0, 1, 1}}
// Same colored islands are equal.
// We have 2 equal islands, so we 
// have only 1 distinct island.

// Example 2:

// Input:
// grid[][] = {{1, 1, 0, 1, 1},
//             {1, 0, 0, 0, 0},
//             {0, 0, 0, 0, 1},
//             {1, 1, 0, 1, 1}}
// Output:
// 3
// Explanation:
// grid[][] = {{1, 1, 0, 1, 1}, 
//             {1, 0, 0, 0, 0}, 
//             {0, 0, 0, 0, 1}, 
//             {1, 1, 0, 1, 1}}
// Same colored islands are equal.
// We have 4 islands, but 2 of them
// are equal, So we have 3 distinct islands.

// Your Task:

// You don't need to read or print anything. Your task is to complete the function countDistinctIslands() which takes the grid as an input parameter and returns the total number of distinct islands.

// Expected Time Complexity: O(n * m)
// Expected Space Complexity: O(n * m)

// Constraints:
// 1 ≤ n, m ≤ 500
// grid[i][j] == 0 or grid[i][j] == 1


// algo /intution
// we get cordinates of all one which are connected to each other by minus the first cordinate
// observation if they have same shape so from staring cordinates if we minus all cordinates
// we get same shape
// we will convert it in string and add it in set which will give unique shape

function isSafe(grid,visited,i,j,key){
    if(i>-1 && j>-1 && i<grid.length && j<grid[i].length && !visited.has(key)){
        return true
    }
    
    return false
}
 
function dfs(grid,visited,prevrow,prevcol,row,col,key,stack){
    visited.add(key)
   
    stack.push([row-prevrow,col-prevcol])
    
 
    
    
    let validRow = [-1,0,0,1]
    let validCol = [0,-1,1,0]
    
    for(let i=0;i<4;i++){
        let newRow = row + validRow[i]
        let newCol = col + validCol[i]
        let newKey = String(newRow)+","+String(newCol)
        if(isSafe(grid,visited,newRow,newCol,newKey) && grid[newRow][newCol]==1){
            dfs(grid,visited,prevrow,prevcol,newRow,newCol,newKey,stack)
        }
    }
} 
class Solution {
    // Function to count the number of distinct islands.
    countDistinctIslands(grid) {
        // your code here
        
        let visited = new Set()
        let shape = new Set()
      
        
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[i].length;j++){
                let key = String(i)+","+String(j)
                if(!visited.has(key) && grid[i][j]==1){
                    let stack = []
                    
                    dfs(grid,visited,i,j,i,j,key,stack)
                    let string = ","+stack
                    shape.add(string)
                }
            }
        }
     return shape.size
        
        
        
    }
}