/* promises */

/* Promise
-> object that may produce a single value some time in the future
either a RESOLVED value or a reason that is's not resolved (REJECTED)

3 possible states:
- fulfilled
- rejected
- pending */

// before promises? callbacks!

const promise = new Promise((resolve, reject) => {
	if (true) {
		resolve('Stuff Worked!')
	} else {
		reject('Error! it broke')
	}
})

promise.then(result => console.log(result)) // 'Stuff Worked!'

console.log(promise) // Promise { <fulfilled>: "Stuff Worked!" }

// ---

const promise2 = new Promise((resolve, reject) => {
	if (true) {
		resolve('Stuff Worked!')
	} else {
		reject('Error! it broke')
	}
})

promise2
	.then(result => result + '!')
	.then(result2 => console.log(result2))
	.then(() => throw Error)

// uncaught promise

promise2
	.then(result => result + '!')
	.catch(() => console.log('error')) // catch only runs when there is an error
	.then(result => console.log(result))




