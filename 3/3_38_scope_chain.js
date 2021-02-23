/* scope chain */

/*
The scope chain allows a function to have access
to the variables defined in the 'upper' execution context
and so on to the global context
*/

// the scope determines what we can acces and what we cannot

/* eval() and with are not good
because they may deoptimize some code */

/* The js functions have scope variable: [[scope]] 
that contain an array of variable enviroments */
