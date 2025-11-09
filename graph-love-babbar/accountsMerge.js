// 721. Accounts Merge
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a list of accounts where each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

// Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some common email to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.

// After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.

 

// Example 1:

// Input: accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
// Output: [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
// Explanation:
// The first and second John's are the same person as they have the common email "johnsmith@mail.com".
// The third John and Mary are different people as none of their email addresses are used by other accounts.
// We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'], 
// ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.
// Example 2:

// Input: accounts = [["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]
// Output: [["Ethan","Ethan0@m.co","Ethan4@m.co","Ethan5@m.co"],["Gabe","Gabe0@m.co","Gabe1@m.co","Gabe3@m.co"],["Hanzo","Hanzo0@m.co","Hanzo1@m.co","Hanzo3@m.co"],["Kevin","Kevin0@m.co","Kevin3@m.co","Kevin5@m.co"],["Fern","Fern0@m.co","Fern1@m.co","Fern5@m.co"]]
 

// Constraints:

// 1 <= accounts.length <= 1000
// 2 <= accounts[i].length <= 10
// 1 <= accounts[i][j].length <= 30
// accounts[i][0] consists of English letters.
// accounts[i][j] (for j > 0) is a valid email.

// intution

// we need to merge two accounts if they have same email
// so we will merge all emails to that account
// if you carefully observe we care making parent of any one of them out of two which
// needs to be merged
// we are pointing to one of them
// so we can use disjoint set data structure to solve this problem
// merge means union in disjoint set (un mathematics union means merging)

// algo
// we craete rank and parent array which is for disjoint set
// and intially each email is its own parent and rank is 0
// i.e. we represent arrays as indexes
// like 0th index is parent of 0th emailids
// we craete an Map to store email as key and indexes as value
// we start iterating over each email
// if they are not present in map, we add them in map
// else if they are already present it means they need to be merged
// so rather than adding to map, we do a union of that index with index of that email
// in which its already present
// repeat this step for all emails

// now we will craete a 2d array of size length of accounts
// we start iterating over map
// for each index we will find its parent and push all emails in that parent into 2d array
// so that all emails of same person are together

// we have to return the answer in sorted order and with the names
// we have just figured out mails not the names
// we start iterating over 2d array of email ans sort them

// we create an result arr 
// we check if length is greater thean zero (there will be zero length arr 
// which are merge to there parent)
// if length is greater than zero we push the name of that parent
// and then push all emails in sorted order (which we done sorting at previous step)

// return result

function findParent(node,parent){
    if(parent[node]==node){
        return node
    }
    return findParent(parent[node],parent)
}

function unionByRank(i,j,rank,parent){
    
    let findParentOFI = findParent(i,parent)
    let findParentOFJ = findParent(j,parent)

    if(findParentOFI==findParentOFJ) return;


    if(rank[findParentOFI]>rank[findParentOFJ]){
        parent[findParentOFJ]=findParentOFI
    }
    else if(rank[findParentOFI]<rank[findParentOFJ]){
        parent[findParentOFI]=findParentOFJ
    }else{
        parent[findParentOFJ]=findParentOFI;
        rank[findParentOFI]++
    }
 
} 


var accountsMerge = function(accounts) {
    length = accounts.length
    let rank = Array(length).fill(0)
    let parent = []
    for(let i=0;i<length;i++){
        parent[i]=i
    }

    let map = new Map()

    for(let i=0;i<length;i++){
        for(let j = 1 ; j < accounts[i].length ; j++){

            let email = accounts[i][j]
            if(map.has(email)){
                let index = map.get(email)
                unionByRank(i,index,rank,parent)
            }
            else{
                map.set(email,i)
            }
        }
    }

    let emailArr = Array(length).fill().map(data=>[])
    for(let [value,key] of map){
         let index = findParent(key,parent)
         emailArr[index].push(value)
    }

    for(let i=0;i<emailArr.length;i++){
         emailArr[i].sort()
    }

    let result = []
    for(let i=0;i<emailArr.length;i++){
        if(emailArr[i].length>0) result.push([accounts[i][0],...emailArr[i]])
    }


    return result


};