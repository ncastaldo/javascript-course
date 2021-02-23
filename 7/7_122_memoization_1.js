/* MCI: Memoization 1 */

// Memoization ~~~~ Caching

/* Memoization is a specific form of caching */

function addTo80(n) {
	// long time execution here
	// ...
	return n + 80
}

addTo80(5) // 85
addTo80(5) // 85
addTo80(5) // 85


// memoize

let cache = {}
function memoizedAddTo80(n) {
	if (n in cache) {
		return cache[n]
	} else {
		console.log('long time')
		cache[n] = n + 80
		return cache[n]
	}
}

memoizedAddTo80(5) // console.log('long time'), 85
memoizedAddTo80(5) // 85
memoizedAddTo80(5) // 85

/* Memoization: caching the return values of a function 
based on its parameters */
