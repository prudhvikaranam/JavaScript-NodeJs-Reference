const mongoose = require("mongoose");
const tourSchema = new mongoose.Schema({
    name: {
      type : String
    },
    rating: Number,
    price: Number,
  });
  
  const tourModel = mongoose.model("Tours", tourSchema);
  
  module.exports = tourModel;