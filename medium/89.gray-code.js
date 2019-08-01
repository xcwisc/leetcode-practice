/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let ans = [0];
    for (let i = 0; i < n; i++) {
    	let len = ans.length - 1;
    	// console.log(ans);
    	for (let j = len; j > -1; j--) {
    		// console.log(i);
    		ans.push(ans[j] + 2**i);
    	}
    }

    return ans;
};

// console.log(2**0);
