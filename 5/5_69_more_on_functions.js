/* more on functions */

// be careful when initializing functions inside of loops

for (let i = 0; i<5; i++) {
	function a() {

	}
	a()
}

// this way the function is initialized all the times


function a() {
	return param
}

a() // reference error, do not have param



function a(param) {
	return param
}

a() // undefined, since param is not passed



function a(param=6) {
	return param
}

a() // 6, es6