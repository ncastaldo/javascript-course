/* oop factory functions */

const elf = {
	name: 'Orwell',
	weapon: 'bow',
	attack () {
		return 'attack with ' + elf.weapon
	}
}

elf.name // Orwell

// but in this game we want different creatures/elves

// let us create a Factory Function!

function createElf (name, weapon) {
	return {
		name,
		weapon,
		attack() {
			return 'attack with ' + weapon
		}
	}
}

const peter = createElf('peter', 'stones')
const sam = createElf('sam', 'fire')

/* functions and data are copied across all definition of objects,
not the best option... */


