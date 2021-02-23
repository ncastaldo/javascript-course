/* Compose and Pipe */

/* Composition is the idea that any data tranformation
that we do whould be obvious */

// data --> fn --> data --> fn --> ...

/* How can we compose different components to create
different things */

// compose returns a function that can accept data

const compose = (f, g) => (data) => g(f(data))

const multiplyBy3 = (num) => num*3
const makePositive = (num) => Math.abs(num)

const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

multiplyBy3AndAbsolute(-50) // 150


// pipe is the same thing, but it goes LEFT TO RIGHT

const pipe = (f, g) => (data) => f(g(data))

/* real implementations */
const pipe = (...fns) => (data) => fns.reduce((v, f) => f(v), data)
const compose = (...fns) => (data) => fns.reduceRight((v, f) => f(v), data)