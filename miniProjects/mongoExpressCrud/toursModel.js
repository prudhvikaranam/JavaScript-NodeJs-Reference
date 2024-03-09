const mongoose = require('mongoose');
const toursSchema = new mongoose.Schema({
    place: {
        type: String,
        required: true,
        unique : true,
        select: true // By adding false we are excluding the fields right from the schema)
    },
    rating : Number,
    price : Number
})

const toursModel = mongoose.model('newTours',toursSchema);
// mongoose.model(<Collectionname>, <CollectionSchema>)
// Collection name: It is the name of the collection.
// Collection Schema: It is the schema of the collection.

module.exports = toursModel;    