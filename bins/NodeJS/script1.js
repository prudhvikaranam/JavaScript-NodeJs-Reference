
// // -------------------------------Reading and writing file

var fs = require('fs');

// // fs.readFile('./input1.txt', (err, data1) => {
// //   // console.log(`File 1 read ::: ${data1}`);
// //   fs.readFile('./input2.txt', (err, data2) => {
// //     // console.log(`File 1 and 2 read ::${data1}  ${data2}`);
// //     fs.readFile('./input3.txt', (err, data3) => {
// //       // console.log(`File 1, 2 and 3 read ::::${data1}  ${data2} ${data3}`);
// //       fs.writeFile('./output1.txt', `Output File ::: ${data1} ${data2} ${data3}`, (err) => {
// //         fs.readFile('./output1.txt', 'utf-8', (err, readLastFile) => {
// //           console.log(readLastFile);
// //         })
// //       })
// //     })
// //   })
// // })



// fs.readFile(`${__dirname}/input.txt`, 'utf-8' ,(err,data) =>{
//   console.log(data);
//   console.log(__dirname);
// })



// // ------------------------------------------------Server

// var http = require('http');
// var url = require('url');

// var server = http.createServer((req, res) => {
//   res.end('Hello World');
// })
// // .listen('8000','127.0.1.2',() => {
// //   console.log('Server started');
// // }); 

// server.listen('8000', '127.0.1.2', () => {
//   console.log('Server started successfully');
// });


// http.createServer((req, res) => {
// fs.readFile(`${__dirname}/inpaut.txt`,'utf-8', (err,data) => {
//   if(err && err.code === 'ENOENT'){
//     res.end('File not found');
//     console.log(`Error is` + err);
//   }else{
//     res.end(data);
//   }
// })

// try {
//   if(fs.access(`${__dirname}/inpuasdst.txt`)){
//     console.log('File found');
//   }else{
//     throw 'asdadsadadasdasd';

//   }
// } catch (error) {
//   res.end(error);
// }

// }).listen('8080', '127.0.0.5');



// // // ------------------------------------------------Routing


// http.createServer((request, response) => {

  // console.log('URL is -------------------',request.url);


  // In the below we are taking query and pathname from url.parse(request.url, true); and assining it to query and pathname which are creating using destructive method. 

  // let { query , pathname } = url.parse(request.url, true); console.log(query);console.log(pathname);

  // let query = url.parse(request.url ,true);

  // console.log(query);

  // if(query.query.id === 'teja'){
  //   // console.log('Hey Teja');
  // }else{
  //   // console.log('Hey You are not teja');
  // }


//   if (request.url === '/overview') {
//     response.end('Hello, Welcome to our Overview page');
//   } else if (request.url === '/products') {
//     response.end('Hello Below are our products');
//   } else {
//     response.end('No Page found');
//   }
// }).listen('8080', '127.0.0.2');



// const http = require('http').createServer();
// const url = require('url');

// http.on('request',(req,res) => {
//   console.log('Server Started');
//   console.log('Request',req.url);
//   console.log(url);
//   res.end();
// })

// http.listen('8080','127.0.0.2');





// // // Read files

// // // fs.readFile('./input1.txt','utf-8',(err,data) => {
// // //   console.log(`${__dirname}----${err}`);
// // // })

// // // fs.open('./input1.txt',(err,data) => {
// // //   console.log(data);
// // //   console.log(err)
// // // })

// // // fs.writeFile('./output.txt', `Hello I'm editing youuuu`,() =>{
// // //   console.log(`you have edited data`);
// // //   fs.readFile('./output.txt', 'utf-8',(err,data) => {
// // //     console.log(data);
// // //   })
// // // });



// // // fs.open('./input3.txt', 'r' ,(err,data) => {
// // //   console.log(data);
// // //   // console.log(err)
// // // })

// // // fs.open('./input.txt', 'r' ,(err,data) => {
// // //   // console.log(data);
// // //   console.log(err)
// // // })




// // // fs.open('./input3.txt', 'r+' ,(err,data) => {
// // //   console.log(data);
// // //   console.log(err)
// // // })

// // console.log(__dirname)
// // fs.stat(__dirname + "//input3.txt", (err, stats) => {
// //   console.log(stats);
// //   console.log(stats.isFile());
// //   console.log(stats.isBlockDevice());
// //   console.log(stats.isDirectory());


