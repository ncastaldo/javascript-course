/* pure functions 2 */

const array = [1, 2, 3]

function removeLastItem(arr) {
	const newArray = [].concat(arr) // copying the array
	newArray.pop()
	return newArray
}

const arr2 = removeLastItem(array)

console.log(arr2) // [1, 2]
console.log(array) // [1, 2, 3]

// we created a function that has no side effects


// this is NOT pure!
function a() {
	console.log('hi')
}

/* console.log modifies the console,
which is something outside: SIDE EFFECTS */


/* referential transparency: 
a function can be replaced with its return value */