/* arguments keyword */ 

/*
arguments is problematic, because it creates am object
here some possible solutions
*/

function ciao(mandi, hola){
	const args = Array.from(arguments)
	console.log(mandi, hola)
}

function ciao2(...args){
	console.log(args[0], args[1])	
}