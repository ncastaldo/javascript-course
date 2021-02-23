/* passed by reference vs pass by value */

// primitive -> pass by value
// non primitive (objs) -> pass by reference


var a = 5
var b = 10

// now variable a has an address where the primitive value 5 sits in memory
// and so does b


var a = 5
var b = a 

b++ 

console.log(a) // 5
console.log(b) // 6

/* JS copied the primitive value when doing { b = a }
and created a new memory space in memory */


let obj1 = { name: 'Yao', password: '123'}
let obj2 = obj1

obj2.password = 'easypeasy'

console.log(obj1) // { name: 'Yao', password: 'easypeasy'}
console.log(obj2) // { name: 'Yao', password: 'easypeasy'}

// they are the same, since they are passed by reference

/*
obj1 and obj2 are both pointing to the same memory space
---> SAVE MEMORY
*/


var c = [1, 2, 3, 4, 5]
var d = c

d.push(1000)

console.log(d) // [1, 2, 3, 4, 5, 1000]
console.log(c) // [1, 2, 3, 4, 5, 1000]

// ARRAY are objects

// to avoid it we have to do

var f = [].concat(c)


// how to copy an object? 2 ways

const obj1 = { a: 'a', b: 'b', c: 'c' }

const clone = Object.assign({}, obj1) // target, source
const clone2 = {...obj1} // es6


/* what if we have an object inside another object? */

const objNest = { a: 'a', b: 'b', c: { deep: 'inside' } }
const clone = {...objNest}

objNest.c.deep = 'uhuh'

console.log(clone.c) // { deep: 'uhuh' }

// with assign/spread -> we have SHALLOW COPY

// in order to have a DEEP COPY we use JSON

superClone = JSON.parse(JSON.stringify(objNest))

// PAY ATTENTION:

// if the object is big, there may be performance problems


