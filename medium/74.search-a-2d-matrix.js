/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
	if (matrix.length === 0) {
		return false;
	}
    let l = 0;
    let r = matrix.length-1;

    while (l < r) {
    	let m = Math.floor((l+r)/2);
    	if (matrix[m][0] === target) {
    		return true;
    	} else if (matrix[m][0] < target) {
    		l = m+1;
    	} else {
    		r = m-1;
    	}
    }

    if (r >= 0 && matrix[r][0] > target) {
    	r--;
    }

    if (r === -1) {
    	return false;
    }
    // console.log(l,r);
    let targetRow = r;
    l = 0;
    r = matrix[0].length - 1;

    while (l < r) {
    	let m = Math.floor((l+r)/2);
    	if (target === matrix[targetRow][m]) {
    		return true;
    	} else if (target < matrix[targetRow][m]) {
    		r = m-1;
    	} else {
    		l = m+1;
    	}
    }
    return matrix[targetRow][l] === target;
    
};

// console.log(searchMatrix([[1]], 0));
