/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0;
    let l = a.length - 1;
    let r = b.length - 1;
    let ans = '';
    while (l >= 0 && r >= 0) {
    	let raw = parseInt(a[l]) + parseInt(b[r]) + carry;
    	if (raw >= 2) {
    		raw -= 2;
    		carry = 1;
    	} else {
    		carry = 0;
    	}
    	ans = raw.toString() + ans;
    	l--;
    	r--;
    }
    while (l >= 0) {
    	let raw = parseInt(a[l]) + carry;
    	if (raw >= 2) {
    		raw -= 2;
    		carry = 1;
    	} else {
    		carry = 0;
    	}
    	ans = raw.toString() + ans;
    	l--;
    }
    while (r >= 0) {
    	let raw = parseInt(b[r]) + carry;
    	if (raw >= 2) {
    		raw -= 2;
    		carry = 1;
    	} else {
    		carry = 0;
    	}
    	ans = raw.toString() + ans;
    	r--;
    }
    if (carry === 1) {
    	ans = '1' + ans;
    }
    return ans;
};
