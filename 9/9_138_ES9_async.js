/* ES9 (ES2018) - async */

// finally with promises

Promise.all(/* ... */)
	.then(() => {})
	.catch(() => {})
	.finally(() => {}) // no matter what, finally will execute


// for await of

const loopThroughUrls = urls => {
	for (url of urls) {
		console.log(url)
	}
}


const urls = ['', '', '']
loopThroughUrls(urls)


async function getData() {
	const arrayOfPromises = urls.map(url => fetch(url))

	// for 'await' because we are looping through promises
	for await (let request of arrayOfPromises) {
		const data = await request.json()
	}
}