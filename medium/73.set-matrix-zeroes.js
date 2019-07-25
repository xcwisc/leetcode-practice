/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
	if (matrix.length === 0) {
		return;
	}
	let firstRowHasZero = false;
	let firstColHasZero = false;
    for (let i = 0; i < matrix[0].length; i++) {
    	if (matrix[0][i] === 0) {
    		firstRowHasZero = true;
    	}
    }
    for (let i = 0; i < matrix.length; i++) {
    	if (matrix[i][0] === 0) {
    		firstColHasZero = true;
    	}
    }

    for (let i = 1; i < matrix.length; i++) {
    	for (let j = 1; j < matrix[0].length; j++) {
    		if (matrix[i][j] === 0) {
    			matrix[0][j] = 0;
    			matrix[i][0] = 0;
    		}
    	}
    }
    // console.log(matrix);

    for (let i = 1; i < matrix[0].length; i++) {
    	if (matrix[0][i] === 0) {
    		for (let j = 0; j < matrix.length; j++) {
    			matrix[j][i] = 0;
    		}
    	}
    }
    // console.log(matrix);
    for (let i = 1; i < matrix.length; i++) {
    	if (matrix[i][0] === 0) {
    		for (let j = 0; j < matrix[0].length; j++) {
    			matrix[i][j] = 0;
    		}
    	}
    }
    // console.log(matrix);


    if (firstColHasZero) {
	    for (let i = 0; i < matrix.length; i++) {
	    	matrix[i][0] = 0;
	    }
    }
    if (firstRowHasZero) {
	    for (let i = 0; i < matrix[0].length; i++) {
	    	matrix[0][i] = 0;
	    }
    }
};

// setZeroes([[0,1,2,0],[1,0,1,1],[1,1,1,1]]);