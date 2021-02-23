/* prototypal inheritance 3*/


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

lizard.__proto__ = dragon // prototype assignment

for (let prop in lizard) {
	if (lizard.hasOwnProperty(prop)) {
		console.log(prop)
	}
}

// name, fight
// we are NOT copying the properties, just 'linking' them

// NEVER use __proto__, bad for performance!


obj.__proto__.__proto__ // null, end of the chain


