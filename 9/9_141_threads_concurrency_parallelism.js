/* Threads, Concurrency and Parallelism */

// they communicate with some message facilities
const worker = new Worker('worker.js')
worker.postMessage('Hellooooo')

// in the web we don't need to worry about create own threads
// --> it is done in the bg with 'fetch', f.i. 


// In node we have threads, called 'worker threads'

const {spawn} = require('child_process')
spawn('git', ['stuff'])

// JS allows us to write clean code, because we only have a stack
