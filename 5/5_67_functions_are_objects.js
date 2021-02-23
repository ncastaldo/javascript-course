/* functions are objects */

// as we said, arrays and functions are objects

/*
when we invoke a function we get arguments and this
we prefer to use spread operators for arguments
they have a variable environment and the scope chain
*/


// 1. function invokation

function one() {
	return 1
}

one()


// 2. function as a method

var obj = {
	two () {
		return 2
	}
}

obj.two() // this updated to obj


// 3. call apply

function three () {
	return 3
}

three.call()


// 4. with Function constructor

// the LAST parameter is the text
const four = new Function('return 4')
four()

const num = new Function('number', 'return number')
num()


/*
we can add properties to functions
*/

function hooo(){
	console.log('ciao')
}

hooo.yell = 'aaaaaaaa'


// this is not going to work, but approximates the real mechanism
const specialObj = {
	yell: 'aaaaaaaa',
	name: 'hooo',
	(): console.log('ciao')
}


/* 
functions have
- Code()
- name (opt)
- properties
	* call
	* apply
	* bind
*/










