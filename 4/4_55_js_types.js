/* js types */

// 7 types in js

5 						// PRIMITIVE, numbers
true 					// PRIMITIVE, boolean
'to be or not to be' 	// PRIMITIVE, string
undefined 				// PRIMITIVE, undefined
null 					// PRIMITIVE, null (typeof gives object, btw)
Symbol('just me') 		// PRIMITIVE, symbols
{} 						// NON-primitive, objects

/*
the operator typeof tells us the type of an element
*/

typeof null // --> object, this is a mistake from js!

Symbol('me') // new in ES6, 

/*
undefined -> absence of definition
null -> absence of value
*/
undefined !== null


typeof {}				// object
typeof []				// object
typeof function(){}		// function, but ACTUALLY an object

// ARRAY & FUNCTIONS are OBJECTS


function a() {
	return 4
}
a.hi = 'ihihihi'
console.log(hi) // ihihihi


/*
In javascript all types, rather than object, are PRIMITIVE
i.e. they cannot be broken down

The objects are NON-primitive, as they do not contain
the value directly!
*/

// with js we have BUILT IN objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

// EVERYTHING in JS is an OBJECT

// when we type...
true.toString() // 'true'

// ...this happens...
Boolean(true).toString() // 'true'


typeof Infinity // number
typeof Math // object

// but they are both objects

