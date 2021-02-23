/* currying */

function multiply(a, b) {
	return a*b
}

// currying: only partially giving a function the parameters

let multiplyByTwo = multiply.bind(null, 2)

console.log(multiplyByTwo) // function

console.log(multiplyByTwo(3)) // 8
