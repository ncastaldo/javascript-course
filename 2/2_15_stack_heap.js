/* call stack & memory heap */

/* In the js engine there are the call stack 
and the memory heap */

// call stack -> keep track of where we are in the code 
// memory heap -> place to store and write information

const number = 610 // allocate memory for number
const string = 'some text' // allocate memory for a string
const human = { // allocate memory for obj and its values
	'first': 'Nicola',
	'last': 'Castaldo'
}

function calculate() {
	const sumTotal = 4 + 5
	return sumTotal
}

calculate()

// the function are put in the call stack

// simple variable on the stack
// objects, complex structures on the heap
