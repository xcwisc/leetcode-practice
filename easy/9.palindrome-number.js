/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
		return false;
	}
	let l = 0;
	let r = 0;
	while (Math.floor(x / (Math.pow(10,r))) !== 0) {
		r++;
	}
	r--;
	// console.log(Math.floor(x / Math.pow(10,l)) % 10);
	// console.log(Math.floor(x / Math.pow(10,r)) % 10);
	while (l <= r) {
		if (Math.floor(x / Math.pow(10,l)) % 10 !== Math.floor(x / Math.pow(10,r)) % 10) {
			return false;
		}
		l++;
		r--;
	}
    return true;
};

// console.log(isPalindrome(101));