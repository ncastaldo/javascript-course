/* this exercise */

var b = {
	name: 'jay',
	say() {console.log(this)}
}

var c = {
	name: 'jay',
	say() {return function () {console.log(this)}}
}

var d = {
	name: 'jay',
	say() {return () => console.log(this)} // lexically scoped
}

b.say() // { name: 'jay', say: f }

c.say() // Function
c.say()() // window

d.say() // Function
d.say()() // { name: 'jay', say: f }
