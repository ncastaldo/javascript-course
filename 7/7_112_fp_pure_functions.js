/* pure functions */

/*
1. a function that has no side effects
2. a function must always return the same output with the same input
*/

const array = [1, 2, 3]

function a(arr) {
	arr.pop()
}
a(arr) 

console.lof(array) // [1, 2]

/* the function a() has SIDE EFFECTS:
it modifies something outside of itself */


