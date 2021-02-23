/* closure exercise 2 */

const array = [1, 2, 3, 4]
for (var i = 0; i< array.length; i++) {
	setTimeout(function() {
		console.log('I am at' + array[i])
	}, 3000)
}

// 4, 4, 4, 4


// there are 2 solutions

// 1. with LET

const array = [1, 2, 3, 4]
for (let i = 0; i< array.length; i++) {
	setTimeout(function() {
		console.log('I am at' + array[i])
	}, 3000)
}

// 1, 2, 3, 4

// with 'let' it works: the variable is scoped for the block


// 2. with CLOSURES

const array = [1, 2, 3, 4]
for (var i = 0; i< array.length; i++) {
	(function(closureI) {
		setTimeout(function() {
			console.log('I am at' + array[i])
		}, 3000)
	})(i)
}

// 1, 2, 3, 4