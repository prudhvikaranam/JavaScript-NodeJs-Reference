const app = require('./app');
const mongoose = require('mongoose');

const db = process.env.MONGO_URL;
mongoose.connect(db).then(() => {
    console.log('Connected to Mongo server');
}).catch((err) => {
    console.log('Problem in connecting to DBb', err);
})


app.listen(8080, '127.0.0.5', () => {
    console.log(`mongo express Crud operations Server up and running from server`);
});

