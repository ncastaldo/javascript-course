/* this manipulation */

// 1. new binding this

function Person (name, age) {
	this.name = name
	this.age = age
}

const person1 = new Person('P1', '25')


// 2. implicit binding

const person2 = {
	name: 'Karen',
	age: 40,
	hi() {
		console.log('hi ' + this.name)
	}
}


// 3. explicit binding (bind, call, apply)

const person3 = {
	name: 'Karen',
	age: 40,
	hi: function() {
		console.log('hi ' + this.setTimeout) // to use the timeout
	}.bind(window)
}


// 4. arrow functions (lexically scoped)

const person3 = {
	name: 'Karen',
	age: 40,
	hi: function() {
		var inner = () => {
			console.log('hi ' + this.name) // this refers to person3
		}
		return inner()
	}
}




