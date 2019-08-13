/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    if (amount === 0) {
        return 0;
    }
    let memo = {};
    for (let i = 0; i < coins.length; i++) {
        memo[coins[i]] = 1;
    }
    var coinChangeHelper = function (amount) {
        if (memo[amount]) {
            return memo[amount];
        }
        if (amount < 0) {
            return Infinity;
        }
        let opt = Infinity;
        for (let i = 0; i < coins.length; i++) {
            let prevOpt = coinChangeHelper(amount - coins[i]);
            opt = Math.min(opt, prevOpt + 1);
        }
        memo[amount] = opt;
        return opt;
    }
    // console.log(memo);
    let ans = coinChangeHelper(amount);
    if (ans === Infinity) {
        return -1;
    }
    return ans;
};

// console.log(coinChange([1, 2, 5], 11));
