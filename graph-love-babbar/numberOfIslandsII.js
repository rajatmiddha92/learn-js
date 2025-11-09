// Number of islands II
// 100
// Hard
// Hint
// Given n, m denoting the row and column of the 2D matrix, and an array A of size k denoting the number of operations. Matrix elements are 0 if there is water or 1 if there is land. Originally, the 2D matrix is all 0 which means there is no land in the matrix. The array has k operator(s) and each operator has two integers A[i][0], A[i][1] means that you can change the cell matrix[A[i][0]][A[i][1]] from sea to island. Return how many islands are there in the matrix after each operation.



// The answer array will be of size k.


// Examples:
// Input: n = 4, m = 5, k = 4, A = [[1,1],[0,1],[3,3],[3,4]] 

// Output: [1, 1, 2, 2]

// Explanation: The following illustration is the representation of the operation:



// Input: n = 4, m = 5, k = 12, A = [[0,0],[0,0],[1,1],[1,0],[0,1],[0,3],[1,3],[0,4], [3,2], [2,2],[1,2], [0,2]] 

// Output: [1, 1, 2, 1, 1, 2, 2, 2, 3, 3, 1, 1] 

// Explanation: If we follow the process like in example 1, we will get the above result.


// function findParent(node,parent){
//     if(parent[node]==node) return node

//     return findParent(parent[node],parent)
// }


// function unionByRank(i,j,rank,parent){
//    let x = findParent(i,parent)
//    let y = findParent(j,parent)

//    if(x==y)return false
//    if(rank[x]>rank[y]){
//     parent[y]=x
//    }
//    else if(rank[x]<rank[y]){
//     parent[x]=y
//    }
//    else{
//      parent[y]=x
//      rank[x]++
//    }
//    return true
// }


// class Solution {
//     numOfIslands(n, m, A) {
//         let visited = Array(n).fill().map(data=>Array(m).fill(0))
//         let parent = Array(n*m).fill().map((data,idx)=>idx)
//         let rank = Array(n*m).fill(0)
        

//         let validRow = [-1,0,0,1]
//         let validCol = [0,-1,1,0]
//         let count = 0 
//         let ans = []
//         for(let i=0;i<A.length;i++){

//             let [row,col] = A[i]

//             if(visited[row][col]==1){
//                 ans.push(count);
//                 continue;
//             }

//             visited[row][col]=1
//             let index = (row*m)+col;
//             count++

//             for(let k=0;k<4;k++){
                  
//                   let newRow = row + validRow[k]
//                   let newCol = col + validCol[k]

//                   if(newRow>-1 && newCol>-1 && newRow<n && newCol<m && visited[newRow][newCol]==1){
//                      let indextwp = (newRow*m)+newCol
//                     if(unionByRank(index,indextwp,rank,parent)){
//                         count--
//                     }
//                   }

//             }

//             ans.push(count)

//         }
//         return ans
//     }
// }
