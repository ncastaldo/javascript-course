/* private and public classes */

class Character {
	constructor (name, weapon) {
		this.name = name
		this.weapon = weapon
	}
	// people used to use '_' underscore, to give privacy
	_attack () {
		return 'attack with ' this.weapon
	}
}

// js does not offer private fields