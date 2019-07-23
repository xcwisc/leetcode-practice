/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let symbols = {
    	"M": 1000,
    	"D": 500,
    	"C": 100,
    	"L": 50,
    	"X": 10,
    	"V": 5,
    	"I": 1
    }
    let ans = "";
    for (let symbol in symbols) {
    	// console.log(symbol);
    	let quotient = num / symbols[symbol];
    	console.log(quotient);
    	if (num === 0) {
    		break;
    	} else if (quotient < 4 && quotient >= 1) {
    		for (let i = 0; i < Math.floor(quotient); i++) {
    			ans += symbol;
    			num -= symbols[symbol];
    		}
    	}
    	if ((symbols[symbol] === 1000 && num >= 900) || (symbols[symbol] === 500 && num >= 400)) {
    		ans += "C";
    		ans += symbol;
    		num -= (symbols[symbol]-100);
    	}
    	if ((symbols[symbol] === 100 && num >= 90) || (symbols[symbol] === 50 && num >= 40)) {
    		ans += "X";
    		ans += symbol;
    		num -= (symbols[symbol]-10);
    	}
    	if ((symbols[symbol] === 10 && num >= 9) || (symbols[symbol] === 5 && num >= 4)) {
    		ans += "I";
    		ans += symbol;
    		num -= (symbols[symbol]-1);
    		// console.log(num);
    	}
    }
    return ans;
};

// console.log(intToRoman(4));