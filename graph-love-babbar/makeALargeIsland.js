// 827. Making A Large Island
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// You are given an n x n binary matrix grid. You are allowed to change at most one 0 to be 1.

// Return the size of the largest island in grid after applying this operation.

// An island is a 4-directionally connected group of 1s.

 

// Example 1:

// Input: grid = [[1,0],[0,1]]
// Output: 3
// Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.
// Example 2:

// Input: grid = [[1,1],[1,0]]
// Output: 4
// Explanation: Change the 0 to 1 and make the island bigger, only one island with area = 4.
// Example 3:

// Input: grid = [[1,1],[1,1]]
// Output: 4
// Explanation: Can't change any 0 to 1, only one island with area = 4.
 

// Constraints:

// n == grid.length
// n == grid[i].length
// 1 <= n <= 500
// grid[i][j] is either 0 or 1.
// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 357,386/648.3K
// Acceptance Rate
// 55.1%


// we need to find the largest island area
// we can use one zero and make it 1 and find max are by bfs
// 1st brute force / intution
// let say we start from start (0,0) and iterate till (n,n)
// and whenever we find 0 we make it one we start bfs and count the 
// max then mark it again 0
// similarly we do this for every cordinates
// this is ineffecient TC is O(n^4)  = n2 for large grids & n2
// for bfs from every cordinate i.e. O(V+E) which is n2 approx.

// so we can use disjoint set if we assume and look grid is like
// component and there are connected component
// the size of the biggest component is our ans
// intial configuration
// we connect 1's already present in grid
// we store count of every component (ultimate Parent)
// now we move through grid if found 0  we assume area is 1 
// check it neighbour 4 direction up down left right
// if we get count of every side + area itself (1)
// we found our count for that cell 
// note: only add unique count if let say left down belong from same
// component we only add it once becuae that is same land 
// we cannot consider same land two times

// approach
// convert and create 1d Array for parent and rank using formula 
// (row*n)+(col)
// create count array intially zero
// get nax variable to track max area so far
// set initial configuration which are already 1s connect them
// by union by rank 
// then for intial configuration, get count for every value in grid
// if you observe, only ultimate parent will have highest count
// also get max while this

// start iterating over grid when zero is found
// consider that area as 1
// check its neightbour and stire the unique parents
// include the count of unique parent from an count arr

// update max, if area is bigger than max




function findParent(node,parent){
    if(parent[node]==node){
        return node
    }
    return findParent(parent[node],parent)
} 

function unionByRank(i,j,rank,parent){
    let x = findParent(i,parent)
    let y = findParent(j,parent)

    if(x==y) return false
    if(rank[x]>rank[y]){
        parent[y]=x
    }
    else if(rank[x]<rank[y]){
        parent[x]=y
    }
    else{
        parent[y]=x
        rank[x]++
    
    }
    return true
}

function isSafe(row,col,grid){
    let n = grid.length
    if(row>-1 && col>-1 && row<n && col<n && grid[row][col]==1){
        return true
    }
    return false
}
var largestIsland = function(grid) {
    let n = grid.length
    let count = Array(n*n).fill(0)
    let rank = Array(n*n).fill(0)
    let parent = Array(n*n).fill().map((data,idx)=>idx)
    let validRow = [-1,0,0,1]
    let validCol = [0,-1,1,0]

    for(let i = 0;i< n; i++){
        for(let j=0 ;j < n ;j++){
            if(grid[i][j]==1){
                for(let k=0;k<4;k++){
                    let newRow = i + validRow[k]
                    let newCol = j + validCol[k]
                    if(isSafe(newRow,newCol,grid)){
                        let indexOne = (i*n)+j
                        let indexTwo = (newRow*n)+newCol
                        unionByRank(indexOne,indexTwo,rank,parent)
                    }
                }
            }
        }
    }
    let max = -Infinity
    for(let i=0;i<parent.length;i++){
          let ele = i
          let findP = findParent(i,parent)
          count[findP]++
          max=Math.max(max,count[findP])
    }

 
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]==0){
                let area = 1
                   let uniqueParent = new Set()
                for(let k=0;k<4;k++){
                    let newRow = i + validRow[k]
                    let newCol = j + validCol[k]
                 
                    if(isSafe(newRow,newCol,grid)){
                      
                         let indexOne = (i*n)+j
                        let indexTwo = (newRow*n)+newCol
                        let findP = findParent(indexTwo,parent) 
                        uniqueParent.add(findP)
                      
                        
                    }
                }
                for(let val of uniqueParent){
                  area+= count[val]
                }

                max = Math.max(max,area)
            }
        }
    }

    return max
};