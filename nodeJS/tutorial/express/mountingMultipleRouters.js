const express = require('express');
const app = express();

let sampleRoute = express.Router(); // Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.


const getData = (req, res) => {
    console.log(`Getting the data`);
    res.status(200).json({ "message": 'Get Request  successfully done from mounting multiple routers file' });
}

const postData = (req, res) => {
    console.log(`Posting the data`);
    res.status(200).json({ "message": 'POST Request  successfully done from mounting multiple routers file' });
}


app.use('/sample', sampleRoute); // Here we are mounting "sampleRoute middleware" on /sample path, where sampleRoute uses route to chain the multiple methods.
sampleRoute.route('/').get(getData).post(postData);

// sampleRoute.route('/:id').get(abc).post(xyz); // when we have path as /sample/id

console.log('----------APP----------',app);

app.listen(3000, '127.0.0.4', (req, res) => {
    console.log(`Server Listening`);
})

