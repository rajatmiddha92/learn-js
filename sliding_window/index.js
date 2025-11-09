//sliding window

// flow of sliding window

// 1 - > origin of sliding window
// 2 - > Brute force
// 3 - > Identification of window problems
// 4 - > Types of sliding window

// first we see the probles we will think of brute force first
// then we think if sliding window can be used for this or not

//problem
//[2,3,5,2,9,7,1] k=3
// this k will be the size of subarray
// three size k subarray (continous part of array) find krna hai
// find subarray of size k such that there sum is maximum
// posisble subarrays
// [2 3 5] - >  2+3+5  - > 10
// [3 5 2] - >  10
// [5 2 9] - >  16
// [2 9 7] - >  18
// [9 7 1] - >  17
//this are the possible solution

// brute force - naive approach
// they run two loop
// for (i to n)
// for (j=i to i+k)
// and ans sum
//after observing you can see that the two numbers are added again and again which has been already calculated i.e. if k is three in next iteration we already doing the sum of two no which is same as in previous iteration
// for more clarity use pen and paper and dry run you will get more clarity
//this means improvements can be done

// identification of improvement
// 1 - > repetitive work

// sliding window  - optimized/better approac
// for(i to n-k)
// if i is zero do sum of k i i+1 i+2
// else sum - prev index + next index

//identification of sliding window
// 1 - > window need to moved and will be continous manner which means cointigous will be asked ex- subarray,substring,largest,max,min subarray,substring
// 2 - > some no will be given like k
// k will be window size

//result  - arr/string + subarray/substring + largest/smallest/max/min + k = sliding window problem

// some times window size will not given they ask to find window size

// types of sliding window

// 1 - > fixed size window -  till here we studied this problem, i.e if k is given in prblem statement, it will not change
// 2 - > varible size window -  window size is not given istead they ask you to find window size in problem statement
//window size is dynamic and can vary
//ex - > find largest/smallest window subjected to a some condition
//ex - >  find largest window/subarray whose sum is 5
// [3 2 4 5 1 1 1 1 1 3 3]
//k = 5

// two types of question are made on sliding window
// 1 - > fixed sized - competetively easy - (sum maximise/minimise)
// 2 - > variable size - medium/hard problems - (window size maximise/minimise)

// fruits into basket
