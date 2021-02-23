/* extending errors */

class AuthenticationError extends Error {
	constructor(message) {
		super(message)
		this.name = 'AuthenticationError'
		this.favouriteSnack = 'grapes'
	}
}

throw new AuthenticationError('ops')

// -> AuthenticationError


class DatabaseError extends Error {
	constructor(message) {
		super(message) 
		this.name = 'DatabaseError'
		// ...
	}
}