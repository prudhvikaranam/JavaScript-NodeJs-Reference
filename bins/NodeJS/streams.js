const fs = require('fs');
const http = require('http').createServer();

http.on('request', (req,res) => {
  const readable = fs.createReadStream(`${__dirname}/input.txt`);
  readable.on('data', (chunks) => {
    res.write(chunks);
  })
  readable.on('end',() => {
    res.end('Data Read completed');
  })
  readable.on('error', (error) => {
    res.statusCode = 500;
    res.end('File not found');
    console.log('Res',error);
    console.log(res.statusCode);
  })
})

http.listen('8080','127.0.0.1');

// -------------------

const express = require('express');

const app = express.Router();

app.get('/log',(req,res) => {
  console.log('This is a log');
  res.send();
})

module.exports = app;