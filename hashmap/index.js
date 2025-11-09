//what is hash map?

// hash map is a data structure use to store data in the form of
// key value pairs

//it is most commonly used data structure during development
// bcoz insertion deletion and searching TC in map is O(1)

//how hash map data structure take O(1) constant time complexity
// linked list take O(n) for all operation
// as bst takes log(n) TC for all operation

//so how hash map take O(1) TC?

// under the hood it is done by hash tables
// using hash table insertion deletion and searching can be done in O(1)

//Bucket Array

//in hash map at the end we have <key,value> pairs which is need to be stored somewhere

//indexes in bucket array work as key
// and store value as map value

// bucket arr =      [ 1, 2, 3, 4, 5, 6, 7, 8]
//  we have index      0  1  2  3  4 5  6  7

//hash function
// combination of two thing
// 1 hash code
// compression function

//suppose you want to map key value pair when key is string
//how you make map

//ex rajat key needs to map with frequency of characters
//so hash code will help to store it in array
// hash code conversion from string to integer( some hash code)
// which will act as index of array and value will store in that array

//compression function

// let suppose arr is of size 7
// you hashcode fucntion return is 29
// so when you try to update or insert at invalid index bcoz its not present
// so your compressor function helps to bring it in the range of you array size
// ex 29%7 = 1

//types of hash code
// identity function
// jo maine input me diya wahi mujhe op me la kr de dega
// function hash(num){
//   return num
// }
// input and output are same

//if send string as an input to hash function
// so it will return some integer corresponding to that string
// function hash (string){
//    let suppose string is rajat
//  return sum of ascii values of string
//}
//one possible hash code can be sum of ascii values

// another hash code generation
// rajat
// string
// so r*0 + a*1 + j*2 + a*3 + t*4
//r a j a t respresent ascii values followed by indices

// hash function logic should be uniform distribution
// as in case of sum of ascii values of hash function
// let s = 'rajat'
// let s2 ='aarjt'
//so both hash value is same which is not uniformly distributed
// the hash code should be unique for every value
// so two different value has been mapped to same key/index
// so collision happens here

//collision handling
//collision can be handle by two ways
// open hashing
// closed addressing

//open hashing - same place pr hi daal do
// arr = [ , , , , , ,]
// let rajat and tjaar give same hash value 23
// and comprssor fucntion give 23%7 = 2
// so at 2nd index in arr will be a linklist
//arr[2] = head
//head is null at start
//when rajat came it will at head-> rajat
//when tjaar came it will at next,  head - > rajat -> tjaar
//arr = [ , , <Node* head>, , ,]
// in the block of arr, the head of linklist is stored

// this is a rare case when collision happens so its not like your
// node linklist got to 100 length
// ex let str = 'somestringofhundredlength'
// so 100 combinations and 100 length LL
// bcoz hash functions are design in such a way that
// evry value should be uniformly distirbuted

// you compressor fucntion 55%N , N- is some good prime no
// for evenly distribution

//open addressing
//yaha pe nhi daal sakte kya oho
// khi or daal lo
//request came 'A'  so let it got at 7th index
//req Came 'B' so some how index came is 7th index
// but its not empty so agli khali jagah dekh lo na yaar

// so how next free space to find for insertion
// by using a function
// Hi(a) = h(a) + Fi(a)

// ith attempt me nikal skte hai
// linear probbing - means find next free index
// it says f(i) = i

// so when b came but the 7th index got fill
// that was our zero attempt
// f(0) = 0 as it says f(i) = i

// Hi(b) =  7 + 0
// 7 is not empty
// f(1) = 1
// 1 attempt aa gya
// Hi(b) = 7 + 1
// 8 is free so we can insert

//quadratic probbing
// f(i) = i^2

// Hi(b) = h(b) + fi(b)
// B came 7th is not empty
// so zero attempt
// 0^2 == 0
//  7th is not empty
// 1st attemp
// 1^1 = 1
// so 7+1 = 8 is empty we can fill

// if 1 is not empty in case
// then 2^2 = 4
// 7+4 is 11 index

// you can make your own probbing methods
// i^3+9  ex
// i^2+7  ex

//complexity analysis of hash code
//str = 'hi this is a time to study data structure'
// n --> total no of words
// k --> word ki length

//HC tC is O(K)
// so how it will come in O(1) for processing one word
// we asuume data process will be a large data set
// if n>>k , n is far greater greater than k
//then it is approximately ~O(1)

//if suppose all words are same of of total 100 words , so one node linklist will be of 100 length
// so it will take O(n) time complexity for traverse
// so it does not happen like that

// in an array [ , , , ,Node* head , , , , ]

// let suppose there are n entries in a map
// let b the no of boxes available (size of arr)

// let suppose there are 3 entries
// [1,,,5,,,,7]
// no of entries in particular box can be n/b -
//   3/10 - which is also known as load factor
// we also ensure load factor shoulde be less than 0.7
// n/b < 0.7, as a rule

// so it is safe and values is uniformly distributed
// hc tC is also O(1) & insering value in also O(1)

// so there is very less chance of collision &
// it is uniformly distributed

//TC for inserion is O(1)

//now let say in map entries are increasing
//n/b - n is increasing means entries in map
// & we know that n/b<0.7
// so this is our responsibilty to maintain that
// so mujhe b ko bhi badana padega
// i.e no of available boxes increase krna padega

// jab box badate hai to hume rehashing krni padti hai
// rehashing means increasing bucket size - arr
// let say u increase size to 2b means double
// then n become half of its actual
// n/2b = 0.5
// then sari entries ko dobara se hash kr diya
// bucket size change ho gya to sbko dobara place krna pad
// apko arr k andar
//
