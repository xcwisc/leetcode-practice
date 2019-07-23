/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
	let ans = [];
	var generateParenthesisHelper = function(l, r, ans, result) {
		if (l > r) {
			return;
		}
		if (l === 0 && r === 0) {
			ans.push(result);
		}
		if (l > 0) {
			generateParenthesisHelper(l-1, r, ans, result + '(');
		}
		if (r > 0) {
			generateParenthesisHelper(l, r-1, ans, result + ')');
		}
	}
	generateParenthesisHelper(n, n, ans, '');
	return ans;
};
