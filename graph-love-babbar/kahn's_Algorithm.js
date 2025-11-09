// kahn's algo

// to understand kahn's algo understand
// topological sorting first

// refer to the image in folder (Topological Sort Explaination.png)
// Note : topological sort works on DAG only
// Directed Acyclic Graph Only

// A graph which do not contain any cycle

// as we know now, as we do linear ordering it should go from left to right i.e u to v

// steps for kahn's algo
// 1 write the indegree of all nodes (refer to the image in folder i.e Direct Acyclic Graph.png )
// indegree is the no of edges coming or pointing towards that node/vertex.

// key observation here if cycle (cyclic graph) where cycle is present, so atleast each
//  node/vertext related to that cycle vertex will have indegre at least one
//   A-------->B
//  /|\        |
//   |         |
//   |        \|/
//   D<------- C
//      in cyclic diagram can see each vertex has atleast one indegree
// as there is edge pointing toward that that vertex/node.

// now let see in acyclic if no cycle is present
// we can observe there is atleast one vertex/node whose indgree is zero
// also, there is one node whose outdegree is zero
// then it is known as Directed Acyclic Graph

//step 2
// take two queues
// in first queue put all the node whose indegree is zero
// start removing the node from first queue one by one until first queue is not empty
// put the node in the second queue which is take out form first queue
// and  disconnect its all neigbours while diconnecting reduce the count of
// there degree by 1 if any neigbour degree gets zero add it in first queue
// this steps will be repeated until first queue is not empty
// if there is no edges left in graph so your second queue has toploical sorted order
// of a graph
// if there is some edge left in graph
// then the cycle exist

// now you can solve detect cycle in directed graph using BFS
// using Kahn's Algorithm
