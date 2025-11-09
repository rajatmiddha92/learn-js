// 785. Is Graph Bipartite?
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// There is an undirected graph with n nodes, where each node is numbered between 0 and n - 1. You are given a 2D array graph, where graph[u] is an array of nodes that node u is adjacent to. More formally, for each v in graph[u], there is an undirected edge between node u and node v. The graph has the following properties:

// There are no self-edges (graph[u] does not contain u).
// There are no parallel edges (graph[u] does not contain duplicate values).
// If v is in graph[u], then u is in graph[v] (the graph is undirected).
// The graph may not be connected, meaning there may be two nodes u and v such that there is no path between them.
// A graph is bipartite if the nodes can be partitioned into two independent sets A and B such that every edge in the graph connects a node in set A and a node in set B.

// Return true if and only if it is bipartite.

 

// Example 1:


// Input: graph = [[1,2,3],[0,2],[0,1,3],[0,2]]
// Output: false
// Explanation: There is no way to partition the nodes into two independent sets such that every edge connects a node in one and a node in the other.
// Example 2:


// Input: graph = [[1,3],[0,2],[1,3],[0,2]]
// Output: true
// Explanation: We can partition the nodes into two sets: {0, 2} and {1, 3}.
 

// Constraints:

// graph.length == n
// 1 <= n <= 100
// 0 <= graph[u].length < n
// 0 <= graph[u][i] <= n - 1
// graph[u] does not contain u.
// All the values of graph[u] are unique.
// If graph[u] contains v, then graph[v] contains u.


var isBipartite = function(graph) {
    
    // a graph i a bipartitite if two adjacent (connnected) nodes are of different color
    // it should be true for erery vertex/node in a graph

    // we apply bfs traversal
    // take two colors to differnetiate i.e: black and white    
    // start from startNode mark its as black
    // at intial create an color arr to track that which node is colored or not
    // and if colored is it colored from either black or white
    // at intial push start node to queue and mark it visited to start bfs
    // take node out of the queue
    // mark start node initlly with black
    // visit it all neighbours/adjacent nodes/vertex
    // if that neigbour is not marked with any color
    // mark it with oppsite color of node & mark it visited & push neighbor node into queue
    // and also update the color arr
    // else if it is already colores check if negbour color is same or different
    // if neighbour color is same simply return false
    // if it is true simply couinue;
    // when the queue becomes empty 
    // if no adjacent node found with same color then return false
    let n = graph.length
    let colorArr = Array(graph.length).fill(-1)
    let visited = new Set()
    for(let i=0;i<n;i++){

     let queue = [{node:i,color:"black"}]
    
    
     // let color  = black/white
     colorArr[i]="black"

        if(!visited.has(i)){
            visited.add(i)
            while(queue.length){
                let {node,color} = queue.shift()
                
                for(let neighbour of graph[node]){
                    if(colorArr[neighbour]==-1){
                        let colordone = color=="black" ? "white":"black"
                        visited.add(neighbour)
                        queue.push({node:neighbour,color:colordone})
                        colorArr[neighbour]=colordone
                    }
                    else {
                      if(colorArr[neighbour]==color){
                        return false
                      }   
                    }
                }
            }
        }
        



    }

    return true
};