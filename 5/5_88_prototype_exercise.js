/* prototype exercise */

/* 1.
Date objext => to have new method .lastYear()
which shows you last year 'YYYY' format */

new Date('1994-11-06').lastYear() // I want '1993'

Date.prototype.lastYear = function () {
	return this.getFullYear() - 1
}  


/* 2.
Modify .map() to print 'uh' at the end of each iteration */

console.log([1,2,3].map())
// '1uh', '2uh', '3uh'

Array.prototype.map = function () {
	let arr = []
	for (let i = 0; i < this.length; i++) {
		arr.push(this[i] + 'uh')
	}
	return arr
}
