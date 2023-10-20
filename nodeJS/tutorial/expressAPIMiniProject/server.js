const app = require('./app');
const mongoose = require('mongoose');
console.log('process in server file', process.env.PASSWORD);

const DB = process.env.MONGO_DATABASE_URL.replace('<PASSWORD>',process.env.MONGO_PASSWORD);

console.log(DB)

app.listen(3030, '127.0.0.2', () => {
    console.log(`Express API mini Project started running!!!!`);
})