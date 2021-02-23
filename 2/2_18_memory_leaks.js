/* memory leaks */

// 1. global variable -> never removed

// 2. event listener -> added without being removed

/* 3. set interval, objects referenced inside 
will not be removed until the stop */