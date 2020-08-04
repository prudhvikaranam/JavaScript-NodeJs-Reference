// Routes
const express = require("express");

const tourController = require(`${__dirname}/../controllers/toursController`);

const tourRouter = express.Router();

tourRouter.param("id", (req, res, next, val) => {
  console.log(`Value of the param is ${val}`);
  next();
});



tourRouter
  .route("/")
  .get(tourController.allTours)
  .post(tourController.postTour);

tourRouter.route("/:id").get(tourController.getTour);
tourRouter.route("/:id").patch(tourController.updateTour);


module.exports = tourRouter;
// console.log('This is a tourRouter');
