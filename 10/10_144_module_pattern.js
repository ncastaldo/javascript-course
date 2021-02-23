/* JS modules */

/* when you call different './script.js' files from the html 
the js engine combines them together */

// modules are needed, but in the beginning were not available

// In the beginning...

// ---> Global Scope
// NO Module Scope
// ---> Function Scope
// NO Block Scope [let, const]

// JS developers came up with the Module Pattern

// IIFE - Immediately Invoked Function Expression

var module1 = (function () {
	function f1 () {
		// ...
	}
	return {
		f1: f1
	}
})()

/* we can also pass parameters to the module
in order to pass global vars */

/* main cons 
- still polluting the global namespace with module names
- we do not necessarily know all dependencies */

