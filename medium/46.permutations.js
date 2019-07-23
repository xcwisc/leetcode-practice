/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = [];
    var permuteHelper = function(ret, start) {
    	if (start === nums.length-1) {
    		ans.push(ret);
    		return;
    	}
    	for (let i = start; i < ret.length; i++) {
    		let newRet = [...ret];
    		let temp = newRet[start];
    		newRet[start] = newRet[i];
    		newRet[i] = temp;
    		permuteHelper(newRet, start+1);
    	}
    }
    permuteHelper(nums, 0);
    return ans;
};

// console.log(permute([1,2,3]));