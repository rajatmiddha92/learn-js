// Word Ladder II
// Difficulty: HardAccuracy: 50.0%Submissions: 37K+Points: 8Average Time: 60m
// Given two distinct words startWord and targetWord, and a list denoting wordList of unique words of equal lengths. Find all shortest transformation sequence(s) from startWord to targetWord. You can return them in any order possible.
// Keep the following conditions in mind:

// A word can only consist of lowercase characters.
// Only one letter can be changed in each transformation.
// Each transformed word must exist in the wordList including the targetWord.
// startWord may or may not be part of the wordList.
// Return an empty list if there is no such transformation sequence.
// The first part of this problem can be found here.


// Example 1:

// Input:
// startWord = "der", targetWord = "dfs",
// wordList = {"des","der","dfr","dgt","dfs"}
// Output:
// der dfr dfs
// der des dfs
// Explanation:
// The length of the smallest transformation is 3.
// And the following are the only two ways to get
// to targetWord:-
// "der" -> "des" -> "dfs".
// "der" -> "dfr" -> "dfs".
// Example 2:

// Input:
// startWord = "gedk", targetWord = "geek", 
// wordList = {"geek", "gefk"}
// Output:
// "gedk" -> "geek"

// Your Task:
// You don't need to read or print anything, Your task is to complete the function findSequences() which takes startWord, targetWord and wordList as input parameter and returns a list of list of strings of the shortest transformation sequence from startWord to targetWord.
// Note: You don't have to return -1 in case of no possible sequence. Just return the Empty List.


// Expected Time Compelxity: O(N*(logN * M * 26))
// Expected Auxiliary Space: O(N * M) where N = length of wordList and M = |wordListi|


// Constraints:
// 1 ≤ N ≤ 100
// 1 ≤ M ≤ 10


class Solution {

    findSequences(beginWord, endWord, wordList, N) {
        // code here
          let queue = [{level:0,result:[beginWord]}]
    let list = new Set(wordList)
    let visited = new Set()
    visited.add(beginWord)

    if(!list.has(endWord)) return []
    
    let ans = []
   

     let prev = -1
     let track = [beginWord]
    while(queue.length){
     // console.log(queue)
        let {result,level} = queue.shift()
        
        if(level!=prev){
          for (let word of track) {
             list.delete(word)
             
}
        track=[]
        }
           // console.log(visited,level,prev)
        let node = result[result.length-1]
       // console.log(node)
        
        if(node==endWord){
             ans.push(result)
             continue

        }

 

        for(let  i=0;i<node.length;i++){
            let char = node
            
            for(let j=97;j<123;j++){
                let newWord= char.slice(0,i)+String.fromCharCode(j)+char.slice(i+1)
                if(list.has(newWord) && newWord!=node){
                  let newArr = result.slice()
                  newArr.push(newWord)
                    queue.push({level:level+1,result:newArr})
                    track.push(newWord)
                    
                }
            }
        }
        prev = level
    
    }

  
    return ans
    }
}