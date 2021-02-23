/* prototypal inheritance */

// JS uses prototypal inheritance

/*
Array and Functions are Objects
i.e. they can access object properties
*/


const a = []

a.__proto__ // array protytype
a.__proto__.__proto__ // object prototype

function b () {}

b.__proto__ // function prototype
b.__proto__.__proto__ // object prototype


const c = {}

c.__proto__

// in JS there is no class inheritance
// but prototypal inheritance

// class -> syntactic sugar
