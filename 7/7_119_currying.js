/* currying */

// from multiple params functions to single param functions

const multipy = (a, b) => a*b
multipy(5, 3) // 15

const curriedMultiply = a => b => a*b
curriedMultiply(5)(3) // 15