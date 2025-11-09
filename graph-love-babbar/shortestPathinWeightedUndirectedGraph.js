// class Solution {
//   /**
//     * @param number n
//     * @param number m
//     * @param number[][] edges

//     * @returns number
//     */
//   constructor() {
//     this.list = new Map();
//   }

//   addEdge(u, v, weight) {
//     if (!this.list.has(u)) this.list.set(u, new Set());
//     if (!this.list.has(v)) this.list.set(v, new Set());

//     this.list.get(u).add([v, weight]);
//     this.list.get(v).add([u, weight]);
//   }

//   dfs(parent, min, count, node, n, temp, path, visited) {
//     if (node == n) {
//       if (min[0] > count) {
//         min[0] = count;
//         temp.length = 0;
//         temp.push(...path, n);
//       }

//       return;
//     }
//     visited.add(node);
//     path.push(node);

//     for (let child of this.list.get(node) || new Set()) {
//       let val = child[0];
//       if (!visited.has(val)) {
//         this.dfs(node, min, count + +child[1], val, n, temp, path, visited);
//       }
//     }
//     visited.delete(node);
//     path.pop();
//   }
//   shortestPath(n, m, edges) {
//     // code here

//     for (let i = 0; i < edges.length; i++) {
//       let idx = edges[i][0];
//       this.addEdge(idx, edges[i][1], edges[i][2]);
//     }

//     let ans = [Infinity];

//     let temp = [];
//     let path = [];
//     let visited = new Set();
//     this.dfs(-1, ans, 0, 1, n, temp, path, visited);

//     return ans[0] == Infinity ? ans : [ans[0], ...temp];
//   }
// }
// class Solution {
//   /**
//   * @param number n
//   * @param number m
//   * @param number[][] edges

//   * @returns number
//   */

//   constructor() {
//     this.list = new Map();
//   }

//   addEdge(u, v, w) {
//     if (!this.list.has(u)) this.list.set(u, new Set());
//     if (!this.list.has(v)) this.list.set(v, new Set());

//     this.list.get(u).add([v, w]);
//     this.list.get(v).add([u, w]);
//   }

//   shortestPath(n, m, edges) {
//     // code here

//     for (let [u, v, w] of edges) {
//       this.addEdge(u, v, w);
//     }
//     // console.log(this.list);

//     let result = Array(n + 1).fill({ cameFrom: null, distance: Infinity });
//     result[0] = null;
//     result[1] = { cameFrom: null, distance: 0 };

//     let queue = [{ node: 1, weight: 0 }];

//     while (queue.length) {
//       let top = queue.pop();

//       let node = top.node;
//       let dist = top.weight;

//       for (let child of this.list.get(node) || new Set()) {
//         let childnode = child[0];
//         let weight = child[1];

//         if (dist + weight < result[childnode].distance) {
//           result[childnode] = {
//             ...result[childnode],
//             cameFrom: node,
//             distance: dist + weight,
//           };

//           queue.push({ node: childnode, weight: dist + weight });
//         }
//       }
//     }

//     let ans = [-1];
//     if (result[n].distance == Infinity) {
//       return ans;
//     }

//     ans.pop();
//     // ans.push(result[n].distance);
//     let num = result[n].cameFrom;
//     while (num != 1) {
//       ans.push(num);
//       num = result[num].cameFrom;
//     }
//     ans.push(num);
//     ans.reverse();
//     ans.unshift(result[n].distance);
//     ans.push(n);

