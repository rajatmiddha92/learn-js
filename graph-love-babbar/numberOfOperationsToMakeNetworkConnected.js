// 1319. Number of Operations to Make Network Connected
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// There are n computers numbered from 0 to n - 1 connected by ethernet cables connections forming a network where connections[i] = [ai, bi] represents a connection between computers ai and bi. Any computer can reach any other computer directly or indirectly through the network.

// You are given an initial computer network connections. You can extract certain cables between two directly connected computers, and place them between any pair of disconnected computers to make them directly connected.

// Return the minimum number of times you need to do this in order to make all the computers connected. If it is not possible, return -1.

 

// Example 1:


// Input: n = 4, connections = [[0,1],[0,2],[1,2]]
// Output: 1
// Explanation: Remove cable between computer 1 and 2 and place between computers 1 and 3.
// Example 2:


// Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2],[1,3]]
// Output: 2
// Example 3:

// Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2]]
// Output: -1
// Explanation: There are not enough cables.
 

// Constraints:

// 1 <= n <= 105
// 1 <= connections.length <= min(n * (n - 1) / 2, 105)
// connections[i].length == 2
// 0 <= ai, bi < n
// ai != bi
// There are no repeated connections.
// No two computers are connected by more than one cable.
// Seen this question in a real interview before?
// 1/5


/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
function findParent(node,parent){
    if(parent[node] == node){
        return node
    }
    return findParent(parent[node],parent)
}

function unionByRank(i,j,rank,parent){
     
       let findParentOfI  = findParent(i,parent)
       let findParentoFJ  = findParent(j,parent)

       if(findParentOfI == findParentoFJ) {
        return
       }

       if(rank[findParentOfI]>rank[findParentoFJ]){
           parent[findParentoFJ] = findParentOfI
       }
       else if(rank[findParentOfI]<rank[findParentoFJ]){
           parent[findParentOfI] = findParentoFJ
       }
       else{
            parent[findParentoFJ] = findParentOfI
            rank[findParentOfI]++
       }
 }


// need to calculate the tolal disconnected components
// we need atleast that much operations/count to connect all the components
// to count disconnected components in a newtork, first we check do
// we have enough wires to connect all components
// connections length tell us the connection between two computers
// if we have enough wires then we can connect all components
// we can use disjoint set used to chech no of disconnected components
// when the parent of their node is itself represnts total no of disconnected components
// we can count total no of disconnected computers in a network
// when we count no of disconnected computers
// we can say we need n-1 connections to connect all which is our answer

// intution
// we need to count total no of disconnected components
// and return n-1 connections to connect all components

var makeConnected = function(n, connections) {
    let length = connections.length
    if(length<n-1) return -1

    let rank = Array(n).fill(0)
    let parent = []
    for(let i=0;i<n;i++){
        parent[i]=i
    }

    let count = 0

    for(let i=0;i<connections.length;i++){

        let [u,v] = connections[i]

        unionByRank(u,v,rank,parent)
    }

    for(let i=0;i<parent.length;i++){
        if(i==parent[i]) count++
    }

    return count-1
    
};


// approach
// we need to connect all components/computers
// to connect one component/computer to another component/computer
// you can't randomly connect any two components/computer with imaginary wires
// you need to figure out extra wires
// so disjoint set will help 
// when you apply disjoint set 
// and you do union of two components
// if both have same ulitmate parent then they are from same component so we found an extra edge
// it means we found an extra edge
// when completing disjoint set we can count unique ulimate parents i.e our total disconnected components/computers in a network
// if extraedges are more than or equal to n-1 then we can connect all components ans its possible to connect all components
// else return -1

function findParent(node,parent){
    if(parent[node] == node){
        return node
    }
    return findParent(parent[node],parent)
}

function unionByRank(i,j,rank,parent,extraEdge){
     
       let findParentOfI  = findParent(i,parent)
       let findParentoFJ  = findParent(j,parent)

       if(findParentOfI == findParentoFJ) {
        extraEdge[0]++
        return
       }

       if(rank[findParentOfI]>rank[findParentoFJ]){
           parent[findParentoFJ] = findParentOfI
       }
       else if(rank[findParentOfI]<rank[findParentoFJ]){
           parent[findParentOfI] = findParentoFJ
       }
       else{
            parent[findParentoFJ] = findParentOfI
            rank[findParentOfI]++
       }
 }

var makeConnected = function(n, connections) {


    let rank = Array(n).fill(0)
    let parent = []
    for(let i=0;i<n;i++){
        parent[i]=i
    }

    let extraEdge = [0]

    for(let i=0;i<connections.length;i++){

        let [u,v] = connections[i]

        unionByRank(u,v,rank,parent,extraEdge)
    }

    let count = 0
    for(let i=0;i<parent.length;i++){
        if(i==parent[i]) count++
    }

    return extraEdge[0] >= count-1 ? count-1 : -1
    
};