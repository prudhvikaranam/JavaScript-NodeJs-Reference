const mongoose = require('mongoose');


const connectDB = async () => {
    let mongooseConnection = await mongoose.connect('mongodb+srv://prudhviteja7443:@namasteuserscluster.8t1dcem.mongodb.net/NamastheUsers');
    return mongooseConnection;
}

module.exports = connectDB;