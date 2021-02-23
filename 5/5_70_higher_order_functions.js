/* higher order function */

// 1. function that take function as argument
// 2. function that return another function


// let us do something bad

function letAdamLogin() {
	/* long process here */
	let array = []
	for (let i = 0; i < 1000000; i++) {
		array.push(i)
	}

	return 'Access granted to Adam'
}

function letEvaLogin() {
	/* long process here */
	let array = []
	for (let i = 0; i < 1000000; i++) {
		array.push(i)
	}

	return 'Access granted to Eva'
}

letAdamLogin()
letEvaLogin()


// let us adjust it

function letUserLogin(user) {
	/* long process here */
	let array = []
	for (let i = 0; i < 1000000; i++) {
		array.push(i)
	}

	return 'Access granted to ' + user
}

letUserLogin('Eva')


// let us split it again

const giveAccessTo = (name) => 'Access granted to ' + name

// we now tell the function what data to use
function letUserLogin(user) { 
	/* long process here */
	let array = []
	for (let i = 0; i < 1000000; i++) {
		array.push(i)
	}

	return giveAccessTo(user)
}

letUserLogin('Eva')


// what if we also want to log in the admin

// we now tell the function what data to use
function letAdminLogin(user) { 
	/* long process here */
	let array = []
	for (let i = 0; i < 5000000; i++) {
		array.push(i)
	}

	return giveAccessTo(user)
}

letAdminLogin('Admin')


// in order to tackle the problem we can use HOF

const giveAccessTo = (name) => 'Access granted to ' + name

function authenticate(verify) {
	/* long process here */
	let array = []
	for (let i = 0; i < verify; i++) {
		array.push(i)
	}
	return true
}

function letPerson(person, fn) {
	if (person.level === 'admin') {
		fn(5000000)
	} else if (person.level === 'user') {
		fn(1000000)
	}
	return giveAccessTo(person.name)
}

letPerson({level: 'user', name: 'Adam'}, authenticate)
letPerson({level: 'admin', name: 'Sally'}, authenticate)

/*
we gain the power to tell the function WHAT to do,
not only the date it must handle
*/

