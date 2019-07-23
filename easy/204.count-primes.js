/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
	let ans = 0;
	let isPrime = [];
	for (let i = 0; i < n; i++) {
		isPrime.push(true);
	}
	for (let i = 2; i < n; i++) {
		if (isPrime[i]) {
			ans++;
			for (let j = 2; i*j < n; j++) {
				isPrime[i*j] = false;
			}
		}
	}
	return ans;
};

