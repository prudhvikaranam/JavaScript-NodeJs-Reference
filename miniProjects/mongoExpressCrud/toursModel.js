const mongoose = require('mongoose');
const toursSchema = new mongoose.Schema({
    place: {
        type: String,
        required: true,
        unique : true
    },
    rating : Number
})

const toursModel = mongoose.model('newTours',toursSchema);



module.exports = toursModel;