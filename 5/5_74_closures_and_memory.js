/* closures and memory */

/*
Closures:
- memory efficiency
- encapsulation
*/


// MEMORY EFFIENCY

function heavyDuty(index) {
	const bigArray = new Array(7000).fill('xxx')
	return bigArray[index]
}

heavyDuty(456) 
heavyDuty(456)
heavyDuty(456)
heavyDuty(456)

// we create array and then destroy it
// let us do it with closures

function heavyDuty2() {
	const bigArray = new Array(7000).fill('xxx')
	return function(index) {
		return bigArray[index]
	}
}

const getHeavyDuty = heavyDuty2()

getHeavyDuty(456)
getHeavyDuty(456)
getHeavyDuty(456)
getHeavyDuty(456)

// get bigArray is build just once