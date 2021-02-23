/* Error in JS */

// constructor function
Error

// creates the error, still not critical
new Error('ups')

// blocks the execution, throwing the error
throw new Error('thrown')

// I can also throw the Error constructor
throw Error

/* 3 built-in functions of Error
1. name // Error, StackError, ReferenceError
2. message
3. stack (string that shows where the error happens) */

const myError = new Error('hey')

myError.stack // "Error: hey at <anonymous>:1:17"

// we also have...
new SyntaxError() // new SyntaxError, without parenthesis is ok

