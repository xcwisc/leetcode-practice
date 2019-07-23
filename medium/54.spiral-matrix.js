/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
	if (matrix.length === 0) {
		return [];
	}
    let ans = [];
    let rowCount = matrix[0].length;
    let colCount = matrix.length;
    var spiralLevel = function(level) {
    	for (let i = level; i < rowCount - level; i++) {
    		ans.push(matrix[level][i]);
    	}

    	for (let i = level+1; i < colCount - level; i++) {
    		ans.push(matrix[i][rowCount-level-1]);
    	}

    	for (let i = rowCount-level-2; i > level-1; i--) {
    		ans.push(matrix[colCount-level-1][i]);
    	}
    	// console.log(ans);

    	for (let i = colCount-level-2; i > level; i--) {
    		// console.log(i);
    		ans.push(matrix[i][level]);
    	}
    }
    let i;
    for (i = 0; rowCount - 2*i >= 2 && colCount - 2*i >= 2; i++) {
    	spiralLevel(i);
    }
    // console.log(ans);
    if (rowCount - 2*i !== 0 && colCount - 2*i !== 0) {
    	if (rowCount - 2*i === 1) {
    		for (let j = i; j < colCount - i; j++) {
    			ans.push(matrix[j][i]);
    		}
    	} else {
    		for (let j = i; j < rowCount - i; j++) {
    			// console.log(`i:${i}  j:${j}`);
    			ans.push(matrix[i][j]);
    		}
    	}
    }
    return ans;
};

// console.log(spiralOrder([[1,2,3,10],[4,5,6,11],[7,8,9,12]]));