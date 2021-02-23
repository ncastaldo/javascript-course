/* execution context */

/*
Everytime the js engine sees '{}' it:
- creates an execution context
- tries to run the function


Initially the js engine creates the global() execution context

--> every time we run code in js it will always be in an exec context

*/

/*
Global execution context, at the beginning:

A. CREATION PHASE

1. Global Object ( in the browser it is 'window' )
2. this

--> this === window

--> this === global (in node.js)

B. EXECUTION PHASE

actually running the code

*/