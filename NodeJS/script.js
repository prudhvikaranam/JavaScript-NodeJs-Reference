// JSON.parse() will convert json into javascript object
// JSON.stringify() will convert javascript object into json

// Imports

const http = require("http"); // internally available
const fs = require("fs"); // internally available
const url = require("url"); // internally available
const morgan = require("morgan"); // external need to be installed
const express = require("express");
const events = require("events");
const crypto = require("crypto");






// -------------------------------Creating a Server-------------------------------------------------

// ---------------creating server using normal way

// http.createServer((req,res)=>{
//   console.log('Server created using normal way');
//   res.end();
// }).listen('8080','127.0.0.2', () => {
//   console.log('Server running on 127.0.0.2:8080');
// })


// --------------creating server using Event emit process

// const server = http.createServer(); // This emits an event

// // or we can do directly by require('http').createServer();

// server.on('request',(req,res) => { //we are taking the emitted event using on method and the event we are using is 'request'
//   console.log('Server Created using events method');
// })

// server.listen('8080','127.0.0.1',() => {
//   console.log('Server running in 127.0.0.1:8080');
// });











// ---------------------------------Reading & writing file -----------------------------------------

// fs.readFile(`${__dirname}/input.txt`, (err,data) => {
//   console.log(data);
// })

// fs.writeFile(`${__dirname}/input2.txt`, 'Writing to input1 file', (err,data) => {

// })

// fs.appendFile(`${__dirname}/iasdnput2.txt`, `Appending to input2 file
// `, (err,data) => {

// })

// --------------Read and write to a file

// fs.readFile(`${__dirname}/input.txt`, (err,data) => {
//   fs.writeFile(`${__dirname}/input2.txt`, data , (err) => {
//     console.log(err)
//   })
//   fs.appendFile(`${__dirname}/iasdnput2.txt`, data, (err) => {
//     console.log(err)
//   })
// })














// ---------------------------------Routing-----------------------------------------

// var server = http.createServer();

// server.on('request', (req, res) => {

//   const currentUrl = req.url; // Gets the url
//   const { query, pathname } = url.parse(currentUrl, true); // used for getting querypath values
//   console.log(url.parse(currentUrl, true)); // to see the properties

//   if (pathname == '/overview') {
//     res.writeHead(200,{'Content-type' : 'application/json'}) // to set response code and response headers
//     res.write(`This is an over view page built with Routing URL method and id in the query string is ${query.id} and pathname is ${pathname}`);
//     res.end();
//   }else{
//     res.end('Wrong path');
//   }
// })
// server.listen('8080', '127.0.0.1', () => { console.log('server started'); })




// --------------------------------------Redirection

// http.on("request", (req, res) => {
//   res.writeHead(301,{
//       "Location" : 'http://www.google.com',
//       'Authoriz' : 'abc'
//   })
//   res.end();
// });
// http.listen(8080, "127.0.0.1", () => {
//   console.log("server started");
// });








// // -----------------------------------------------Event loops and Streams-----------------------------------------

// const start = Date.now();

// process.env.UV_THREADPOOL_SIZE = 10;

// // Event Loop

// // Not inside any callback

// setTimeout(() => {
//   console.log('Set Time out 1');
// }, 0);

// fs.readFile(`${__dirname}/dev-data/data/tours.json`, 'utf-8', (err, data) => {
//   console.log('File reading 1');
// })

// setImmediate(() => { console.log('Immediate 1'); })

// // inside a I/O callbacks

// fs.readFile(`${__dirname}/dev-data/data/tours.json`, 'utf-8', (err, data) => {
//   console.log('---------------------------------');

//   setTimeout(() => {
//     console.log('Set Time out 2');
//   }, 0);

//   fs.readFile(`${__dirname}/dev-data/data/tours.json`, 'utf-8', (err, data) => {
//     console.log('File reading 2');

//     setTimeout(() => {
//       console.log('Set Time out 3');
//     }, 0);

//     setImmediate(() => { console.log('Immediate 3'); })
//   });

//   setImmediate(() => { console.log('Immediate 2'); })

//   console.log('------------------CRYPTO---------------');

//   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
//     console.log(Date.now() - start, "Password encrypted");
//   });

//   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
//     console.log(Date.now() - start, "Password encrypted");
//   });

//   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
//     console.log(Date.now() - start, "Password encrypted");
//   });

//   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
//     console.log(Date.now() - start, "Password encrypted");
//   });

//   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
//     console.log(Date.now() - start, "Password encrypted");
//   });

// })




// ------------------------------------Event Loop second example-------------------------------------

// setTimeout(() => {
//   console.log(`Set Time out 1`);
// }, 0000);

// setImmediate(() => {
//   console.log(`Set immediate 1`);
// });

// // setTimeout(() => {
// //   console.log(`Set Time out 2 for 1 second`);
// // }, 1000);

// fs.readFile(`${__dirname}/input.txt`, "utf-8", (err, data) => {
//   //   console.log(`${data}`); // This I/O will not run inside event loop it is still considered as the top level code in event loop. Below read file method goes into event loop since I/O reading is happening there and that too inside a callback
//   console.log(`------------------------------------------------`);

