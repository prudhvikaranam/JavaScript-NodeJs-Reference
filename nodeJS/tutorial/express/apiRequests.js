const express = require('express');
const app = express();
const serverPort = 3000;
const serverHost = `127.0.0.4`;



// ----------------------------------------------------------------MIDDLEWARE


app.use(express.json(), (req, res, next) => { ///////////////////////////--Middleware's *************See notes.txt for more info
    // **************
    // Here express.json is an middleware and If we are not adding this then POST/PUT method will throw an error saying that the values which we are trying to read are undefined. and also it will automatically convert the request data into object
    console.log('app.use has been called');
    next();
})



// ----------------------------------------------------------------GET requests



app.use('/getMethod', (req, res, next) => { // We can also use api end points in app.use, so that when ever  we are getting requests to this end point this middleware will be triggered before going to that
    console.log('Get Method middleware 1');
    next();
}, (req, res, next) => {
    console.log('Get Method middleware 2');
    next();
})

app.get('/getMethod', (req, res) => {
    console.log('Get Express');
    res.status(200).json({ "message": 'Get Request  successfully done' });
    // res.status(200).send('Get Request  successfully done');
})

app.get('/getMethod/:id/:name?', (req, res) => { // http://127.0.0.4:3000/getMethod/1 // Here name is optional(If we add ? then that parameter becomes optional)
    console.log(`Get request with Paramaters`, req.params);
    res.status(200).send(`Received request id is ${req.params.id}`)
});


// ----------------------------------------------------------------POST requests

app.post('/postMethod', (req, res) => {
    console.log(`POST method`, req.body);
    if (req.body.name) { // if we are not adding express.json() middleware then name will be undefined and goes into else block
        res.status(200).send('Data received Successfullyy');
    } else {
        res.status(400).send('Invalid properties');
    }
})

// ----------------------------------------------------------------PATCH requests

app.patch('/pathMethod/:id', (req, res) => {
    console.log(`Patch requests are used to update any property in the existing object`);
})



// ----------------------------------------------------------------DELETE requests


app.delete('/pathMethod/:id', (req, res) => {
    console.log(`Delete Requests are used to delete an entire object`);
})




app.listen(serverPort, serverHost, () => {
    console.log(`Server Started running`);
});


// https://restfulapi.net/http-status-codes/ =======================> Status codes links


// 1) req.params
// These are properties attached to the url i.e named route parameters. You prefix the parameter name with a colon(:) when writing your routes.

//   app.get('/giraffe/:number', (req, res) => {
//    console.log(req.params.number)
//   })
//   GET  http://localhost:3000/giraffe/1


// 2) req.query
// req.query is mostly used for searching,sorting, filtering, pagination, e.t.c
// Say for instance you want to query an API but only want to get data from page 10, this is what you'd generally use.
// It written as key=value
//   GET  http://localhost:3000/animals?page=10
//   app.get('/animals', ()=>{
//    console.log(req.query.page) // 10
//   })