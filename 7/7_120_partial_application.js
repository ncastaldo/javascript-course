/* partial application */

// process of producing a function with smaller n. of params

const multiply = (a, b, c) => a*b*c

const curriedMultiply = a => b => c => a*b*c

const partialMultiplyByFive = multiply.bind(null, 5)

partialMultiplyByFive(4, 10) // 200