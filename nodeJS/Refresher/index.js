const app = require('express')();
const mongooseConnection = require('./mongooseConnection');
const usersModel = require('./models/usersModel');
const errorHandler = require('./errorHandlers/commonError');
const startServer = async () => {
    try {
        // 🔌 Connect to MongoDB
        const connection = await mongooseConnection();

        // 📥 Route: Add a new user to DB 
        app.get('/users', async (req, res) => {
            try {
                const user = new usersModel({
                    user: 'Prudhvi Teja',
                    age: 30,
                    country: "India"
                })
                const savedUser = await user.save()
                res.send(`User added successfully ${JSON.stringify(savedUser)}`)
                // res.send(`User added successfully`)
            } catch (err) {
                throw new Error(err);
            }

        })


        app.use(errorHandler);


        // ------------------------------------------
        // 📄 Optional: List all documents in 'users' collection
        /*
        const db = connection.connection.db;
        const collection = db.collection('users');
        const documents = await collection.find({}).toArray();
        console.log('📄 Users collection documents:', documents);
        */

        // ------------------------------------------
        // 📦 Optional: List all databases in the cluster
        /*
        const admin = db.admin();
        const dbs = (await admin.listDatabases()).databases;
        app.use('/databases', (req, res) => {
            res.send(`Available databases: ${dbs.map(db => db.name).join(', ')}`);
        });
        */

        app.listen(9090, '127.0.0.2', () => {
            console.log(`🚀 Server running after DB connection`);
        });
    } catch (err) {
        console.log('❌ Some error occurred:', err);
    }
};

startServer();
