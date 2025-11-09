//The Trie data structure is a tree-like data structure used for storing string like dictionaries.

//It is also known as a prefix tree

// virtual respresentation

//                       rootNode
//                       /| |\
// total 26 child a-z   A to   Z
//evry children also is another node of 26 child

//like a dictionary
// when word to be inserted
// we need to make sure where it end
// so we mark it as terminal node
// like ant we added
// but user search "an"
// but an was never inserted but and wa
// so we dont get in anamoly of getting wrong ans
// when word end we check is its a terminal node
// terminal node is a node which respresent the end of the word
//
//               rootNode
//               / |
//              r  a
//              |  |
//              a  n
//              |  | \
//              j  d  t
//              |
//              a
//              |
//              t
class Trie {
  constructor() {
    this.root = Array(26).fill(null);
  }

  insertAtTrie(str) {
    let arr = this.root;
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let index = char.charCodeAt(0) - 97;

      if (!arr[index]) {
        let node = new TrieNode(char);
        arr[index] = node;
      }
      if (i == str.length - 1) {
        arr[index].terminalNode = true;
      }
      arr = arr[index].child;
    }
  }

  searchInTrie(str) {
    let arr = this.root;
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let index = char.charCodeAt(0) - 97;
      if (!arr[index]) {
        return false;
      }

      if (i == str.length - 1) {
        return arr[index].terminalNode ? true : false;
      }
      arr = arr[index].child;
    }
  }

  //remove word
  // we play smartly here
  // we dont remove it from trie actually
  // instead we mark it termianal node false
  // so when it serach it will become false

  // algo
  // first serach the word exist which we want to delete
  // if exist mark its termianl node to false
  deleteFromTrie(str) {
    let exist = this.searchInTrie(str);
    if (!exist) {
      console.log("not exist");
      return;
    }
    let arr = this.root;

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let index = char.charCodeAt(0) - 97;

      if (i == str.length - 1) {
        arr[index].terminalNode = false;
      }
      arr = arr[index].child;
    }
  }

  // actual delete from trie (node also delete)
}

class TrieNode {
  constructor(data) {
    this.data = data;
    this.child = Array(26).fill(null);
    this.terminalNode = false;
  }
}

let trie = new Trie();
trie.insertAtTrie("raj");
trie.insertAtTrie("raju");
trie.insertAtTrie("anshi");
trie.deleteFromTrie("raju");
console.log(JSON.stringify(trie));
