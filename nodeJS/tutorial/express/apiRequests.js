const express = require('express');
const app = express();
const serverPort = 3000;
const serverHost = `127.0.0.4`;
app.use(express.json(), (req, res, next) => { ///////////////////////////--Middleware's *************See notes.txt for more info
    // **************
    // Here express.json is an middleware and If we are not adding this then POST/PUT method will throw an error saying that the values which we are trying to read are undefined. and also it will automatically convert the request data into object
    console.log('app.use has been called');
    next();
})

app.use('/getMethod', (req, res, next) => { // We can also use api end points in app.use, so that when ever requests we are getting to this end point this middleware will be triggered before going to that
    console.log('req in middleware 1');
    next();
}, (req, res, next) => {
    console.log('req in middleware 2');
    next();
})

app.get('/getMethod', (req, res) => {
    console.log('Get Express');
    // res.status(200).json({"message" : 'Get Request  successfully done'});
    res.status(200).send('Get Request  successfully done');
})

app.post('/postMethod', (req, res) => {
    console.log(`POST method`, req.body);
    if (req.body.name) { // if we are not adding express.json() middleware then name will be undefined and goes into else block
        res.status(200).send('Data received Successfullyy');
    } else {
        res.status(400).send('Invalid properties');
    }
})

app.listen(serverPort, serverHost, () => {
    console.log(`Server Started running`);
});