/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
	if (s.length === 0) {
		return '';
	}
	if (numRows === 1) {
		return s;
	}
    let memo = [];
    for (let i = 0; i < numRows; i++) {
    	memo.push('');
    }
    let offset = 0;
    memo[0] += s[0];
    for (let i = 1; i < s.length; i++) {
    	if (((Math.floor(i / (numRows-1)) % 2) === 1) && (i % (numRows-1) !== 0)) {
    		offset += 2;
    		// console.log(i);
    	} else if (((Math.floor(i / (numRows-1)) % 2) === 0) && i % (numRows-1) === 0) {
    		offset += 2;
    		// console.log(i);
    	}
    	memo[i-offset] += s[i];
    	// console.log(offset);
    }
    let ans = '';
    for (let i = 0; i < numRows; i++) {
    	// console.log(memo[i]);
    	ans += memo[i];
    }
    return ans;
};

// console.log(convert("ABCDCBABCDCBABC", 4));