/* immutability */

const obj = {name: 'Nicola'}

const clone = obj => ({...obj}) // pure function

obj.name = 'Mónica' // mutates the state, we do not want it

const updateName(obj) {
	const obj2 = clone(obj)
	obj2.name = 'Mónica'
	return obj2
}

const obj2 = updateName(obj) // now we get a new object

// isn't it not memory efficient?

// JS c
