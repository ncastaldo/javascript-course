/* composition vs. inheritance */

/* Inheritance vs. Composition
>>> what it is vs. what it has/does <<< */
 
 // in inheritance there is a TIGHT COUPLING
 // which leads to the Fragile Base Class Problem
 // another problem is on the hierarchy

 // ---> GORILLA BANANA PROBLEM

 // elf and compostion

function hasAttack(character) {
	return {
		...character,
		attack: () => {}
	}
}

 function elf(name, weapon, type) {
 	let elf = {
 		name, 
 		weapon,
 		type
 	}
 	return hasAttack(elf)
 }