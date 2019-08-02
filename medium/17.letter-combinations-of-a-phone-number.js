/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	if (digits.length === 0) {
		return [];
	}
    let letterMap = {};
    letterMap['0'] = [];
    letterMap['1'] = [];
    letterMap['2'] = ['a', 'b', 'c'];
    letterMap['3'] = ['d', 'e', 'f'];
    letterMap['4'] = ['g', 'h', 'i'];
    letterMap['5'] = ['j', 'k', 'l'];
    letterMap['6'] = ['m', 'n', 'o'];
    letterMap['7'] = ['p', 'q', 'r', 's'];
    letterMap['8'] = ['t', 'u', 'v'];
    letterMap['9'] = ['w', 'x', 'y', 'z'];

    var letterCombinationsHelper = function (r) {
        if (r < 0) {
            return [''];
        }
        let prev = letterCombinationsHelper(r - 1);
        let ret = [];
        for (let i = 0; i < prev.length; i++) {
            for (let j = 0; j < letterMap[digits[r]].length; j++) {
                ret.push(prev[i] + letterMap[digits[r]][j]);
            }
        }
        return ret;
    }

    return letterCombinationsHelper(digits.length - 1);
};

// console.log(letterCombinations('23'));