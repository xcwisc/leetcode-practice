/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    if (num === 0) {
        return [0];
    }
    let ans = [0, 1];
    let currIndex = 1;
    while (currIndex < num) {
        for (let i = currIndex; i < currIndex*2 && ans.length <= num; i++) {
            ans.push(ans[i]);
        }
        for (let i = currIndex; i < currIndex*2 && ans.length <= num; i++) {
            ans.push(ans[i]+1);
        }
        currIndex *= 2;
    }
    return ans;
};
