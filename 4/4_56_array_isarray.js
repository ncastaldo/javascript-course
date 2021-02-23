/* array isArray */

// array are objects in js 

var array = ['1', '2', '3']

var obj = {
	0: '1',
	1: '2',
	2: '3'
}

// both are objects

Array.isArray(array)	// true
Array.isArray(obj) 		// false