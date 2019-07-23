/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    for (let i = 0; i < strs.length; i++) {
    	let sortedStr = strs[i].split('').sort((a, b) => {return a.localeCompare(b)}).join('');
    	// console.log(sortedStr);
    	if (!(sortedStr in map)) {
    		map[sortedStr] = [strs[i]];
    	} else {
    		map[sortedStr].push(strs[i]);
    	}
    }
    let ans = [];
    for (let group in map) {
    	ans.push(map[group]);
    }
    return ans;
};

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));