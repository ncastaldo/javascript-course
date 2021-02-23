/* commonJS, AMD, UMD */

// commonJS (mainly on node.js)

var module1 = require('module1')
var module2 = require('module2')

function fight() {

}

module.exports = {
	'fight': fight
}

/* commonJS was created for node.js, npm became famous 
its main problem is that it is synchornous */

/* BROWSERIFY was used to transform them for the web 
big JS file -> bundle.js */


// AMD (specifically for browser)

define(['module1', 'module2'],
	function (module1Import, module2Import) {
		var fight = module1.fight
		var module2 = module2Import

		function dance () {
			//...
		}

		return {
			'dance': dance
		}
	})

/* it solved the synchonicity of commonJS
by loading modules asynchronously */


// UMD (universal module definition)

// just a simple if-else statement to identify the platform



