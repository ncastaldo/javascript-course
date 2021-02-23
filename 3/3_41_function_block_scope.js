/* function vs block scope */

if (5 > 4) {
	var secret = '123'
}

console.log(secret) // 123

/* with the 'var' we have function scope:
i.e. the scope is limited only in case of functions,
{ blocks } do not create scope */

/* in order to have block scope we must use 'const' and 'let' */

if (4 < 3) {
	const secret = '123'
}

console.log(sectet) // reference error!