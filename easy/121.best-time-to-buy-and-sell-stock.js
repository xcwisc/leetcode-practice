/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // // one pass
    // if (prices.length === 0) {
    // 	return 0;
    // }
    // let profit = 0;
    // let minPrice = prices[0];

    // for (let i = 1; i < prices.length; i++) {
    // 	if (prices[i] < minPrice) {
    // 		minPrice = prices[i];
    // 	} else {
    // 		profit = Math.max(profit, prices[i] - minPrice);
    // 	}
    // }

    // return profit;

    // divide and conquer
    if (prices.length === 0) {
    	return 0;
    }
    var maxProfitHelper = function(l, r) {
    	let retObj = {
    		min: prices[l],
    		max: prices[l],
    		opt: 0
    	}
    	if (l === r) {
    		return retObj;
    	}
    	let m = Math.floor((l+r)/2);
    	let lObj = maxProfitHelper(l, m);
    	let rObj = maxProfitHelper(m+1, r);

    	retObj.min = Math.min(lObj.min, rObj.min);
    	retObj.max = Math.max(lObj.max, rObj.max);
    	retObj.opt = Math.max(lObj.opt, rObj.opt, rObj.max-lObj.min);
    	return retObj;
    }
    return maxProfitHelper(0, prices.length-1).opt;

};

// console.log(maxProfit([7,6,4,3,1]));