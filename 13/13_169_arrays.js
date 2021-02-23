/* arrays */

// organization of items sequentially

const strings = ['a', 'b', 'c', 'd']
// 4 items (in 32 bits system) -> 4*4 bytes of storage

strings.push('e') // O(1)

strings.pop() // O(1)

// add at the beginning
strings.unshift('aa') // O(n) -> we are moving all elements


// index, n. of elements to delete, what to add
strings.splice(2, 0, 'alien') // O(n) -> worst case