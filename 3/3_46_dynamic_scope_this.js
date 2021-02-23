/* this and dynamic/lexical scope */

const a = function () {
	console.log('a', this)
	const b = function () {
		console.log('b', this)
		const c = {
			hi: function() {
				console.log('c', this)
			}
		}
	}
	b()
}

a()

// a, window
// b, window --> we don't have any object
// c, { hi: f }


const obj = {
	name: 'Billy',
	sing() {
		console.log('a', this)
		var anotherFunction = function () {
			console.log('b', this)
		}
		anotherFunction()
	}
}

obj.sing()

// a, { name: 'Billy', sing: f }
// b, window

/*

obj.sing() was called from 'obj'
obj did not really called anotherFunction(), so this fallback to window

---> REMEMBER

the LEXICAL scope (where it is defined, variables available) determines
our available variables, NOT where it is called

EXCEPT FOR THE 'this' keyword!! Which is DYNAMICALLY scoped

*/


// SOLUTIONS, there are 3:

/*
1. ARROW functions
arrow functions are lexically bound!
which means that they will bound 'this' LEXICALLY
*/

const obj = {
	name: 'Billy',
	sing() {
		console.log('a', this)
		var anotherFunction = () => {
			console.log('b', this)
		}
		anotherFunction()
	}
}

obj.sing()

// a, { name: 'Billy', sing: f }
// b, { name: 'Billy', sing: f }


/*
2. BIND
*/

const obj = {
	name: 'Billy',
	sing() {
		console.log('a', this)
		var anotherFunction = function () {
			console.log('b', this)
		}
		return anotherFunction.bind(this)
	}
}

obj.sing()() // called twice

// a, { name: 'Billy', sing: f }
// b, win{ name: 'Billy', sing: f }dow



/*
2. BIND
*/

const obj = {
	name: 'Billy',
	sing() {
		console.log('a', this)
		var self = this
		var anotherFunction = function {
			console.log('b', self)
		}
		anotherFunction()
	}
}

obj.sing()

// a, { name: 'Billy', sing: f }
// b, win{ name: 'Billy', sing: f }dow


