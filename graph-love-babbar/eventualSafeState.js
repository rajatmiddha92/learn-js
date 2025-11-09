// 802. Find Eventual Safe States
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// There is a directed graph of n nodes with each node labeled from 0 to n - 1. The graph is represented by a 0-indexed 2D integer array graph where graph[i] is an integer array of nodes adjacent to node i, meaning there is an edge from node i to each node in graph[i].

// A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node (or another safe node).

// Return an array containing all the safe nodes of the graph. The answer should be sorted in ascending order.

 

// Example 1:

// Illustration of graph
// Input: graph = [[1,2],[2,3],[5],[0],[5],[],[]]
// Output: [2,4,5,6]
// Explanation: The given graph is shown above.
// Nodes 5 and 6 are terminal nodes as there are no outgoing edges from either of them.
// Every path starting at nodes 2, 4, 5, and 6 all lead to either node 5 or 6.
// Example 2:

// Input: graph = [[1,2,3,4],[1,2],[3,4],[0,4],[]]
// Output: [4]
// Explanation:
// Only node 4 is a terminal node, and every path starting at node 4 leads to node 4.
 

// Constraints:

// n == graph.length
// 1 <= n <= 104
// 0 <= graph[i].length <= n
// 0 <= graph[i][j] <= n - 1
// graph[i] is sorted in a strictly increasing order.
// The graph may contain self-loops.
// The number of edges in the graph will be in the range [1, 4 * 104].



// Definitions:
// A terminal node is a node with no outgoing edges (i.e., adj[i] is empty).

// A safe node is a node such that every possible path starting from that node eventually reaches a terminal node. In other words, there's no path starting from this node that enters a cycle.

// Goal:
// Return a sorted list of all safe nodes in ascending order.

// This problem is essentially about detecting cycles in a directed graph and identifying all nodes that do not participate in or lead to any cycles.

function dfs(node,visited,dfsCall,result,g){
    visited.add(node)
    dfsCall.add(node)
    
    for(let neighbour of g[node]){
        if(!visited.has(neighbour)){
            if(dfs(neighbour,visited,dfsCall,result,g)){
                return true
            }
        }
        else if(dfsCall.has(neighbour)){
            for(let key of dfsCall){
                result.add(key)
            }
            return true;
        }
    }
    dfsCall.delete(node)
    return false
}

var eventualSafeNodes = function(graph) {

    // detect cycle 
    //  if cycle form the they are unsafe 
    //  all  others are safe
  

    // graph constuction
    let result = new Set()
    let visited = new Set()
    let dfsCall = new Set()
    

    for(let i=0;i<graph.length;i++){
        if(!visited.has(i)){
            dfs(i,visited,dfsCall,result,graph)
        }
    }

    let ans = []
    for(let i=0;i<graph.length;i++){
        if(!result.has(i)) ans.push(i)
    }
    return ans
};

console.log(eventualSafeNodes([[1],[2],[3],[4,5],[6],[6],[7],[],[1,9],[10],[8],[9]]))