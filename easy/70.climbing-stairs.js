/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let prev = 1;
    let curr = 1;
    for (let i = 1; i < n; i++) {
    	let temp = curr;
    	curr = prev + curr;
    	prev = temp;
    }
    return curr;
};
