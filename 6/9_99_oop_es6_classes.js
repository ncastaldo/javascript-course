/* classes es6 */

// we want to keep everything inside the box

// the Elf class is a blueprint of what we want elf to be

class Elf {

	constructor (name, weapon) {
		this.name = name
		this.weapon = weapon
	}

	attack () {
		return 'attack with ' this.weapon
	}

}

// instantiation
const peter = new Elf('Peter', 'stones')

// peter is an instance of Elf
peter instanceof Elf // true

/* this is just SYNTACTIC SUGAR */
