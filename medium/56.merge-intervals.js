/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
	if (intervals.length === 0) {
		return [];
	}
	intervals.sort((a,b) => {return a[0] - b[0]});
    let ans = [];
    let start = intervals[0][0];
    let end = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
    	if (end >= intervals[i][0]) {
    		end = Math.max(intervals[i][1], end);
    	} else {
    		ans.push([start, end]);
    		start = intervals[i][0];
    		end = intervals[i][1];
    	}
    }
    ans.push([start, end]);
    return ans;
};
