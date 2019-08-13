/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const set = new Set(wordDict);
    let memo = new Array(s.length+1).fill(false);
    memo[0] = true;

    for (let i = 0; i < s.length; i++) {
        if (memo[i] === false) {
            continue;
        }
        for (let j = i+1; j <= s.length; j++) {
            if (set.has(s.slice(i, j))) {
                memo[j] = true;
            }
        }
    }
    // console.log(memo);
    return memo[s.length];
};

// console.log(wordBreak("applepenapple", ["apple", "pen"]));