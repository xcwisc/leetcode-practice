/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	let extracted = '';
    for (let i = 0; i < s.length; i++) {
    	if (isLetter(s[i])) {
    		extracted += s[i];
    	}
    }
    let l = 0;
    let r = extracted.length - 1;
    while (l < r) {
    	if (/^[0-9]$/.test(extracted[l])) {
    		if (Number(extracted[l]) !== Number(extracted[r])) {
    			return false;
    		}
    	} else {
    		if (extracted[l].toLowerCase() !== extracted[r].toLowerCase()) {
	    		return false;
	    	}
    	}
    	l++;
    	r--;
    }
    return true;
};

var isLetter = function(c) {
	return /^[a-zA-Z0-9]$/.test(c);
};
