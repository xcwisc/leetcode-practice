/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    // base cases
    if (s.length === 0) {
        return 0;
    }
    if (s.length === 1) {
        if (s[0] === '0') {
            return 0;
        }
        return 1;
    }
    
    // helper function to determine if the double digit number can be expressed by A-Z
    var isOutOfBound = function (start) {
        // console.log(Number(s.substr(0, 2)));
        return Number(s.substr(start, 2)) > 26;
    }

    // initialize prev and curr
    let prev = 1;
    let curr;
    if (s[0] === '0') {
        return 0;
    }
    if (s[1] === '0') {
        if (isOutOfBound(0)) {
            return 0;
        } else {
            curr = 1;
        }
    } else {
        if (isOutOfBound(0)) {
            curr = 1;
        } else {
            curr = 2;
        }
    }

    for (let i = 2; i < s.length; i++) {
        if (s[i - 1] === '0') {
            if (s[i] === '0') {
                return 0;
            } else {
                prev = curr;
            }
        } else {
            if (s[i] === '0') {
                if (isOutOfBound(i - 1)) {
                    return 0;
                } else {
                    curr = prev;
                }
            } else {
                if (isOutOfBound(i - 1)) {
                    prev = curr;
                } else {
                    [curr, prev] = [curr + prev, curr];
                }
            }
        }
    }
    return curr;
};
// console.log(numDecodings('110'));