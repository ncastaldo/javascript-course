/* prototypal inheritance 2 */

let dragon = {
	name: 'Tanya',
	fire: true,
	fight() {
		return 4
	},
	sing () {
		if (this.fire) {
			return `I am ${this.name}, breather of fire`
		}
	}
}

let lizard 0 {
	name: 'Kiki',
	fight () {
		return 1
	}
}

const singLizard = dragon.sing.bind(lizard)

singLizard() // undefined, lizard does not have fire

// let us use INHERITANCE == PROTOTYPE CHAIN

lizard.__proto__ = dragon

lizard.sing() // 'I am Kiki, breather of fire'
lizard.fire // true


/* we were able to inherit all properties and methods
of dragon and keep existing ones */

// when the method/property is not found, we go 'up' the prototype chain

// isPrototypeOf is a property of Object

dragon.isPrototypeOf(lizard) // true (does lizard inherit from dragon)
lizard.isPrototypeOf(dragon) // true


