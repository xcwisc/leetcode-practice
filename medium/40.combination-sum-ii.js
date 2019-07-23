/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    if (candidates.length === 0) {
    	return [];
    }
    candidates.sort((a, b) => { return a - b; });
    let ans = [];
    var combinationSum2Helper = function(target, arr, curr) {
    	if (target === 0) {
    		ans.push(arr);
    		return;
    	}
    	if (target < 0) {
    		return;
    	}
    	for (let i = curr; i < candidates.length; i++) {
    		if (i > curr && candidates[i] === candidates[i-1]) {
    			// console.log(arr, curr, i);
    			continue;
    		}
    		combinationSum2Helper(target-candidates[i], [...arr, candidates[i]], i+1);
    	}
    }
    combinationSum2Helper(target, [], 0);
    return ans;
};

// console.log(combinationSum2([2,2,2,3,3], 6));