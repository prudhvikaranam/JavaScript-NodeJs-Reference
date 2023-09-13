
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


//         // readAbleStream.pipe(res); // This is an another example Using Pipe
//     }

//     if (pathname === '/normalWay') {
//         fs.readFile(`${path.join(__dirname, '../txt/ouput.txt')}`, (err, data) => {
//             res.end(data)
//         })
//     }

// }).listen('8080', '127.0.0.1')