//   //   fs.readFile(`${__dirname}/input.txt`, (err, data) => {
//   //     console.log(data);
//   //   });

//   //   setTimeout(() => {
//   //     console.log(`Set Time out inside event loop with 0 seconds`);
//   //   }, 500);
//   //   setTimeout(() => {
//   //     console.log(`Set Time out inside event loop with 3 seconds`);
//   //   }, 3000);

//   //   setImmediate(() => {
//   //     console.log(`Set Immediate`);
//   //   });

//   //   process.nextTick(() => {
//   //       console.log('process next tick');

//   //   })

//   crypto.pbkdf2("password", "salt", 1000000, 1024, "sha512", () => {
//     console.log(Date.now() - start,"password encrypted");
//   });
//   crypto.pbkdf2("password", "salt", 1000000, 1024, "sha512", () => {
//     console.log(Date.now() - start,"password encrypted");
//   });
//   crypto.pbkdf2("password", "salt", 1000000, 1024, "sha512", () => {
//     console.log(Date.now() - start,"password encrypted");
//   });
//   crypto.pbkdf2("password", "salt", 1000000, 1024, "sha512", () => {
//     console.log(Date.now() - start,"password encrypted");
//   });

//   crypto.pbkdf2("password", "salt", 1000000, 1024, "sha512", () => {
//     console.log(Date.now() - start,"password encrypted");
//   });
//   crypto.pbkdf2("password", "salt", 1000000, 1024, "sha512", () => {
//     console.log(Date.now() - start,"password encrypted");
//   });
//   crypto.pbkdf2("password", "salt", 1000000, 1024, "sha512", () => {
//     console.log(Date.now() - start,"password encrypted");
//   });
// });

// console.log("Top-level code");







// ------------------------------event Emitter

// class Sale extends events {
//   constructor() {
//     super();
//   }
// }

// const myEmitter = new Sale();

// myEmitter.on('new-sale', () => {
//   console.log('new-sale');
// })

// myEmitter.on('new-sale', () => {
//   console.log('new-sale 2');
// })

// myEmitter.on('new-sale', (data) => {
//   console.log('new-sale ', data);
// })

// myEmitter.emit('new-sale', 20)

// server.listen('8080', '127.0.0.1', () => {
//   console.log('Server started');
// })












// // ---------------------------------Streams-----------------------------------------

// readable = fs.createReadStream(`${__dirname}/input.txt`);

// readable.on("data", (chunk) => {
//   res.write(chunk);
// });

// readable.on("end", () => {
//   res.end();
// });

// readable.pipe(res); // Elegant way







// // ---------------------------------Express-----------------------------------------

class Express extends express {
  constructor() {
    super();
  }
}

// const app = new expresss();
const app = new Express();

// app.get('/',(req,res) => {

//   res.writeHead(200, {'a': 'a'});
//   res.end('Now add a search term to the end of the URL in the address bar');

//   // res.status(200).json({'name' : 'Prudhvi'});
// })

// app.listen('8080','127.0.0.1',() => {
//   console.log('App running in 8080');
// })










// // ---------------------------------Express-----------------------------------------

// const express = require('express');

// // const app = new express(); // Below can also be used.
// const app = express();
// const port = 8080;

// // app.get('/', (req,res) => {
// //   // res.status(200).send(`Application running`);
// //   res.status(200).json({message : 'Hey, Congrats we started learning Nodejs', app : 'Not yet started'})

// //   res.end();
// // })

// app.listen(port, '127.0.0.2', () => {
//   console.log(`Application running in ${port}`);
// })




























// //------------------------------------ Natours application

// app.use(morgan('dev')) //Add loggers
// app.use(express.json()); // This works as a middleware

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

// // Creating own middleware
// app.use((req,res,next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// })

// // get request

// app.get(`/api/v1/tours`, (req, res) => {
//   res.status(200).json({ status: "success", results : tours.length ,data: { tours: tours } });
// })

// // post request

// app.post(`/api/v1/tours`,(req,res) => {
//   var newTour = req.body; // to get access to body we use express.json() as middleware
//   console.log(newTour);
// })

// // get params

// app.get(`/api/v1/tour/:id`,(req,res) => {
//   console.log(req.param);
//   const param = req.params.id;
//   console.log(param);
// })

// // app.route('/api/v1/tours/').get(cbfunctionname).post(cbfunctionname);

// // ------------------------------------------------------User Routes

// const userRouter = express.Router()

// // Handlers or controllers

// getAllUsers = (req,res) => {
//   console.log(req.requestTime)
//   res.status(500).json({
//     status : 'error',
//     message : 'API still under development'
//   })
// }

// postUser = (req,res) => {
//   const newUser = req.body;
//   res.send('Done');
//   console.log(newUser)
// }

// // Routes

// app.use(`/api/v1/users`,userRouter)

// userRouter.route(`/`).get(getAllUsers).post(postUser);



