/* oop inheritance */

class Elf {
	constructor (name, weapon) {
		this.name = name
		this.weapon = weapon
	}
	attack () {
		return 'attack with ' this.weapon
	}
}

// now we want to have an ogre

const fiona = new Elf('Fiona', 'ninja stars')
const ogre = {...fione}

ogre.__proto__ // {}
fiona.__proto__ // Elf {}

// I cloned the object, but ogre no longer has Elf as base class

console.log(fiona == ogre) // false

ogre.attack() // NOT VALID!!


// let us use inheritance

class Character {
	constructor (name, weapon) {
		this.name = name
		this.weapon = weapon
	}
	attack () {
		return 'attack with ' this.weapon
	}
}

class Elf extends Character {
	// in order to have a constructor...
	constructor(name, weapon, type) {
		super(name, weapon) // ...we must call the super constructor
		this.type = type
	} 
}

class Ogre extends Character {
	// in order to have a constructor...
	constructor(name, weapon, color) {
		super(name, weapon) // ...we must call the super constructor
		this.color = color
	} 
	makeFort() {
		return 'strongest fort in the world made'
	}
}

const fiona = new Elf('Fiona', 'ninja stars')

fiona // Elf {name, weapon}

const shrek = new Ogre('Shrek', 'club', 'green')

