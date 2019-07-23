/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	if (s.length === 0) {
		return 0;
	}
    let hashSet = {};
    let i = 0;
    let j = 0;
    let count = 0;
    let ans = 0;
    while (j < s.length) {
    	if (hashSet[s[j]]) {
    		ans = Math.max(count, ans);
    		while (s[i] !== s[j] && i <= j) {
    			delete hashSet[s[i]];
    			i++;
    		}
    		delete hashSet[s[i]];
    		i++;
    	} else {
    		hashSet[s[j]] = 1;
    		j++;
    		count = j - i;
    		// console.log("j: " + j + "    i: " + i);
    	}
    }
    ans = Math.max(count, ans);
    return ans;
};
