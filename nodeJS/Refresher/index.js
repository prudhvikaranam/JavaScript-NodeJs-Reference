const express = require('express');
const app = express();
const mongooseConnection = require('./mongooseConnection');
const usersModel = require('./models/usersModel');
const errorHandler = require('./errorHandlers/commonError');


app.use(express.json())

const startServer = async () => {
    try {
        // 🔌 Connect to MongoDB
        const connection = await mongooseConnection();

        // 📥 Route: get users from DB 

        app.get('/users', async (req, res) => {
            try {
                const users = await usersModel.find({});
                res.status(200).json({ users })
            } catch (err) {
                res.status(500).json({ err });
            }
        })

        // 📥 Route: get users from DB based on age
        app.get('/users/:age', async (req, res) => {
            try {
                // console.log('Request', req.params);
                // console.log('Request', req.query);
                const users = await usersModel.find({ age: { $gte: req.params.age } }).exec();
                res.status(200).json({ users })
            } catch (err) {
                res.status(500).json({ err });
            }
        })



        // 📥 Route: Add a new user to DB 
        app.post('/users', async (req, res) => {
            try {
                const newUser = req.body;
                const user = new usersModel(newUser);
                // const savedUser = await user.save();
                res.send(`User added successfully ${JSON.stringify(savedUser)}`)
            } catch (err) {
                throw new Error(err);
            }

        })



        // 📥 Route: Update a user in DB 

        app.patch('/user', async (req, res) => {
            try {
                const reqBody = req.body;
                const updatedUser = await usersModel.findOneAndUpdate({ user: reqBody.user }, { user: reqBody.newUser }, { new: true })
                if (updatedUser) {
                    res.status(200).json(users);
                }
                else {
                    throw new Error('User Not found!!!')
                }
            } catch (error) {
                console.log(error);
                res.status(404).json({error : error.message})
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



// 🔌 Connect to MongoDB in another way 
// mongooseConnection().then(() => {
//     app.listen(9090, '127.0.0.2', () => {
//         console.log(`🚀 Server running after DB connection`);
//     });
// }).catch((err) => {
//     console.log('❌ Some error occurred:', err);
// })

startServer();
