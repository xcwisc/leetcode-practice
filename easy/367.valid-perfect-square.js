/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
	let count = 1;
    while (num >= count*count) {
    	if (num === count*count) {
    		return true;
    	}
    	count++;
    }
    return false;
};
