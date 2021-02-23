/* block scope */

function loop() {
	for (var i = 0; i < 5; i++) {
		console.log(i)
	}
	console.log('final', i)
}

loop()

// 0
// 1
// ...
// 4
// final 5

/* the variable i is available outside the loop 
however, if I use 'let', then the variable is not defined */

// LET, CONST ---> block scoping Hurra!