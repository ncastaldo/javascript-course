/* closure exercise */

let view 
function initialize() {
	view = 'sea'
	console.log('view has been set')
}

initialize()
initialize()
initialize()

// not what we want, we want the function to be run just once!

function initialize() {
	let called = 0
	return function() {
		if (called > 0) {
			return
		} else {
			view = 'sea'
			called++
			console.log('view has been called')
		}
	}
}

const startOnce = initialize()

startOnce()
startOnce()
startOnce()

// called just once