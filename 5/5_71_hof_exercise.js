/* hof exercise */

const multiplyBy = num1 => num2 => num1*num2

const multiplyByTwo = multiplyBy(2)

multiplyByTwo(5) // 10

// the 'multiplyBy' is an HOF becaouse it returns a new function

const multiplyByFive = multiplyBy(5)

multiplyByFive(7) // 35

multiplyBy(5)(7) // 35