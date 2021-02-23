/* javascript runtime */


// JS is single threaded: every program must wait for another one running

/* Web API
It comes with the browser

-> http requests
-> dom events
-> setTimeout()
-> caching
-> indexedDB (browser database)

---> Window object 

Can be asynchronous!! 

When the function must be executed it is put on the stack
and then removed/sent to the web api

When the Web API function, like setTimeout, is done,
then the callback is put on the Callback Queue

No matter how fast the setTimeout is set, the function
is executed only after the stack is empty (from other funs)

*/