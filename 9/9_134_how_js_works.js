/* how js works */

// JS single threaded language that can be non blocking

/* Program
- allocate memory
- parse and execute */

/* Javascript Engine (e.g. v8)
* reads js and changes into code to understand
- memory heap
- call stack */

/* Syncronous programming
- line are executed one after the other 
- it is predictable */

/* Asyncronous programming in js -> with callback functions
- Web API (DOM, AJAX, Timeout, ...) */


/* JS Runtime Environment:
JS Engine + Web API + Event Loop + Callback Queue */

/* The event loop checks the callback queue only 
when the call stack is empty! */
