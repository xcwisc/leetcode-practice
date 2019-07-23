/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let prev = '1';
    let ans = '';
    let prevChar;
    let count;
    for (let i = 1; i < n; i++) {
    	prevChar = prev[0];
    	count = 1;
    	for (let j = 1; j < prev.length; j++) {
    		if (prev[j] === prevChar) {
    			count++;
    		} else {
    			ans += count.toString();
    			ans += prevChar;
    			prevChar = prev[j];
    			count = 1;
    		}
    	}
    	ans += count.toString();
    	ans += prevChar;
       	prev = ans;
    	ans = '';
    }
    return prev;
};
