/* IIFE */

// in order to avoid global variables

// IIFE = Immediately Invoked Function Expression

(function [opt. name]() {
	
})()

/*
Used to avoid collisions in the global namespace
*/

function [opt. name](){}() // ERROR

// we can invoke functon EXPRESSIONS, but not function declaration


// this will work, instead

(function [opt. name]() {

}())


/* like jQuery/D3, in the html code we will do */

var script1 = (function () {
	var a = function () {
		return '5'
	}
	return {
		a: a
	}
})()


// <script import jquery>

var script1 = (function (OLE) {
	OLE('h1').click(function () { OLE('h1').hide() })
	return {
		
	}
})($)

