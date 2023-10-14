const app = require('./app');
const mongoose = require('mongoose');
console.log('process in server file', process.env.PASSWORD);

const DB = process.env.MONGO_DATABASE_URL.replace('<PASSWORD>',process.env.MONGO_PASSWORD);

console.log(DB)

mongoose.connect(DB).then((data) => {
    console.log('DB connected');
}).catch((err) => {
    console.log(`Error`,err);
})

const schema = new mongoose.Schema({
    'name' : String,
    'age' : Number
})

const tester2 = mongoose.model('tester1',schema);

const testUser3 = new tester2({
    'name' : 'Ramu',
    'age' : 10000
})

testUser3.save().then((data)  => {console.log(data)}).catch((err) => {console.log(err)});


app.listen(3030, '127.0.0.2', () => {
    console.log(`Express API mini Project started running!!!!`);
})