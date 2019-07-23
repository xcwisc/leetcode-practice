/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0;
    let memo = 0;
    for (let i = 0; i < s.length; i++) {
    	if (s[i] !== ' ') {
    		count++;
    	} else {
    		if (count !== 0) {
    			memo = count;
    		}
    		count = 0;
    	}
    }
    if (count === 0) {
    	return memo;	
    }
    return count;
};
