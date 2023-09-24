// If we have the same path, we can utilize the chaining mechanism to optimize the chaining.

// We can make use of route which is available from express to chain the routes

const express = require('express');
const app = express();

app.use(express.json());

const getData = (req, res) => {
    console.log('Get Express');
    res.status(200).json({ "message": 'Get Request  successfully done' });
}

const postData = (req, res) => {
    console.log(`POST method`);
    if (req.body.name) {
        res.status(200).send('Data received Successfullyy');
    } else {
        res.status(400).send('Invalid properties');
    }
}

app.route('/data').get(getData).post(postData)

app.listen(3000, '127.0.0.4', () => {
    console.log(`Server Started Running`);
})