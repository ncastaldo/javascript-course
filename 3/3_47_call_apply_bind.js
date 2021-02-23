/* call apply bind */

function a() {
	console.log('ciao')
}

a()
a.call()
a.apply()

// a() === a.call() === a.apply()


const wizard = {
	name: 'Merlin',
	health: 40,
	heal() {
		this.health = 100
	}
}

wizard.heal()
console.log(wizard.health) // 100

const archer = {
	name: 'Robin Hood',
	health: 30
}

console.log(archer.health) // 30
wizard.heal.call(archer) // instead of using wizard, use archer
console.log(archer.health) // 100

// the first parameter of 'call' is the this to apply to
// the other parameters refer to the arguments

// heal(num1, num2) { this.health = num1 + num2 }
wizard.heal.call(archer, 10, 30)


// with apply it goes like:
wizard.heal.apply(archer, [10, 30])


// with bind, it does not call yet, but stores it
const healArcher = wizard.heal.bind(archer, 10, 30)

healArcher()

// CALL & APPLY -> borrow functions
// BIND -> save function for later on


