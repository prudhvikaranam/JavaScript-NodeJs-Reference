// *****************************************************
// If we want to go back one directory using the __dirname, we need to make use of path like below
// For example, we are in some other upfront (like eventloop folder) directory and want to use the input file which is in the backward (main... txt) directory then we have to use below way in the file which is in eventloop folder.
// const path = require('path');
// console.log(`${path.join(__dirname,'../txt/input.txt')}`);


// ///////////////////////////////////////////////////////////////////////////////////////////////////
// // ----------------------------Reading and writing files
// // We have two version of reading and writing files
// // Synchronous and aSynchronous

// // Synchronous
// const fs = require("fs");
// const textRead = fs.readFileSync(`${__dirname}/txt/input.txt`, "utf-8");
// clg(textRead);
// // const textWrite = `This is what we know what avacado can do./n ${textRead}`;
// // fs.writeFileSync("./txt/output.txt", textWrite);
// // clg('New text updated...');

// // aSynchronous
// // fs.readFile("./txt/input.txt", "utf-8", (err, data) => {
// //   fs.writeFile("./txt/ouput.txt", `${data}`, "utf-8", (err, data) => {
// //     // clg('data writtten');
// //   });
// // });
// // clg('File read');

// ///////////////////////////////////////////////////////////////////////////////////////////////////
// // ----------------------------Creating Server
// // const http = require('http');
// // createServer will accept a call back func which will be fired  each time a new request hits our server
// // const serverCreator = http.createServer((req,res) => { // creating server
// //     res.end('Hello Node, Im from server');
// // })

// // serverCreator.listen(8080, '127.0.0.1', () => {
// //     clg(`Hey Node, I'm listening to server running in 127.0.0.1:8080`);
// // })

// ///////////////////////////////////////////////////////////////////////////////////////////////////
// // ----------------------------Routing
// const http = require("http");
// const url = require("url");

// http
//   .createServer((req, res) => {
//     const pathName = req.url; // this hold the path name which we entered in the url and based on that we send the response
//     const { query,pathname } = url.parse(req.url, true); // used to get the query parameters and pathname from url.
//     if (pathName === "/overview") {
//       res.end("Hey you are in overview");
//     } else if (pathName === "/product") {
//       res.end(`hey you are in products page`);
//     } else {
//       res.writeHead("404", {
//         "Content-type": "text",
//         "my-own-header": "custom-message",
//       }); // this will send request status as 404 and also the response headers
//       res.end(`Page not found!`);
//     }
//   })
//   .listen(8080, "127.0.0.1", () => {
//     clg("Server running");
//     clg(__dirname)
//   });

