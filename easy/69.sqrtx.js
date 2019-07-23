/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
	let ans = 1;
    while (x >= ans * ans) {
    	ans++;
    }
    return ans - 1;
};
