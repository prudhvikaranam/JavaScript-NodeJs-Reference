const express = require("express");
const app = express();
const morgan = require("morgan");
const tourRouter = require(`${__dirname}/routes/tourRoutes`);



if (process.env.NODE_ENV === "testing") {
  app.use(morgan("dev"));
}

app.use(express.json()); // to get body of the request
app.use(`/tours`, tourRouter);



module.exports = app;