//     return ans;
//   }
// }

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
  * @param number n
  * @param number m
  * @param number[][] edges

  * @returns number
  */

  constructor() {
    this.list = new Map();
  }

  addEdge(u, v, w) {
    if (!this.list.has(u)) this.list.set(u, []);
    if (!this.list.has(v)) this.list.set(v, []);

    this.list.get(u).push([v, w]);
    this.list.get(v).push([u, w]);
  }
  shortestPath(n, m, edges) {
    // code here

    for (let [u, v, w] of edges) {
      this.addEdge(u, v, w);
    }

    let distance = Array(n + 1).fill(Infinity);
    let parent = Array(n + 1).fill(-1);
    // let visited = Array(n + 1).fill(false);

    let pq = new MinHeap();

    // distance node
    pq.push([0, 1]);
    distance[1] = 0;
    while (!pq.isEmpty()) {
      let node = pq.pop();

      let pat = node[1];

      let weight = node[0];

      for (let [child, dist] of this.list.get(pat) || []) {
        if (weight + dist < distance[child]) {
          distance[child] = weight + dist;
          parent[child] = pat;
          pq.push([weight + dist, child]);
        }
      }
    }
    if (distance[n] == Infinity) return [-1];
    let path = [];
    let start = n;
    while (start != -1) {
      path.push(start);
      start = parent[start];
    }
    path.push(distance[n]);
    path.reverse();
    return path;
  }
}

let n = 5,
  m = 6,
  edges = [
    [1, 2, 2],
    [2, 5, 5],
    [2, 3, 4],
    [1, 4, 1],
    [4, 3, 3],
    [3, 5, 1],
  ];
let sol = new Solution();
console.log(sol.shortestPath(n, m, edges));
// let sol1 = new Solution();
// console.log(sol1.shortestPath(2, 1, [[1, 2, 2]]));
// let sol3 = new Solution();
// console.log(sol3.shortestPath(2, 0, []));




class minHeap {
    constructor(){
        this.heap = []
    }
    
    isSize(){
        return this.heap.length;
    }
    
    heapifyUp(i){
        let index = i
        
        let parent = Math.floor((index-1)/2)
        
        while(parent>=0 && this.heap[parent].distance>this.heap[index].distance){
            [this.heap[parent],this.heap[index]]=[this.heap[index],this.heap[parent]]
             index = parent;
             parent=Math.floor((index-1)/2)
        }
        
    }
    
    push(val){
        this.heap.push(val)
        this.heapifyUp(this.isSize()-1)
    }
    
    heapifyDown(i){
      
      let smallest = i
      let left = 2*i+1;
      let right = 2*i+2;
      
      
      if(left<this.isSize() && this.heap[left].distance<this.heap[smallest].distance){
          smallest = left;
          
      }
      if(right<this.isSize() && this.heap[right].distance<this.heap[smallest].distance){
          smallest= right
      }
      
      
      if(smallest != i){
          [this.heap[smallest],this.heap[i]]=[this.heap[i],this.heap[smallest]]
          this.heapifyDown(smallest)
      }
      
        
        
        
    }
    
    
    pop(){
        let top = this.heap[0]
        this.heap[0] = this.heap[this.isSize()-1]
        this.heap.pop()
        
        
        this.heapifyDown(0)
        
        return top;
        
        
    }
    isEmpty(){
        return this.heap.length
    }
}

class Solution {
    /**
    * @param number n
    * @param number m
    * @param number[][] edges

    * @returns number
    */
    shortestPath(n, m, edges) {
        // code here
         let dist = Array(n+1).fill(Infinity)
         dist[0]=dist[1]=0
         
         let heap = new minHeap()
         
         let edge = Array(n+1).fill(null).map(()=>[])
         let parent = Array(n+1).fill(-1)
         
         for(let i=0;i<edges.length;i++){
             let [u,v,w]=edges[i]
             edge[u].push([v,w])
              edge[v].push([u,w])
         }
         
        heap.push({node:1,distance:0})
         //console.log(edge)
         
         while(heap.isEmpty()){
             
            // sortheap.length>1 && sortheap.sort((a,b)=>(b.distance-a.distance))
            // console.log(sortheap)
             
             
             let {node,distance} = heap.pop()
            // console.log(node,distance,"fdf" ,edge[node])
             
             for(let [v,w] of edge[node]){
               //console.log(v,w,"some")
                 let newDist = distance + w
                 if(dist[v]>newDist){
                     dist[v]= newDist
                     parent[v]=node
                    // console.log("cma")
                     heap.push({node:v,distance:newDist})
                 }
             }
         }
         //console.log(dist)
         if(dist[dist.length-1]=="Infinity") return [-1]
         let path = [ dist[dist.length-1]]
         let start = dist.length-1
         while(start!=-1){
           path.push(start)
           start = parent[start]
         }
         
         return path
    }
}
