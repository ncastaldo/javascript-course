/* function invocation */

// Function expression 
// Defined at RUNTIME
var canada = function () {
	console.log('cold')
}

var canada_2 = () => console.log('cold')

// Function declaration - hoisted
// Defined at PARSETIME
function india () {
	console.log('warm')
}


// Function Invocation/Call/Execution
canada()


/*
When function is invoked, js engine creates exec context:
- this
- arguments (instead of global object)
*/

function marry(person1, person2) {
	console.log(arguments)
	return `${person1} is now married with ${person2}`
}

marry('Tim', 'Tina')
// {0: 'Tim', 1: 'Tina'}
