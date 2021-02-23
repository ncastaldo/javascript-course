/* idempotence */

// same input -> same output

function notGood(num) {
	return Math.random(num)
}

notGood(num)


function impureIdempotent(num) {
	return console.log(num)
}

notGood(num)
