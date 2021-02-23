/* closures and memory */

// ENCAPSULATION

const makeNuclearButton = () => {
	let timeWithoutDestruction = 0
	const passTime = () => timeWithoutDestruction++
	const launch = () => {
		timeWithoutDestruction = -1;
		return 'Boom'
	}
	const totalPeaceTime = () => timeWithoutDestruction
	setInterval(passTime, 1000)
	return {
		launch,
		totalPeaceTime
	}
}

const ohNo = makeNuclearButton()

ohNo.totalPeaceTime() // 0

//...

ohNo.totalPeaceTime() // 12

//...

ohNo.totalPeaceTime() // 20

ohNo.launch() // 'Boom'

ohNo.totalPeaceTime() // 4

/*
ENCAPSULATION: hiding information!!
timeWithoutDestruction is not exposed
*/
