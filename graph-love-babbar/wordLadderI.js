// Given two distinct words startWord and targetWord, and a list denoting wordList of unique words of equal lengths. Find the length of the shortest transformation sequence from startWord to targetWord.
// Keep the following conditions in mind:

// A word can only consist of lowercase characters.
// Only one letter can be changed in each transformation.
// Each transformed word must exist in the wordList including the targetWord.
// startWord may or may not be part of the wordList
// The second part of this problem can be found here.

// Note: If no possible way to transform sequence from startWord to targetWord return 0


// Example 1:

// Input:
// wordList = {"des","der","dfr","dgt","dfs"}
// startWord = "der", targetWord= "dfs",
// Output:
// 3
// Explanation:
// The length of the smallest transformation
// sequence from "der" to "dfs" is 3
// i,e "der" -> "dfr" -> "dfs".
// Example 2:

// Input:
// wordList = {"geek", "gefk"}
// startWord = "gedk", targetWord= "geek", 
// Output:
// 2
// Explanation:
// gedk -> geek
// Example 3:

// Input: 
// wordList = {"poon", "plee", "same", "poie","plea","plie","poin"}
// startWord = "toon", targetWord= "plea",
// Output: 7 
// Explanation:
// toon -> poon -> poin -> poie -> plie -> plee -> plea 


// 127. Word Ladder
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

 

// Example 1:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
// Example 2:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
 

// Constraints:

// 1 <= beginWord.length <= 10
// endWord.length == beginWord.length
// 1 <= wordList.length <= 5000
// wordList[i].length == beginWord.length
// beginWord, endWord, and wordList[i] consist of lowercase English letters.
// beginWord != endWord
// All the words in wordList are unique.

var ladderLength = function(startWord, targetWord, wordList) {
     let set = new Set(wordList)
        if(!set.has(targetWord)) return 0
        
        let queue = [{word:startWord,level:1}]
        let visited = new Set()
        visited.add(startWord)
        
        while(queue.length){
            
            let { word,level} = queue.shift()
            
            if(word == targetWord) return level
            
            for(let i=0;i<word.length;i++){
                for(let j = 97;j<123;j++){
                    let newWord = word.slice(0,i)+String.fromCharCode(j)+word.slice(i+1)
                    if(set.has(newWord) && !visited.has(newWord)){
                        visited.add(newWord)
                        queue.push({word:newWord,level : level+1})
                    }
                }
        }
    }
    
    return 0
};