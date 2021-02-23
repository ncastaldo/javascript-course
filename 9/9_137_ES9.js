/* ES9 (ES2018) */

// Object spread operator

const animals = {
	tiger: 25,
	lion: 5,
	monkey: 2
}

const { tiger, ...rest } = animals

console.log(tiger) // 25
console.log(rest) // { lion: 5, monkey: 2 }

// In ES6 I could have done this with arrays

const array = [1, 2, 3, 4]

function sum (a, b, c, d) {
	return a+b+c+d
}

sum(...array) // array spread operator