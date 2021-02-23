/* prototypal inheritance 4 */


function a() {}

a.hasOwnProperty('call') // false
a.hasOwnProperty('apply') // false
a.hasOwnProperty('bind') // false

a.hasOwnProperty('name') // true

// why is this? the properties belong to Function


function multiplyByFive(num) {
	return num*5
}

multiplyByFive.__proto__ // f() { [native code]}

/* the __proto__ LINKS to the Function __proto__
where there are call, bind, apply */

multiplyByFive.__proto__ === Function.prototype

Object.prototype.__proto__ // null

/* remember
__proto__ is just a pointer to the 'up the chain' prototype */

const arr = []

arr.hasOwnProperty('map') // false

arr.__proto__.hasOwnProperty('map') // true

arr.__proto__ === Array.prototype

