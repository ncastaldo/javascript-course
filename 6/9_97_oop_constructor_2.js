/* more on oop construtrors */

function Elf(name, weapon) {
	console.log('this', this) // {}
	this.name = name
	this.weapon = weapon
	console.log('this', this) // { name, weapon }
}

Elf.prototype.attack = function() {
	return 'attack with ' + this.weapon
}

Elf.prototype.build = function() {
	function building () {
		return this.name + ' builds a house'
	}
	return building()
}

const sam = new Elf('Sam', 'stones')

sam.build() // undefined


// functions 

Elf.prototype.build = function() {
	const self = this
	function building () {
		return self.name + ' builds a house'
	}
	return building()
}
