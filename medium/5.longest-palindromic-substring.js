/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let i = s.length - 1;
    let memo = [];
    // let prev = [];
    let maxLen = 0;
    let left = 0;
    for (let j = 0; j < s.length; j++) {
    	memo.push(false);
    	// prev.push(false);
    }
    while (i >= 0) {
    	for (let j = s.length-1; j >= i; j--) {
    		if (i === j || (j - i === 1 && s[i] === s[j])) {
    			memo[j] = true;
    		} else {
    			if (s[i] === s[j]) {
    				memo[j] = memo[j-1];
    			} else {
    				memo[j] = false;
    			}
    		}
    		if (memo[j] && j-i > maxLen) {
    			maxLen = j-i;
    			left = i;
    		}
    	}
    	// for (let j = 0; j < s.length; j++) {
	    // 	prev[j] = memo[j];
	    // }
    	// console.log(memo);
    	i--;
    }
    // console.log(maxLen);
    return s.substring(left, left+maxLen+1);
};

// console.log(longestPalindrome("cbbd"));