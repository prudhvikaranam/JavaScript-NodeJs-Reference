// The EventEmitter calls all listeners synchronously in the order in which they were registered. This ensures the proper sequencing of events and helps avoid race conditions and logic errors. When appropriate, listener functions can switch to an asynchronous mode of operation using the setImmediate() or process.nextTick() methods:

const EventEmitter = require("events");
const myEmitter = new EventEmitter();
const fs = require('fs');


// console.log('Event Emitters Before Event emitters');


// Example 1:::::::::::::::::::::
// myEmitter.on('newSale', (value) => {
//     console.log('Event listener 1 for the value', value);
// })

// myEmitter.once('newSale', (value) => { // This event emitter will listen only once since we have given once and this will listen with the first emit
//     console.log('Event listener 1 once for the value', value);
// })

// myEmitter.on('newSale', (value) => {
//     console.log('Event listener 2 for the value', value);
// })

// myEmitter.emit('newSale', 20); // Can pass arguments which are optional...
// myEmitter.emit('newSale', 30); // Can pass arguments which are optional...



// Example 2::::::::::::::::::::: By making eventemitters pushing to event loop.
// If we want to run any event listeners inside an event loop we need to put the code inside the setImmediate, setTimeouts, process.nextTick() accordingly.


// myEmitter.on('newSale', (value) => {
//     console.log('Example 2 Event listener 1 for the value', value);
// });

// setTimeout(() => {
//     console.log('Example 2 Event listener with setTimeout 0 for the value');
// }, 0)

// myEmitter.on('newSale', (value) => {
//     setImmediate(() => {
//         console.log('Example 2 Inside setImmediate inside event listener', value);
//     })
// });

// myEmitter.on('newSale', (value) => {
//     setTimeout(() => {
//         console.log('Example 2 setTimeout inside event listener');
//     }, 0)
// });

// myEmitter.emit('newSale', 20); // Can pass arguments which are optional...

// console.log('Event Emitters after Event emitters');


// **************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************

// ----------------------------------------------------------------STREAMS

// const http = require('http').createServer();
// const url = require('url');
// const fs = require('fs');
// const path = require('path');

// http.on('request', (req, res) => {
//     const { pathname } = url.parse(req.url)
//     if (pathname === '/streamsWay') {
//         const readAbleStream = fs.createReadStream(`${path.join(__dirname, '../txt/ouput.txt')}`, {
//             highWaterMark: 1 // Mentions how many chuncks has to be sent
//         });
//         readAbleStream.on('data', (chunks) => {
//             res.write(chunks);
//         })
//         readAbleStream.on('end', (chunks) => {
//             res.end();
//         })

//         // readAbleStream.pipe(res); // Using Pipe
//     }

//     if (pathname === '/normalWay') {
//         fs.readFile(`${path.join(__dirname, '../txt/ouput.txt')}`, (err, data) => {
//             res.end(data)
//         })
//     }

// }).listen('8080', '127.0.0.1')

