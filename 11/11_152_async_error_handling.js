/* Handle errors in async blocks */

Promise.resolve('asyncfail')
	.then(response => {
		throw new Error('#1 fail')
		console.log(response)
	})
	.then(response => {
		console.log(response)
	})

/* we cannot see the error, we see nothing in the browser
but in node.js the application stops! */

// we must use a catch block

Promise.resolve('asyncfail')
	.then(response => {
		throw new Error('#1 fail')
		console.log(response)
	})
	.catch(response => {
		console.log('error', response)
	})

// -> 'error', '#1 fail'

// rule of thumb: ALWAYS PUT A CATCH