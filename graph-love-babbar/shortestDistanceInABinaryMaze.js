// Shortest Distance in a Binary Maze
// Difficulty: MediumAccuracy: 58.22%Submissions: 76K+Points: 4Average Time: 20m
// Given a n * m matrix grid where each element can either be 0 or 1. You need to find the shortest distance between a given source cell to a destination cell. The path can only be created out of a cell if its value is 1. 

// If the path is not possible between source cell and destination cell, then return -1.

// Note : You can move into an adjacent cell if that adjacent cell is filled with element 1. Two cells are adjacent if they share a side. In other words, you can move in one of the four directions, Up, Down, Left and Right. The source and destination cell are based on the zero based indexing. The destination cell should be 1.

// Example 1:

// Input:
// grid[][] = {{1, 1, 1, 1},
//             {1, 1, 0, 1},
//             {1, 1, 1, 1},
//             {1, 1, 0, 0},
//             {1, 0, 0, 1}}
// source = {0, 1}
// destination = {2, 2}
// Output:
// 3
// Explanation:
// 1 1 1 1
// 1 1 0 1
// 1 1 1 1
// 1 1 0 0
// 1 0 0 1
// The highlighted part in the matrix denotes the 
// shortest path from source to destination cell.
// Example 2:

// Input:
// grid[][] = {{1, 1, 1, 1, 1},
//             {1, 1, 1, 1, 1},
//             {1, 1, 1, 1, 0},
//             {1, 0, 1, 0, 1}}
// source = {0, 0}
// destination = {3, 4}
// Output:
// -1
// Explanation:
// The path is not possible between source and 
// destination, hence return -1.
// Your Task:

// You don't need to read or print anything. Your task is to complete the function shortestPath() which takes the a 2D integer array grid, source cell and destination cell as an input parameters and returns the shortest distance between source and destination cell.

// Expected Time Complexity: O(n * m)
// Expected Space Complexity: O(n * m)

// Constraints:

// 1 ≤ n, m ≤ 500
// grid[i][j] == 0 or grid[i][j] == 1
// The source and destination cells are always inside the given matrix.


function isSafe(i,j,grid){
    if(i>-1 && j>-1 && i<grid.length && j<grid[i].length && grid[i][j]==1){
        return true
    }
    
    return false
}

class Solution {
    shortestPath(grid, source, destination) {
        // code here
        let queue = [{row:source[0],col:source[1]}]
        let validRow= [-1,0,0,1 ]
        let validCol = [0,-1,1,0]
       
        
        let distance = Array(grid.length).fill().map((data)=>Array(grid[0].length).fill(Infinity))
        distance[source[0]][source[1]]=0
        while(queue.length){
            
            let { row,col } = queue.shift()
            
            
            for(let i=0;i<4;i++){
                let newRow = row + validRow[i]
                let newCol = col + validCol[i]
                if(isSafe(newRow,newCol,grid) && distance[newRow][newCol] > distance[row][col] + 1){
                    queue.push({row:newRow,col:newCol})
                    distance[newRow][newCol]=  distance[row][col] + 1
                }
            }
      
        }
        
        
        if(distance[destination[0]][destination[1]]==Infinity) return -1
        return distance[destination[0]][destination[1]]
        
    }
}



// Let's analyze the **time complexity (TC)** and **space complexity (SC)** of your implementation of the shortest path in a grid using BFS:

// ---

// ### ✅ **Algorithm Summary:**

// * You use **Breadth-First Search (BFS)** starting from `source`, and you explore only the valid directions (up, down, left, right).
// * You maintain a `distance` matrix to store the minimum distance to each cell from the source.
// * A queue is used to process cells in BFS order.
// * You only enqueue a cell if it hasn’t been visited or a shorter path is found.

// ---

// ## ⏱️ Time Complexity (TC):

// Let:

// * `n` = number of rows
// * `m` = number of columns

// ### Breakdown:

// * Every cell is **visited at most once** (because once a shorter path is found, it won't be updated again).
// * For each cell, you check 4 neighbors (constant factor).

// So, the time complexity is:

// > **O(n × m)**

// This is because in the worst case, **every cell is processed once**, and each processing step takes constant time.

// ---

// ## 🧠 Space Complexity (SC):

// ### Breakdown:

// 1. **Distance matrix:** `O(n × m)`
// 2. **Queue:** In the worst case, it may hold `O(n × m)` elements.
// 3. **No separate `visited` array** is needed because `distance` implicitly tracks visited cells.

// > **Total space: O(n × m)**

// ---

// ### ✅ Final Answer:

// * **Time Complexity:** `O(n × m)`
// * **Space Complexity:** `O(n × m)`

// Let me know if you'd like to add diagonal movement, obstacles (`grid[i][j] == 0`), or if this needs to work on weighted graphs!
