/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	if (s.length === 0) {
		return 0;
	}
	let prev;
	let curr;
	let sum = 0;
	if (s[0] == "I") {
		prev = 1;
	} else if (s[0] == "V") {
		prev = 5;
	} else if (s[0] == "X") {
		prev = 10;
	} else if (s[0] == "L") {
		prev = 50;
	} else if (s[0] == "C") {
		prev = 100;
	} else if (s[0] == "D") {
		prev = 500;
	} else if (s[0] == "M") {
		prev = 1000;
	}
    for (i = 1; i < s.length; i++) {
    	if (s[i] == "I") {
    		curr = 1;
    	} else if (s[i] == "V") {
    		curr = 5;
    	} else if (s[i] == "X") {
    		curr = 10;
    	} else if (s[i] == "L") {
    		curr = 50;
    	} else if (s[i] == "C") {
    		curr = 100;
    	} else if (s[i] == "D") {
    		curr = 500;
    	} else if (s[i] == "M") {
    		curr = 1000;
    	}
    	if (prev >= curr) {
    		sum += prev;
    	} else {
    		sum -= prev;
    	}
    	prev = curr;
    }
    sum += prev;
    return sum;
};
