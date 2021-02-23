/* first class citizens */

// 1. functions can be assigned to variables

var stuff = function(){}


// 2. functions can be passed as arguments

function a(fn) { fn()}
a(function() {console.log('hi there')})


// 3. we can return functions as values from other fns

function b() { return function c(){ console.log('c') }}
b()()
