const mongoose = require('mongoose');

const connectToDataBase = async () => {
    try {
        const dbConnectionStatus = await mongoose.connect('mongodb+srv://prudhviteja7443:vYp2bdKpoYT7od1v@namasteuserscluster.8t1dcem.mongodb.net/NamastheUsers');
        return dbConnectionStatus;
    } catch (error) {
        throw error;
    }
}


module.exports = { connectToDataBase };