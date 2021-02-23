/* Advanced functions */

const first = () => {
	const greet = 'Hi'
	const second = () => {
		alert(greet)
	}
	return second
}

const newFunc = first()
newFunc()

// functions are small universes
// ---> CLOSURES

// the child scope always has access to the parent scope
// in this case 'second' remembers 'first' variables

// currying
const multiply = (a, b) => a * b
const curriedMultiply = a => b => a * b

// compose
const compose = (f, g) => a => f(g(a))

const sum = n => n + 1

compose(sum, sum)(5)
