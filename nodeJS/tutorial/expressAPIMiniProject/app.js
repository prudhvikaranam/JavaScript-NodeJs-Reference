const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
console.log('process', process.env.USERNAME);

const express = require('express');
const app = express();
const userRouter = require('./usersRouters');


app.use(express.json());
app.use('/users', userRouter);

module.exports = app;
