const mongoose = require('mongoose');
const toursSchema = new mongoose.Schema({
    place: {
        type: String,
        required: true,
        unique : true,
        select: false // By adding false we are excluding the fields right from the schema)
    },
    rating : Number,
    price : Number
})

const toursModel = mongoose.model('newTours',toursSchema);



module.exports = toursModel;    