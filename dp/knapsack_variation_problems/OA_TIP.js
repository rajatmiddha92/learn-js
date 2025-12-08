// 🚀 How to Think in an OA (Fast Recognition Guide)

// When you see a problem like minimum subset sum difference, don’t start coding immediately.
// Instead, follow these 5 quick checks (takes < 10 seconds mentally):

// ✅ 1. Does the problem involve forming subsets?

// Examples:

// pick some elements

// divide array

// partition

// choose or not choose each element

// ➡️ Almost always means subset-sum / knapsack-style DP.

// ✔ This problem involves splitting the array → DP.

// ✅ 2. Are you trying to minimize or maximize something?

// If the question asks:

// minimum possible difference

// maximum achievable sum

// best possible cost/profit

// ➡️ Greedy usually fails
// ➡️ DP is usually needed

// ✔ This problem asks for minimum difference → DP.

// ✅ 3. Does brute force look exponential?

// If you imagine exploring all subsets:

// 2ⁿ combinations

// n is up to 30, 40, 100+

// ➡️ You cannot brute-force
// ➡️ DP required

// OA Tip:
// “If n > 20 and problem requires subsets → NOT brute force.”

// ✅ 4. Is there a fixed target like total/2, k, budget, capacity?

// If you see:

// target = totalSum/2

// target = given sum

// target = capacity

// ➡️ That is nearly always knapsack DP.

// ✔ In this problem → target = total/2.

// ✅ 5. Would greedy fail?

// Think 2 seconds:
// “Sorting and picking smallest/largest seems too simplistic. Does mixing big+small elements matter?”

// ✔ Yes → greedy fails → go for DP.

// 🧠 Fast OA Pattern Recognition Summary
// Pattern	Likely Technique
// Subsets + optimal result	DP
// Target sum formation	DP
// Searching combinations	DP
// “Choose or not choose”	DP
// Brute force = 2ⁿ	DP
// Greedy looks too restrictive	DP
// Similar to knapsack	DP

// Minimum Subset Sum Difference checks all of these → DP, not greedy.

// 🔥 In an OA, what you quickly think:

// “Partition array into 2 subsets with minimal diff → classic Subset Sum DP.”

// Then immediately recall:

// Compute total sum

// DP to check which sums ≤ total/2 are reachable

// Find closest to total/2

// Compute diff

// This gets you to the optimal O(n * sum) solution instantly.

// 🏁 Final advice for OA speed

// When you see a problem like:

// Partition equal subset sum

// Subset sum

// Count subsets with sum k

// Minimum difference

// Can we reach a target sum?

// Knapsack-like

// → Immediately trigger DP muscle memory.

// This saves 10–15 minutes wasted on greedy/brute-force thoughts.