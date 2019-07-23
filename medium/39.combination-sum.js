/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
	if (target === 0) {
		return [];
	}
    let ret = [];
    var combinationSumHelper = function(target, ans, curr) {
    	if (target === 0) {
    		ret.push(ans);
    		return;
    	}
    	if (target < 0) {
    		return;
    	}
    	for (let i = curr; i < candidates.length; i++) {
    		combinationSumHelper(target-candidates[i], [...ans, candidates[i]], i);
    	}
    }
    combinationSumHelper(target, [], 0);
    return ret;
};
