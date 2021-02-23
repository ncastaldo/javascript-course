/* closure exercise */

function callMeMaybe() {
	const callMe = 'Hi, I am now here'
	setTimeout(function () {
		console.log(callMe)
	}, 4000)
}

callMeMaybe() // (4 sec) 'Hi, I am now here'

/* callMe is still available, even though 
the function got transferred to the web API
and (after 4 sec) the result put in the callback queue */


// IT WORKS THIS WAY TOO
function callMeMaybe() {
	setTimeout(function () {
		console.log(callMe)
	}, 4000)
	const callMe = 'Hi, I am now here'
}

callMeMaybe() // (4 sec) 'Hi, I am now here'

/* the variable, even though is defined after,
is going to be available for the function
because js sees its value is used in the function */