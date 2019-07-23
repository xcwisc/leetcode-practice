/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
	if (grid.length === 0 || grid[0].length === 0) {
		return 0;
	}

    let memo = [];
    memo.push(grid[0][0]);
    for (let i = 1; i < grid[0].length; i++) {
    	memo.push(memo[i-1] + grid[0][i]);
    }

    for (let i = 1; i < grid.length; i++) {
    	for (let j = 0; j < grid[0].length; j++) {
    		if (j === 0) {
    			memo[j] = memo[j] + grid[i][j];
    		} else {
    			memo[j] = Math.min(memo[j], memo[j-1]) + grid[i][j];
    		}
    	}
    }
    return memo[memo.length - 1];
};
