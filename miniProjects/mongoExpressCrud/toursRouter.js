const express = require('express');
const { getTours, postTours,getfilteredData } = require('./toursController');

const toursRouter = express.Router();


toursRouter.route('/').get(getTours).post(postTours);
toursRouter.route('/ratings').get(getfilteredData);

module.exports = toursRouter;