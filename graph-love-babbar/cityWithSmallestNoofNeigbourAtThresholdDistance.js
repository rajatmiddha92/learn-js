// City With the Smallest Number of Neighbors at a Threshold Distance
// Difficulty: MediumAccuracy: 49.12%Submissions: 59K+Points: 4Average Time: 30m
// There are n cities labeled from 0 to n-1 with m edges connecting them. Given the array edges where edges[i] = [fromi , toi ,weighti]  represents a bidirectional and weighted edge between cities fromi and toi, and given the integer distanceThreshold. You need to find out a city with the smallest number of cities that are reachable through some path and whose distance is at most Threshold Distance. If there are multiple such cities, our answer will be the city with the greatest label.

// Note: The distance of a path connecting cities i and j is equal to the sum of the edge's weights along that path.

// Examples

// Input:
// n = 4, m = 4
// edges = [[0, 1, 3],
//          [1, 2, 1], 
//          [1, 3, 4],  
//          [2, 3, 1]]
// distanceThreshold = 4
// Output:
// 3
// Explaination:

// The neighboring cities at a distanceThreshold = 4 for each city are:
// City 0 -> [City 1, City 2] 
// City 1 -> [City 0, City 2, City 3] 
// City 2 -> [City 0, City 1, City 3] 
// City 3 -> [City 1, City 2] 
// Cities 0 and 3 have 2 neighboring cities at a distanceThreshold = 4, but we have to return city 3 since it has the greatest number.
// Input: 
// n = 5, m = 6
// edges = [[0, 1, 2],
//          [0, 4, 8],
//          [1, 2, 3], 
//          [1, 4, 2], 
//          [2, 3, 1],
//          [3, 4, 1]]
// distanceThreshold = 2.
// Output:
// 0
// Explaination:

// The neighboring cities at a distanceThreshold = 2 for each city are:
// City 0 -> [City 1] 
// City 1 -> [City 0, City 4] 
// City 2 -> [City 3, City 4] 
// City 3 -> [City 2, City 4]
// City 4 -> [City 1, City 2, City 3] 
// The city 0 has 1 neighboring city at a distanceThreshold = 2.
// Your Task:
// You don't need to read input or print anything. Your task is to complete the function findCity( ) which takes a number of nodes n, total number of edges m and vector of edges and distanceThreshold. and return the city with the smallest number of cities that are reachable through some path and whose distance is at most Threshold Distance. If there are multiple such cities, return the city with the greatest label.

// Expected Time Complexity: O(n2 + length(edges)*nlog(n) )
// Expected Auxiliary Space:  O(n3)

// Constraints:
// 1  ≤  n ≤  100
// 1 <= m <= n*(n-1)/2
// length(edges[i]) == 3
// 0 <= fromi < toi < n
// 1 <= weighti distanceThreshold <= 104
// All pairs (fromi, toi) are distinct

class Solution {
    // Function to find the city with the smallest number of neighbors
    
    // we need to calculate the minimum path from every city to all another city
    // so it is a multi source bcoz we have to calculate for every singgle city
    // so we use floyd warshall algo
    // after apply we will get all min path for every city
    // we have to coniser only that path which are reachable 
    // and less than our give threshold distance and not be zero (dist form city to itself)
    // and we maintain track of min city 
    // and return that node
    
    findCity(n, m, edges, distanceThreshold) {
        // your code here
        
          let dist = Array(n).fill().map(data=>Array(n).fill(Infinity))
        
        for(let i=0;i<edges.length;i++){
            let [u,v,w]= edges[i]
          
            dist[u][v]=w
            dist[v][u]=w
        }
        for(let i=0;i<n;i++){
          dist[i][i]=0
        }
        //console.log(dist)
        
        for(let via = 0;via<n;via++){
            for(let i=0;i<n;i++){
                for(let j=0;j<n;j++){
                    
                    if(i==j || j == via || i==via) continue
                    
                   
                    
                    
                    if(dist[i][via]!=Infinity && dist[via][j]!=Infinity){
                        
                         let newDist = dist[i][via]+dist[via][j]
                         
                         if(newDist<dist[i][j]){
                             dist[i][j]=newDist
                         }
                        
                    }
                   
                    
                    
                    
                }
            }
        }
     
        //console.log(dist)
        let min = Infinity
        let ans = 0;
       
        for(let i=0;i<n;i++){
            let count = 0
            for(let j=0;j<n;j++){
                if(i==j || dist[i][j]==Infinity || dist[i][j]>distanceThreshold) continue
                
                count++
                
                
                
            }
           // console.log(count,min,i)
            if(count<=min){
                min = count
                ans = i
            }
        }
        
        return ans
        
    }
}