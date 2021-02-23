/* closures, the first pillar */

/*
Closures allow a function to access variables from 
an enclosing scope/environment even after it leaves
the scope in which it was declared
*/


function a() {
	let grandpa = 'grandpa'
	return function b() {
		let father = 'father'
		let uzelezz = 123456789
		return function c() {
			let son = 'son'
			return `${grandpa} > ${father} > ${son}`
		}
	}
}

// fns a and b are HOFs

a() // [Function b]
a()() // [Function c]
a()()() // 'grandpa > father > son'

// how did c remembrer the other values?

// another example
const one = a()

/* now 'a' is invoked, but somehow 'grandpa' remains
instead of being garbage collected */

/* 
- grandpa variable is not removed, because it is
put in a 'closure box' in the heap 
- uzelezz variable is removed, because is is
not referred by other function 
*/


const boo = string => name => name2 => 
	console.log(`${string} ${name} ${name2}`)

boo('hi')('tim')('becca') // 'hi tim becca'

booString = boo('hi')
// 5 years
booStringName = booString()

// parameters are treated as local variables




