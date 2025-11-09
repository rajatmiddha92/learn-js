// 14. Longest Common Prefix
// Solved
// Easy
// Topics
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.
// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 4M
// Submissions
// 9.1M
// Acceptance Rate
// 44.4%

//using bruteforce
var longestCommonPrefix = function(strs) {

    if(!strs.length) return ''
    let start = strs[0]
    let res=''
    for(let i=0;i<start.length;i++){

        let char = strs[0][i]
        // console.log(char)
        for(let  j=1;j<strs.length;j++){
            // console.log(strs[i][j])
            if(char!=strs[j][i]){
                return res
            }
        }
        res+=char
    }
    return res
    
};
//tC O(n×L)


// using trie
class TrieNode{
    constructor(){
       this.children={}
       this.endOfWord = false
       this.count = 1
    }
}

class Trie{
    constructor(){
        this.root= new TrieNode(null)
    }

    insert(root,pos,str){
        if(str.length==pos) return

        if(!root?.children?.[str[pos]]){
            root.children[str[pos]]= new TrieNode()
        }
        else{
            root.children[str[pos]].count +=1
        }

        if(pos==str.length-1){
            root.children[str[pos]].endOfWord = true 
        }

        this.insert(root?.children[str[pos]],pos+1,str)
    }

    insertWord(word){
        this.insert(this.root,0,word)
    }

}

var longestCommonPrefix = function(strs) {
     let trie = new Trie()
    for(let i=0;i<strs.length;i++){
        if(strs[i]=='') return ''
         trie.insertWord(strs[i])
// for n words of maximum length L
 //  TC - O(n×L)
    }

    let root= trie.root
    let res=''
    while(true){

        let children = root.children
        let index = Object.keys(children)[0]
        if(Object.keys(children).length == 1){
            res+=index
        }
        else{
            return res
        }
        //if end of word means it can be the max possible length ans
        // ex rajat raj it node has only one child
        // but the first end of word we got that is the max possible ans
        if(root.children[index].endOfWord) return res
        root=root.children[index]
    }
    //This search operation involves walking down the Trie, and in the worst case, this could take time proportional to the length of the longest word L. Since the Trie has at most L levels, this operation takes O(L) time.
};

// /Total Time Complexity:
// Inserting all the words: O(n \times L)
// Finding the longest common prefix: O(L)
// Thus, the overall time complexity is:
// O(n×L)