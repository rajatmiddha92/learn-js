// Path With Minimum Effort
// Difficulty: MediumAccuracy: 53.13%Submissions: 52K+Points: 4Average Time: 25m
// You are a hiker preparing for an upcoming hike. You are given heights[][], a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e., 0-indexed). You can move up, down, left, or right, and you wish to find the route with minimum effort.

// Note: A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.

// Example 1:

// Input:
// row = 3
// columns = 3 
// heights = [[1,2,2],[3,8,2],[5,3,5]]
// Output: 
// 2
// Explanation: 
// The route 1->3->5->3->5 has a maximum absolute difference of 2 in consecutive cells. This is better than the route 1->2->2->2->5, where the maximum absolute difference is 3.
// Example 2:

// Input:
// row = 2
// columns = 2 
// heights = [[7,7],[7,7]]
// Output: 
// 0
// Explanation: 
// Any route from the top-left cell to the bottom-right cell has a maximum absolute difference of 0 in consecutive cells.
// Your Task:
// You don't need to read input or print anything. Your task is to complete the function MinimumEffort() which takes intergers rows, columns, and the 2D array heights[][]  and returns the minimum effort required to travel from the top-left cell to the bottom-right cell.

// Expected Time Complexity: O(rowsxcolumns)
// Expected Space Complexity: O(rowsxcolumns)

// Constraints:
// 1 <= rows, columns <= 100
// rows == heights.length
// columns == heights[i].length
// 0 <= heights[i][j] <= 106


class MinHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length == 0;
  }

  size() {
    return this.heap.length;
  }
  heapifyUp(i) {
    let index = i - 1;

    let parent = Math.floor((index - 1) / 2);

    while (parent > -1 && this.heap[parent][0] > this.heap[index][0]) {
      [this.heap[index], this.heap[parent]] = [
        this.heap[parent],
        this.heap[index],
      ];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  push(val) {
    this.heap.push(val);
    this.heapifyUp(this.size());
  }

  top() {
    return this.heap[0] ?? null;
  }

  heapifyDown(i) {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let n = this.size();
    if (left < n && this.heap[left][0] < this.heap[smallest][0]) {
      smallest = left;
    }

    if (right < n && this.heap[right][0] < this.heap[smallest][0]) {
      smallest = right;
    }

    if (smallest == i) return;

    [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
    this.heapifyDown(smallest);
  }

  pop() {
    let val = this.heap[0];

    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.heapifyDown(0);
    return val;
  }
}

class Solution {
    /**
    * @param number rows
    * @param number columns
    * @param number[][] heights

    * @returns number
    */
    MinimumEffort(rows, columns, heights) {
        
        let pq= new MinHeap()
        let distance = Array(rows).fill(null).map(data=>Array(columns).fill(Infinity))
        distance[0][0]=0
        pq.push([0,0,0])
        
        
        let validRow = [-1,0,0,1]
        let validCol = [0,-1,1,0]
        while(!pq.isEmpty()){
            let [diff,row,col]= pq.top()
            pq.pop()
            
            if(row == rows-1 && col == columns-1) return distance[row][col]
            
            for(let i=0;i<4;i++){
                let newRow = row + validRow[i]
                let newCol = col + validCol[i]
                
                if(newRow>-1 && newCol>-1 && newRow<rows && newCol<columns){
                    let res = Math.abs(heights[newRow][newCol]-heights[row][col])
                    let max = Math.max(res,diff)
                    if(max<distance[newRow][newCol]){
                        distance[newRow][newCol]=max
                        pq.push([max,newRow,newCol])
                    }
                }
                
            }
            
           
            
            
        }
        
        // code here
        
    }
}


// Your implementation is for the **Path with Minimum Effort** problem, using **Dijkstra’s Algorithm** with a MinHeap to prioritize paths by their maximum effort. Here's a detailed breakdown of the **Time Complexity (TC)** and **Space Complexity (SC)**:

// ---

// ### ✅ **Time Complexity (TC):**

// Let:

// * `R` = number of rows
// * `C` = number of columns
// * `N` = total number of cells = `R * C`

// Each cell can be visited once and can potentially have up to 4 neighbors.

// #### Breakdown:

// * Heap operations (`push`, `pop`) take **O(log N)** time.
// * In the worst case, all `N` nodes may be pushed/popped from the heap.
// * For each node, you process up to 4 neighbors.

// **So:**

// ```
// Total operations ≈ N * log N
// ```

// **🟩 Final Time Complexity: `O(R * C * log(R * C))`**

// ---

// ### ✅ **Space Complexity (SC):**

// You use:

// 1. A 2D `distance` array of size `R x C`: **O(R \* C)**
// 2. A MinHeap which in worst case can hold all `R*C` nodes: **O(R \* C)**

// **🟩 Final Space Complexity: `O(R * C)`**

// ---

// ### ✅ Summary:

// | Complexity | Value                   |
// | ---------- | ----------------------- |
// | Time       | `O(R * C * log(R * C))` |
// | Space      | `O(R * C)`              |

