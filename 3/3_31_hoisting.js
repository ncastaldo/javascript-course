/* hoisting */

/*
In the creation of the global context (this + window, equals),
we have a phase which is called 'HOISTING' (space creation in HEAP)
*/

console.log('1------')

console.log(teddy) // -> undefined

console.log(sing()) // -> 'po po po pooo'

var teddy = 'bear'
function sing() {
	console.log('po po po pooo')
}

/*
During the creation phase the js engine is going to
loop through the code and allocate 
space for the variables it encounters

--> variable is partially hoisted (set to undefined)
--> function is fully hoisted 
*/

// this one is not hoisted, since the first keyword is not hoisted
sing()
(function singMe() {
	console.log('me me meeee')
})

// NOT EVEN DEFINED here, because of let/const
console.log(teddy)
let teddy = 'bear'


// function declaration --> OK
hola()
function hola() {
	console.log('hola')
}

// function expression --> partially hoisted, undefined
ho()
var ho = function() {
	console.log('ho')
}


// REMEMBER!!
/* HOISTING HAPPENS AT THE CREATION OF 
EVERY EXECUTION CONTEXT, so also inside FUNCTIONS, when called */