// //   console.log(stats.isBlockDevice());
// //   console.log(stats.isDirectory());
// //   console.log(stats.isFile());
// //   console.log(stats.isSymbolicLink());
// //   if (stats.isFile()) {
// //     fs.readFile(__dirname + "//input3.txt", function (f1, f2) {
// //       console.log(f2.toString);
// //     });

// //   }

// // })


// // setTimeout(() => {
// //   console.log('Timers 1')
// // }, 3000);



// // fs.readFile(__dirname + '\\input3.txt', 'utf-8', (err, data) => {
// //   console.log('I/0 -------', data);

// //   setTimeout(() => {
// //     console.log('Timers 2')
// //   }, 0000);
// //   setTimeout(() => {
// //     console.log('Timers 3')
// //   }, 3000);

// //   fs.readFile(__dirname + '//input2.txt', 'utf-8', (err, data) => {
// //     console.log('I/O -------- ', data);
// //   })
// //   setImmediate(() => { console.log('immediate 2') })
// //   process.nextTick(() => console.log('NExt tick 2'));

// // });
// // setImmediate(() => { console.log('immediate 1') })

// // process.nextTick(() => console.log('NExt tick 1'));

// // console.log('Top level code');


// // var server = http.createServer();

// // server.on('request',(req,res) => {
// //   res.end('Hello');
// // })


// // var express = require('express');
// // var app = express();

// // // console.log(express);

// // app.get('/Read', (req,res) => {
// //   res.send('Read Operation');
// // })

// // app.post('/Write', (req,res) => {
// //   res.send('Write operation');
// // })

// // app.delete('/delete',(req,res) => {
// //   res.send('DElete operation');
// // })

// // app.put('/put', (req,res) => {
// //   res.send('Put request');
// // })

// // app.use(express.static('uploads'));

// // var server = app.listen(3300, function(){

// // })





// var mysql = require('mysql');
// var app = require('express');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "admin@12345",
//   database: "employee"
// });


// app.get('/emploeeDetails',function(req,res){
//   con.connect(function(err){
//     con.query('select * from employees;',function(err,results) {
//       if(err){
//         console.log(err);
//       }else{
//         console.log(results);
//       }
//     })
//   })
// })










// Event loop

// these are not in any callback, hence they won't enter into event loop
// setTimeout(() => {
//   console.log('Timeout one');
// },1000)

// setImmediate(() => {
//   console.log('Immediate time out');
// })
// 

// fs.readFile(`${__dirname}/input.txt`,'utf-8',(err,data) => {
//   console.log(data);
//   setTimeout(() => {
//     fs.readFile(`${__dirname}/input2.txt`, 'utf-8', (err,data) => {
//       console.log( `Data found`);
//     })
//   },4000)
//   setTimeout(() => {
//     console.log('Timeout one');
//   },0)
//   setTimeout(() => {
//     console.log('Timeout two');
//   },500)
//   setImmediate(() => {
//     console.log('Immediate time out one');
//   })
//   process.nextTick(() => {console.log('Next Tick')})
// })


// Event Emitters

// const eventEmitter = require('events');

// const myEmitter = new eventEmitter();

// myEmitter.on('newSale', () => {
//   console.log('Emitteasddddddddddddd');
// })

// myEmitter.emit('newSale');

// const server = http.createServer();


// fs.readFile(`${__dirname}/input.txt`,'utf-8',(err,data) => {

//   server.on('request', (req,res) => {
//     res.end('Requested');
//     console.log('Requested');
//   })


//   server.listen('8080','127.0.0.5',() => {
//     console.log('Started');
//   })
//   setTimeout(() => {
//     console.log('Timeout one');
//   },0)
//   setTimeout(() => {
//     console.log('Timeout two');
//   },10000)
//   setImmediate(() => {
//     console.log('Immediate time out one');
//   })
//   process.nextTick(() => {console.log('Next Tick')})
// })



// Streams




 


// Express

// console.log(arguments);

// console.log(require('module').wrapper);

// const calc = require('./testModule1');
// const calculator = new calc();

// console.log('Require',calc);
// console.log('Instance',calculator.add(1,2));



