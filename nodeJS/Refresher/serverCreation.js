const app = require('express')();


app.get('/users', (req,res) => {
    res.send('Getting data from user API')
})

app.use('/',
    (req, res, next) => {
        console.log('Logger from first router handler');
        // res.status(200).send('Request served from first router handler');
        next();
    },
    (req, res, next) => {
        res.status(200).send('Request served from second router handler');
    }
);

app.listen(9000, '127.0.0.2', () => {
    console.log('Server started using express way');
})







// -----Node way of creating server

// const http = require('node:http');


// const server = http.createServer((req,res) => {
//     res.end('Node App is up and running');
//     server.close((err) => {
//         console.log('Closing the server as the request is completed');
//     })
// });


// server.listen('9000','127.0.0.1', () => {
//     console.log('Server started on 127.0.0.1:9000');
// })