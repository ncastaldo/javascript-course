/* ES8 async await */

// with promises

movePlayer(100, 'left')
	.then(() => movePlayer(20, 'right'))
	.then(() => movePlayer(80, 'top'))
	.then(() => movePlayer(10, 'left'))

async function playerStart() {
	// syntactic sugar for promises
	const first = await movePlayer(100, 'left') // -> pause with 'await'
	const second = await movePlayer(20, 'right')
	await movePlayer(80, 'top')
	await movePlayer(10, 'left')
}

// with async/await I can use variables to save result

fetch('https:&&jsonplaceholder.typicode.com/users')
	.then(res => res.json())
	.then(console.log)

async function fetchUsers() {
	const res = await fetch('https:&&jsonplaceholder.typicode.com/users')
	const data = await res.json()
	console.log(data)
}

fetchUsers()

// how to catch errors? try/catch

try {
	// ...
} catch (err) {
	// ...
}