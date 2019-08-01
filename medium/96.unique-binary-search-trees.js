/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    // idea: we pick a node as the root
    // recersively solve the numTree of the left tree and right tree
    // e.g. 1, 2, 3, 4, we pick 3 as root
    // leftTree is dp(2), rightTree is dp(1), we then multiply them together
    // we pick every possible root and add them up

    // Equation: dp[3] = dp[0] * dp[2]　+ dp[1] * dp[1] + dp[2] * dp[0]
    let memo = [1];
    for (let i = 1; i < n+1; i++) {
    	let nextNum = 0;
    	for (let j = 0; j < i; j++) {
    		nextNum += (memo[j] * memo[i-1-j]);
    	}
    	memo.push(nextNum);
    }

    return memo[n];
};
