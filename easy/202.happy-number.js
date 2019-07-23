/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let memo = [];
    let num = sumOfSquares(n);
    while (!memo.includes(num)) {
    	memo.push(num);
    	num = sumOfSquares(num);
    	// console.log(num);
    	if (num === 1) {
    		return true;
    	}
    }
    return false;
};

var sumOfSquares = function(n) {
	let ans = 0;
	while (n !== 0) {
		ans += ((n % 10) * (n % 10));
		n = Math.floor(n / 10);
	}
	return ans;
}
