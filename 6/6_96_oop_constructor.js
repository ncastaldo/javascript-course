/* OOP constructor functions */

// instead of Object.create() -> constructor function

// not returning anithyng, we are constructing an elf
function Elf(name, weapon) {
	this.name = name
	this.weapon = weapon
}

const sam = Elf('Sam', 'stones')
sam.name // error!!


const sam2 = new Elf('Sam', 'stones')
sam.name // Sam


/* the new keyword automatically 
- run the constructor code
- construct the object 
- return the object */

/* remember, all constructor functions
should start with Capital letter */

// this is the constructor function
const Elf1 = new Function('name', 'weapon',
	`this.name = name
	 this.weapon = weapon`)

const sara = Elf1('Sarah', 'fireworks')

// when we use the 'new' keyword, it changes what 'this' points to

// since the Elf is a function we have prototype!!

// we cannot use arrow functions!
Elf.prototype.attack = function() {
	return 'attack with ' + this.weapon
};

/* attack in this case belongs to the Elf,
this way we save memory */


