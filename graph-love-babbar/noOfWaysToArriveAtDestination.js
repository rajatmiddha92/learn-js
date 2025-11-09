// 1976. Number of Ways to Arrive at Destination
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are in a city that consists of n intersections numbered from 0 to n - 1 with bi-directional roads between some intersections. The inputs are generated such that you can reach any intersection from any other intersection and that there is at most one road between any two intersections.

// You are given an integer n and a 2D integer array roads where roads[i] = [ui, vi, timei] means that there is a road between intersections ui and vi that takes timei minutes to travel. You want to know in how many ways you can travel from intersection 0 to intersection n - 1 in the shortest amount of time.

// Return the number of ways you can arrive at your destination in the shortest amount of time. Since the answer may be large, return it modulo 109 + 7.

 

// Example 1:


// Input: n = 7, roads = [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]
// Output: 4
// Explanation: The shortest amount of time it takes to go from intersection 0 to intersection 6 is 7 minutes.
// The four ways to get there in 7 minutes are:
// - 0 ➝ 6
// - 0 ➝ 4 ➝ 6
// - 0 ➝ 1 ➝ 2 ➝ 5 ➝ 6
// - 0 ➝ 1 ➝ 3 ➝ 5 ➝ 6
// Example 2:

// Input: n = 2, roads = [[1,0,10]]
// Output: 1
// Explanation: There is only one way to go from intersection 0 to intersection 1, and it takes 10 minutes.
 

// Constraints:

// 1 <= n <= 200
// n - 1 <= roads.length <= n * (n - 1) / 2
// roads[i].length == 3
// 0 <= ui, vi <= n - 1
// 1 <= timei <= 109
// ui != vi
// There is at most one road connecting any two intersections.
// You can reach any intersection from any other intersection.


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

function dfs(node,dst,val,visited,edge,count,ct){
    if(node == dst && val == ct){
        count[0]++
        return
    }
    visited.add(node)
    

    for(let [child,w] of edge[node]??w){
        dfs(child,dst,val,visited,edge,count,ct+w)

    }
    

}



var countPaths = function(n, roads) {

     let edge = Array(n).fill().map((data)=>[])
    for(let i=0;i<roads.length;i++){
        let [u,v,w]=roads[i]
        edge[u].push([v,w])
        edge[v].push([u,w])
    }
    let pq = new MinHeap()
    let dist = Array(n).fill(Infinity)
    pq.push([0,0])
    let ways= Array(n).fill(0)
    ways[0]=1

    dist[0]=0

    while(!pq.isEmpty()){
        let [distance,node]=pq.pop()

        for(let [child,w] of edge[node]??[]){
            let newDist = distance + w;
            if(newDist < dist[child]){
                pq.push([newDist,child])
                dist[child]=newDist
                ways[child] = ways[node]
             
            }
            else if(newDist == dist[child]){
                ways[child] = (ways[child] + ways[node])%((10**9)+7)
            }
          
        }
    }

    

    return ways[n-1]

    
    
};