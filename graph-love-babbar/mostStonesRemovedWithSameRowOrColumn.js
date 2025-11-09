// 947. Most Stones Removed with Same Row or Column
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// On a 2D plane, we place n stones at some integer coordinate points. Each coordinate point may have at most one stone.

// A stone can be removed if it shares either the same row or the same column as another stone that has not been removed.

// Given an array stones of length n where stones[i] = [xi, yi] represents the location of the ith stone, return the largest possible number of stones that can be removed.

 

// Example 1:

// Input: stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
// Output: 5
// Explanation: One way to remove 5 stones is as follows:
// 1. Remove stone [2,2] because it shares the same row as [2,1].
// 2. Remove stone [2,1] because it shares the same column as [0,1].
// 3. Remove stone [1,2] because it shares the same row as [1,0].
// 4. Remove stone [1,0] because it shares the same column as [0,0].
// 5. Remove stone [0,1] because it shares the same row as [0,0].
// Stone [0,0] cannot be removed since it does not share a row/column with another stone still on the plane.
// Example 2:

// Input: stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]
// Output: 3
// Explanation: One way to make 3 moves is as follows:
// 1. Remove stone [2,2] because it shares the same row as [2,0].
// 2. Remove stone [2,0] because it shares the same column as [0,0].
// 3. Remove stone [0,2] because it shares the same row as [0,0].
// Stones [0,0] and [1,1] cannot be removed since they do not share a row/column with another stone still on the plane.
// Example 3:

// Input: stones = [[0,0]]
// Output: 0
// Explanation: [0,0] is the only stone on the plane, so you cannot remove it.
 

// Constraints:

// 1 <= stones.length <= 1000
// 0 <= xi, yi <= 104
// No two stones are at the same coordinate point.



/**
 * @param {number[][]} stones
 * @return {number}
 */
class DisjointSet{
  constructor(n){
    this.parent = Array.from({length:n},(_,i)=>i) 
    this.size = Array(n).fill(1)
    this.rank = Array(n).fill(0)
  }
  
  findUPar(node)
  {
    if(this.parent[node]==node){
      return node
    }
    return this.findUPar(this.parent[node])
  }
  
  unionByRank(i,j){
    let x = this.findUPar(i)
    let y = this.findUPar(j)
    
    if(x==y) return false
    
    if(this.rank[x]>this.rank[y]){
      this.parent[y] = x
    }
    else if(this.rank[x]<this.rank[y]){
      this.parent[x] = y
    }
    else{
      this.parent[y] = x
      this.rank[x]++
    }
    return true
  }
  
  unionBySize(i,j){
    
    let x = this.findUPar(j)
    let y = this.findUPar(i)
    
    if(x==y) return false
     
    if(this.size[x]>this.size[y]){
        this.parent[y]= x;
        this.size[x]+= this.size[y]
    }
    else{
      this.parent[x]= y;
      this.size[y]+= this.size[x]
    }
     
    return true
    
  }
  
}

var removeStones = function(stones) {
    let maxRow = 0
    let maxCol = 0
    let n = stones.length
    for(let i=0;i<stones.length;i++){
          let [row,col] = stones[i]
          maxRow = Math.max(row,maxRow)
          maxCol = Math.max(col,maxCol)
    }
    let size = maxRow + maxCol + 1
    let ds = new DisjointSet(size)
    let set = new Set()
    for(let i=0;i<n;i++){
        let row = stones[i][0]
        let col = stones[i][1]+ maxRow + 1
        ds.unionBySize(row,col)
        set.add(row)
        set.add(col)

    }
    let cnt = 0
    for(let data of set){
        if(ds.findUPar(data)==data){
            cnt++
        }
    }

    return n-cnt

};