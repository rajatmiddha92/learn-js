// 207. Course Schedule
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

 

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 

// Constraints:

// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// All the pairs prerequisites[i] are unique.

// intution
 // we need to finish the x course first to take y
 // which is a prerequisite
 // so it a kind or order we need to maintain
 // let say to take x course you need to do 3 courses
 // so it should come in order before x
 // so we can generate a linear ordering here
 // just like a topological sort
 // to complete x we need to complete before course come to x
 // 
//  approach
//  we can constuct grpah from the given arr 
//  we found out indegree of every course which is a pre requisite
//  there are course which doesn't have any prerequisiste 
//  so there indegree is zero initially
//  we push the courses in queue whose indegree is zero
//  take node one by one into the queue 
//  push the node to topSort arr
//  check its neighbour and mark their indegree to -1
//  and check if indegree get zero for that course move it in the end of the queue
// if you got linear ordering of size equal to no of courses
// which means you can satisy prerequisites to reach number of courses
// and there is no cyclic dependency between the courses
var canFinish = function(numCourses, nums) {
  let indegree  = Array(numCourses).fill(0)
  let V = []
  let queue = []

  for(let i=0;i<nums.length;i++){
    let [u,v] = nums[i]
    if(!V[u]){
        V[u]=[]
    }
    if(!V[v]){
        V[v]=[]
    }
    V[v].push(u)
    indegree[u]++
  }

  for(let i=0;i<indegree.length;i++){
    if(indegree[i]==0){
        queue.push(i)
    }
  }

  let topSort = []
  while(queue.length){
    let node = queue.shift()
    topSort.push(node)

    for(let child of V[node] ?? []){
        indegree[child]--
        if(indegree[child]==0){
            queue.push(child)
        }
    }
  }


  return topSort.length === numCourses


    
};