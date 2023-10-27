const express = require('express');
const toursRouter = require('./toursRouter');
const dotenv = require('dotenv');
dotenv.config({'path' : './config.env'})

const app = express();
app.use(express.json());
app.use('/tours', toursRouter);


module.exports = app;