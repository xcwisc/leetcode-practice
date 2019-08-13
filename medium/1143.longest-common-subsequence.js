/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    if (text1.length === 0 || text2.length === 0) {
        return 0;
    }
    let prevMemo = [];
    // for (let i = 0; i < text1.length; i++) {
    //     prevMemo.push(0);
    // }
    let currMemo = [];
    for (let i = 0; i < text2.length; i++) {
        for (let j = 0; j < text1.length; j++) {
            let above = i - 1 < 0 ? 0 : prevMemo[j];
            let left = j - 1 < 0 ? 0 : currMemo[j - 1];
            if (text1[j] === text2[i]) {
                let diagonal = i - 1 < 0 || j - 1 < 0 ? 0 : prevMemo[j - 1];
                currMemo[j] = Math.max(above, left, diagonal + 1);
            } else {
                currMemo[j] = Math.max(above, left);
            }
        }
        // console.log(`prevMemo${prevMemo}`);
        // console.log(`currMemo${currMemo}`);
        prevMemo = [...currMemo];
    }
    return currMemo[currMemo.length - 1];
};

// console.log(longestCommonSubsequence('bsbininm', 'jmjkbkjkv'));