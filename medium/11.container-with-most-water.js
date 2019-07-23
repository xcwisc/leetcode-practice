/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length - 1;
    let opt = 0;
    while (l < r) {
    	if (height[l] < height[r]) {
    		opt = Math.max(height[l] * (r - l), opt);
    		l++;
    	} else {
    		opt = Math.max(height[r] * (r - l), opt);
    		r--;
    	}
    }
    return opt;
};
