/* Amazon shopping, solution */

const user = {
	name: 'Kim',
	active: true,
	cart: [],
	purchases: []
}

// implement a cart feature

// 1. add items to cart
// 2. add 3% tax to item in cart
// 3. buy item: cart --> purchases
// 4. empty cart

const compose = (f, g) => (...args) => f(g(...args))

const addItemToCart = ({cart, ...rest}, item) => ({ 
	cart: cart + item,
	...rest
})

const applyTaxToItems = ({cart, ...rest}) => ({
	cart: cart.map(({name, price}) => ({name, price: price * 1.3})),
	...rest
})

const buyItem = ({cart, purchases, ...rest}) => ({
	cart,
	purchases: cart,
	...rest
})

const emptyCart = ({cart, ...rest}) => ({
	cart: [],
	...rest
})

const purchaseItem = (...fns) => fns.reduce(compose)

purchaseItem(
	emptyCart,
	buyItem,
	applyTaxToItems,
	addItemToCart
)(user, {name: 'laptop', price: 200})

