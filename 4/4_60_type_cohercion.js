/* type cohercion */

1 == '1' // true

/* when the operants are different types
but js converts them to match the type */

/* ALL languages have type cohercion!
everything get converted to 0101010, f.i.
JS only does it very often */

1 === '1' // false

// with 3 '=' we say JS not to use cohercion

// type cohercion happens also in other cases

if (1) { // coherced to true
	console.log('ok')
}


// check them out at https://dorey.github.io/JavaScript-Equality-Table/


// attention! crazy!

NaN === NaN // false
Object.is(NaN, NaN) // true

-0 === +0 // true
Object.is(-0, +0) // false

