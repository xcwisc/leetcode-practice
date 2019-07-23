/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if (strs.length === 0) {
		return '';
	}
    let lPtr = 0;
    let index = Infinity;
    let ans = '';
    for (let i = 0; i < strs.length; i++) {
    	index = Math.min(index, strs[i].length);
    }
    for (let i = 0; i < index; i++) {
    	let curr = strs[0][i];
    	for (let j = 1; j < strs.length; j++) {
	    	if (curr != strs[j][i]) {
	    		return ans;
	    	}
	    }
	    ans += curr;
    }
    return ans;
};
