/* prototypal inheritance 6 */

// ONLY FUNCTIONS HAVE THE PROTOTYPE PROPERTY

function multiplyByFive(num) {
	return num*5
}

multiplyByFive.prototype // { constructor: F }

multiplyByFive.__proto__ // Function.prototype

multiplyByFive.__proto__.__proto__ // Object.prototype

multiplyByFive.__proto__.__proto__.__proto__ // null


typeof Object // "function"

// what?! Yes, because it has the prototype property
// In fact Object is the constructor function

typeof {} // "object"


typeof Object.prototype // "object"


const obj = {}
obj.prototype // undefined

const array = []
array.prototype // undefined

const str = 'ciao'
str.prototype // undefined



