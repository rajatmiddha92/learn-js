// Alien Dictionary
// Difficulty: HardAccuracy: 47.81%Submissions: 169K+Points: 8
// A new alien language uses the English alphabet, but the order of letters is unknown. You are given a list of words[] from the alien language’s dictionary, where the words are claimed to be sorted lexicographically according to the language’s rules.

// Your task is to determine the correct order of letters in this alien language based on the given words. If the order is valid, return a string containing the unique letters in lexicographically increasing order as per the new language's rules. If there are multiple valid orders, return any one of them.

// However, if the given arrangement of words is inconsistent with any possible letter ordering, return an empty string ("").

// A string a is lexicographically smaller than a string b if, at the first position where they differ, the character in a appears earlier in the alien language than the corresponding character in b. If all characters in the shorter word match the beginning of the longer word, the shorter word is considered smaller.

// Note: Your implementation will be tested using a driver code. It will print true if your returned order correctly follows the alien language’s lexicographic rules; otherwise, it will print false.

// Examples:

// Input: words[] = ["baa", "abcd", "abca", "cab", "cad"]
// Output: true
// Explanation: A possible corrct order of letters in the alien dictionary is "bdac".
// The pair "baa" and "abcd" suggests 'b' appears before 'a' in the alien dictionary.
// The pair "abcd" and "abca" suggests 'd' appears before 'a' in the alien dictionary.
// The pair "abca" and "cab" suggests 'a' appears before 'c' in the alien dictionary.
// The pair "cab" and "cad" suggests 'b' appears before 'd' in the alien dictionary.
// So, 'b' → 'd' → 'a' → 'c' is a valid ordering.
// Input: words[] = ["caa", "aaa", "aab"]
// Output: true
// Explanation: A possible corrct order of letters in the alien dictionary is "cab".
// The pair "caa" and "aaa" suggests 'c' appears before 'a'.
// The pair "aaa" and "aab" suggests 'a' appear before 'b' in the alien dictionary. 
// So, 'c' → 'a' → 'b' is a valid ordering.
// Input: words[] = ["ab", "cd", "ef", "ad"]
// Output: ""
// Explanation: No valid ordering of letters is possible.
// The pair "ab" and "ef" suggests "a" appears before "e".
// The pair "ef" and "ad" suggests "e" appears before "a", which contradicts the ordering rules.
// Constraints:
// 1 ≤ words.length ≤ 500
// 1 ≤ words[i].length ≤ 100
// words[i] consists only of lowercase English letters.

class Solution {
    findOrder(words) {
        // code here
        let present = Array(26).fill(false)
        
        for(let data of words){
            for(let val of data){
                present[val.charCodeAt()-97]= true
            }
        }
        
        let edge = Array(26).fill(null).map(data=>[])
        let indegree = Array(26).fill(0)
        
        for(let i=0;i<words.length-1;i++){
            
            let str1 = words[i]
            let str2 = words[i+1]
            let start = 0
            while(start< str1.length && start < str2.length && str1[start]==str2[start]){
                start++
            }
            if(start < str1.length && start>= str2.length) return  ''
            
            if(start<str1.length && start<str2.length){
            let  u = str1[start]
            let  v = str2[start]
            edge[u.charCodeAt()-97].push(v)
            indegree[v.charCodeAt()-97]++
            } 
        }
        
        let queue = []
        for(let i=0;i<indegree.length;i++){
            if(present[i] && indegree[i]==0){
                queue.push(String.fromCharCode(i+97))
            }
        }
        
        let topSort =  []
        while(queue.length){
            
            let node = queue.shift()
            topSort.push(node)
            
            for(let child of edge[node.charCodeAt()-97]??[]){
                let index = child.charCodeAt()-97
                indegree[index]--
                if(indegree[index]==0){
                    queue.push(child)
                }
                
            }   
        }
        
        let totalChar = present.filter(Boolean).length
        return totalChar == topSort.length ? topSort.join("") : ""
       
    }
}