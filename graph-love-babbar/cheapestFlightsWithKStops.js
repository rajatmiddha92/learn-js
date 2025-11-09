// 787. Cheapest Flights Within K Stops
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.

// You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.

 

// Example 1:


// Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
// Output: 700
// Explanation:
// The graph is shown above.
// The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
// Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.
// Example 2:


// Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
// Output: 200
// Explanation:
// The graph is shown above.
// The optimal path with at most 1 stop from city 0 to 2 is marked in red and has cost 100 + 100 = 200.
// Example 3:


// Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0
// Output: 500
// Explanation:
// The graph is shown above.
// The optimal path with no stops from city 0 to 2 is marked in red and has cost 500.
 

// Constraints:

// 1 <= n <= 100
// 0 <= flights.length <= (n * (n - 1) / 2)
// flights[i].length == 3
// 0 <= fromi, toi < n
// fromi != toi
// 1 <= pricei <= 104
// There will not be any multiple flights between two cities.
// 0 <= src, dst, k < n
// src != dst


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

    while (parent > -1 && this.heap[parent][2] > this.heap[index][2]) {
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
    if (left < n && this.heap[left][2] < this.heap[smallest][2]) {
      smallest = left;
    }

    if (right < n && this.heap[right][2] < this.heap[smallest][2]) {
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


var findCheapestPrice = function(n, flights, src, dst, k) {
    let edge = Array(n).fill().map((data)=>[])
    let dist = Array(n).fill(Infinity);
    let pq = new MinHeap()
    
    pq.push([0,src,0])
    for(let i=0;i<flights.length;i++){
        let [u,v,w]=flights[i]
        edge[u].push([v,w])
    }

    while(!pq.isEmpty()){
        let [distance,node,level]=pq.pop()
           
           if(level>k) continue;
        
        

        for(let [child,w] of edge[node]??[]){
            let newDist = distance+w
            if(newDist<dist[child]){
                dist[child]=newDist
                pq.push([newDist,child,level+1])
            } 
        }
    }
    return dist[dst]== Infinity ? -1 : dist[dst]

};