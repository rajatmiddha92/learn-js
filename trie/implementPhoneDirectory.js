class Trie{
    constructor(){
        this.root= new TrieNode(null)
    }

    insert(str,pos,root){
        if(str.length==pos) return

        let char = str[pos]
        let index  = char.charCodeAt(0)-97

        if(!root.children[index]){
            root.children[index]= new TrieNode(str[pos])
            root.childCount=1
        }
        else{
            root.childCount+=1
        }

        if(pos==str.length-1){
            root.children[index].endOfWord=true
        }

        this.insert(str,pos+1,root.children[index])
    }
   
    insertWord(word){
        this.insert(word,0,this.root)
    }

    getPrefixNode(root,str,pos){
        if(pos == str.length){
            return root
        }
    

        let index  = str[pos].charCodeAt(0)-97

        if(!root.children[index]) return '0'
        
        return this.getPrefixNode(root.children[index],str,pos+1)

    }

    printResult(root,res,str){

        //base case when child not exist
    //    if(root.childCount==0) {
    //     res.push(str + root.data)
    //     return
    //    }

       //edge case suppose with same line words should not be skipped
       // we found end of word
       if(root.endOfWord){
        res.push(str + root.data)
       }

       for(let i=0;i<root.children.length;i++){
        if(root.children[i]!=null){
          this.printResult(root.children[i],res,str + root.data)
        }
       }

    }
   
}
class Solution{

    displayContacts(n, contact, s){
        let trie = new Trie()
      
        for(let i=0;i<contact.length;i++){
            trie.insertWord(contact[i])
        }
    
        let cur = ''
        let result=[]
        let prev=trie.root
        for(let i=0;i<s.length;i++){
            cur+=s[i]
            let ans = trie.getPrefixNode(prev,s[i],0)
            // 0 means suggestion do not exist
            if(ans == '0'){
                result.push('0')
            }
            else{
                //we track of prev return prexfix node
                //so we no need to search from top of root
                prev=ans

                //code start here
                let some=[]
                // use recursion in for loop
                //slice last char bcoz that will be added during recursion
                // curword + resultant word = sarch result
                trie.printResult(ans,some,cur.slice(0,-1))
                result.push(some.join(' '))
            }
         
        }
        return result
    }
}

class TrieNode{
    constructor(data){
         this.data=data;
         this.children = Array(26).fill(null)
         this.endOfWord=false
         this.childCount=0
    }
}
//TC n*m^2
//SC n*m 

let sol= new Solution()
console.log(sol.displayContacts(3,["geeikistest", "geeksforgeeks", 
"geeksfortest"],'geeips'))
console.log(sol.displayContacts(5,[
    'cod' ,'coding' ,'codding', 'code','coly'],
    'coding'))




    // Example in React (using Array.filter().startsWith()):
    // javascript
    // Copy code
    // const SearchComponent = () => {
    //   const [query, setQuery] = useState('');
    //   const data = ['apple', 'banana', 'cherry', 'grape', 'kiwi'];
    
    //   const handleSearch = (event) => {
    //     setQuery(event.target.value);
    //   };
    
    //   const filteredData = data.filter(item => item.startsWith(query));
    
    //   return (
    //     <div>
    //       <input
    //         type="text"
    //         value={query}
    //         onChange={handleSearch}
    //         placeholder="Search"
    //       />
    //       <ul>
    //         {filteredData.map((item, index) => (
    //           <li key={index}>{item}</li>
    //         ))}
    //       </ul>
    //     </div>
    //   );
    // };
    // Example in React (using Trie):
    // If you want to use a Trie, the process would be similar but you would build the Trie data structure first and search it instead of using Array.filter().
    
    // javascript
    // Copy code
    // class Trie {
    //   constructor() {
    //     this.root = {};
    //   }
    
    //   insert(word) {
    //     let node = this.root;
    //     for (let char of word) {
    //       if (!node[char]) node[char] = {};
    //       node = node[char];
    //     }
    //     node.isEndOfWord = true;
    //   }
    
    //   searchPrefix(prefix) {
    //     let node = this.root;
    //     for (let char of prefix) {
    //       if (!node[char]) return [];
    //       node = node[char];
    //     }
    
    //     return this.collectWords(node, prefix);
    //   }
    
    //   collectWords(node, prefix) {
    //     let words = [];
    //     if (node.isEndOfWord) words.push(prefix);
    
    //     for (let char in node) {
    //       if (char !== 'isEndOfWord') {
    //         words = words.concat(this.collectWords(node[char], prefix + char));
    //       }
    //     }
    //     return words;
    //   }
    // }
    
    // const SearchComponent = () => {
    //   const [query, setQuery] = useState('');
    //   const trie = useRef(new Trie());
    
    //   // Insert some sample data into the trie
    //   useEffect(() => {
    //     const data = ['apple', 'banana', 'cherry', 'grape', 'kiwi'];
    //     data.forEach(word => trie.current.insert(word));
    //   }, []);
    
    //   const handleSearch = (event) => {
    //     setQuery(event.target.value);
    //   };
    
    //   const filteredData = query ? trie.current.searchPrefix(query) : [];
    
    //   return (
    //     <div>
    //       <input
    //         type="text"
    //         value={query}
    //         onChange={handleSearch}
    //         placeholder="Search"
    //       />
    //       <ul>
    //         {filteredData.map((item, index) => (
    //           <li key={index}>{item}</li>
    //         ))}
    //       </ul>
    //     </div>
    //   );
    // };
    // In this case, Tries can be more efficient as the dataset grows and the number of searches increases.
    
    // Conclusion:
    // For small datasets with simple search needs, Array.filter().startsWith() is sufficient. For larger datasets or more complex search scenarios (e.g., autocomplete, prefix matching), a Trie will offer better performance and scalability.