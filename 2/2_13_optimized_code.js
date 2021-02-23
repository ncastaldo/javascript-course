/* inline caching */

function findUser(user) {
	return `found ${user.firstName} ${user.lastName}`
}

const userData = {
	firstName: 'Johnson',
	lastName: 'Junior'
}

findUser(userData)

/* instead of looking up at the object, 
the compiler will cache the function and 
replace it with 'found Johnson Junior' */


/* hidden classes */

// https://richardartoul.github.io/jekyll/update/2015/04/26/hidden-classes.html

function Animal(x, y) {
	this.x = x
	this.y = y
}

const obj1 = new Animal(1, 2)
const obj2 = new Animal(3, 4)

obj1.a = 30
obj1.b = 100

obj2.b = 30
obj2.a = 100

/* this code is run slower, the compiler will think
they are objects of different types: I changed the 'hidden class' */
 

/* arguments */

https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments

// WE should write code that is predictable
