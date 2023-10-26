const express = require('express');
const { getTours, postTours } = require('./toursController');

const toursRouter = express.Router();


toursRouter.route('/').get(getTours).post(postTours);

module.exports = toursRouter;