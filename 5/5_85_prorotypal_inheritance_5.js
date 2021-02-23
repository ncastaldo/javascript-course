/* prototypal inheritance 5 */

// how to create own prototypes?

let human = {
	mortal: true
}

// one way to inherit from human
let socrates = Object.create(human)

socrates.age = 45

console.log(socrates.age) // 45
console.log(socrates.mortal) // true

console.log(human.isPrototypeOf(socrates)) // true