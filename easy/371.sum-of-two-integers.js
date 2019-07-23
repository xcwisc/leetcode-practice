/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let ans = 0;
    let carry = 0;
    for (let i = 0; i < 32; a >>= 1, b >>=1, i++) {
    	let lower_a = a & 1;
    	let lower_b = b & 1;
    	ans |= (lower_a ^ lower_b ^ carry) << i;
    	carry = (carry & lower_a) | (carry & lower_b) | (lower_b & lower_a);
    }
    return ans;
};
