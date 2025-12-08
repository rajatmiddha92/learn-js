// 1. subset sum
// 2. equal sum partition
// 3. count of subset sum
// 4. minimum subset sum difference
// 5. target sum
// 6. number of subset with given difference

//knapsack problems are of three types
// 1. fractional knapsack - this comes under greedy approach this one is not a dp question - to maximise profit you can add  item in fraction
// 2. 0-1 knapsack - to maximise profit you have to add either item at full or leave it
// 3. unbounded knapsack -  repetition of supply is allowed the item added
//can be added again

// any bag is known as knapsack
//how to identify is it a dp problem
// 1 choice will be given means for eg in knapsack/bag you have choice to put item in the bag
// 2 optimal wil be asked like maxium,minimal,largest,smallest

// 0/1 Knapsack Problem

// Given N items where each item has some weight and profit associated with it and also given a bag with capacity W, [i.e., the bag can hold at most W weight in it]. The task is to put the items into the bag such that the sum of profits associated with them is the maximum possible.

// Note: The constraint here is we can either put an item completely into the bag or cannot put it at all [It is not possible to put a part of an item into the bag].

// Examples:

// Input: N = 3, W = 4, profit[] = {1, 2, 3}, weight[] = {4, 5, 1}
// Output: 3
// Explanation: There are two items which have weight less than or equal to 4. If we select the item with weight 4, the possible profit is 1. And if we select the item with weight 1, the possible profit is 3. So the maximum possible profit is 3. Note that we cannot put both the items with weight 4 and 1 together as the capacity of the bag is 4.

// Input: N = 3, W = 3, profit[] = {1, 2, 3}, weight[] = {4, 5, 6}
// Output: 0

//DP-->  Recusrion-->Memoization-->Top down Approach
// DP ==  Recusrsion + Storage
// you also store in memoization or in top down approach stored in 1d or 2d array
