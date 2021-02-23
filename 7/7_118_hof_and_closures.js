/* hof and closures */

// hof
const hof = fn => fn(4)
hof (function a(x) { return x })

// closure
const closure = function() {
	let count = 0; // private variable
	return function increment() {
		count++
		// here we touch data outside the scope of a function
		return count
	}
}

const incrementFn = closure()

incrementFn() // 1
incrementFn() // 2
incrementFn() // 3

