// Test node JS tutorial
const clg = console.log;

///////////////////////////////////////////////////////////////////////////////////////////////////
// ----------------------------Reading and writing files
// We have two version of reading and writing files
// Synchronous and aSynchronous

// Synchronous
// const fs = require("fs");
// const textRead = fs.readFileSync(`${__dirname}/txt/input.txt`, "utf-8");
// clg(textRead);
// const textWrite = `This is what we know what avacado can do./n ${textRead}`;
// fs.writeFileSync("./txt/output.txt", textWrite);
// clg('New text updated...');

// aSynchronous
// fs.readFile("./txt/input.txt", "utf-8", (err, data) => {
//   fs.writeFile("./txt/ouput.txt", `${data}`, "utf-8", (err, data) => {
//     // clg('data writtten');
//   });
// });
// clg('File read');

///////////////////////////////////////////////////////////////////////////////////////////////////
// ----------------------------Creating Server
// const http = require('http');
// createServer will accept a call back func which will be fired  each time a new request hits our server
// const serverCreator = http.createServer((req,res) => { // creating server
//     res.end('Hello Node, Im from server');
// })

// serverCreator.listen(8080, '127.0.0.1', () => {
//     clg(`Hey Node, I'm listening to server running in 127.0.0.1:8080`);
// })

///////////////////////////////////////////////////////////////////////////////////////////////////
// ----------------------------Routing
// const http = require('http');

// http.createServer((req,res) => {
//     clg(req.url);
//     const pathName = req.url; // this hold the path name which we entered in the url and based on that we send the response
//     if(pathName === '/overview'){
//         res.end('Hey you are in overview');
//     }else if(pathName === '/product'){
//         res.end(`hey you are in products page`);
//     }else{
//         res.writeHead('404', {
//             'Content-type' : 'text',
//             'my-own-header' : 'custom-message'
//         }) // this will send request status as 404 and also the response headers
//         res.end(`Page not found!`);
//     }
// }).listen(8080,'127.0.0.1', () =>{
//     clg('Server running');
// })
