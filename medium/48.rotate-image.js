/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
	// reverse each row
    for (let i = 0; i < matrix.length; i++) {
    	let l = 0;
    	let r = matrix.length - 1;
    	while (l < r) {
    		let temp = matrix[i][l];
    		matrix[i][l] = matrix[i][r];
    		matrix[i][r] = temp;
    		l++;
    		r--;
    	}
    }
    // console.log(matrix);
    // diagonal swap
    for (let i = 0; i < matrix.length * 2 - 1; i++) {
    	let l = 0.5 * i;
    	let r = matrix.length - 1 - 0.5 * i;
    	let count = i % 2 === 1 ? 0.5 : 1;
    	// console.log(l, r);
    	while (l - count >= 0 && r - count >= 0) {
    		[matrix[l-count][r-count], matrix[l+count][r+count]] = [matrix[l+count][r+count], matrix[l-count][r-count]];
    		count++;
    	}
    }
};

// rotate([[1,2],[3,4]]);