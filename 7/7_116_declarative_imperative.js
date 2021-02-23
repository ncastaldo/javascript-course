/* imperative vs declarative */

// imperative
array = [1, 2, 3]
for (let i = 0; i<array.length; i++) {
	console.log(array[i])
}

// declarative
array.forEach(v => console.log(v))

// imperative: jQuery
// declarative: React