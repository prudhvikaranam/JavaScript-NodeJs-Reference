const app = require('./app');
const mongoose = require('mongoose');

const db = process.env.MONGO_URL.replace('<password>', process.env.MONGO_PASSWORD)
mongoose.connect(db).then(() => {
    console.log('Connected to Mongo server');
}).catch((err) => {
    console.log('Problem in connecting to DBb', err);
})

const toursSchema = new mongoose.Schema({
    place: {
        type: String,
        required: true,
        unique : true
    },
    rating : Number
})

const toursModel = mongoose.model('newTours',toursSchema);

toursModel.create({
    place : 'Goa',
    rating : 4
}).then((data) => {
    console.log('New Tour Created',data);
}).catch((err) => {
    console.log('Error in creating a Tour',err);
})

app.listen(8080, '127.0.0.5', () => {
    console.log(`mongo express Crud operations Server up and running from server`);
});

