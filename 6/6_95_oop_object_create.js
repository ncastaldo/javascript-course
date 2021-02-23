/* Object.create() */

const elfStore = {
	attack() {
		return 'attack with ' + this.weapon
	}
}

function createElf (name, weapon) {
	return {
		name,
		weapon
	}
}

const peter = createElf('peter', 'stones')
peter.attack = elfStore.attack

const sam = createElf('sam', 'fire')
sam.attack = elfStore.attack

// not the best solution as well, but at least we saved memory

// let's use Object.create()

function createElf (name, weapon) {
	const newElf = Object.create(elfStore)
	newElf.name = name
	newElf.weapon = weapon
	return newElf
}

const peter = createElf('peter', 'stones')
const sam = createElf('sam', 'fire')


// Object.create() creates a link between elf and elfStore
// it automatically creates the prototype chain

