/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let power = 1;
    while(n > power) {
    	power *= 2;
    }
    return n === power;
};
