// console.log('Event Emitters before Event emitters');
// const EventEmitter = require("events");
// const myEmitter = new EventEmitter();
// const fs = require('fs');
// myEmitter.on('newSale', () => { // Listens to the 'newSale' event and calls the callbacks
//     console.log('New sale received');
// })

// // myEmitter.on('newSale', (saleValue) => { // Can have multiple listeners 
// //     console.log('New sale received from John Doe', + saleValue);
// // })


// myEmitter.emit('newSale', 29); // Emits an event name 'newSale' (Arguments can be passed as an optional and can listen in listeners)

// fs.readFile(__filename,() => {
//     console.log('File read 1');
// })

// console.log('Event Emitters after Event emitters');



// ----------------------------------------------------------------STREAMS

const http = require('http').createServer();
const url = require('url');
const fs = require('fs');
const path = require('path');

http.on('request', (req, res) => {
    const { pathname } = url.parse(req.url)
    if (pathname === '/streamsWay') {
        const readAbleStream = fs.createReadStream(`${path.join(__dirname, '../txt/ouput.txt')}`, {
            highWaterMark: 1 // Mentions how many chuncks has to be sent
        });
        readAbleStream.on('data', (chunks) => {
            res.write(chunks);
        })
        readAbleStream.on('end', (chunks) => {
            res.end();
        })

        // readAbleStream.pipe(res); // Using Pipe
    }

    if (pathname === '/normalWay') {
        fs.readFile(`${path.join(__dirname, '../txt/ouput.txt')}`, (err, data) => {
            res.end(data)
        })
    }

}).listen('8080', '127.0.0.1')