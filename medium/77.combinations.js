/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let ans = [];
    combineHelper(ans, [], 1, k, n);
    return ans;
};

var combineHelper = function(ans, memo, curr, k, upper) {
	if (k === 0) {
		ans.push(memo);
		return;
	}
	if (curr > upper) {
		return;
	}
	combineHelper(ans, [...memo, curr], curr+1, k-1, upper);
	combineHelper(ans, [...memo], curr+1, k, upper);
}