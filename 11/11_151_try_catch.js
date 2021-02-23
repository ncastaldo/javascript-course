/* Try and Catch */

/* In js we have 2 ways:
1. try {} catch {}
2. catch()
*/

// let us talk about try {} catch {}

function fail() {
	try {
		conz.log('this works')
	} catch (error) {
		console.log('something went bad')
	}
}

fail() // something went bad

// we can put the 'finally' block in the end

// the try/catch is used to handle synchronous errors

try { 
	setTimeout(() => fake, 1000)
} catch (e) {
	console.log('got it', e)
}
// we don't catch the problem in this case, because it is async