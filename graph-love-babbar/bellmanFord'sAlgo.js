// bellman's Ford Algo

// when we study dijkstra's algo we can handle only positive weights
// but we can handle negative weights also using bellman ford algo

// bellman ford helps you to detect negative cycle.
// it is only applicable in directed graph

// when undirected graph is given we can still find shortest path using bellman ford
// convert it into directed graph and find shortest path


// algo

// relax all the edges n-1 times 
// and all edge are indepently
// so you can update any edge at any time

// if we do next iteration, and our distance is getting reduced then it is a negative cycle

class Solution {
    bellmanFord(V, edges, src) {
        // code here
        let dist = Array(V).fill(Infinity)
        dist[src] = 0 
        
        for(let i=0;i<V-1;i++){
            // n-1 iterations to relax nodes independently
            
            for(let j = 0 ; j<edges.length; j++){
                
                let [u,v,w] = edges[j]
                
                let newDist = dist[u] + w
                
                if(newDist < dist[v]){
                    dist[v] = newDist
                }
                
            }
            
        }
         // last iteration to check negative cycle exist
         // if exist thtn distance array will try to be updated
        for(let i=0;i<edges.length;i++){
             let [u,v,w] = edges[i]
                
                let newDist = dist[u] + w
                
                if(newDist < dist[v]){
                    return [-1]
                }
            
        }
     
        
        return dist.map(idx=>idx==Infinity ? 10**8 : idx)
    }
}

// at max, we need n-1 itearation to get shortest distance
// proof - 1--->2--->3--->4--->5 with unit weight 1
// edges are given from 5 to 1 form
// edges= [[5,4,1],[4,3,1],[3,2,1],[2,1,1]]
// dry run will give n-1 iteartions
// but even after that on nth iteartion and distnce is getting reduced then there is a negative cycle exist

