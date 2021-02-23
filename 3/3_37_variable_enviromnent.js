/* variable enviromnent */

/*
When a function is called and the execution context is created,
the js engine creates a 'space' for the variable environment
*/

function two() {
	var isValid // undefined
}

function one() {
	var isValid = true // local env
	two() // new EC
}

var isValid = false
one()

/* STACK */

// two() -> [two-EC] isValid = undefined
// one() -> [two-EC] isValid = true
// [global] -> [global-EC] isValid = false

