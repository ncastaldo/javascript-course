/* MCI: memoization 2 */

// memoize with closures! not polluting public space

function memoizedAddTo80() {
	let cache = {}
	return function (n) {
		if (n in cache) {
			return cache[n]
		} else {
			console.log('long time')
			cache[n] = n + 80
			return cache[n]
		}
	}
}

const memoized = memoizedAddTo80()

console.log(memoized(5)) // long time, 85
console.log(memoized(5)) // 85