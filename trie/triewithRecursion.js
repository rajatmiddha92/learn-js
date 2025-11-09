// class Trie {
//   constructor() {
//     this.root = Array(26).fill(null);
//   }

//   buildInsert(str, pos, root) {
//     if (pos == str.length) {
//       return;
//     }

//     let index = str[pos].charCodeAt(0) - 97;
//     let node = new TrieNode(str[pos]);

//     if(!root[index]){
//     root[index] = node;
//     }
//     if (pos == str.length - 1) {
//       root[index].terminalNode = true;
//     }
//     root = root[index].child;

//     this.buildInsert(str, pos + 1, root);
//   }
//   insertInTrie(str) {
//     this.buildInsert(str, 0, this.root);
//   }

//   search(str, pos, root) {
//     // Base case: If the entire string is traversed
//     if (pos === str.length) {
//       return true;
//     }

//     // Get the index of the current character
//     const index = str[pos].charCodeAt(0) - 97;

//     // Check if the current node exists
//     if (!root[index]) {
//       return false;
//     }

//     // If this is the last character, check the terminalNode flag
//     if (pos === str.length - 1) {
//       return root[index].terminalNode;
//     }

//     // Proceed to the child node
//     return this.search(str, pos + 1, root[index].child);
//   }

//   searchInTrie(str) {
//     return this.search(str, 0, this.root);
//   }
//   childExist(arr){
//     let exist=false
//     for(let i= 0;i<arr.length;i++){
//       if(arr[i]){
//         return true
//       }
//     }

//     return exist
//   }

//   delete(root,pos,str){
//     if(pos==str.length){
//       return;
//     }

//     let char = str[pos]
//     let index = char.charCodeAt(0)-97

//     this.delete(root[index].child,pos+1,str)
  

//   }
//   deleteFromTrie(str){
  
//     if(!this.searchInTrie(str)) {
//       console.log("str not exist")
//       return
//     }
//     this.delete(this.root,0,str)
//   }
// }


// class TrieNode {
//   constructor(data) {
//     this.data = data;
//     this.child = Array(26).fill(null);
//     this.terminalNode = false;
//   }
// }

// let trie = new Trie();
// // trie.insertInTrie("rajat");
// // trie.insertInTrie("some");
// // trie.insertInTrie('abcef')
// // trie.insertInTrie('abdg')
// trie.insertInTrie('apple')
// trie.insertInTrie('app')
// trie.deleteFromTrie("apple")
// console.log(JSON.stringify(trie));


class Trie{
  constructor(){
   this.root= new TrieNode(null)
  }

 insert(str,pos,root){
  if(pos==str.length){

    return
  }


  let index = str[pos].charCodeAt(0)-97

  if(!root.children[index]){
    let node= new TrieNode(str[pos])
    root.children[index]=node
  }

  if(pos==str.length-1){
    root.children[index].isEndOfWord=true
  }
  this.insert(str,pos+1,root.children[index])

 }
  insertWord(word){
     this.insert(word,0,this.root)
  }

  search(str,pos,root){
    if(str.length==pos){
      return
    }

    let index=str[pos].charCodeAt(0)-97

    if(!root.children[index]){
      return false
    }

    if(str.length-1==pos){
      if(root.children[index].isEndOfWord){
        return true
      }
      return false
    }

    return this.search(str,pos+1,root.children[index])


  }

  searchWord(word){
    return this.search(word,0,this.root)
  }


  hasChildren(node) {
    return Object.keys(node.children).length > 0;
  }
  delete(str, pos, root) {
    // Base case: if we have reached the end of the word
    if (pos === str.length) {
      if (!root.isEndOfWord) {
        return false; // Word does not exist
      }

      // Mark as not an end of word
      root.isEndOfWord = false;

      // If the node has no children, it's safe to delete
      return !this.hasChildren(root);
    }

    let index = str[pos].charCodeAt(0) - 97;

    if (!root.children[index]) {
      return false; // Character doesn't exist in the Trie
    }

    // Recursively delete the word in the child node
    const canDeleteChild = this.delete(str, pos + 1, root.children[index]);

    // If the child node can be deleted, remove it from the parent
    if (canDeleteChild) {
      delete root.children[index];

      // If current node is not the end of a word and has no other children, return true
      return !root.isEndOfWord && !this.hasChildren(root);
    }

    return false;
  }

  // Public delete method
  deleteWord(word) {
    if (!this.searchWord(word)) {
      console.log("Word does not exist.");
      return;
    }
    this.delete(word, 0, this.root);
  }



}

class TrieNode {
 constructor(value) {
   this.value = value
   this.isEndOfWord = false
   this.children = {}
 }
}

let trie = new Trie()
trie.insertWord("apple")
trie.insertWord('tomato')
trie.insertWord('ladyfinger')
trie.insertWord('cucumber')


console.dir(trie,{depth:null})