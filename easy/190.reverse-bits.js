/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let ans = 0;
    for (let i = 0; i < 32; i++, n >>= 1) {
        ans += ((2**(31-i)) * (n&1));
    }
    return ans;
};
