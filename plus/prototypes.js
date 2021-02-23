// https://www.youtube.com/watch?v=hS_WqkyUah8&t=81s


// A.

// constructor function 
function Particle() {
	this.x = 100
	this.y = 90

	this.show = function() {
		point(this.x, this.y)
	}
}

// it creates an object, with __proto__ inside

// new --> js understands that the function must be 
// executed in a slightly different way
const p = new Particle()

// new -> sets the function as the constructor

/*
RESULT: 

p = {
	x: 100,
	y: 90,
	show: function,
	__proto__: Object
}
*/


// isn't it better to have the 'show' function outside?


// B.

function Particle() {
	this.x = 100
	this.y = 90
}

Particle.prototype.show = function() {
	point(this.x, this.y)
}

const p = new Particle()

/*
RESULT: 

p = {
	x: 100,
	y: 90,
	__proto__: {
		constructor: Particle(),
		show: function,
		__proto__: Object
	}
}
*/

/*
PROTOTYPE CHAIN

'p' has:
- x
- y
- __proto__

'__proto__' refers to:
- Particle.prototype

'Particle.prototype' contains:
- show()
- __proto__ (to Object.prototype)
*/
 




function setup() {
	createCanvas(600, 300)

	p = new Particle()
}