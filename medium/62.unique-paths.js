/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let memo = [];
    for (let i = 0; i < m; i++) {
    	memo.push(1);
    }
    for (let i = 1; i < n; i++) {
    	for (let j = 1; j < memo.length; j++) {
    		memo[j] = memo[j] + memo[j-1];
    	}
    }
    return memo[m-1];
};
