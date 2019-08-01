/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // row check
    for (let i = 0; i < board.length; i++) {
    	let memo = {};
    	for (let j = 0; j < board.length; j++) {
    		if (board[i][j] !== '.') {
    			if (memo[board[i][j]] === 1) {
	    			return false;
	    		} else {
	    			memo[board[i][j]] = 1;
	    		}
    		}
    	}
    }

    // col check
    for (let j = 0; j < board.length; j++) {
    	let memo = {};
    	for (let i = 0; i < board.length; i++) {
    		if (board[i][j] !== '.') {
    			if (memo[board[i][j]] === 1) {
	    			return false;
	    		} else {
	    			memo[board[i][j]] = 1;
	    		}
    		}
    	}
    }

    // square check
    for (let r = 0; r < 3; r++) {
    	for (let c = 0; c < 3; c++) {
    		let memo = {};
    		for (let h = 0; h < 3; h++) {
    			for (let v = 0; v < 3; v++) {
    				let curr = board[3*r+h][3*c+v];
    				if (curr !== '.') {
		    			if (memo[curr] === 1) {
			    			return false;
			    		} else {
			    			memo[curr] = 1;
			    		}
    				}
    			}
    		}
    	}
    }

    return true;
};
