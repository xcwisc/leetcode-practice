/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
	if (obstacleGrid.length === 0) {
		return 0;
	}
    let memo = [];
    let index = 0;

    while (index < obstacleGrid[0].length && obstacleGrid[0][index] === 0) {
    	memo.push(1);
    	index++;
    }

    while (index < obstacleGrid[0].length) {
    	memo.push(0);
    	index++;
    }

    // console.log(memo);
    for (let i = 1; i < obstacleGrid.length; i++) {
    	for (let j = 0; j < obstacleGrid[0].length; j++) {
    		if (obstacleGrid[i][j] === 1) {
    			memo[j] = 0;
    		} else if (j !== 0) {
    			memo[j] = memo[j-1] + memo[j];
    		}
    	}
    }
    return memo[memo.length-1];
};

// console.log(uniquePathsWithObstacles([[0,1]]));
