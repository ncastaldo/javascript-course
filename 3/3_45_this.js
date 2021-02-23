/* this */

// what this is all about?

// this is the OBJECT that the function is property of

obj.someFunction(this) // this === obj


function a() {
	console.log(this)
}

a() // Window

// 'a' belongs to the Window

function b() {
	'use strict';
	console.log(this)
}

b() // undefined

// with 'use strict' you cannot use undeclared variables


/* this can be used in the following situation */

const obj = {
	name: 'Billy',
	sing: function () {
		return 'la la la by ' + this.name
	}
}

obj.sing()

// also as

const obj = {
	name: 'Billy',
	sing () {
		return 'la la la by ' + this.name
	}
}

obj.sing()

// more useful

const obj = {
	name: 'Billy',
	sing () {
		return 'la la la by ' + this.name
	},
	singAgain () {
		return this.sing() + '!!!'
	}
}

obj.singAgain()


/*
this benefits:
1. gives methods access to their object
2. execute same code for multiple objects
*/

function importantPerson () {
	console.log(this.name)
}

importantPerson() // like window.importantPerson()

const name = 'Johnny' // global variable
const obj1 = {
	name: 'Cassy',
	importantPerson: importantPerson
}

const obj2 = {
	name: 'Nicola',
	importantPerson: importantPerson
}

console.log(importantPerson()) // Johnny
console.log(obj1.importantPerson()) // Cassy
console.log(obj2.importantPerson()) // Nicola

