const http = require('node:http');


const server = http.createServer((req,res) => {
    res.end('Node App is up and running');
    server.close((err) => {
        console.log('Closing the server as the request is completed');
    })
});


server.listen('9000','127.0.0.1', () => {
    console.log('Server started on 127.0.0.1:9000');
})