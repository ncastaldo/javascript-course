/* oop inheritance 2 */

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
const shrek = new Ogre('Shrek', 'club', 'green')


console.log(Ogre.prototype.isPrototypeOf(shrek)) // true
console.log(Character.prototype.isPrototypeOf(Ogre.prototype))

console.log(dolby instanceof Character) // true, extends


