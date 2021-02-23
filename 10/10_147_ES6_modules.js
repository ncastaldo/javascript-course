/* ES6 module */

import module1 from 'module1'
import module2 from 'module2'

const harry = 'potter'
const voldemort = 'riddle'

export function jump() {
	console.log('jump')
}

export default function fight(c1, c2) {
	const attack1 = Math.random()
	const attack2 = Math.random()
	return `${attack1 > attack2 ? c1 : c2} wins!`
}

// in HTML

// <script type="module" src="./script.js">
// <script type="module">
	import fight, { jump } from 'script'
	console.log(fight('ron', 'hedwig'))
	jump()
// </script>

// it only works in a server! serve it 

