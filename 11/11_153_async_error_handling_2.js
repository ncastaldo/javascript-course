/* async error handling with try/catch */

/* When we use async/await, we can use try/catch
as if it was asynchronous */

(async function() {
	try {
		await Promise.reject('ups')
	} catch (err) {
		console.log(err)
	}
	console.log('is this still good?')
})()

// ups
// is this still good?